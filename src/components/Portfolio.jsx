const Portfolio = () => {
  const projects = [
    {
      title: "Sophie Referrals Tours",
      description: "Sistema de Comisiones para Agencias de Viajes",
      image: "/images/Screenshot 2025-10-06 at 14-36-47 Sophie Referrals Tours - Sistema de Comisiones para Agencias de Viajes.png",
      category: "Sistema Web"
    },
    {
      title: "SEO para Joyerías",
      description: "Landing Page de Servicios SEO Especializada",
      image: "/images/Screenshot 2025-10-06 at 14-36-59 SEO para Joyerías Aumente sus Ventas en Línea SEO para Joyerías.png",
      category: "Landing Page"
    },
    {
      title: "Jor-Ge Barber",
      description: "Barbería Premium a Domicilio",
      image: "/images/Screenshot 2025-10-06 at 14-37-08 Jor-Ge Barber Barbería Premium a Domicilio.png",
      category: "Sitio Web"
    },
    {
      title: "MotoSkills35",
      description: "Curso Digital de Mecánica de Motos",
      image: "/images/Screenshot 2025-10-06 at 14-37-16 MotoSkills35 - Aprende a Reparar tu Moto en 60 Días Curso Digital de Mecánica.png",
      category: "Plataforma Educativa"
    },
    {
      title: "Aplicación React",
      description: "Dashboard Interactivo Moderno",
      image: "/images/Screenshot 2025-10-06 at 14-37-26 Vite React.png",
      category: "Aplicación Web"
    },
    {
      title: "Sistema de Gestión",
      description: "Interface de Usuario Avanzada",
      image: "/images/Screenshot 2025-10-06 at 14-37-35 Vite React.png",
      category: "Sistema Web"
    },
    {
      title: "Hostel PMS",
      description: "Sistema de Gestión para Hostales",
      image: "/images/Screenshot 2025-10-06 at 14-39-36 Hostel PMS - Sistema de Gestión para Hostales.png",
      category: "Sistema de Gestión"
    },
    {
      title: "Casa Almanik",
      description: "Coliving y Ambiente Relajado para Trabajo",
      image: "/images/Screenshot 2025-10-06 at 14-45-49 Almanik Viajero Hostel Medellín - Tu Hogar Lejos de Casa.png",
      category: "Sitio Web"
    },
    {
      title: "Almanik Viajero",
      description: "Ambiente Festivo y Epicentro de la Rumba",
      image: "/images/Screenshot 2025-10-06 at 14-46-04 Almanik Viajero Hostel Medellín - Tu Hogar Lejos de Casa.png",
      category: "Sitio Web"
    },
    {
      title: "Choco Aventuras",
      description: "Alquiler de Cuadriciclos y Aventuras",
      image: "/images/Screenshot 2025-10-06 at 14-48-19 Choco Aventuras - Alquiler de Cuadriciclos.png",
      category: "Sitio Web"
    },
    {
      title: "Founder Pro",
      description: "Startup Success Platform",
      image: "/images/Screenshot 2025-10-06 at 14-59-54 Founder Pro - Startup Success Platform.png",
      category: "Plataforma SaaS"
    },
    {
      title: "GrantInsight",
      description: "Dashboard de Oportunidades de Financiación",
      image: "/images/Screenshot 2025-10-06 at 15-00-07 GrantInsight - Dashboard de Oportunidades de Financiación.png",
      category: "Dashboard"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Trabajos Realizados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre algunos de los proyectos exitosos que hemos desarrollado para nuestros clientes.
            Cada sitio web está diseñado para generar resultados reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-contain bg-white"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            ¿Listo para tener un sitio web como estos?
          </p>
          <a
            href="#contacto"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Solicitar Mi Sitio Web
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio