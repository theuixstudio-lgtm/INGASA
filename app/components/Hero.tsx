"use client";

import Image from 'next/image';
import { IconFilled, WhatsAppPath } from './Icon';

export function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

      {/* Background image — copper pipes / industrial installation */}
      <Image
        src="/copper-tube.png"
        alt="Tuberías de cobre e instalaciones técnicas INGASA"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center center' }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(108deg, rgba(7,23,46,.96) 0%, rgba(14,42,80,.88) 45%, rgba(14,42,80,.55) 80%, transparent 100%)',
        }}
      />

      {/* Blueprint grid texture */}
      <div className="bp-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* INGASA orange accent bar at top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #F97316 0%, #2B73CC 60%, transparent 100%)', zIndex: 2 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '80rem', margin: '0 auto', padding: '7rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '48rem' }}>

          {/* Badge — naranja INGASA */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(249,115,22,.18)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(249,115,22,.4)',
            color: '#fdba74',
            fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
            padding: '6px 16px', borderRadius: 999, marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F97316', display: 'block', flexShrink: 0 }} />
            Gas · Agua · Calefacción · Ecuador
          </div>

          {/* Headline display font */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.0, letterSpacing: '0.01em', marginBottom: 6, textTransform: 'uppercase' }}>
            Donde la calidad
          </h1>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900, color: '#F97316', lineHeight: 1.0, letterSpacing: '0.01em', marginBottom: 6, textTransform: 'uppercase' }}>
            se une con la
          </h1>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.0, letterSpacing: '0.01em', marginBottom: 28, textTransform: 'uppercase' }}>
            perfección técnica
          </h1>

          {/* Accent line — INGASA colors */}
          <div style={{ width: 72, height: 4, background: 'linear-gradient(90deg, #F97316, #2B73CC)', borderRadius: 2, marginBottom: 24 }} />

          {/* Subheadline */}
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 36, maxWidth: '34rem' }}>
            Instalamos sistemas de GLP, agua y calefacción con tuberías certificadas, tanques homologados y técnicos especializados. Desde Cuenca para todo Ecuador.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 52 }}>
            <a
              href="https://wa.link/q0jutu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '14px 30px',
                background: '#16a34a', color: '#fff',
                borderRadius: 10, fontFamily: 'var(--font-body)',
                fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(22,163,74,.4)',
              }}
            >
              <IconFilled size={20}><WhatsAppPath /></IconFilled>
              Solicitar asesoría gratis
            </a>
            <a
              href="#servicios"
              className="btn-ghost"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 30px',
                background: 'rgba(255,255,255,0.08)', color: '#fff',
                border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 10,
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem',
                textDecoration: 'none', backdropFilter: 'blur(4px)',
              }}
            >
              Ver servicios
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Trust stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 40px', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {[
              { n: '20+', label: 'Años de\nexperiencia' },
              { n: '500+', label: 'Proyectos\nentregados' },
              { n: '100%', label: 'Materiales\ncertificados' },
            ].map(({ n, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: '#F97316', lineHeight: 1 }}>{n}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="nudge"
        style={{ position: 'absolute', bottom: 28, left: '50%', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, color: 'rgba(255,255,255,0.3)' }}
      >
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
