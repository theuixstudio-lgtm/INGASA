import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-ingasa">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://ingasa.com.ec/instalacion-de-glp/"
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  Instalaciones de GLP
                </Link>
              </li>
              <li>
                <Link
                  href="https://ingasa.com.ec/instalacion-de-agua-caliente-y-fria/"
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  Instalaciones de agua
                </Link>
              </li>
              <li>
                <Link
                  href="https://ingasa.com.ec/redes-contra-incendios/"
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  Redes contra incendios
                </Link>
              </li>
              <li>
                <Link
                  href="https://ingasa.com.ec/sistemas-de-calefaccion/"
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  Sistemas de calefacción
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Información</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+593995020334" className="hover:text-blue-400 transition">
                  +593 99 502 0334
                </a>
              </li>
              <li>
                <a href="mailto:ingassa1@gmail.com" className="hover:text-blue-400 transition">
                  ingassa1@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/dGUXy4ztjUASEkwH6"
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  Ricardo Darquea 3-39. Cuenca, Ecuador
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>INGASA 2025 © Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
