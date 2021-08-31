import React from "react";
import Card from "../components/inputs/Card";
import { routes } from "../ui/routes";
const PostIndex: React.FC = () => {
  const posts = Array(6).fill({
    title: "Title",
    id: "askdfnaposunhfpiasubf",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum suscipit amet rem aperiam possimus dignissimos officia et nemo quam.",
    image: "https://picsum.photos/seed/picsum/500/300",
  });
  return (
    <div>
      <h1 className="font-thin">Recent Posts</h1>
      <section className="grid gap-8 py-8 grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <Card {...post} to={routes.root.show.with({ id: post.id })} />
        ))}
      </section>
    </div>
  );
};

export default PostIndex;
