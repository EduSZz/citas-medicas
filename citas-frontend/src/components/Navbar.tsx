// Componente Navbar para la navegación entre las páginas de la aplicación.

import { Link } from 'react-router-dom'; // Importa el componente Link de react-router-dom para la navegación

export default function Navbar() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md"> {/* Barra de navegación */}
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center"> {/* Contenedor central */}
        <h1 className="text-xl font-bold tracking-wide"> {/* Título */}
          Citas Médicas
        </h1>
        <nav>
          <Link
            to="/" // Enlace a la página de inicio
            className="text-white hover:text-blue-200 font-medium transition"
          >
            Inicio
          </Link>
        </nav>
      </div>
    </header>
  );
}
