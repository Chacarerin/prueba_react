import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Blog() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        })
    }, [])

    const featuredPost = {
        title: "Cómo construir una API REST con Django en 10 minutos",
        excerpt: "Aprende a crear endpoints RESTful utilizando Django REST Framework, desde la instalación hasta el deployment. Una guía completa para principiantes y desarrolladores intermedios.",
        date: "30 Dic 2025",
        author: "Developer Team",
        category: "Backend",
        readTime: "8 min",
        image: "🖥️"
    }

    const posts = [
        {
            title: "React 19: Las nuevas features que debes conocer",
            excerpt: "Un recorrido por las nuevas características de React 19 y cómo pueden mejorar tu desarrollo.",
            date: "28 Dic 2025",
            author: "Frontend Dev",
            category: "Frontend",
            readTime: "5 min",
            image: "⚛️"
        },
        {
            title: "PostgreSQL vs MySQL: ¿Cuál elegir?",
            excerpt: "Comparativa detallada entre las dos bases de datos relacionales más populares.",
            date: "25 Dic 2025",
            author: "Database Admin",
            category: "Database",
            readTime: "6 min",
            image: "🐘"
        },
        {
            title: "Tailwind CSS v4: Guía de migración",
            excerpt: "Todo lo que necesitas saber para migrar tus proyectos de Tailwind v3 a v4.",
            date: "22 Dic 2025",
            author: "CSS Master",
            category: "Styling",
            readTime: "4 min",
            image: "🎨"
        },
        {
            title: "Autenticación JWT en Django + React",
            excerpt: "Implementa un sistema de autenticación robusto usando JSON Web Tokens.",
            date: "20 Dic 2025",
            author: "Security Expert",
            category: "Security",
            readTime: "10 min",
            image: "🔐"
        },
        {
            title: "Vite vs Create React App: Benchmark 2025",
            excerpt: "Comparamos el rendimiento y la experiencia de desarrollo entre ambas herramientas.",
            date: "18 Dic 2025",
            author: "Build Tools Dev",
            category: "Tools",
            readTime: "7 min",
            image: "⚡"
        },
        {
            title: "Desplegando Django en producción",
            excerpt: "Guía completa para deployar tu aplicación Django con Gunicorn, Nginx y PostgreSQL.",
            date: "15 Dic 2025",
            author: "DevOps Engineer",
            category: "DevOps",
            readTime: "12 min",
            image: "🚀"
        }
    ]

    const categories = [
        { name: "Todos", count: 7, active: true },
        { name: "Backend", count: 2 },
        { name: "Frontend", count: 2 },
        { name: "Database", count: 1 },
        { name: "DevOps", count: 2 }
    ]

    const getCategoryColor = (category) => {
        const colors = {
            'Backend': 'bg-green-500/20 text-green-400 border-green-500/30',
            'Frontend': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
            'Database': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
            'Styling': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
            'Security': 'bg-red-500/20 text-red-400 border-red-500/30',
            'Tools': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
            'DevOps': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
        }
        return colors[category] || 'bg-slate-500/20 text-slate-400 border-slate-500/30'
    }

    return (
        <div className="min-h-screen pt-16 bg-slate-950">
            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900"></div>
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-4">
                    <div data-aos="fade-up" className="text-center mb-12">
                        <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-300 text-sm mb-4">
                            📝 Recursos y Tutoriales
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Blog
                        </h1>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Artículos, tutoriales y guías sobre desarrollo Full Stack con Django y React.
                        </p>
                    </div>

                    {/* Categories Filter */}
                    <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((cat, index) => (
                            <button
                                key={cat.name}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${cat.active
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                                    }`}
                            >
                                {cat.name}
                                <span className="ml-2 text-xs opacity-70">({cat.count})</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-8 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div data-aos="fade-up" className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="relative bg-slate-800 rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0">
                            {/* Image Side */}
                            <div className="bg-gradient-to-br from-orange-500 to-pink-600 p-12 flex items-center justify-center">
                                <span className="text-9xl">{featuredPost.image}</span>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(featuredPost.category)}`}>
                                        {featuredPost.category}
                                    </span>
                                    <span className="text-slate-500 text-sm">{featuredPost.readTime} lectura</span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                                    {featuredPost.title}
                                </h2>

                                <p className="text-slate-400 mb-6">
                                    {featuredPost.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                                            D
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-medium">{featuredPost.author}</p>
                                            <p className="text-slate-500 text-xs">{featuredPost.date}</p>
                                        </div>
                                    </div>

                                    <Link
                                        to="#"
                                        className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                                    >
                                        Leer más
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4">
                    <div data-aos="fade-up" className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-white">Últimos Artículos</h2>
                        <div className="flex items-center gap-2">
                            <button className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </button>
                            <button className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, index) => (
                            <article
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="group bg-slate-900 rounded-2xl border border-slate-800 hover:border-orange-500/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5"
                            >
                                {/* Card Header */}
                                <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group-hover:from-orange-500/10 group-hover:to-pink-500/10 transition-all duration-300">
                                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{post.image}</span>
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                                            {post.category}
                                        </span>
                                        <span className="text-slate-500 text-xs">{post.readTime}</span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                {post.author.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-slate-400 text-xs">{post.author}</p>
                                                <p className="text-slate-500 text-xs">{post.date}</p>
                                            </div>
                                        </div>

                                        <Link
                                            to="#"
                                            className="text-orange-400 hover:text-orange-300 text-sm font-medium flex items-center gap-1 transition-colors"
                                        >
                                            Leer
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More */}
                    <div data-aos="fade-up" className="text-center mt-12">
                        <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all duration-300 border border-slate-700 hover:border-orange-500/30">
                            Cargar más artículos
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4">
                    <div data-aos="zoom-in" className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
                        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-center border border-slate-700">
                            <span className="text-5xl mb-6 block">📬</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Suscríbete al Newsletter
                            </h2>
                            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                                Recibe los últimos artículos y tutoriales directamente en tu inbox.
                                Sin spam, solo contenido de valor.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    className="flex-1 px-6 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                                />
                                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                                    Suscribirse
                                </button>
                            </div>

                            <p className="text-slate-500 text-sm mt-4">
                                +500 developers ya suscritos
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
