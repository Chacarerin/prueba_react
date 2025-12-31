import { useState, useEffect } from 'react'

function App() {
  const [mensaje, setMensaje] = useState("Cargando...")

  useEffect(() => {
    // Petición a la API de Django
    fetch('http://127.0.0.1:8000/api/hola/')
      .then(response => response.json())
      .then(data => {
        setMensaje(data.mensaje)
      })
      .catch(error => console.error("Error:", error))
  }, [])

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="text-center p-10 bg-white shadow-2xl rounded-xl max-w-lg">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          Stack Django + React
        </h1>
        <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
          <p className="text-lg text-gray-700 font-medium">
            Respuesta del servidor:
          </p>
          <p className="text-2xl text-green-600 font-bold mt-2">
            {mensaje}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
