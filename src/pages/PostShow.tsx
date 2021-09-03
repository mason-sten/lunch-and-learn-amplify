import React from "react";

interface Image {
  url: string;
  alt: string;
}

const PostShow: React.FC = () => {
  const images: Image[] = Array(6).fill({
    url: "https://picsum.photos/seed/picsum/500/300",
    alt: "filename",
  });

  return (
    <div>
      <h1 className="font-thin">Title</h1>
      <section className="py-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam a sequi ex qui enim soluta
          repudiandae odio odit dolor rem, quos sint voluptatum! Blanditiis doloribus deleniti praesentium debitis.
          Quis!
        </p>
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
