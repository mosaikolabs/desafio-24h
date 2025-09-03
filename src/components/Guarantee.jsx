const Guarantee = () => {
  const guaranteePoints = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Si no cumplo en 24h",
      description: "Te quedas con toda la landing page realizada hasta ese momento",
      benefit: "Sin pagar absolutamente nada"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Si sí cumplo en 24h",
      description: "Solo te pido un testimonio honesto de tu experiencia",
      benefit: "Y una donación voluntaria"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Tu código es tuyo",
      description: "Repository completo en GitHub con acceso total y para siempre",
      benefit: "Pase lo que pase"
    }
  ];

  const riskComparison = [
    {
      title: "Con otros desarrolladores",
      risks: [
        "Pago por adelantado",
        "Sin garantía de tiempo",
        "Revisiones limitadas", 
        "Costos adicionales",
        "Comunicación lenta"
      ],
      color: "red"
    },
    {
      title: "Con el Desafío 24h",
      risks: [
        "$0 de inversión inicial",
        "Garantía de 24 horas",
        "Código abierto incluido",
        "Solo donas si funciona",
        "Comunicación directa"
      ],
      color: "green"
    }
  ];

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 mb-6 shadow-lg">
            <div className="w-3 h-3 bg-green-600 rounded-full animate-pulseGlow"></div>
            <span className="text-green-700 font-semibold">Garantía Total</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Cero Riesgos,{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Cero Pérdidas
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Esta es la única propuesta en el mercado que te permite obtener una landing page profesional 
            <span className="font-semibold text-green-600"> sin riesgo financiero alguno.</span>
          </p>
        </div>

        {/* Main Guarantee Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {guaranteePoints.map((point, index) => (
            <div 
              key={index}
              className="group text-center animate-fadeInUp"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                {point.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {point.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                {point.description}
              </p>
              
              <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                {point.benefit}
              </div>
            </div>
          ))}
        </div>

        {/* Risk Comparison */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Compara los{' '}
              <span className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
                Riesgos
              </span>
            </h3>
            <p className="text-xl text-gray-600">
              ¿Con quién preferirías trabajar?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {riskComparison.map((comparison, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg ${comparison.color === 'green' ? 'ring-2 ring-green-200 bg-gradient-to-br from-green-50 to-white' : ''} animate-fadeInUp`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {comparison.color === 'green' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      ¡RECOMENDADO!
                    </div>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 ${comparison.color === 'red' ? 'bg-red-600' : 'bg-green-600'}`}>
                  {comparison.color === 'red' ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                </div>

                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  {comparison.title}
                </h4>

                <ul className="space-y-3">
                  {comparison.risks.map((risk, riskIndex) => (
                    <li key={riskIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${comparison.color === 'red' ? 'bg-red-500' : 'bg-green-500'}`}></div>
                      <span className="text-gray-700 text-lg">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Final Guarantee Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20zM0 40c11.046 0 20-8.954 20-20H0v20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
            </div>
            
            <div className="relative z-10">
              {/* Shield Icon */}
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h3 className="text-3xl md:text-4xl font-black mb-6">
                Mi Compromiso Personal
              </h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <p className="text-xl leading-relaxed">
                  "Si no entrego tu landing page moderna y funcional en exactamente 24 horas, 
                  no solo te quedas con todo el trabajo realizado gratis, sino que también te 
                  compensaré con <span className="font-bold text-yellow-300">una consulta gratuita</span> de 
                  1 hora sobre estrategia digital para tu negocio."
                </p>
              </div>

              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-black">24h</div>
                  <div className="text-sm opacity-90">Plazo máximo</div>
                </div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="text-center">
                  <div className="text-4xl font-black">$0</div>
                  <div className="text-sm opacity-90">Riesgo para ti</div>
                </div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="text-center">
                  <div className="text-4xl font-black">100%</div>
                  <div className="text-sm opacity-90">Tuyo siempre</div>
                </div>
              </div>

              <button
                onClick={scrollToForm}
                className="group relative inline-flex items-center px-10 py-5 text-xl font-black text-green-600 bg-white rounded-2xl shadow-2xl hover:shadow-white/30 transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Acepto esta Garantía</span>
                <svg className="ml-4 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <p className="text-green-200 mt-4 text-sm">
                * Esta garantía es válida y verificable. Sin letra pequeña.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 bg-white rounded-xl px-4 py-2 shadow-md">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">Garantía Verificada</span>
            </div>

            <div className="flex items-center space-x-2 bg-white rounded-xl px-4 py-2 shadow-md">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">100% Seguro</span>
            </div>

            <div className="flex items-center space-x-2 bg-white rounded-xl px-4 py-2 shadow-md">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">Entrega Rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;