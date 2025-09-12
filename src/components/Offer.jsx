const Offer = () => {
  const offerings = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "1 landing page profesional",
      detail: "Hasta 5 secciones completamente personalizadas",
      value: "$200+"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Optimizada para móviles",
      detail: "100% responsive, se ve perfecta en cualquier dispositivo",
      value: "$100+"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Código abierto en GitHub",
      detail: "Repository completo con documentación y deployment",
      value: "$150+"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Derecho a conservar el sitio",
      detail: "Aunque no pagues nada, la landing es tuya para siempre",
      value: "Priceless"
    }
  ];

  const bonuses = [
    {
      title: "Optimización SEO básica",
      description: "Meta tags, estructura semántica y performance optimizada"
    },
    {
      title: "Deploy automático",
      description: "Tu landing live en Vercel o Netlify al finalizar"
    },
    {
      title: "Guía de personalización",
      description: "Instrucciones para futuras modificaciones"
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
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-green-200 rounded-full px-6 py-3 mb-6">
            <div className="w-3 h-3 bg-green-600 rounded-full animate-pulseGlow"></div>
            <span className="text-green-700 font-semibold">Tu Inversión</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Esto es lo que recibes al{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              aceptar el reto
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Landing page desarrollada con las últimas tecnologías de Silicon Valley, 
            completamente gratis. Solo pagas hosting VPS si decides publicarla.
          </p>
        </div>

        {/* Main Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100 hover:border-primary-200 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon & Value */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {offering.icon}
                </div>
                <div className="text-right">
                  <span className="inline-block bg-gradient-to-r from-green-100 to-green-200 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Valor: {offering.value}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {offering.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {offering.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Section */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              ¡Bonus Incluidos!
            </h3>
            <p className="text-xl text-gray-600">
              Extras que añaden aún más valor a tu inversión
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <div 
                key={index}
                className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 animate-fadeInUp"
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{bonus.title}</h4>
                <p className="text-gray-600 text-sm">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-primary-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20zM0 40c11.046 0 20-8.954 20-20H0v20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
            </div>
            
            <div className="relative z-10">
              {/* Market Value */}
              <div className="mb-8">
                <p className="text-xl text-gray-300 mb-2">Valor real de mercado:</p>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-4xl md:text-5xl font-black line-through text-red-400">$500+</span>
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-2xl text-gray-300">vs</span>
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                </div>
              </div>

              {/* Your Investment */}
              <div className="mb-8">
                <p className="text-2xl text-gray-300 mb-4">Tu inversión:</p>
                <div className="text-6xl md:text-8xl font-black bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent mb-4">
                  $0
                </div>
                <p className="text-xl text-gray-300">
                  Landing page completamente gratis.{' '}
                  <span className="text-accent-400 font-semibold">Solo pagas el hosting VPS si decides publicarla.</span>
                </p>
              </div>

              {/* Risk Reversal */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <h4 className="text-2xl font-bold mb-4">🛡️ Garantía Total</h4>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Si no entrego tu landing en 24 horas, te quedas con todo el trabajo realizado 
                  <span className="text-accent-400 font-semibold"> completamente gratis.</span> 
                  Cero pérdidas, cero compromisos.
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToForm}
                className="group relative inline-flex items-center px-10 py-5 text-2xl font-black text-gray-900 bg-gradient-to-r from-accent-400 to-accent-600 rounded-2xl shadow-2xl hover:shadow-accent-500/50 transform hover:scale-105 transition-all duration-300 animate-pulseGlow"
              >
                <span className="relative z-10">Acepto el Desafío Ahora</span>
                <svg className="ml-4 w-8 h-8 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-300 to-accent-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </button>

              <p className="text-gray-400 mt-4 text-sm">
                * Solo necesitas 15 minutos de tu tiempo para proporcionar contenido básico
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-2 text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-semibold">100% Garantizado</span>
            </div>
            
            <div className="flex items-center space-x-2 text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-semibold">Entrega 24h</span>
            </div>
            
            <div className="flex items-center space-x-2 text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="font-semibold">Código Abierto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;