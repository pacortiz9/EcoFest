'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">EcoFest 2025</h1>
        <nav className="space-x-4">
          <Link href="#sobre" className="hover:underline">Sobre</Link>
          <Link href="#programa" className="hover:underline">Programa</Link>
          <Link href="#participantes" className="hover:underline">Participantes</Link>
          <Link href="#contacto" className="hover:underline">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}