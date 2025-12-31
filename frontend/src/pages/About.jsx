function About() {
    const team = [
        {
            name: "Developer 1",
            role: "Frontend Developer",
            description: "Especialista en React y experiencia de usuario.",
            avatar: "👨‍💻"
        },
        {
            name: "Developer 2",
            role: "Backend Developer",
            description: "Experto en Django y arquitectura de APIs.",
            avatar: "👩‍💻"
        },
        {
            name: "Developer 3",
            role: "Full Stack Developer",
            description: "Conectando frontend y backend de forma seamless.",
            avatar: "🧑‍💻"
        }
    ]

    const values = [
        {
            icon: "🎯",
            title: "Enfoque en Calidad",
            description: "Código limpio, bien documentado y siguiendo las mejores prácticas de la industria."
        },
        {
            icon: "🚀",
            title: "Innovación Constante",
            description: "Siempre explorando nuevas tecnologías y metodologías para mejorar."
        },
        {
            icon: "🤝",
            title: "Colaboración",
            description: "Trabajo en equipo y comunicación abierta para lograr los mejores resultados."
        }
    ]

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900"></div>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <span className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm mb-6">
                        👋 Conócenos
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Quiénes Somos
                    </h1>

                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Somos un equipo apasionado por crear soluciones tecnológicas
                        modernas y escalables que impulsan el futuro digital.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
                                Nuestra Misión
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                                Construir el futuro, línea por línea
                            </h2>
                            <p className="text-slate-400 mb-6">
                                Este proyecto nace de la necesidad de tener un punto de partida
                                sólido para desarrollar aplicaciones web modernas. Creemos que
                                las mejores prácticas deben ser accesibles desde el día uno.
                            </p>
                            <p className="text-slate-400">
                                Con este template, cualquier desarrollador puede comenzar a
                                construir su aplicación sin preocuparse por la configuración
                                inicial, manteniendo un código limpio y escalable.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
                            <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                                            <span className="text-2xl">📊</span>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-white">100%</p>
                                            <p className="text-slate-400 text-sm">Open Source</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                            <span className="text-2xl">⚡</span>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-white">5 min</p>
                                            <p className="text-slate-400 text-sm">Setup inicial</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                                            <span className="text-2xl">🔧</span>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-white">∞</p>
                                            <p className="text-slate-400 text-sm">Posibilidades</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
                            Nuestros Valores
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                            Lo que nos define
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="text-center p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-colors duration-300"
                            >
                                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                                <p className="text-slate-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
                            El Equipo
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                            Las personas detrás del código
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="group text-center p-8 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {member.avatar}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                                <p className="text-indigo-400 text-sm mb-4">{member.role}</p>
                                <p className="text-slate-400 text-sm">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        ¿Listo para empezar?
                    </h2>
                    <p className="text-indigo-100 text-lg mb-8">
                        Clona el repositorio y comienza a construir tu próxima gran aplicación.
                    </p>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-colors duration-200"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        Ver en GitHub
                    </a>
                </div>
            </section>
        </div>
    )
}

export default About
