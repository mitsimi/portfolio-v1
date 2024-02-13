"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import placeholder from "../../public/placeholder.png";
import menu from "../../public/menu.svg";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const navigate = (destination: string) => {
    return () => {
      setOpen(false);
      window.location.href = destination;
    };
  };

  return (
    <Fragment>
      <header className="top-0 sticky">
        <div className="px-10 flex justify-center">
          <div className="flex flex-row items-center justify-between w-full md:max-w-5xl">
            <div id="logo">
              <Image
                src={placeholder}
                alt="Placeholder Logo"
                className="invert dark:invert-0 my-1"
                style={{
                  width: "100px",
                  height: "auto",
                }}
                placeholder="empty"
                priority
              />
            </div>

            <div
              id="nav-burger"
              onClick={() => setOpen(!open)}
              className="p-2 md:hidden"
            >
              <Image
                src={menu}
                alt="Menu SVG"
                className="dark:invert"
                width={32}
                height={32}
                priority
              />
            </div>

            <div id="nav" className="hidden md:flex space-x-5 ">
              <ol className="list-none flex justify-between space-x-5 items-center rtl:flex-row-reverse">
                <li className="nav-li">
                  <a
                    href="/#home"
                    className="nav-li-element"
                    onClick={navigate("#home")}
                  >
                    Home
                  </a>
                </li>

                <li>
                  <span className="seperator">/</span>
                </li>

                <li className="nav-li">
                  <a
                    href="/#about"
                    className="nav-li-element"
                    onClick={navigate("#about")}
                  >
                    About
                  </a>
                </li>

                <li>
                  <span className="seperator">/</span>
                </li>

                <li className="nav-li">
                  <a
                    href="/#projects"
                    className="nav-li-element"
                    onClick={navigate("#projects")}
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <span className="seperator">/</span>
                </li>

                <li className="nav-li">
                  <a
                    href="/#contact"
                    className="nav-li-element"
                    onClick={navigate("#contact")}
                  >
                    Contact
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {open ? (
          <div className="w-full md:hidden overflow-clip bg-light-crust dark:bg-dark-crust shadow-md rounded-b-md">
            <div className="px-10 py-4">
              <ol className="list-none flex-col columns-2 justify-between items-stretch text-start space-y-4">
                <li className="nav-li">
                  <a
                    href="/#home"
                    className="nav-li-element li-mobile"
                    onClick={navigate("#home")}
                  >
                    Home
                  </a>
                </li>

                <li className="nav-li">
                  <a
                    href="/#about"
                    className="nav-li-element li-mobile"
                    onClick={navigate("#about")}
                  >
                    About
                  </a>
                </li>

                <li className="nav-li">
                  <a
                    href="/#projects"
                    className="nav-li-element li-mobile"
                    onClick={navigate("#projects")}
                  >
                    Projects
                  </a>
                </li>

                <li className="nav-li">
                  <a
                    href="/#contact"
                    className="nav-li-element li-mobile"
                    onClick={navigate("#contact")}
                  >
                    Contact
                  </a>
                </li>
              </ol>
            </div>
          </div>
        ) : (
          <Fragment />
        )}
      </header>
    </Fragment>
  );
}
