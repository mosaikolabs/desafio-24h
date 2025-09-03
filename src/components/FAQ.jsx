import { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "¿Qué pasa si no me gusta el diseño?",
      answer: "Te quedas con el código y la landing page completa sin pagar nada. Tienes acceso total al repository en GitHub y puedes modificarla como quieras o contratar a otro desarrollador para personalizarla. No hay compromiso alguno de tu parte."
    },
    {
      question: "¿Qué incluye exactamente la landing page?",
      answer: "Incluye una landing page completa de hasta 5 secciones: Hero, Problema, Solución, Testimonios/Portfolio, Oferta, Garantía, FAQ y CTA final. Todo 100% responsive, optimizada para móviles, con código limpio en React + Vite + TailwindCSS, y lista para recibir tráfico desde el primer minuto."
    },
    {
      question: "¿Qué tengo que proporcionar yo?",
      answer: "Solo necesitas máximo 15 minutos para darme: tu logo o nombre de empresa, los textos principales que quieres mostrar, y 2-3 imágenes representativas de tu negocio. Si no tienes imágenes, puedo sugerir alternativas gratuitas de alta calidad. Es súper simple."
    },
    {
      question: "¿Realmente no cuesta nada?",
      answer: "Correcto. Tu inversión inicial es $0. Si no cumplo en 24 horas, te quedas con todo gratis. Si sí cumplo, solo te pido un testimonio honesto y una donación voluntaria del monto que consideres justo. No hay contratos, no hay pagos obligatorios, no hay letra pequeña."
    },
    {
      question: "¿Cómo sé que cumplirás en 24 horas?",
      answer: "Porque mi reputación profesional depende de ello. Cada landing que no entrego a tiempo es un testimonio negativo que me costaría años reparar. Además, el riesgo es 100% mío: si no cumplo, trabajo gratis. Esta estructura me incentiva a ser extremadamente puntual y profesional."
    },
    {
      question: "¿Qué tecnologías usas exactamente?",
      answer: "React como framework principal, Vite para un desarrollo ultra-rápido, TailwindCSS para estilos modernos y responsive, y Vercel/Netlify para hosting automático. Son tecnologías de vanguardia que garantizan performance, escalabilidad y mantenibilidad a largo plazo."
    },
    {
      question: "¿Puedo modificar la landing después?",
      answer: "¡Por supuesto! El código es 100% tuyo. Recibes acceso completo al repository en GitHub con documentación clara. Puedes modificarla tú mismo si sabes programar, o contratar a cualquier desarrollador. No hay dependencias conmigo una vez entregada."
    },
    {
      question: "¿Qué pasa si necesito más de 5 secciones?",
      answer: "Las 5 secciones incluidas cubren el 95% de necesidades de cualquier landing efectiva. Si necesitas algo específico adicional, podemos discutirlo sin costo durante las primeras 24 horas. Mi objetivo es que tengas exactamente lo que necesitas para convertir visitantes en clientes."
    },
    {
      question: "¿Cómo funciona el proceso de trabajo?",
      answer: "1) Llenas el formulario con tu información básica. 2) Te contacto en menos de 2 horas para confirmar detalles. 3) Comienzo el desarrollo inmediatamente. 4) Te envío actualizaciones cada 6-8 horas. 5) Entrego la landing completa en menos de 24h. Simple, directo, sin sorpresas."
    },
    {
      question: "¿Y si tengo una emergencia o necesito cambios urgentes?",
      answer: "Durante las primeras 24 horas tengo comunicación directa contigo. Cambios menores se pueden hacer sobre la marcha. Si hay cambios importantes que requieren más tiempo, lo discutimos abiertamente y ajustamos el plan sin penalizaciones para ti."
    }
  ];

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-white relative">
      {/* Background Decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full px-6 py-3 mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full animate-pulseGlow"></div>
            <span className="text-primary-700 font-semibold">Preguntas Frecuentes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Resolvamos tus{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Dudas
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Las preguntas más comunes sobre el Desafío Web 24h. 
            Si no encuentras tu respuesta aquí, contáctame directamente.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:bg-gray-100 transition-colors duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset rounded-2xl"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-8">
                    {item.question}
                  </h3>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${openItems.includes(index) ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                ¿Tienes alguna otra pregunta?
              </h3>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Si hay algo específico sobre tu proyecto o el proceso que quieres saber, 
                no dudes en contactarme. Respondo todas las consultas en menos de 2 horas.
              </p>

              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:items-center md:justify-center">
                <button
                  onClick={scrollToForm}
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Hacer Mi Consulta</span>
                  <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">Respuesta en menos de 2h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <div className="text-4xl font-black text-primary-600 mb-2">24h</div>
            <div className="text-gray-600 font-semibold">Tiempo máximo de entrega</div>
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            <div className="text-4xl font-black text-accent-600 mb-2">$0</div>
            <div className="text-gray-600 font-semibold">Inversión inicial requerida</div>
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: '600ms' }}>
            <div className="text-4xl font-black text-green-600 mb-2">100%</div>
            <div className="text-gray-600 font-semibold">Garantía de satisfacción</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;