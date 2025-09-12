const Guarantee = () => {

  const guarantees = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Garantía 24h: Tu Landing o tu Dinero",
      description: "Si no entregamos tu landing page completamente funcional en 24 horas, te devolvemos el 100% y te quedas con el primer mes de hosting totalmente gratis."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M4 19v-5h5M20 4v5h-5M20 19v-5h-5" />
        </svg>
      ),
      title: "Garantía 30 Días: Satisfacción Total",
      description: "Prueba nuestro servicio durante 30 días. Si no estás convencido, puedes cancelar en cualquier momento sin penalizaciones ni preguntas complicadas."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Garantía Código Abierto: Tu Activo Digital",
      description: "El código de tu landing page es 100% tuyo desde el primer día. Sin ataduras, sin dependencias. Un activo real para tu negocio."
    }
  ];

  return (
    <section className="section-padding bg-gray-50 relative">
      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Doble Garantía: {' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Tiempo + Satisfacción
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Eliminamos todo el riesgo para que puedas tomar la mejor decisión para tu negocio con total tranquilidad.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                {guarantee.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {guarantee.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantee;