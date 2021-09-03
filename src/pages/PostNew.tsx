import { Storage } from "aws-amplify";
import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  CreateImageMutation,
  CreateImageMutationVariables,
  CreatePostMutation,
  CreatePostMutationVariables,
  PostStatus,
} from "../API";
import ampAPI from "../api/ampAPI";
import FileUpload, { Files } from "../components/inputs/FileUpload";
import Input from "../components/inputs/Input";
import TextArea from "../components/inputs/TextArea";
import { createImage, createPost } from "../graphql/mutations";
import { routes } from "../ui/routes";

const PostNew: React.FC = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [files, setFiles] = useState<Files>({});

  const submit = async () => {
    const post = await ampAPI<CreatePostMutation, CreatePostMutationVariables>(createPost, {
      input: { title, body, status: PostStatus.PUBLISHED },
    });

    for (const fileKey in files) {
      const image: any = await Storage.put(`${post.createPost?.id}/${files[fileKey].name}`, files[fileKey]);
      if (image && image.key && post.createPost?.id) {
        await ampAPI<CreateImageMutation, CreateImageMutationVariables>(createImage, {
          input: { key: image.key, postID: post.createPost.id },
        });
      }
    }
    history.push(routes.root.show.with({ id: post.createPost?.id }));
  };

  return (
    <div>
      <h1 className="font-thin">New Post</h1>
      <Input className="py-4" label="Title" value={title} onChange={setTitle} />
      <TextArea className="py-4" label="Body" rows={3} value={body} onChange={setBody} />
      <FileUpload multiple label="Photos" value={files} onChange={(files) => setFiles(files)} />
      <button onClick={submit} className="btn-primary">
        Submit
      </button>
    </div>
  );
};

export default PostNew;
