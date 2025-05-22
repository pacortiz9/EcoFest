'use client'
export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-white text-gray-900 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">Contacto e Información</h2>
        <p className="text-sm text-center mb-6 text-gray-600">
          Para consultas generales o patrocinios, completa el formulario o escribe a <a href="mailto:info@ecofest.com" className="text-green-600 hover:underline">info@ecofest.com</a>.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea id="message" name="message" rows={4} required className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}