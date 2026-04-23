import { useState, useEffect } from 'react';
import { IconFilled, WhatsAppPath } from './Icon';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#sobre-nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,0,0.06)' : 'none',
        transition: 'background .35s ease, box-shadow .35s ease, backdrop-filter .35s ease',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>

          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <img
              src="/logos/logo-header.png"
              alt="INGASA – Instalaciones Técnicas Ecuador"
              width={130}
              height={44}
              style={{ height: 38, width: 'auto', objectFit: 'contain', transition: 'opacity .3s' }}
            />
          </a>

          {/* Desktop nav */}
          <nav aria-label="Navegación principal" className="desk-flex" style={{ alignItems: 'center', gap: 36 }}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{
                  color: scrolled ? '#334155' : 'rgba(255,255,255,0.88)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  transition: 'color .2s',
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="desk-flex" style={{ alignItems: 'center', gap: 10 }}>
            <a
              href="tel:+593995020334"
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                color: scrolled ? '#64748b' : 'rgba(255,255,255,0.6)',
                fontSize: '0.82rem', fontWeight: 500, textDecoration: 'none',
                transition: 'color .2s',
              }}
            >
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +593 99 502 0334
            </a>
            <div style={{ width: 1, height: 20, background: scrolled ? '#e2e8f0' : 'rgba(255,255,255,0.2)' }} />
            <a
              href="https://wa.link/q0jutu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '9px 20px',
                background: scrolled ? '#2B73CC' : 'rgba(255,255,255,0.12)',
                color: '#fff',
                border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.25)',
                borderRadius: 8,
                fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
                fontFamily: 'var(--font-body)',
              }}
            >
              <IconFilled size={15}><WhatsAppPath /></IconFilled>
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mob"
            onClick={() => setOpen(!open)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'none', border: 'none', cursor: 'pointer', padding: 6,
              color: scrolled ? '#334155' : '#fff',
            }}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
              {open
                ? <><path d="M6 18L18 6" /><path d="M6 6l12 12" /></>
                : <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mob-menu ${open ? 'open' : ''}`}
        style={{ background: '#fff', borderTop: '1px solid #f1f5f9' }}
      >
        <div style={{ padding: '8px 24px 20px' }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="mob-nav-link"
              style={{
                display: 'block', padding: '12px 16px',
                color: '#334155', fontWeight: 600, fontSize: '1rem',
                textDecoration: 'none', borderRadius: 8,
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.02em',
              }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a
              href="tel:+593995020334"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '11px 20px', background: '#f8fafc',
                color: '#334155', borderRadius: 8, fontWeight: 600,
                fontSize: '0.9rem', textDecoration: 'none',
                border: '1px solid #e2e8f0',
              }}
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +593 99 502 0334
            </a>
            <a
              href="https://wa.link/q0jutu"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '13px 20px', background: '#16a34a', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              <IconFilled size={18}><WhatsAppPath /></IconFilled>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
