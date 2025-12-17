function Sidebar({ selectedTab, setSelectedTab }) {
  return (
    <>
      {/* Simple Sidebar */}
      <aside className="w-44 h-screen bg-gray-800 text-white p-4 fixed left-0 right-40">
        <h2 className="text-xl font-semibold mb-6">Menu</h2>
        <ul className="space-y-3">
          <li
            className={`hover:bg-gray-700 p-2 rounded cursor-pointer ${
              selectedTab === "Home" && "bg-indigo-500 hover:bg-indigo-600"
            }`}
            onClick={() => setSelectedTab("Home")}
          >
            Home
          </li>
          <li
            className={`hover:bg-gray-700 p-2 rounded cursor-pointer ${
              selectedTab === "Create Post" &&
              "bg-indigo-500 hover:bg-indigo-600"
            }`}
            onClick={() => setSelectedTab("Create Post")}
          >
            Create Post
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
