import React, { useContext } from "react";
import Card from "./Card";
import { PostCreateContext } from "../store/post-list-store";

function Postlist() {
  const { postList } = useContext(PostCreateContext);
  return (
    <>
      <div className="flex justify-center gap-x-10 flex-wrap px-8 ">
        {postList.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default Postlist;
