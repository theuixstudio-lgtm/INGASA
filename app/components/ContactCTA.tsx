import { ScrollReveal } from './ScrollReveal';
import { IconFilled, WhatsAppPath } from './Icon';

const PhoneIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const MailIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PinIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export function ContactCTA() {
  return (
    <section
      id="contacto"
      style={{
        position: 'relative',
        padding: '96px 0',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #07172e 0%, #0e2a50 60%, #2B73CC 100%)',
      }}
    >
      {/* Decorative shapes */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 384, height: 384, borderRadius: '50%', background: 'rgba(96,165,250,0.08)', transform: 'translate(33%, -33%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 288, height: 288, borderRadius: '50%', background: 'rgba(59,130,246,0.1)', transform: 'translate(-33%, 33%)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <ScrollReveal>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(147,197,253,0.9)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 999, marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'block', flexShrink: 0 }} />
            Atendemos en todo Ecuador
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.0, textTransform: 'uppercase', marginBottom: 8 }}>
            Tu proyecto merece
          </h2>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 900, color: '#F97316', lineHeight: 1.0, textTransform: 'uppercase', marginBottom: 24 }}>
            lo mejor
          </h2>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'rgba(219,234,254,0.7)', lineHeight: 1.8, marginBottom: 36, maxWidth: '30rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Cuéntanos qué necesitas y te damos una propuesta técnica concreta, sin vueltas y sin compromiso. Respondemos hoy.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginBottom: 48 }}>
            <a
              href="https://wa.link/q0jutu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '15px 32px', background: '#16a34a', color: '#fff',
                borderRadius: 10, fontWeight: 700, fontSize: '1rem',
                textDecoration: 'none', boxShadow: '0 4px 18px rgba(22,163,74,.4)',
              }}
            >
              <IconFilled size={20}><WhatsAppPath /></IconFilled>
              Escribir por WhatsApp
            </a>
            <a
              href="https://ingasa.com.ec/contacto/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '15px 32px',
                background: 'transparent', color: '#fff',
                border: '2px solid rgba(255,255,255,0.45)', borderRadius: 10,
                fontWeight: 600, fontSize: '1rem', textDecoration: 'none',
              }}
            >
              Formulario de contacto
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Contact info */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 32px' }}>
            {[
              { href: 'tel:+593995020334', icon: <PhoneIcon />, label: '+593 99 502 0334' },
              { href: 'mailto:ingassa1@gmail.com', icon: <MailIcon />, label: 'ingassa1@gmail.com' },
              { href: 'https://maps.app.goo.gl/dGUXy4ztjUASEkwH6', icon: <PinIcon />, label: 'Cuenca, Ecuador', external: true },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(147,197,253,0.6)', fontSize: '0.875rem', textDecoration: 'none' }}
              >
                <span style={{ color: 'rgba(96,165,250,0.7)' }}>{c.icon}</span>
                {c.label}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
