export function Differences() {
  const differences = [
    { label: 'Cumplimiento Normativo', percentage: 100 },
    { label: 'Calidad del material', percentage: 100 },
    { label: 'Precisión técnica', percentage: 100 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-ingasa">
        <div className="mb-16">
          <h2 className="section-title">Lo que nos diferencia</h2>
          <p className="section-subtitle">
            En INGASA combinamos conocimiento técnico, materiales certificados y más de dos décadas de experiencia para brindar soluciones seguras, eficientes y adaptadas a las necesidades de cada obra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differences.map((diff, index) => (
            <div key={index}>
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${diff.percentage}%` }}
                  ></div>
                </div>
              </div>
              <p className="font-semibold text-gray-900">{diff.label}</p>
              <p className="text-blue-600 font-bold">{diff.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
