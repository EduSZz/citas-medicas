import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppointmentDetails from './pages/AppoinmentDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'Citas Médicas | Andrés Santillán';
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow pt-6 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments/:id" element={<AppointmentDetails />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
