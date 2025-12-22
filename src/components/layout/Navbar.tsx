"use client"

import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {

	const [open, setOpen] = useState(false);
	const [visible, setVisible] = useState(false);

	const toggleMenu = () => {
		if (!open) {
			setOpen(true);   
			setVisible(true); 
		} else {
			setVisible(false);        
			setTimeout(() => setOpen(false), 300); 
		}
	};

  return (
    <header className="w-full border-b border-secondary bg-primary sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/blanco-transparente.png"
            alt="Kratos Logo"
            width={160}
            height={80}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center text-white">
            <Link
                href="/"
                className="px-7 py-3 rounded hover:bg-white/20 transition-colors duration-200"
            >
                Inicio
            </Link>
            <Link
                href="/nosotros"
                className="px-7 py-3 rounded hover:bg-white/20 transition-colors duration-200"
            >
                Sobre Nosotros
            </Link>
            <Link
                href="/servicios"
                className="px-7 py-3 rounded hover:bg-white/20 transition-colors duration-200"
            >
                Servicios
            </Link>
            <Link
                href="/contacto"
                className="px-7 py-3 rounded hover:bg-white/20 transition-colors duration-200"
            >
                Contacto
            </Link>
        </nav>

				<button
          className="md:hidden text-white text-2xl p-2"
          onClick={toggleMenu}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <HiX className="text-white" size={28} /> : <HiMenu className="text-white" size={28} />}
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-primary shadow-lg transition-all duration-300 ease-in-out z-40
			  ${visible ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'}`}>
        <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
          <div className="flex flex-col">
            <Link 
              href="/" 
              className="px-6 py-4 hover:bg-white/20 transition-colors duration-200 border-b border-white/10 text-white"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link 
              href="/nosotros" 
              className="px-6 py-4 hover:bg-white/20 transition-colors duration-200 border-b border-white/10 text-white"
              onClick={toggleMenu}
            >
              Sobre Nosotros
            </Link>
            <Link 
              href="/servicios" 
              className="px-6 py-4 hover:bg-white/20 transition-colors duration-200 border-b border-white/10 text-white"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
            <Link 
              href="/contacto" 
              className="px-6 py-4 hover:bg-white/20 transition-colors duration-200 text-white"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
