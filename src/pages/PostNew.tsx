import React, { useState } from "react";
import FileUpload, { Files } from "../components/inputs/FileUpload";
import Input from "../components/inputs/Input";
import TextArea from "../components/inputs/TextArea";
const PostNew: React.FC = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [files, setFiles] = useState<Files>({});

  return (
    <div>
      <h1 className="font-thin">New Post</h1>
      <Input className="py-4" label="Title" value={title} onChange={setTitle} />
      <TextArea className="py-4" label="Body" rows={3} value={body} onChange={setBody} />
      <FileUpload multiple label="Photos" value={files} onChange={(files) => setFiles(files)} />
    </div>
  );
};

export default PostNew;
