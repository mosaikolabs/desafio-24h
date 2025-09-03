const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      company: "Estudio de Diseño MG",
      text: "En 24 horas tenía una landing que me ha generado más clientes que mi antigua web en 6 meses. Increíble velocidad y calidad.",
      avatar: "MG",
      rating: 5,
      result: "+300% leads"
    },
    {
      name: "Carlos Ruiz",
      company: "Consultor Freelance",
      text: "Pensé que era imposible. Landing moderna, responsive y código limpio en un día. Ahora tengo la presencia online que necesitaba.",
      avatar: "CR",
      rating: 5,
      result: "Landing en 23h"
    },
    {
      name: "Ana Martínez",
      company: "Coaching Personal",
      text: "La mejor inversión de mi negocio. Pasé de no tener web a una landing que convierte. El proceso fue súper fácil y rápido.",
      avatar: "AM",
      rating: 5,
      result: "ROI 500%"
    },
    {
      name: "Diego López",
      company: "Agencia de Marketing",
      text: "Como profesional del marketing, puedo decir que esta landing cumple todos los estándares. Velocidad, diseño y conversión perfectos.",
      avatar: "DL",
      rating: 5,
      result: "Conversión 8.5%"
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Moderno",
      category: "Tienda Online",
      tech: "React + Stripe",
      image: "🛍️",
      link: "#"
    },
    {
      title: "Landing SaaS",
      category: "Software",
      tech: "Next.js + Tailwind",
      image: "💻",
      link: "#"
    },
    {
      title: "Portfolio Creativo",
      category: "Personal",
      tech: "React + Framer Motion",
      image: "🎨",
      link: "#"
    },
    {
      title: "App de Servicios",
      category: "Marketplace",
      tech: "Vite + React",
      image: "🏠",
      link: "#"
    },
    {
      title: "Blog Corporativo",
      category: "Empresa",
      tech: "Gatsby + CMS",
      image: "📝",
      link: "#"
    },
    {
      title: "Landing de Curso",
      category: "Educación",
      tech: "React + PayPal",
      image: "🎓",
      link: "#"
    }
  ];

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gray-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="container-max relative z-10">
        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 mb-6 shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-pulseGlow"></div>
              <span className="text-green-700 font-semibold">Testimonios Reales</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Lo que otros dicen{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                de mí
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Resultados reales de clientes que aceptaron el desafío y transformaron 
              su presencia online en 24 horas.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <div className="ml-4 bg-gradient-to-r from-green-100 to-green-200 px-3 py-1 rounded-full">
                    <span className="text-green-700 font-semibold text-sm">{testimonial.result}</span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 mb-6 shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full animate-pulseGlow"></div>
              <span className="text-primary-700 font-semibold">Portfolio</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Proyectos que{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Inspiran
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Una muestra de landings modernas desarrolladas en tiempo récord. 
              Todas disponibles en GitHub para tu revisión.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
                  {item.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                    <a 
                      href={item.link}
                      className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">Tech Stack:</span> {item.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center">
            <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-900 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <h3 className="text-2xl font-bold text-gray-900">Código Abierto en GitHub</h3>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                Todos los proyectos están disponibles en GitHub. 
                Código limpio, documentado y listo para usar.
              </p>
              <button
                onClick={scrollToForm}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Ver Mi Próximo Proyecto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;