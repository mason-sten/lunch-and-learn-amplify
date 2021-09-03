import React, { useEffect, useState } from "react";
import { ListPostsQuery, ListPostsQueryVariables, PostStatus } from "../API";
import ampAPI from "../api/ampAPI";
import Row from "../components/inputs/Row";
import { listPosts } from "../graphql/queries";
import { routes } from "../ui/routes";
const PostIndex: React.FC = () => {
  const [data, setData] = useState<ListPostsQuery>();

  const posts = Array(6).fill({
    title: "Title",
    id: "askdfnaposunhfpiasubf",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum suscipit amet rem aperiam possimus dignissimos officia et nemo quam.",
    image: "https://picsum.photos/seed/picsum/500/300",
  });

  useEffect(() => {
    const send = async () => {
      const response = await ampAPI<ListPostsQuery, ListPostsQueryVariables>(listPosts, {
        filter: { status: { eq: PostStatus.PUBLISHED } },
      });
      setData(response);
    };

    send();
  }, []);

  return (
    <div>
      <h1 className="font-thin">Recent Posts</h1>
      <section>
        {(data?.listPosts?.items || []).map((post) => (
          <Row description={post?.body} title={post?.title} to={routes.root.show.with({ id: post?.id })} />
        ))}
      </section>
    </div>
  );
};

export default PostIndex;
