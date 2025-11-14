import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Theme initialization (kept as in your code)
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldDark);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full text-white bg-blue-700 shadow-md dark:bg-gray-900">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">

        {/* LOGO */}
        <Link 
          to="/" 
          className="text-2xl font-bold select-none whitespace-nowrap"
        >
          United Financial Services
        </Link>

        {/* Hamburger for Mobile */}
        <button 
          className="block md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* NAV LINKS */}
        <ul
          className={`
            md:flex md:space-x-8 md:static absolute left-0 w-full md:w-auto bg-blue-700 dark:bg-gray-900 md:bg-transparent
            transition-all duration-300 ease-in-out overflow-hidden
            ${open ? "top-16 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}
          `}
        >
          {["Home", "Services", "About", "Contact"].map((item) => (
            <li key={item} className="px-6 py-3 text-lg md:p-0 md:py-0">
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-semibold"
                    : "hover:text-yellow-300 transition"
                }
                onClick={() => setOpen(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
