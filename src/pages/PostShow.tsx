import { Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetPostQuery, GetPostQueryVariables } from "../API";
import ampAPI from "../api/ampAPI";
import { getPost } from "../graphql/queries";

interface Image {
  url: string;
  alt: string;
}

const PostShow: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<GetPostQuery>();
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const send = async () => {
      const response = await ampAPI<GetPostQuery, GetPostQueryVariables>(getPost, { id });

      const imagesArray = [];
      for (const image of response.getPost?.images?.items || []) {
        if (image?.key) {
          const url = await Storage.get(image.key);
          if (typeof url === "string") {
            imagesArray.push({ url, alt: image.key });
          }
        }
      }

      setData(response);
      setImages(imagesArray);
    };
    send();
  }, []);

  return (
    <div>
      <h1 className="font-thin">{data?.getPost?.title}</h1>
      <section className="py-4">
        <p>{data?.getPost?.body}</p>
      </section>
      <h2>Images</h2>
      <section className="grid gap-8 py-8 grid-cols-2 md:grid-cols-3">
        {images.map((image) => (
          <img
            src={image.url}
            alt={image.alt}
            className="bg-gray-700 rounded-lg p-4 transition-all duration-100 hover:scale-110"
          />
        ))}
      </section>
    </div>
  );
};

export default PostShow;
