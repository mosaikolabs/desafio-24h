import { useState } from 'react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(0); // Keep the first item open by default

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "¿Qué pasa si no me gusta después del primer mes?",
      answer: "Puedes cancelar tu plan de hosting en cualquier momento, sin penalizaciones. La landing page que creamos para ti sigue siendo tuya para siempre. Te entregamos todo el código fuente para que puedas alojarla donde quieras."
    },
    {
      question: "¿Puedo cambiar de plan cuando quiera?",
      answer: "¡Por supuesto! Puedes subir o bajar de plan según tus necesidades. Si tu negocio crece y necesitas más autonomía, puedes pasar al plan Autonomía Plus. Si quieres empezar a revender, el plan Partner es para ti. El cambio se aplica en tu siguiente ciclo de facturación."
    },
    {
      question: "¿El código de la landing es realmente mío?",
      answer: "Sí, al 100%. Desde el momento en que te la entregamos, tienes la propiedad total del código. Te damos acceso completo al repositorio para que puedas hacer lo que quieras con él. No hay dependencias ni ataduras."
    },
    {
      question: "¿Cómo funciona el programa de afiliados?",
      answer: "Es simple: al contratar el plan Expansión Partner, obtienes un enlace de afiliado único. Por cada cliente que contrate un plan de hosting a través de tu enlace, recibes una comisión recurrente del 50% mientras ese cliente permanezca activo. Te proporcionamos un dashboard para seguir tus métricas en tiempo real."
    },
    {
      question: "¿Qué incluye el soporte técnico?",
      answer: "Nuestro soporte técnico cubre cualquier problema relacionado con el hosting: caídas del servidor, problemas de rendimiento, backups, etc. En el plan Autonomía Plus, también te ayudamos con dudas sobre cómo usar el dashboard de edición. En el plan Partner, tienes soporte prioritario y asesoría estratégica."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Preguntas {' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro servicio integrado de desarrollo y hosting.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary-300">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-lg font-bold text-gray-800 pr-4">{item.question}</h3>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${openItem === index ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${openItem === index ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === index ? 'max-h-screen' : 'max-h-0'}`}>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;