
// Entrada principal que renderiza la aplicación React y aplica estilos globales.

import React from 'react'; // Importa React para usar JSX
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar la aplicación en el DOM
import App from './App'; // Importa el componente principal de la aplicación
import './index.css'; // Importa los estilos globales para la aplicación

// Renderiza la aplicación en el contenedor con id 'root'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <title>Citas Médicas | Andrés Santillán</title> {/* Establece el título de la página en el navegador */}
    <App /> {/* Renderiza el componente principal de la aplicación */}
  </React.StrictMode>
);