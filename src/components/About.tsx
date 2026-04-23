import { ScrollReveal } from './ScrollReveal';

const features = [
  'Precisión técnica en cada instalación y detalle',
  'Soporte especializado durante y después de la obra',
  'Experiencia en proyectos de alta complejidad',
  'Materiales certificados y de primera calidad',
  'Cumplimiento total de normativas ecuatorianas',
  'Seguridad garantizada en cada etapa del proceso',
];

const CheckIcon = () => (
  <div
    style={{
      flexShrink: 0,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#2B73CC',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 2,
    }}
  >
    <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

export function About() {
  return (
    <section id="sobre-nosotros" style={{ padding: '96px 0', background: '#fff', overflow: 'hidden' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>

          {/* Image */}
          <ScrollReveal animation="left">
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', aspectRatio: '4/5', boxShadow: '0 25px 60px rgba(0,0,0,0.15)' }}>
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=1000&fit=crop&q=85&auto=format"
                  alt="Técnico INGASA realizando instalación de tuberías certificadas en Cuenca Ecuador"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Floating card */}
              <div style={{ position: 'absolute', bottom: -20, right: -16, background: '#fff', borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', padding: '16px 20px', border: '1px solid #f1f5f9', maxWidth: 170 }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#2B73CC', lineHeight: 1, marginBottom: 4 }}>20+</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500, lineHeight: 1.4 }}>Años brindando soluciones en Ecuador</div>
              </div>
              {/* Accent block */}
              <div style={{ position: 'absolute', top: -16, left: -16, width: 80, height: 80, borderRadius: 16, background: 'linear-gradient(135deg, #fed7aa, #fdba74)', zIndex: -1 }} />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal animation="right">
            <div>
              <span className="badge">Quiénes somos</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.0, textTransform: 'uppercase', marginBottom: 6 }}>
                Más de dos décadas
              </h2>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', fontWeight: 900, color: '#2B73CC', lineHeight: 1.0, textTransform: 'uppercase', marginBottom: 20 }}>
                construyendo confianza
              </h2>
              <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #2B73CC, #F97316)', borderRadius: 2, marginBottom: 24 }} />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: 14 }}>
                En INGASA sabemos que una instalación mal ejecutada puede costar mucho más que el proyecto mismo. Por eso llevamos más de 20 años entregando sistemas de GLP, agua y calefacción que funcionan sin fallas, construidos con materiales certificados y mano de obra especializada.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: 32 }}>
                Trabajamos con hoteles, edificios residenciales y proyectos industriales en toda la región, siendo referente de confianza técnica en Cuenca y el resto del Ecuador.
              </p>

              {/* Feature list */}
              <div style={{ marginBottom: 36, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckIcon />
                    <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#334155' }}>{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://ingasa.com.ec/sobre-nosotros/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', background: '#2B73CC', color: '#fff',
                  borderRadius: 10, fontWeight: 700, fontSize: '0.95rem',
                  textDecoration: 'none', boxShadow: '0 4px 16px rgba(43,115,204,.3)',
                }}
              >
                Conocer más sobre INGASA
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
