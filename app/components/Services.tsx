import Link from 'next/link';

const services = [
  {
    icon: '🔧',
    title: 'Instalaciones de GLP Centralizado',
    description: 'Soluciones seguras y eficientes para sistemas de gas centralizado',
    link: 'https://ingasa.com.ec/instalacion-de-glp/'
  },
  {
    icon: '💧',
    title: 'Instalaciones de Agua',
    description: 'Sistemas de agua fría y caliente con productos certificados',
    link: 'https://ingasa.com.ec/instalacion-de-agua-caliente-y-fria/'
  },
  {
    icon: '🚨',
    title: 'Redes contra Incendios',
    description: 'Sistemas de protección y seguridad contra incendios',
    link: 'https://ingasa.com.ec/redes-contra-incendios/'
  },
  {
    icon: '🌡️',
    title: 'Sistemas de Calefacción',
    description: 'Soluciones de calefacción eficientes y confiables',
    link: 'https://ingasa.com.ec/sistemas-de-calefaccion/'
  },
  {
    icon: '🔍',
    title: 'Mantenimiento y Estudios',
    description: 'Mantenimiento técnico especializado y evaluaciones de sistemas',
    link: 'https://ingasa.com.ec/mantenimiento-tecnico-y-estudios-de-glp/'
  },
  {
    icon: '📦',
    title: 'Suministro de Productos',
    description: 'Tanques GLP, termotanques, tuberías y más productos certificados',
    link: 'https://ingasa.com.ec/suministro-de-productos-tecnicos/'
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container-ingasa">
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Soluciones técnicas en gas, agua y calefacción con productos certificados y soporte profesional en cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              target="_blank"
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
