export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container-ingasa">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Donde la calidad se une con la perfección técnica
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Soluciones integrales en instalaciones técnicas y suministro de productos certificados: tanques GLP, termotanques, tuberías y más. INGASA atiende proyectos de todo nivel en Ecuador.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.link/q0jutu" target="_blank" className="btn-primary">
              Contáctate con nosotros
            </a>
            <a href="#sobre-nosotros" className="btn-secondary">
              Más sobre nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
