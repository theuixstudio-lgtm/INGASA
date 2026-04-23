import { IconFilled, WhatsAppPath } from './Icon';

const services = [
  { label: 'Instalaciones de GLP', href: 'https://ingasa.com.ec/instalacion-de-glp/' },
  { label: 'Instalaciones de agua', href: 'https://ingasa.com.ec/instalacion-de-agua-caliente-y-fria/' },
  { label: 'Redes contra incendios', href: 'https://ingasa.com.ec/redes-contra-incendios/' },
  { label: 'Sistemas de calefacción', href: 'https://ingasa.com.ec/sistemas-de-calefaccion/' },
  { label: 'Mantenimiento técnico', href: 'https://ingasa.com.ec/mantenimiento-tecnico-y-estudios-de-glp/' },
  { label: 'Suministro de productos', href: 'https://ingasa.com.ec/suministro-de-productos-tecnicos/' },
];

const FBIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const IGIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const socialBtn = { width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', textDecoration: 'none', transition: 'background .2s, color .2s' } as const;

export function Footer() {
  return (
    <footer style={{ background: '#020817', color: '#94a3b8' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px 40px', padding: '64px 0' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <a href="/" style={{ display: 'inline-block', marginBottom: 16, textDecoration: 'none' }}>
              <img src="/logos/logo-header.png" alt="INGASA – Instalaciones Técnicas Ecuador" width={120} height={40} style={{ height: 38, width: 'auto', objectFit: 'contain' }} />
            </a>
            <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.75, marginBottom: 20 }}>
              Empresa ecuatoriana especializada en instalaciones técnicas y suministro de productos certificados. Más de 20 años construyendo confianza.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-btn" style={socialBtn} aria-label="Facebook"><FBIcon /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-btn" style={socialBtn} aria-label="Instagram"><IGIcon /></a>
              <a href="https://wa.link/q0jutu" target="_blank" rel="noopener noreferrer" className="icon-btn" style={socialBtn} aria-label="WhatsApp">
                <IconFilled size={16}><WhatsAppPath /></IconFilled>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Servicios</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.875rem', color: '#475569', textDecoration: 'none' }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#334155', display: 'block', flexShrink: 0 }} />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Contacto</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { href: 'tel:+593995020334', label: '+593 99 502 0334', icon: <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> },
                { href: 'mailto:ingassa1@gmail.com', label: 'ingassa1@gmail.com', icon: <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
                { href: 'https://maps.app.goo.gl/dGUXy4ztjUASEkwH6', label: 'Ricardo Darquea 3-39, Cuenca', icon: <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>, external: true },
              ].map((c) => (
                <a key={c.label} href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener noreferrer' : undefined} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.875rem', color: '#475569', textDecoration: 'none' }}>
                  <span style={{ color: '#2B73CC', marginTop: 2 }}>{c.icon}</span>
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>¿Tienes un proyecto?</h4>
            <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.7, marginBottom: 20 }}>
              Escríbenos y te asesoramos sin compromiso. Respondemos en minutos.
            </p>
            <a
              href="https://wa.link/q0jutu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '12px 20px', background: '#16a34a', color: '#fff',
                borderRadius: 10, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
              }}
            >
              <IconFilled size={17}><WhatsAppPath /></IconFilled>
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 8, fontSize: '0.78rem', color: '#334155' }}>
          <span>© 2026 INGASA. Todos los derechos reservados.</span>
          <span>Cuenca, Ecuador</span>
        </div>
      </div>
    </footer>
  );
}
