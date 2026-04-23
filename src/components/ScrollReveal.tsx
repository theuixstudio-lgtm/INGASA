import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  animation?: 'up' | 'left' | 'right';
  delay?: number;
}

export function ScrollReveal({ children, className = '', animation = 'up', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const base = animation === 'left' ? 'sr-l' : animation === 'right' ? 'sr-r' : 'sr';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const t = setTimeout(() => el.classList.add('in'), delay);
          io.unobserve(el);
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${base} ${className}`}>
      {children}
    </div>
  );
}
