import { useState, useEffect } from 'react';

const FinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        
        if (newSeconds < 0) {
          const newMinutes = prev.minutes - 1;
          if (newMinutes < 0) {
            const newHours = prev.hours - 1;
            if (newHours < 0) {
              return { days: 0, hours: 23, minutes: 59, seconds: 59 };
            }
            return { ...prev, hours: newHours, minutes: 59, seconds: 59 };
          }
          return { ...prev, minutes: newMinutes, seconds: 59 };
        }
        
        return { ...prev, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Landing page moderna en menos de 24h",
    "Tecnología de vanguardia (React + Vite + TailwindCSS)",
    "100% responsive y optimizada para móviles",
    "Código abierto completo en GitHub",
    "Sin riesgo financiero ($0 de inversión inicial)",
    "Garantía total: si no cumplo, es gratis",
    "Solo donación voluntaria si cumples",
    "Comunicación directa durante el proceso"
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>
      
      <div className="absolute top-10 left-10 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-pulseGlow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulseGlow delay-1000"></div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulseGlow"></div>
            <span className="text-accent-400 font-semibold">¡Última Oportunidad!</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6">
            Acepta el Desafío y{' '}
            <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
              Transforma
            </span>
            <br />
            tu Presencia Online en{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              24h
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Este es el momento de dar el salto. Sin riesgo, sin compromisos, 
            solo resultados profesionales que transformarán tu negocio.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Plazas limitadas: Solo{' '}
              <span className="text-accent-400">3 retos por semana</span>
            </h3>
            <p className="text-gray-300 text-lg">
              Tiempo restante para esta semana:
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {[
              { label: 'Días', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Min', value: timeLeft.minutes },
              { label: 'Seg', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base text-gray-300 font-semibold">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-accent-400 font-semibold text-lg animate-pulseGlow">
              ⚡ Solo quedan 2 plazas disponibles esta semana
            </p>
          </div>
        </div>

        {/* Benefits Checklist */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-center text-white mb-12">
              Todo esto recibes al aceptar el desafío:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white text-lg leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                ¿Listo para el cambio más rápido de tu negocio?
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                En menos tiempo del que tardas en ver una película, 
                tendrás la presencia online profesional que tu negocio merece.
              </p>
            </div>

            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center px-12 py-6 text-2xl md:text-3xl font-black text-gray-900 bg-gradient-to-r from-accent-400 to-accent-600 rounded-2xl shadow-2xl hover:shadow-accent-500/50 transform hover:scale-105 transition-all duration-300 animate-pulseGlow mb-6"
            >
              <span className="relative z-10">Quiero Mi Landing Ahora</span>
              <svg className="ml-4 w-8 h-8 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-300 to-accent-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
            </button>

            <div className="space-y-2 text-gray-300">
              <p className="text-sm">✅ Sin pagos por adelantado</p>
              <p className="text-sm">✅ Solo 15 minutos de tu tiempo</p>
              <p className="text-sm">✅ Respuesta en menos de 2 horas</p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-black text-accent-400 mb-1">24h</div>
                <div className="text-sm text-gray-300">Tiempo promedio</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-green-400 mb-1">100%</div>
                <div className="text-sm text-gray-300">Tasa de cumplimiento</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-1">15+</div>
                <div className="text-sm text-gray-300">Proyectos completados</div>
              </div>
            </div>
            
            <p className="text-gray-300 italic">
              "La decisión más inteligente que he tomado para mi negocio. 
              Resultados profesionales en tiempo récord y sin ningún riesgo."
            </p>
            
            <div className="flex items-center justify-center mt-4 space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-300 text-sm font-semibold">María G. - Diseñadora</span>
            </div>
          </div>
        </div>

        {/* Final Urgency */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 rounded-full px-6 py-3 animate-pulseGlow">
            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-red-400 font-semibold">
              ⏰ No esperes más. Cada día sin una landing profesional es una oportunidad perdida.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;