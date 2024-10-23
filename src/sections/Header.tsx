import Link from "next/link";

export const Header = () => {
  return (
  <div className="flex justify-center items-center fixed top-3 w-full z-10">

    {/*Navbar*/}
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop:blur cursor-pointer">
      <Link href={'/'} className="nav-item cursor-pointer">
      Home
      </Link>
      <Link href={'#project'} className="nav-item cursor-pointer">
      Projects
      </Link>
      <Link href={'#about'} className="nav-item cursor-pointer">
      About
      </Link>
      <Link href={'#contact'} className="nav-item cursor-pointer bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
      Contact
      </Link>
    </nav>
  </div>
  );
};
