import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";

export const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="border-gray-200 bg-white font-source" id="desktop-nav">
        <nav className="bg-white p-2 text-lg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-shrink-0">
                <Link href="/" className="flex">
                  <span className="self-center">
                    <div className="flex flex-row">
                      <Image
                        src="/SASE_LOGO.png"
                        width={150}
                        height={50}
                        alt="Picture of SASE TAMU logo"
                      />
                      <div className="vl ml-4 mr-3"></div>
                      <Image
                        src="/TAMU_LOGO.png"
                        width={50}
                        height={50}
                        alt="Picture of TAMU logo"
                      />
                    </div>
                  </span>
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-10">
                  {/* Add your navigation links here */}
                  <Link
                    href="/"
                    className="hover-underline-animation rounded-md text-gray-500"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="hover-underline-animation rounded-md text-gray-500"
                  >
                    About
                  </Link>
                  <Link
                    href="/our-team"
                    className="hover-underline-animation rounded-md text-gray-500"
                  >
                    Our Team
                  </Link>
                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="flex items-center justify-between text-gray-500 hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent"
                    >
                      <div
                        onClick={toggleMenu}
                        className="hover-underline-animation"
                      >
                        Events
                      </div>
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    {isMenuOpen && (
                      <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div
                          className="text-md py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <Link
                            href="/upcoming-events"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Upcoming Events
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                  <Link
                    href="/join"
                    className="hover-underline-animation rounded-md text-gray-500"
                  >
                    Join
                  </Link>
                  <Link
                    href="/sponsor"
                    className="hover-underline-animation rounded-md text-gray-500"
                  >
                    Sponsor
                  </Link>
                  {/* <Link
                    href="/attendance"
                    className="hover-underline-animation rounded-md text-gray-500"
                  >
                    Attendance
                  </Link> */}
                  {/* ... */}
                </div>
              </div>
              <div className="lg:hidden">
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="text-black hover:text-slate-500 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
            {isMobileMenuOpen && (
              <div className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  <Link
                    href="/"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                  >
                    About
                  </Link>
                  <Link
                    href="/our-team"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                  >
                    Officer Team
                  </Link>
                  <Link
                    href="/upcoming-events"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                  >
                    Upcoming Events
                  </Link>
                  <Link
                    href="/join"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                  >
                    Join
                  </Link>
                  <Link
                    href="/sponsor"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                  >
                    Sponsor
                  </Link>
                  {/* <Link
                    href="/attendance"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                  >
                    Attendance
                  </Link> */}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

