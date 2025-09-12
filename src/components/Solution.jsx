const Solution = () => {

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solution" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-transparent rounded-full blur-3xl opacity-50 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent-100 to-transparent rounded-full blur-3xl opacity-50 translate-x-1/2"></div>

      <div className="container-max relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Contenido */}
          <div className="text-left">
            <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-5 py-2 mb-6">
              <span className="text-primary-700 font-semibold">Nuestra Solución</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              La Única Plataforma
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"> Todo-en-Uno</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Combinamos un desarrollo ultra-rápido con un hosting que escala contigo y te damos las herramientas para que gestiones tu negocio sin depender de nadie.
            </p>

            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Landing profesional en 24h</h4>
                  <p className="text-gray-600">(No en 2-4 semanas como la competencia).</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Hosting que se adapta a tu tráfico</h4>
                  <p className="text-gray-600">Escalado automático para que nunca pierdas un cliente.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Dashboard visual para editar</h4>
                  <p className="text-gray-600">Cambia textos e imágenes tú mismo, sin programar.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Herramientas de monetización</h4>
                  <p className="text-gray-600">Programa de afiliados y más, incluido en nuestros planes.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Columna Visual */}
          <div className="relative flex items-center justify-center mt-10 lg:mt-0">
            <div className="absolute w-full h-full bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-3xl opacity-50 animate-pulseGlow"></div>
            <div className="relative bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-md w-full">
              <h4 className="text-center text-2xl font-bold text-gray-800 mb-2">Desarrollo Express</h4>
              <p className="text-center text-gray-600 mb-6">+ Hosting Inteligente</p>
              
              <div className="bg-gray-800 rounded-xl p-4 text-left font-mono text-sm text-green-400">
                <p><span className="text-blue-400">const</span> <span className="text-yellow-300">paquete</span> = &#123;</p>
                <p className="pl-4">landing_page: <span className="text-orange-400">'Lista en 24h'</span>,</p>
                <p className="pl-4">hosting: <span className="text-orange-400">'Auto-escalable'</span>,</p>
                <p className="pl-4">edicion: <span className="text-orange-400">'Dashboard visual'</span>,</p>
                <p className="pl-4">soporte: <span className="text-orange-400">'Prioritario'</span></p>
                <p>&#125;;</p>
              </div>

              <button 
                onClick={scrollToForm}
                className="mt-8 w-full text-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Ver Planes
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;