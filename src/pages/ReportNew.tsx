import React, { useState } from "react";
import FileUpload, { Files } from "../components/inputs/FileUpload";
import Input from "../components/inputs/Input";
import TextArea from "../components/inputs/TextArea";
const ReportNew: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<Files>({});

  return (
    <div>
      <h1 className="font-thin">Report Suspcicious Acticity</h1>
      <p className="opacity-70">If you see something, say something</p>
      <Input className="py-4" label="Title" value={title} onChange={setTitle} />
      <TextArea className="py-4" label="Description of Event" rows={3} value={description} onChange={setDescription} />
      <FileUpload multiple label="Photos" value={files} onChange={(files) => setFiles(files)} />
    </div>
  );
};

export default ReportNew;
