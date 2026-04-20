export function Stats() {
  const stats = [
    { label: 'Años de Experiencia', value: '20+' },
    { label: 'Proyectos Completados', value: '500+' },
    { label: 'Clientes Satisfechos', value: '100+' }
  ];

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container-ingasa">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
