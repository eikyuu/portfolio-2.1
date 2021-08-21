import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const navigation = [
    { name: "ACCEUIL", href: "#" },
    { name: "A PROPOS", href: "#" },
    { name: "SKILL", href: "#" },
    { name: "REALISATION", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.pageYOffset;
      currentPosition <= scrollTop ? setScrolling(false) : setScrolling(true);
      setScrollTop(currentPosition < 0 ? 0 : currentPosition);
    };
    window.addEventListener("scroll", onScroll);
  });
  return (
    <header>
      {/* navigation mobile */}
      {/* <nav
        className={
          scrolling
            ? "xl:hidden bg-black bg-opacity-75 fixed z-50 w-screen -top-48 transition-top duration-1000"
            : "xl:hidden bg-black bg-opacity-75 fixed  z-50 w-screen top-0 transition-top duration-1000"
        }
      >
        <button onClick={() => setOpen(!open)} className="h-16 w-16">
          <BurgerIcon />
        </button>
        <ul className={open ? "text-white ml-1" : "hidden"}>
          {navigation.map((item) => (
            <li className="font-semibold">
              <AnchorLink href={item.href}>{item.name}</AnchorLink>
            </li>
          ))}
        </ul>
      </nav> */}
      {/* navigation desktop */}
      <nav
        className={
          scrolling
            ? "bg-black bg-opacity-90 fixed z-50 w-screen -top-48 transition-top duration-1000 hidden xl:block"
            : "bg-black bg-opacity-90 fixed z-50 w-screen top-0 transition-top duration-1000 hidden xl:block"
        }
      >
        <ul className="flex items-center  ml-5 space-x-6 h-14 text-white ml-1 transition-all duration-1000">
          {navigation.map((item, index) => (
            <li key={index} className="hover:underline font-semibold">
              <AnchorLink href={item.href}>{item.name}</AnchorLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
