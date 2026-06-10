const Navigation = ["HOME", "ABOUT", "CONTACT"];

function Navbar() {
  return (
    <nav className="fixed w-full top-0 p-2 z-50 bg-white/10 backdrop-blur-md">
      <ul className="flex justify-center gap-8">
        {Navigation.map((title) => (
          <li
            className="hover:text-slate-500 duration-200 ease-in cursor-pointer"
            key={title}
          >
            {title}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
