import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {
  const [apiMessage, setApiMessage] = useState("Conectando...")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    })

    // Fetch API
    fetch('http://127.0.0.1:8000/api/hola/')
      .then(response => response.json())
      .then(data => {
        setApiMessage(data.mensaje)
        setIsLoading(false)
      })
      .catch(error => {
        console.error("Error:", error)
        setApiMessage("Error de conexión")
        setIsLoading(false)
      })
  }, [])

  const features = [
    { icon: "⚡", title: "Ultra Rápido", description: "Vite proporciona HMR instantáneo y builds optimizados." },
    { icon: "🎨", title: "Diseño Moderno", description: "Tailwind CSS v4 con utilidades productivas." },
    { icon: "🔒", title: "API Segura", description: "Django REST Framework con autenticación." },
    { icon: "🐘", title: "PostgreSQL", description: "Base de datos robusta y escalable." }
  ]

  const stats = [
    { number: "99.9%", label: "Uptime", icon: "🚀" },
    { number: "< 50ms", label: "Latencia", icon: "⚡" },
    { number: "10K+", label: "Requests/s", icon: "📊" },
    { number: "24/7", label: "Soporte", icon: "🛡️" }
  ]

  const testimonials = [
    {
      name: "María García",
      role: "CTO en TechStartup",
      quote: "Este stack nos permitió lanzar nuestro MVP en tiempo récord. La integración Django-React es impecable.",
      avatar: "👩‍💼"
    },
    {
      name: "Carlos Rodríguez",
      role: "Full Stack Developer",
      quote: "La configuración inicial que normalmente toma días, aquí la tienes lista en minutos. Increíble.",
      avatar: "👨‍💻"
    },
    {
      name: "Ana Martínez",
      role: "Project Manager",
      quote: "Nuestro equipo aumentó la productividad un 40% desde que adoptamos este template como base.",
      avatar: "👩‍🔧"
    }
  ]

  const technologies = [
    { name: 'React 19', color: 'from-cyan-500 to-blue-500', desc: 'UI Library' },
    { name: 'Django 6', color: 'from-green-500 to-emerald-500', desc: 'Backend' },
    { name: 'Vite 7', color: 'from-purple-500 to-violet-500', desc: 'Build Tool' },
    { name: 'Tailwind 4', color: 'from-teal-500 to-cyan-500', desc: 'Styling' },
    { name: 'PostgreSQL', color: 'from-blue-500 to-indigo-500', desc: 'Database' },
  ]

  const process = [
    { step: "01", title: "Clona el Repo", description: "Descarga el template desde GitHub y personalízalo." },
    { step: "02", title: "Configura tu Entorno", description: "Crea el virtualenv y la base de datos PostgreSQL." },
    { step: "03", title: "Desarrolla", description: "Construye tus features con el stack ya configurado." },
    { step: "04", title: "Despliega", description: "Sube a producción con confianza y escalabilidad." },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900"></div>

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div data-aos="fade-down" className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm">
              🚀 Stack Full Stack Moderno
            </span>
          </div>

          <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Django + React
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              El Stack Perfecto
            </span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Un template moderno y listo para producción. Construye aplicaciones
            web escalables con las mejores tecnologías del ecosistema.
          </p>

          {/* API Status Card */}
          <div data-aos="zoom-in" data-aos-delay="300" className="inline-block p-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mb-10">
            <div className="bg-slate-900 px-8 py-6 rounded-xl">
              <p className="text-slate-400 text-sm mb-2">Respuesta del Backend:</p>
              <div className="flex items-center justify-center gap-3">
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                )}
                <p className="text-2xl font-bold text-white">{apiMessage}</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105">
              Ver en GitHub
            </a>
            <a href="#features"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all duration-300 border border-slate-700 hover:scale-105">
              Explorar Features
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">Características</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Todo lo que necesitas
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Un stack completo con las mejores prácticas ya configuradas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group p-6 bg-slate-900/50 hover:bg-slate-800 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Proceso</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Comienza en 4 pasos
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="relative"
              >
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                )}

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Tecnologías</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Stack Tecnológico
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group relative p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-transparent transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <span className="text-white font-bold text-lg">{tech.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-white font-semibold">{tech.name}</h3>
                  <p className="text-slate-400 text-sm">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Testimonios</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Lo que dicen los developers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="p-8 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-green-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Simple y Potente</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                API en minutos, no en días
              </h2>
              <p className="text-slate-400 mb-6">
                Con Django REST Framework, crear endpoints es tan simple como escribir unas pocas líneas de código.
                El frontend consume la API con fetch nativo.
              </p>
              <ul className="space-y-3">
                {["Endpoints RESTful automáticos", "Serialización de datos", "Autenticación integrada", "Documentación automática"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div data-aos="fade-left" className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-slate-400 text-sm">views.py</span>
                </div>
                <pre className="p-6 text-sm overflow-x-auto">
                  <code className="text-slate-300">
                    {`from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def hola_mundo(request):
    return Response({
        "mensaje": "¡Hola Mundo!"
    })`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div data-aos="zoom-in">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para empezar?
            </h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Clona el repositorio y comienza a construir tu próxima gran aplicación en minutos, no en días.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-all duration-300 hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Clonar Repositorio
              </a>
              <a href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                Ver Documentación
              </a>
            </div>
          </div>
        </div>
      </section> >
    </div >
  )
}

export default Home
