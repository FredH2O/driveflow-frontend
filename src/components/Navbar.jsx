const Navigation = ["HOME", "ABOUT", "CONTACT"];

function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-center p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
      <ul className="flex gap-3">
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
