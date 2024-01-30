import Link from "next/link";

function Nav() {
  return (
    <nav className="bg-gray-800 text-white relative h-16 min-w-full  top-0 left-0 ">
      <ul className=" flex row container mx-auto gap-5 md:gap-10">
        <li>
          <Link href="/" className="block p-2">
            Główna
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
