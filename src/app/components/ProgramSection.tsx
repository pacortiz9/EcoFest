'use client'
export default function ProgramSection() {
  return (
    <section id="programa" className="py-16 bg-gray-50 text-gray-800 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Programa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Día 1 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">23 de mayo</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><span style={{ fontWeight: 'bold' }}>10:00</span> Mini-charlas de influencers (5 min c/u)</li>
              <li><span style={{ fontWeight: 'bold' }}>12:00</span> Concierto con mensajes ambientales</li>
              <li><span style={{ fontWeight: 'bold' }}>14:00</span> Stands de Economía Circular</li>
              <li><span style={{ fontWeight: 'bold' }}>16:00</span> Taller de Gestión de Residuos</li>
            </ul>
          </div>
          {/* Día 2 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">24 de mayo</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><span style={{ fontWeight: 'bold' }}>10:00</span> Rutinas de standuperos ecológicos</li>
              <li><span style={{ fontWeight: 'bold' }}>12:00</span> Panel de expertos en agua</li>
              <li><span style={{ fontWeight: 'bold' }}>14:00</span> Presentaciones de proyectos estudiantiles</li>
              <li><span style={{ fontWeight: 'bold' }}>16:00</span> Premiación y cierre</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
