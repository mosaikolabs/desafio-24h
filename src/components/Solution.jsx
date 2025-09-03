const Solution = () => {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Entrega en 24h",
      benefit: "Velocidad récord",
      description: "Tu nueva landing estará lista en menos de un día, mientras otros tardan semanas"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: "Diseño moderno",
      benefit: "Primera impresión poderosa",
      description: "Tecnologías actuales (React, Vite, Tailwind) que impresionan desde el primer vistazo"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "100% responsive",
      benefit: "Clientes desde móvil",
      description: "Se ve perfecta en cualquier dispositivo, captando clientes 24/7"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Sin riesgo",
      benefit: "Garantía total",
      description: "Si no cumplo en 24h, te quedas con todo el trabajo completamente gratis"
    }
  ];

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-primary-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-accent-100 to-transparent rounded-full blur-3xl opacity-50"></div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full px-6 py-3 mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full animate-pulseGlow"></div>
            <span className="text-primary-700 font-semibold">La Solución</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Presentamos el{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Desafío Web 24h
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              Una landing page moderna y en tendencia, desarrollada con las últimas tecnologías 
              (React, Vite, Tailwind CSS) y lista en exactamente 24 horas.
            </p>
            <p>
              No más esperas, no más complicaciones, no más excusas. 
              <span className="font-semibold text-primary-600"> Tu presencia online profesional comienza ahora.</span>
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon Container */}
              <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-600 font-semibold mb-3">
                {feature.benefit}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Demo Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Tecnología de{' '}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Última Generación
                </span>
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>React + Vite:</strong> Rendimiento ultrarrápido</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>TailwindCSS:</strong> Diseño moderno y responsive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Optimizada SEO:</strong> Encontrable en Google</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Código abierto:</strong> Es tuya para siempre</span>
                </div>
              </div>

              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Quiero mi Landing Ahora
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Tu Landing Web</h4>
                    <p className="text-gray-600 mb-4">Construida con React + Vite</p>
                    
                    {/* Mock bars */}
                    <div className="space-y-2">
                      <div className="h-2 bg-gradient-to-r from-primary-200 to-accent-200 rounded"></div>
                      <div className="h-2 bg-gradient-to-r from-primary-300 to-accent-300 rounded w-4/5"></div>
                      <div className="h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full animate-bounceSubtle"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-500 rounded-full animate-bounceSubtle delay-500"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para el desafío más rápido del desarrollo web?
            </h3>
            <p className="text-gray-600 mb-6">
              24 horas. Una landing moderna. Cero riesgo. Resultado garantizado.
            </p>
            <button
              onClick={scrollToForm}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulseGlow"
            >
              Acepto el Desafío Web 24h
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;