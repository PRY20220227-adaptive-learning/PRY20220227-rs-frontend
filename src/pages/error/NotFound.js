import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-sky-600">404</h1>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página no encontrada</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Lo siento, no pudimos encontrar la página que estabas buscando.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/login">
            <button className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-sky-500">Volver al inicio</button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound;