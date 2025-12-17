import { useContext } from "react";
import Card from "./Card";
import { PostCreateContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

function Postlist() {
  const { postList, dataFetch } = useContext(PostCreateContext);

  return (
    <>
      <div className="flex justify-center gap-x-10 flex-wrap px-8 ">
        {dataFetch && <LoadingSpinner />}
        {!dataFetch && postList.length === 0 && <WelcomeMessage />}
        {!dataFetch &&
          postList.map((post) => <Card key={post.id} post={post} />)}
      </div>
    </>
  );
}

export default Postlist;
