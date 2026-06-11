const Navigation = [
  { english: "HOME", japanese: "家" },
  { english: "ABOUT", japanese: "について" },
  { english: "CONTACT", japanese: "接触" },
];
function Navbar() {
  return (
    <nav className="fixed w-full top-0 p-2 z-50 bg-white/10 backdrop-blur-md">
      <ul className="flex justify-center gap-8">
        {Navigation.map((item) => (
          <li
            className="relative cursor-pointer group whitespace-nowrap font-semibold"
            key={item.english}
          >
            <span className="block transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2">
              {item.english}
            </span>
            <span className="absolute inset-0 flex items-center text-purple-500 justify-center opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {item.japanese}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
