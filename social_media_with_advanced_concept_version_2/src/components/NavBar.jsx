function NavBar() {
  return (
    <nav className="w-full h-16 bg-indigo-700 fixed top-0 left-0 flex items-center justify-between gap-4 px-10 z-10">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-indigo-200">Social Media</h1>
      </div>
      <div className="hidden lg:block flex-3 ">
        <ul className="flex items-center justify-center gap-3">
          <li
            className="text-slate-200 font-semibold cursor-pointer px-3 py-2 rounded border border-transparent hover:border hover:border-slate-400  
          "
          >
            Home
          </li>
          <li
            className="text-slate-200 font-semibold cursor-pointer px-3 py-2 rounded border border-transparent hover:border hover:border-slate-400
          "
          >
            About Us
          </li>
          <li
            className="text-slate-200 font-semibold cursor-pointer px-3 py-2 rounded border border-transparent hover:border hover:border-slate-400
          "
          >
            Contact Us
          </li>
        </ul>
      </div>
      <div className="hidden lg:block flex-1">
        <form action="" className="flex w-fit rounded overflow-hidden ">
          <input type="text" className="bg-slate-200 px-2 py-1 outline-0" />
          <button className="text-indigo-700 bg-indigo-300 py-2 px-4 hover:bg-indigo-400 cursor-pointer ">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
