import Card from "./Card";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

function Postlist() {
  const postList = useLoaderData() || [];

  return (
    <>
      <div className="flex justify-center gap-x-10 flex-wrap px-8 ">
        {postList.length === 0 && <WelcomeMessage />}
        {postList.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export const postLoader = async () => {
  const res = await fetch("https://dummyjson.com/posts");

  if (!res.ok) {
    throw new Response("Failed to fetch posts", { status: 500 });
  }

  const data = await res.json();
  return data.posts;
};
export default Postlist;
