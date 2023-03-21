import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginService from '../../services/LoginService';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (username === "") {
        setUsernameError('El nombre de usuario no puede estar en blanco');
      } else {
        setUsernameError('');
      }
      if (password === "") {
        setPasswordError('La contraseña no puede estar en blanco');
      } else {
        setPasswordError('');
      }

      if (username !== "" && password !== "") {
        // Call a function to handle the login logic here
        // COMPLETAR CON LLAMADA A API
        console.log("Username", username);
        console.log("Password", password);
        const data = await LoginService.authenticateUser({ username: username, password: password });
        console.log(data);
        if (data !== "") {
          navigate('/student-home');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center my-12 mx-4 sm:mx-6 lg:mx-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="mx-auto h-24 w-auto" src="https://uploads-ssl.webflow.com/5fa58eb04302c6e6eb23144c/606f0d2525ffe2f3890c12bc_noun_AI_3498942.png" alt="logo-login" />
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
            Iniciar sesión
          </h2>
        </div>
        <form className="mt-8 bg-gray-200 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="rounded-md space-y-3">
            <div className="text-left">
              <label htmlFor="username" className="text-sm">
                Usuario
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className={`relative block w-full rounded-md border border-gray-300 py-1.5 px-2.5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm sm:leading-6 ${usernameError ? 'border-red-500 focus focus:ring-1 focus:ring-red-500' : ''}`}
                placeholder="Usuario"
              />
              {usernameError && <p className="text-red-500 text-xs mt-1">{usernameError}</p>}
            </div>
            <div className="text-left">
              <label htmlFor="password" className="text-sm">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className={`relative block w-full rounded-md border border-gray-300 py-1.5 px-2.5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600 sm:text-sm sm:leading-6 ${passwordError ? 'border-red-500 focus focus:ring-1 focus:ring-red-500' : ''}`}
                placeholder="Contraseña"
              />
              {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-sky-600 py-2 px-3 text-sm font-semibold text-white hover:bg-sky-500">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;