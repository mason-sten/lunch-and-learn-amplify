import React from "react";
import Row from "../components/inputs/Row";
import { routes } from "../ui/routes";
const PostIndex: React.FC = () => {
  const posts = Array(6).fill({
    title: "Title",
    id: "askdfnaposunhfpiasubf",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum suscipit amet rem aperiam possimus dignissimos officia et nemo quam.",
  });
  return (
    <div>
      <h1 className="font-thin">Recent Posts</h1>
      <section>
        {posts.map((post) => (
          <Row description={post?.body} title={post?.title} to={routes.root.show.with({ id: post?.id })} />
        ))}
      </section>
    </div>
  );
};

export default PostIndex;
