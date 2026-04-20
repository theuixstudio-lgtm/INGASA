export function About() {
  const features = [
    { icon: '✓', title: 'Precisión en cada instalación', description: 'Exactitud en cada detalle' },
    { icon: '✓', title: 'Soporte técnico especializado', description: 'Expertos disponibles siempre' },
    { icon: '✓', title: 'Experiencia en obras complejas', description: 'Proyectos desafiantes realizados' },
    { icon: '✓', title: 'Productos de alta calidad', description: 'Materiales certificados garantizados' },
    { icon: '✓', title: 'Normativas siempre cumplidas', description: 'Regulaciones en orden' },
    { icon: '✓', title: 'Materiales certificados', description: 'Productos verificados y aprobados' },
    { icon: '✓', title: 'Seguridad en todo el proceso', description: 'Protección en cada fase' },
    { icon: '✓', title: 'Confianza que se construye', description: 'Relaciones duraderas' }
  ];

  return (
    <section id="sobre-nosotros" className="py-20">
      <div className="container-ingasa">
        <div className="mb-16">
          <h2 className="section-title">Conoce INGASA</h2>
          <p className="section-subtitle">
            INGASA es una empresa ecuatoriana especializada en instalaciones técnicas y suministro de productos certificados. Acompañamos proyectos que exigen precisión, seguridad y materiales de alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-3">{feature.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <a href="https://ingasa.com.ec/sobre-nosotros/" target="_blank" className="btn-primary">
          Más sobre nosotros
        </a>
      </div>
    </section>
  );
}
