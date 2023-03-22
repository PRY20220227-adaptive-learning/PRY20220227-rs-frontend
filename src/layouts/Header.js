import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const json = {
    name: "Maryori Bautista",
    subject: "Basic English 1",
  }
  const handleLogout = () => {
    navigate('/login');
  }
  return (
    <header className="mt-10 px-6 py-3 flex flex-row items-center justify-between shadow-md rounded-lg">
      <div className="text-left">
        <h1 className="mb-1">Bienvenido, <span className="font-semibold uppercase">{json.name}</span></h1>
        <h1>Curso: <span className="font-semibold">{json.subject}</span></h1>
      </div>
      <div>
        <button onClick={handleLogout} className="flex flex-row text-sm items-center py-2 px-3 rounded-lg shadow-md font-semibold text-white bg-red-500 hover:bg-red-600">
          Salir <MdOutlineLogout className="ml-1" />
        </button>
      </div>
    </header>
  )
}

export default Header;