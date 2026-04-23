import { ScrollReveal } from './ScrollReveal';

const services = [
  {
    title: 'Instalaciones de GLP Centralizado',
    description: 'Diseño e instalación de sistemas de gas centralizado para edificios residenciales, hoteles y proyectos industriales con total seguridad.',
    link: 'https://ingasa.com.ec/instalacion-de-glp/',
    color: '#2B73CC', bg: '#eff6ff',
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    title: 'Instalaciones de Agua',
    description: 'Sistemas completos de agua fría y caliente con materiales certificados para proyectos de cualquier escala y complejidad.',
    link: 'https://ingasa.com.ec/instalacion-de-agua-caliente-y-fria/',
    color: '#0284c7', bg: '#f0f9ff',
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: 'Redes contra Incendios',
    description: 'Instalación de sistemas de protección contra incendios cumpliendo todas las normativas de seguridad vigentes en Ecuador.',
    link: 'https://ingasa.com.ec/redes-contra-incendios/',
    color: '#dc2626', bg: '#fef2f2',
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Sistemas de Calefacción',
    description: 'Soluciones eficientes de calefacción central para edificios, hoteles y viviendas con tecnología de última generación.',
    link: 'https://ingasa.com.ec/sistemas-de-calefaccion/',
    color: '#d97706', bg: '#fffbeb',
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    title: 'Mantenimiento y Estudios',
    description: 'Servicio técnico especializado, evaluación de sistemas existentes y diagnósticos precisos para máximo rendimiento.',
    link: 'https://ingasa.com.ec/mantenimiento-tecnico-y-estudios-de-glp/',
    color: '#7c3aed', bg: '#f5f3ff',
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Suministro de Productos',
    description: 'Tanques GLP, termotanques, tuberías, válvulas y accesorios certificados de las mejores marcas disponibles en Ecuador.',
    link: 'https://ingasa.com.ec/suministro-de-productos-tecnicos/',
    color: '#059669', bg: '#ecfdf5',
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const ArrowRight = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export function Services() {
  return (
    <section id="servicios" style={{ padding: '96px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto 64px' }}>
            <span className="badge">Lo que hacemos</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.0, textTransform: 'uppercase', marginBottom: 6 }}>
              Soluciones técnicas
            </h2>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', fontWeight: 900, color: '#2B73CC', lineHeight: 1.0, textTransform: 'uppercase', marginBottom: 16 }}>
              para cada proyecto
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7 }}>
              Planificación, instalación y entrega con los estándares técnicos más altos. Cada proyecto, sin excepción.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 70}>
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="svc-card"
                style={{
                  display: 'block',
                  background: '#fff',
                  borderRadius: 18,
                  padding: 32,
                  borderTop: `3px solid ${s.color}`,
                  borderRight: '1px solid #e2e8f0',
                  borderBottom: '1px solid #e2e8f0',
                  borderLeft: '1px solid #e2e8f0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  textDecoration: 'none',
                  color: 'inherit',
                  height: '100%',
                }}
              >
                {/* Icon */}
                <div style={{ width: 56, height: 56, borderRadius: 14, background: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: 10, lineHeight: 1.3 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7, marginBottom: 24 }}>
                  {s.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.875rem', fontWeight: 600, color: s.color }}>
                  Ver más
                  <ArrowRight />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginTop: 52 }}>
            <a
              href="https://ingasa.com.ec/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px',
                background: 'transparent', color: '#2B73CC',
                border: '2px solid #2B73CC', borderRadius: 10,
                fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none',
              }}
            >
              Ver todos los servicios
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
