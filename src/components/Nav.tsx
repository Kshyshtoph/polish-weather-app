function Nav() {
  return (
    <nav className="bg-gray-800 text-white relative h-16 min-w-full  top-0 left-0 ">
      <ul className=" flex row container mx-auto gap-5 md:gap-10">
        <li>
          <a href="/" className="block p-2">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="block p-2">
            Reports
          </a>
        </li>
        <li>
          <a href="#" className="block p-2">
            Analytics
          </a>
        </li>
        <li>
          <a href="#" className="block p-2">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
