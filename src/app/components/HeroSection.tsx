'use client'

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 text-center"
    >
      <h2 className="text-4xl md:text-6xl font-bold">
        EcoFest 2025
      </h2>
      <p className="mt-4 text-lg md:text-2xl max-w-2xl">
        Únete al Primer Festival Vanguardista del Medio Ambiente para crear conciencia sobre la emergencia climática.
      </p>
      <button className="mt-8 px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100">
        Reserva tu lugar
      </button>
    </section>
  )
}