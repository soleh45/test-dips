import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";

const Header = () => {
  const [navBackground, setNavBackground] = useState("");

  const menus = useRef([
    {
      label: "HOME",
      color: "text-yellow-500",
    },
    {
      label: "SERVICE",
      color: "text-stone-50",
    },
    {
      label: "WORKFLOW",
      color: "text-stone-50",
    },
    {
      label: "PORTOFOLIO",
      color: "text-stone-50",
    },
    {
      label: "ABOUT US",
      color: "text-stone-50",
    },
    {
      label: "OUR VALUE",
      color: "text-stone-50",
    },
  ]).current;

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setNavBackground("bg-slate-900");
      } else if (window.screenY < 120) {
        setNavBackground("");
      }
    });
  }, []);

  const _renderNavbar = useMemo(() => {
    return (
      <div className={`fixed top-0 min-w-full ${navBackground} z-50`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-24">
            <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 items-center">
                  {menus.map((e, index) => {
                    return (
                      <a
                      key={index.toString()}
                        href="#"
                        className={`${e.color} hover:text-white px-3 py-2 text-sm font-medium`}
                      >
                        {e.label}
                      </a>
                    );
                  })}
                  <div className="p-3 h-15 bg-yellow-500 flex justify-center items-center">
                    (021) 8583944
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, [menus, navBackground]);

  return <div className="relative">{_renderNavbar}</div>;
};

export default Header;
