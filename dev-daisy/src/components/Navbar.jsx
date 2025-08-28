import { Link } from "react-router-dom";
import React from 'react'
import "../App.css";
import { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        
          <header className="container dark:bg-white mx-auto flex w-full items-center justify-between py-4 px-6">
              {/* Logo */}
              <a href="#">
                <div className="w-full text-center text-lg font-extrabold sm:w-fit sm:text-left">
                  <span className="text-orange-600">Dev</span>
        
                  <span className="dark:text-orange-700">Heart</span>
                </div>
              </a>
        
              {/* Desktop Nav */}
              <nav className="hidden bg-white text-base dark:bg-white sm:block">
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
                        <Link
                          to="/book"
                          
                          className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                        >
                          Book
                        </Link>
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
              {/* Hamburger trigger button (add this to your header) */}
      <button
        onClick={() => setIsOpen(true)}
        className="sm:hidden px-4 py-2 text-slate-400 hover:text-slate-900"
      >
        {/* Hamburger icon SVG */}
        <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      {/* Your nav, with dynamic class */}
      <nav
        className={`fixed top-0 z-20 h-full w-2/3 transform overflow-y-auto bg-white py-4 text-base transition   dark:bg-white sm:hidden ${
          isOpen ? 'right-0' : '-right-2/3'
        }`}
      >
        <ul className="flex flex-col space-y-2">
          <li className="text-right">
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
            >
              {/* Your close icon SVG (consider changing to an 'X' for clarity) */}
              <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 6L6 18M6 6l12 12"
                />
              </svg>
            </button>
          </li>
          {/* Rest of your <li> items... */}
          <li className="group relative w-full text-right">
                    <Link
                      to="/"
                      className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                    >
                      Home
                    </Link>
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
                          <Link to="/services/Pricing">Pricing</Link>
                        </a>
                      </li>
                     
                    </ul>
                  </li>
                  <li className="group relative w-full text-right">
                     <Link
                      to="/about"
                     
                      className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                    >
                      About
                    </Link>
                  </li>
                  <li className="group relative w-full text-right">
                      <Link
                      to="/contact"
                      className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-900 transition hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-50"
                    >
                      Contact
                    </Link>
                  </li>
        </ul>
      </nav>
            </header>
        


        
        </>
      
             )
}