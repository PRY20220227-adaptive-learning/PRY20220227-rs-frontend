import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div className="flex min-h-full items-center justify-center my-12 mx-4 sm:mx-6 lg:mx-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600" alt="logo-login" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Iniciar sesión
          </h2>
        </div>
        <form className="mt-8 bg-gray-200 p-8 rounded-lg shadow-lg" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md space-y-3">
            <div className="text-left">
              <label htmlFor="username" className="text-sm">
                Usuario
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="relative block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Usuario"
              />
            </div>
            <div className="text-left">
              <label htmlFor="password" className="text-sm">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Contraseña"
              />
            </div>
          </div>
          <div className="mt-6">
            <Link to="/student-home"><button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-sky-600 py-2 px-3 text-sm font-semibold text-white hover:bg-sky-500">
              Ingresar
            </button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;