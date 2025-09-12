const FinalCTA = () => {

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="final-cta" className="section-padding bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-900 to-black opacity-80"></div>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

      <div className="container-max relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          ¿Listo para Dominar Tu Presencia Online?
        </h2>
        
        <p className="text-xl text-red-400 font-semibold mb-8 animate-pulse">
          Solo 3 desarrollos express disponibles esta semana.
        </p>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8">
          <ul className="space-y-4 text-left">
            <li className="flex items-center text-lg">
              <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 flex-shrink-0">✓</span>
              <span className="text-gray-200">🚀 Tu landing lista en <strong>24h</strong></span>
            </li>
            <li className="flex items-center text-lg">
              <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 flex-shrink-0">✓</span>
              <span className="text-gray-200">💎 Hosting que <strong>crece contigo</strong></span>
            </li>
            <li className="flex items-center text-lg">
              <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 flex-shrink-0">✓</span>
              <span className="text-gray-200">🛡️ <strong>Doble garantía</strong> incluida</span>
            </li>
          </ul>
        </div>

        <button
          onClick={scrollToForm}
          className="group relative inline-flex items-center px-10 py-5 text-xl font-black text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl shadow-2xl hover:shadow-accent-500/40 transform hover:scale-105 transition-all duration-300"
        >
          Comenzar Mi Transformación → $20/mes
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;