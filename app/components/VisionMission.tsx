import { ScrollReveal } from './ScrollReveal';

export function VisionMission() {
  return (
    <section style={{ padding: '96px 0', background: '#f8fafc', overflow: 'hidden' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>

        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: '32rem', margin: '0 auto 64px' }}>
            <span className="badge">Nuestra identidad</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.0, textTransform: 'uppercase', marginBottom: 4 }}>
              Propósito y
            </h2>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', fontWeight: 900, color: '#2B73CC', lineHeight: 1.0, textTransform: 'uppercase' }}>
              dirección
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>

          {/* Visión */}
          <ScrollReveal animation="left">
            <div style={{ background: '#fff', borderRadius: 24, overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', height: '100%' }}>
              <div style={{ height: 4, background: 'linear-gradient(90deg, #2B73CC, #F97316)' }} />
              <div style={{ padding: 40 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 24 }}>
                  <div style={{ flexShrink: 0, width: 52, height: 52, borderRadius: 14, background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2B73CC' }}>
                    <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2B73CC', marginBottom: 4 }}>Visión</p>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a' }}>Referente nacional</h3>
                  </div>
                </div>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.75 }}>
                  Consolidarnos como un referente nacional en instalaciones técnicas y distribución de productos especializados, siendo sinónimo de calidad, seguridad y respaldo en cada proyecto que emprendemos.
                </p>
                <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 12 }}>
                  {['A','B','C'].map((l, i) => (
                    <div key={l} style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid #fff', background: `hsl(${215 + i * 20}, 75%, ${45 + i * 8}%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#fff', marginLeft: i > 0 ? -8 : 0 }}>
                      {l}
                    </div>
                  ))}
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginLeft: 4 }}>Equipo comprometido con el futuro</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Misión */}
          <ScrollReveal animation="right">
            <div style={{ position: 'relative', background: 'linear-gradient(135deg, #07172e, #0e2a50)', borderRadius: 24, overflow: 'hidden', height: '100%' }}>
              {/* Decorative circles */}
              <div style={{ position: 'absolute', top: -64, right: -64, width: 256, height: 256, borderRadius: '50%', background: 'rgba(96,165,250,0.08)' }} />
              <div style={{ position: 'absolute', bottom: -32, left: -32, width: 160, height: 160, borderRadius: '50%', background: 'rgba(59,130,246,0.12)' }} />
              <div style={{ position: 'relative', zIndex: 1, padding: 40 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 24 }}>
                  <div style={{ flexShrink: 0, width: 52, height: 52, borderRadius: 14, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#93c5fd' }}>
                    <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                      <path d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#93c5fd', marginBottom: 4 }}>Misión</p>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff' }}>Soluciones de excelencia</h3>
                  </div>
                </div>
                <p style={{ fontSize: '1rem', color: 'rgba(219,234,254,0.75)', lineHeight: 1.75 }}>
                  Brindar soluciones técnicas seguras y eficientes en instalaciones y suministro de productos especializados para proyectos de alto nivel, con un equipo humano capacitado y el compromiso de superar cada expectativa.
                </p>
                <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {['Seguridad', 'Eficiencia', 'Compromiso'].map((tag) => (
                    <span key={tag} style={{ padding: '5px 14px', background: 'rgba(255,255,255,0.1)', color: '#bfdbfe', fontSize: '0.78rem', fontWeight: 600, borderRadius: 999, border: '1px solid rgba(255,255,255,0.15)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
