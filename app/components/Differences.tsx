import { ScrollReveal } from './ScrollReveal';

const pillars = [
  {
    title: 'Cumplimiento Normativo',
    description: 'Todos nuestros proyectos se ejecutan bajo las normativas técnicas y de seguridad vigentes en Ecuador, garantizando instalaciones legales y seguras.',
    detail: '100% de conformidad en cada entrega',
    color: '#2B73CC', bg: '#eff8ff',
    icon: (
      <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Calidad de Material',
    description: 'Trabajamos exclusivamente con productos certificados y de primera línea: tanques homologados, tuberías certificadas, accesorios de alta resistencia.',
    detail: 'Solo marcas y productos certificados',
    color: '#d97706', bg: '#fffbeb',
    icon: (
      <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Precisión Técnica',
    description: 'Nuestro equipo de técnicos especializados aplica métodos rigurosos en cada instalación, asegurando resultados exactos y sin margen de error.',
    detail: 'Equipo certificado y experimentado',
    color: '#059669', bg: '#ecfdf5',
    icon: (
      <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
];

export function Differences() {
  return (
    <section style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>

        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: '36rem', margin: '0 auto 64px' }}>
            <span className="badge">Por qué elegirnos</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.0, textTransform: 'uppercase', marginBottom: 4 }}>
              Lo que nos
            </h2>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', fontWeight: 900, color: '#2B73CC', lineHeight: 1.0, textTransform: 'uppercase' }}>
              diferencia
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <div
                className="pillar-card"
                style={{
                  position: 'relative',
                  background: '#fff',
                  borderRadius: 20,
                  padding: 36,
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  overflow: 'hidden',
                  height: '100%',
                }}
              >
                <div style={{ width: 64, height: 64, borderRadius: 18, background: p.bg, color: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.75, marginBottom: 24 }}>{p.description}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: '0.75rem', fontWeight: 700, padding: '6px 14px', borderRadius: 999, background: p.bg, color: p.color }}>
                  <svg width={11} height={11} viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block', flexShrink: 0 }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {p.detail}
                </div>
                {/* Bottom accent */}
                <div style={{ position: 'absolute', bottom: 0, left: 36, right: 36, height: 3, borderRadius: '4px 4px 0 0', background: p.color, opacity: 0.6 }} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
