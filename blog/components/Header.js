import React, { useState, Fragment } from "react";
import { LoginIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header(setDrawerOpen) {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [state, setState] = React.useState(false);
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-md">
      <a
        className="flex items-center ml-3 mb-2 text-black font-extrabold text-4xl"
        href="/"
      >
        The Blog
      </a>
      <div className="flex absolute right-6 space-x-4 text-xl">
        <div className="hidden cursor-pointer items-center p-2 md:flex">
          <a href="/" className="text-black hover:text-yellow-400">
            Home
          </a>
        </div>
        <div className="hidden cursor-pointer items-center p-2 md:flex">
          <a className="text-black hover:text-yellow-400">Dogs</a>
        </div>
        <div className="hidden cursor-pointer items-center p-2 md:flex">
          <a className="text-black hover:text-yellow-400">Vanlife</a>
        </div>
        <div className="hidden cursor-pointer items-center p-2 md:flex">
          <a className="text-black hover:text-yellow-400">DIY</a>
        </div>

        {/* <div className="hidden cursor-pointer text-gray-400 hover:text-yellow-400 items-center p-2  md:flex">
          <div className="relative h-5 w-5 flex-shrink-0">
            <LoginIcon />
          </div>
          <p>Sign In</p>
        </div> */}
      </div>

      <Menu
        as="div"
        className="absolute right-6 text-left items-center md:hidden"
      >
        <div>
          <Menu.Button className="w-full justify-center bg-white px-4 py-2">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setdropdownOpen(!dropdownOpen)}
              className="hover:cursor-pointer text-black text-3xl items-center"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-xl hover:text-yellow-400"
                    )}
                  >
                    Home
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-xl hover:text-yellow-400"
                    )}
                  >
                    QR Scan
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-xl hover:text-yellow-400"
                    )}
                  >
                    Apiarys
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-xl hover:text-yellow-400"
                    )}
                  >
                    Hives
                  </a>
                )}
              </Menu.Item>
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-xl hover:text-yellow-400"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Header;
