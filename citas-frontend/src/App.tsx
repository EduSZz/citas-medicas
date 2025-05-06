
// Componente principal que define las rutas y estructura de la aplicación.

import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa los componentes necesarios para el enrutamiento
import Home from './pages/Home'; // Componente de la página de inicio
import AppointmentDetails from './pages/AppoinmentDetails'; // Componente para ver los detalles de una cita
import Navbar from './components/Navbar'; // Componente de la barra de navegación
import Footer from './components/Footer'; // Componente del pie de página
import { useEffect } from 'react'; // Hook de efecto para actualizar el título de la página

export default function App() {
  // Este hook se ejecuta cuando el componente se monta
  useEffect(() => {
    document.title = 'Citas Médicas | Andrés Santillán'; // Cambia el título de la página
  }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <BrowserRouter>
        <Navbar /> {/* Barra de navegación */}
        <main className="flex-grow pt-6 px-4">
          <Routes>
            {/* Define las rutas de la aplicación */}
            <Route path="/" element={<Home />} /> {/* Página principal */}
            <Route path="/appointments/:id" element={<AppointmentDetails />} /> {/* Página de detalles de cita */}
          </Routes>
        </main>
        <Footer /> {/* Pie de página */}
      </BrowserRouter>
    </div>
  );
}

