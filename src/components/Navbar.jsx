import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

function Navbar() {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { english: "HOME", japanese: "家", path: "/" },
    { english: "ABOUT", japanese: "について", path: "/about" },
    { english: "CONTACT", japanese: "接触", path: "/contact" },

    isAuthenticated
      ? {
          english: "DASHBOARD",
          japanese: "ダッシュボード",
          path: "/dashboard",
        }
      : {
          english: "STAFF LOGIN",
          japanese: "スタッフログイン",
          path: "/staff-login",
        },
  ];

  return (
    <div className="fixed top-5 left-0 right-0 flex justify-center z-50">
      {/* desktop */}
      <nav className="hidden md:block sm:w-3/4 sm:rounded-full rounded-2xl p-5 bg-zinc-700/50 backdrop-blur-md">
        <ul className="flex justify-center gap-8">
          {navigation.map((item) => (
            <li
              className="relative cursor-pointer group whitespace-nowrap font-semibold"
              key={item.english}
            >
              <NavLink to={item.path}>
                <span className="block transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2">
                  {item.english}
                </span>

                <span className="absolute inset-0 flex items-center text-purple-700 justify-center opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {item.japanese}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* mobile */}
      <nav className="md:hidden bg-zinc-700/50 backdrop-blur-md rounded-2xl p-4 w-[90%]">
        <div className="flex justify-between items-center">
          <h2 className="font-bold italic">
            Drive<span className="text-purple-500">flow</span>
          </h2>

          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl ">
            <span
              className={`block transition-transform duration-150 ${isOpen ? "rotate-90 text-purple-300" : ""}`}
            >
              ☰
            </span>
          </button>
        </div>

        <ul
          className={`overflow-hidden transition-all duration-300 ease-in-out flex flex-col items-start gap-5 ${
            isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          {navigation.map((item) => (
            <li key={item.english}>
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="font-semibold"
              >
                {item.english}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
