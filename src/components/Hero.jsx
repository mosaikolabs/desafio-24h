import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>
      
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl animate-pulseGlow"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulseGlow delay-1000"></div>

      <div className="container-max relative z-10 py-12">
        <div className="text-center">
          {/* Main Headline */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              De Cero a Online en <span className="text-accent-500">24 Horas</span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl">Con el Único Hosting que Crece Contigo</span>
            </h1>
          </div>

          {/* Sub-headline */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              No más esperas eternas de desarrolladores.<br/>
              No más hostings que te limitan.<br/>
              Solo resultados profesionales desde el día uno.
            </p>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10">Tu Landing Lista Mañana + Hosting desde $20/mes</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Badges */}
          <div className={`transition-all duration-1000 delay-700 mt-8 flex justify-center items-center space-x-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-green-500/20 text-green-300 text-sm font-semibold py-2 px-4 rounded-full shadow-md">
              Entrega garantizada en 24h
            </div>
            <div className="bg-blue-500/20 text-blue-300 text-sm font-semibold py-2 px-4 rounded-full shadow-md">
              15+ proyectos completados
            </div>
          </div>

          {/* Visual Mockup */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mt-16 relative">
              {/* Laptop Mockup */}
              <div className="relative mx-auto max-w-5xl">
                <div className="relative bg-gray-800 rounded-t-2xl p-3">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg h-64 md:h-80 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Tu Nueva Landing</h3>
                      <p className="text-gray-600">Moderna • Rápida • Efectiva</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700 h-4 rounded-b-2xl relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-gray-600 rounded-t"></div>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute -right-8 md:-right-16 top-1/2 transform -translate-y-1/2 w-24 md:w-32">
                <div className="bg-gray-800 rounded-3xl p-2">
                  <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl h-40 md:h-52 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-600 font-semibold">100% Mobile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mt-16 animate-bounce">
              <svg className="w-8 h-8 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;