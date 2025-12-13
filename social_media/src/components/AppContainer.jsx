import React, { Children } from "react";

function AppContainer({ children }) {
  return <div className="w-full bg-gray-300">{children}</div>;
}

export default AppContainer;
