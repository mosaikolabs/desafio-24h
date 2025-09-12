const Problem = () => {
  const problems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Tu competencia ya está online mientras tú sigues esperando",
      description: "Desarrolladores que prometen 2 semanas y entregan en 2 meses."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      ),
      title: "Hostings que te limitan cuando más los necesitas",
      description: "Planes rígidos que no se adaptan a picos de tráfico o a tu crecimiento."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 016-6h4a6 6 0 016 6z" />
        </svg>
      ),
      title: "Depender de programadores para cada cambio",
      description: "Costos extra y demoras por modificaciones que deberían ser simples."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Perder oportunidades cada día sin presencia online",
      description: "Mientras decides o esperas, tus competidores están captando a tus clientes."
    }
  ];

  return (
    <section className="section-padding bg-gray-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20zM0 40c11.046 0 20-8.954 20-20H0v20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            ¿Te Suena {' '}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Familiar?
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Si tu negocio sufre por alguna de estas razones, estás en el lugar correcto. 
            Existe una <span className="font-semibold text-primary-600">solución más inteligente</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-red-100 to-red-200 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {problem.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;