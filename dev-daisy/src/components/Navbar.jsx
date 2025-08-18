import { Link } from "react-router-dom";
import React from 'react'
import "../App.css";

export const Navbar = () => {
    return (
        <>
        
          <header className="container mx-auto flex w-full items-center justify-between py-4 px-6">
              {/* Logo */}
              <a href="#">
                <div className="w-full text-center text-lg font-extrabold sm:w-fit sm:text-left">
                  <span className="text-orange-600">Dev</span>
        
                  <span className="dark:text-slate-400">Heart</span>
                </div>
              </a>
        
              {/* Desktop Nav */}
              <nav className="hidden bg-white text-base dark:bg-slate-900 sm:block">
                <ul className="flex items-center space-x-2">
                  <li className="group relative">
                    <Link
                      to="/"
                      className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="group relative">
                    <a
                      href="#"
                      className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                    >
                      Services
                    </a>
                    <ul className="invisible absolute z-30 space-y-2 rounded-lg border border-slate-50 bg-white p-4 opacity-0 shadow-xl transition-opacity delay-75 ease-in-out group-hover:visible group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900">
                      <li>
                        <a
                          href="#"
                          className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                        >
                          Business Line of Credit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                        >
                          SBA Loan
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                        >
                          Revenue Based Financing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                        >
                          Invoice Factoring
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="group relative">
                    <Link
                      to="/about"
                   
                      className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                    >
                      About
                    </Link>
                  </li>
                  <li className="group relative">
                    <Link
                      to="/contact"
                     
                      className="block whitespace-nowrap px-2 py-2 text-sm text-slate-900 transition hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-50"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
        
              {/* Mobile Menu Button */}
              <button
                className="block text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 sm:hidden"
                title="Open navigation menu"
              >
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
        
              {/* Mobile Nav */}
              <nav className="fixed -right-2/3 top-0 z-20 h-full w-2/3 transform overflow-y-auto bg-white py-4 text-base transition dark:bg-slate-900 sm:hidden">
                <ul className="flex flex-col space-y-2">
                  <li className="text-right">
                    <button className="px-6 py-2 text-slate-400 hover:text-slate-900 dark:hover:text-slate-50">
                      <svg
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                        width="1.2em"
                        height="1.2em"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 12h14m-4 4l4-4m-4-4l4 4"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li className="group relative w-full text-right">
                    <a
                      href="/"
                      className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group relative w-full text-right">
                    <a
                      href="#"
                      className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                    >
                      Solutions
                    </a>
                    <ul className="h-0 space-y-2 overflow-y-hidden bg-slate-50 px-4 py-0 transition-all delay-75 ease-in-out group-hover:h-full group-hover:py-4 dark:bg-slate-800">
                      <li>
                        <a
                          href="#"
                          className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                        >
                          Business Line of Credit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                        >
                          SBA Loan
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                        >
                          Revenue Based Financing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                        >
                          Invoice Factoring
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="group relative w-full text-right">
                    <a
                      href="/about"
                      className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                    >
                      About
                    </a>
                  </li>
                  <li className="group relative w-full text-right">
                    <a
                      href="/contact"
                      className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-900 transition hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-50"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
        


        
        </>
      
             )
}