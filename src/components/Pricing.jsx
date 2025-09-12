import { useState, useEffect } from 'react';

const CheckIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const Pricing = () => {
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

  const plans = [
    {
      name: "Presencia Esencial",
      price: "20",
      perfectFor: "Profesionales que quieren estar online rápidamente",
      features: [
        "Landing profesional lista en 24h",
        "Hosting optimizado + dominio incluido",
        "SSL y backups automáticos",
        "1 revisión técnica mensual",
        "Soporte por email"
      ],
      buttonText: "Empezar con Esencial",
      popular: false,
    },
    {
      name: "Autonomía Plus",
      price: "30",
      perfectFor: "Emprendedores que quieren control total",
      features: [
        "Todo lo del plan Esencial",
        "Dashboard interactivo para editar tu mismo",
        "Chat de soporte técnico incluido",
        "Analytics avanzados",
        "Integraciones con herramientas populares"
      ],
      buttonText: "Quiero Autonomía Plus",
      popular: true,
    },
    {
      name: "Expansión Partner",
      price: "50",
      perfectFor: "Agencias y revendedores",
      features: [
        "Todo lo del plan Plus",
        "Programa de afiliados (50% comisión)",
        "Dashboard con métricas de promoción",
        "Soporte prioritario + asesoría estratégica",
        "White-label disponible"
      ],
      buttonText: "Convertirme en Partner",
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-max relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Elige Tu Nivel de {' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Autonomía
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Todos nuestros planes incluyen el desarrollo de tu landing en 24 horas. La diferencia está en el control que quieres tener después.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-3xl p-8 border transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${ 
                plan.popular 
                  ? 'bg-white shadow-xl border-primary-300' 
                  : 'bg-white shadow-lg border-gray-200' 
              }`}>
              
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Plan Estrella
                  </div>
                </div>
              )}

              <div className="flex-grow">
                <h3 className="text-2xl font-black text-gray-900 text-center mb-2">{plan.name}</h3>
                
                <div className="text-center mb-6">
                  <span className="text-5xl font-black text-gray-900">${plan.price}</span>
                  <span className="text-lg text-gray-500"> USD/mes</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckIcon className={`w-6 h-6 text-green-500 flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <button
                  onClick={scrollToForm}
                  className={`w-full py-4 px-6 rounded-xl text-lg font-bold transition-all duration-300 ${ 
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gray-800 text-white hover:bg-gray-900'
                  }`}>
                  {plan.buttonText}
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">Perfecto para: <span className="font-semibold">{plan.perfectFor}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;