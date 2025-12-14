import React from "react";
import CreatePost from "./CreatePost";
import Postlist from "./Postlist";

function Content({ selectedTab }) {
  return <>{selectedTab === "Home" ? <Postlist /> : <CreatePost />}</>;
}

export default Content;
