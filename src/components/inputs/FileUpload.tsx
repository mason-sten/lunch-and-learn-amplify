import classNames from "classnames";
import { omit } from "lodash";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

interface Props {
  maxFileSizeInBytes?: number;
  multiple?: boolean;
  label: string;
  value: Files;
  onChange: (files: Files) => void;
}

export type Files = Record<string, File>;

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;
const KILO_BYTES_PER_BYTE = 1000;

const convertBytesToKB = (bytes: number) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload: React.FC<Props> = ({
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  multiple = false,
  label,
  value,
  onChange,
}) => {
  const fileInputField = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleUploadBtnClick = () => {
    if (fileInputField.current) {
      fileInputField.current.click();
    }
  };

  const addNewFiles = (newFiles: any) => {
    for (const file of newFiles) {
      if (file.size < maxFileSizeInBytes) {
        if (!multiple) {
          return { file };
        }
        value[file.name] = file;
      }
    }
    return { ...value };
  };

  const deleteFile = (fileName: string) => {
    const newValue = omit(value, fileName);
    onChange(newValue);
  };

  const handleNewFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const { files: newFiles } = e.target;
    if (newFiles?.length) {
      const updatedFiles = addNewFiles(newFiles);
      onChange(updatedFiles);
      //callUpdateFilesCb(updatedFiles);
    }
  };

  const trackDragOverStatus = (e: any) => {
    setIsDragOver(e.type === "dragover");
  };

  useEffect(() => {
    if (!fileInputField.current) return;
    const inputRef = fileInputField.current;
    inputRef.addEventListener("dragover", trackDragOverStatus);
    inputRef.addEventListener("dragend", trackDragOverStatus);
    inputRef.addEventListener("drop", trackDragOverStatus);
    inputRef.addEventListener("dragleave", trackDragOverStatus);

    return () => {
      inputRef.removeEventListener("dragover", trackDragOverStatus);
      inputRef.removeEventListener("dragend", trackDragOverStatus);
      inputRef.removeEventListener("drop", trackDragOverStatus);
      inputRef.removeEventListener("dragleave", trackDragOverStatus);
    };
  }, []);

  const dragContainer = classNames(
    "cursor-pointer relative flex flex-col border items-center rounded bg-gray-700 py-10 border-4",
    {
      "bg-gray-900 border-dashed": isDragOver,
    },
  );

  return (
    <>
      <label htmlFor={label} className="block mb-4">
        {label}
      </label>
      <div className={dragContainer}>
        <p className="text-sm text-gray-300 pb-4">Drag and drop your files anywhere or</p>
        <button onClick={handleUploadBtnClick} type="button">
          <i className="fas fa-file-upload" />
          <span className="btn-primary cursor-pointer"> Click Here</span>
        </button>
        <input
          id={label}
          className="block w-full border-none absolute top-0 left-0 right-0 bottom-0 opacity-0 focus:outline-none"
          type="file"
          ref={fileInputField}
          multiple={multiple}
          onChange={handleNewFileUpload}
        />
      </div>
      <div>
        <article className="py-4">
          <p>To Upload</p>
          <section className="flex flex-wrap pt-4">
            {Object.keys(value).map((fileName, index) => {
              const file = value[fileName];
              const isImageFile = file.type.split("/")[0] === "image";
              return (
                <section key={fileName} className="flex-1 p-2 min-w-[300px]">
                  <div className="flex flex-col h-full bg-gray-700 rounded p-2">
                    <div className="flex-grow">
                      {isImageFile && (
                        <img
                          className="rounded hover:scale-110 transition-all duration-200 mx-auto py-2"
                          src={URL.createObjectURL(file)}
                          alt={`file preview ${index}`}
                        />
                      )}
                    </div>
                    <div>
                      <span className="mt-2 text-xs h-4 overflow-hidden block truncate">{file.name}</span>
                      <aside className="flex justify-between">
                        <span className="text-sm">{convertBytesToKB(file.size)} kb</span>
                        <button className="text-sm underline" onClick={() => deleteFile(file.name)}>
                          Delete
                        </button>
                      </aside>
                    </div>
                  </div>
                </section>
              );
            })}
          </section>
        </article>
      </div>
    </>
  );
};

export default FileUpload;
