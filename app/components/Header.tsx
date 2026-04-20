'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container-ingasa">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/Logo-Azul.png"
              alt="INGASA Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-blue-600">INGASA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Inicio
            </Link>
            <Link href="#servicios" className="text-gray-700 hover:text-blue-600 transition">
              Servicios
            </Link>
            <Link href="#sobre-nosotros" className="text-gray-700 hover:text-blue-600 transition">
              Nosotros
            </Link>
            <Link href="#contacto" className="text-gray-700 hover:text-blue-600 transition">
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="https://wa.link/q0jutu"
            target="_blank"
            className="hidden md:block btn-primary"
          >
            Contáctanos
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Servicios
            </Link>
            <Link
              href="#sobre-nosotros"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Nosotros
            </Link>
            <Link
              href="https://wa.link/q0jutu"
              target="_blank"
              className="block py-2 btn-primary mt-4"
            >
              Contáctanos
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
