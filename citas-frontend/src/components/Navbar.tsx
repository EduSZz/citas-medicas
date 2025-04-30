import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">
          Citas Médicas
        </h1>
        <nav>
          <Link
            to="/"
            className="text-white hover:text-blue-200 font-medium transition"
          >
            Inicio
          </Link>
        </nav>
      </div>
    </header>
  );
}
