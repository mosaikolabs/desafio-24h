const Testimonials = () => {
  const testimonials = [
    {
      name: "Laura Gómez",
      company: "CEO de InovaTech",
      quote: "De 0 a 300% más leads en el primer mes. La velocidad y la calidad del servicio son de otro nivel. El ROI más rápido que he tenido en mi negocio.",
      avatarInitial: "LG",
    },
    {
      name: "Marcos Díaz",
      company: "Fundador de ScaleUp",
      quote: "Por fin tengo autonomía total sobre mi web. El dashboard es súper intuitivo y el soporte realmente resuelve los problemas, no solo te manda tutoriales.",
      avatarInitial: "MD",
    },
    {
      name: "Sofía Chen",
      company: "E-commerce Manager",
      quote: "Tener la landing lista en 24 horas nos permitió lanzar la campaña a tiempo y capturar el pico de demanda. Imprescindible para un mercado que se mueve rápido.",
      avatarInitial: "SC",
    },
    {
      name: "Javier Roca",
      company: "Agencia de Marketing Digital",
      quote: "Implementamos esto para un cliente y los resultados fueron tan buenos que ahora lo ofrecemos como parte de nuestro paquete de onboarding. El programa de afiliados es un plus increíble.",
      avatarInitial: "JR",
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-900 text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            No Confíes en Nuestra Palabra, {' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Confía en Sus Resultados
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Emprendedores, agencias y profesionales ya están viendo el impacto de tener una presencia online rápida y escalable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transform transition-all duration-300 hover:bg-gray-800 hover:border-primary-500/50">
              <p className="text-lg text-gray-300 italic mb-6 relative">
                <span className="absolute -top-2 -left-4 text-6xl text-primary-500/30 font-serif">“</span>
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center font-bold text-white mr-4">
                  {testimonial.avatarInitial}
                </div>
                <div>
                  <p className="font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;