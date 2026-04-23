import { useEffect, useRef, useState } from 'react';

function useCountUp(end: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = Date.now();
          const tick = () => {
            const p = Math.min((Date.now() - t0) / duration, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return { count, ref };
}

const stats = [
  {
    end: 20, suffix: '+', label: 'Años de experiencia',
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    end: 500, suffix: '+', label: 'Proyectos completados',
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    end: 7000, suffix: '+', label: 'Clientes satisfechos',
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    end: 100, suffix: '%', label: 'Materiales certificados',
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

function StatItem({ end, suffix, label, icon }: { end: number; suffix: string; label: string; icon: React.ReactNode }) {
  const { count, ref } = useCountUp(end);
  return (
    <div
      ref={ref}
      className="stat-item"
      style={{ textAlign: 'center', padding: '40px 32px', flex: 1, minWidth: 160 }}
    >
      <div
        style={{
          width: 56, height: 56, borderRadius: 16, background: 'rgba(96,165,250,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#93c5fd', margin: '0 auto 16px',
        }}
      >
        {icon}
      </div>
      <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: 8, fontVariantNumeric: 'tabular-nums' }}>
        {count}<span style={{ color: '#93c5fd' }}>{suffix}</span>
      </div>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(147,197,253,0.7)' }}>
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #07172e 0%, #0e2a50 100%)', padding: '8px 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {stats.map((s) => <StatItem key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}
