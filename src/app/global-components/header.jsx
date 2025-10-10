'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close Services on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  // Close menus on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // If main mobile menu closes, close Services too
  useEffect(() => {
    if (!menuOpen) setServicesOpen(false);
  }, [menuOpen]);

  return (
    <nav className="bg-white border-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-10">


        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
          aria-controls="primary-nav"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Collapsible nav */}
        <div
          id="primary-nav"
          
          className={`
            w-full md:w-auto overflow-hidden md:overflow-visible transition-all duration-500 ease-in-out
            ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
            md:max-h-full md:opacity-100 md:block
          `}
        >
          <ul className="md:overflow-visible flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-8 bg-gray-200 md:bg-white border border-gray-300 md:border-0 rounded-lg">
            <li>
              <Link href="/" className="block px-3 py-2 text-lg text-black hover:text-blue-700 hover:bg-gray-300 rounded">
                Home
              </Link>
            </li>

            <li>
              <Link href="/" className="block px-3 py-2 text-lg text-black hover:text-blue-700 hover:bg-gray-300 rounded">
                Services
              </Link>
            </li>

            <li>
              <Link href="/services" className="block px-3 py-2 text-lg text-black hover:text-blue-700 hover:bg-gray-300 rounded">
                Request a service
              </Link>
            </li>

           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
