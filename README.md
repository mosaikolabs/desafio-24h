# 🚀 Desafío Web 24h - Landing Page

Una landing page moderna y persuasiva construida con React, Vite y TailwindCSS que promociona el servicio "Desafío Web 24h" - desarrollo web rápido y sin riesgo.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz atractiva con gradientes, animaciones y efectos visuales
- **📱 100% Responsive**: Optimizada para todos los dispositivos y tamaños de pantalla
- **⚡ Performance**: Construida con Vite para carga ultrarrápida
- **🎯 Conversión**: Estructura persuasiva de 8 secciones optimizada para conversión
- **🎭 Animaciones**: Efectos visuales sutiles que mejoran la experiencia de usuario
- **🎨 Sistema de Diseño**: Paleta de colores consistente y tipografía profesional

## 🏗️ Estructura de Secciones

1. **Hero** - Promesa fuerte y CTA principal
2. **Problema** - Identificación de pain points del usuario
3. **Solución** - Presentación del "Desafío Web 24h"
4. **Testimonios & Portfolio** - Prueba social y credibilidad
5. **Oferta** - Detalles de lo que recibe el cliente
6. **Garantía** - Eliminación de riesgos y objeciones
7. **FAQ** - Respuestas a preguntas frecuentes
8. **CTA Final** - Llamada final con urgencia y contador
9. **Formulario** - Captura de leads integrada

## 🛠️ Stack Tecnológico

- **React 18** - Framework de UI
- **Vite** - Build tool y dev server
- **TailwindCSS** - Framework CSS utilitario
- **Google Fonts** - Tipografía (Inter)

## 🚀 Instalación y Uso

### Prerequisitos
- Node.js 16+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd website-creator-landing

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

### Scripts Disponibles
- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Preview del build de producción
- `npm run lint` - Ejecuta ESLint

## 🎨 Sistema de Diseño

### Paleta de Colores
```css
/* Colores Primarios (Azules) */
primary-500: #0ea5e9
primary-600: #0284c7  
primary-700: #0369a1
primary-800: #075985
primary-900: #0c4a6e

/* Colores de Acento (Naranjas) */
accent-400: #fb923c
accent-500: #f97316
accent-600: #ea580c

/* Grises */
gray-50: #f8fafc
gray-500: #64748b
gray-700: #334155
```

### Tipografía
- **Fuente Principal**: Inter (Google Fonts)
- **Títulos**: font-black (900), tamaños grandes (text-4xl a text-8xl)
- **Subtítulos**: font-bold, text-2xl
- **Texto**: leading-relaxed

### Efectos Visuales
- **Gradientes**: from-primary-600 to-accent-600
- **Animaciones**: fadeInUp, pulseGlow, bounceSubtle
- **Sombras**: shadow-lg, hover:shadow-xl
- **Hover**: hover:-translate-y-1, hover:scale-110

## 📁 Estructura de Archivos

```
src/
├── components/
│   ├── Hero.jsx           # Sección principal con CTA
│   ├── Problem.jsx        # Identificación de problemas
│   ├── Solution.jsx       # Presentación de la solución
│   ├── Testimonials.jsx   # Testimonios y portfolio
│   ├── Offer.jsx          # Detalles de la oferta
│   ├── Guarantee.jsx      # Garantía y eliminación de riesgos
│   ├── FAQ.jsx            # Preguntas frecuentes
│   ├── FinalCTA.jsx       # CTA final con contador
│   └── ContactForm.jsx    # Formulario de contacto
├── App.jsx                # Componente principal
├── index.css              # Estilos globales y Tailwind
└── main.jsx               # Punto de entrada
```

## 🔧 Personalización

### Cambiar Colores
Modifica `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Tus colores primarios
      },
      accent: {
        // Tus colores de acento
      }
    }
  }
}
```

### Modificar Contenido
- **Textos**: Edita directamente en cada componente
- **Testimonios**: Modifica el array en `Testimonials.jsx`
- **FAQ**: Actualiza el array en `FAQ.jsx`
- **Formulario**: Personaliza campos en `ContactForm.jsx`

### Integración de Formulario
El formulario actualmente simula el envío. Para integrarlo:

1. **Google Forms**:
```javascript
const formAction = "https://docs.google.com/forms/d/e/[FORM_ID]/formResponse";
```

2. **Netlify Forms**:
```jsx
<form name="contact" method="POST" data-netlify="true">
```

3. **EmailJS, Formspree, etc.**:
Sigue la documentación del servicio elegido.

## 🌐 Deploy

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta dist/ a Netlify
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

## 📱 QR Code

Para generar un QR code que dirija a tu landing:

1. Usa [qr-code-generator.com](https://www.qr-code-generator.com/)
2. Ingresa tu URL de producción
3. Personaliza el diseño si es necesario
4. Descarga e integra en tu marketing

## 🎯 Optimización para Conversión

### KPIs Principales
- **Registro completado** en formulario
- **Clics en CTA** principales
- **Tasa de conversión** visitas → inscripciones
- **Tiempo en página**
- **Scroll depth**

### A/B Testing
Elementos recomendados para testear:
- Headlines principales
- CTAs (texto y colores)
- Ofertas y precios
- Testimonios mostrados
- Longitud del formulario

## 🔍 SEO

### Meta Tags
Actualiza en `index.html`:
```html
<title>Desafío Web 24h - Landing Page en 24 Horas</title>
<meta name="description" content="Obtén una landing page moderna en 24 horas o te la quedas gratis. Sin riesgo, sin compromisos.">
```

### Performance
- ✅ Lighthouse Score 90+
- ✅ First Contentful Paint < 2s
- ✅ Cumulative Layout Shift < 0.1
- ✅ Largest Contentful Paint < 2.5s

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🎉 Créditos

- **Diseño**: Basado en el briefing "Desafío Web 24h"
- **Desarrollo**: Implementado con React + Vite + TailwindCSS
- **Iconos**: Heroicons
- **Fuentes**: Google Fonts (Inter)

---

**¿Te gusta este proyecto?** ⭐ Dale una estrella en GitHub y compártelo con otros desarrolladores.

**¿Necesitas personalización?** 📧 Contacta para servicios de desarrollo web profesional.
