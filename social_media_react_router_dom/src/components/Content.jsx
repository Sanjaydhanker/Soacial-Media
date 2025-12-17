import { Outlet } from "react-router-dom";

function Content({ selectedTab }) {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}

export default Content;
