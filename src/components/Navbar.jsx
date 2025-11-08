import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // No explicit toggle in navbar; we'll just initialize theme once

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', shouldDark);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full text-white bg-blue-700 shadow-md dark:bg-gray-900">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <Link to="/" className="text-2xl font-bold">United Financial Services</Link>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </div>
        <ul className={`md:flex md:space-x-6 ${open ? "block" : "hidden"} md:block`}>
          {["Home", "Services", "About", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-semibold"
                    : "hover:text-yellow-300"
                }
                onClick={() => setOpen(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}
          {/* Theme toggle removed as requested */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
