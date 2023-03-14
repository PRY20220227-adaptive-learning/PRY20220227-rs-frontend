import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div>
      <Link to="/student-home"><button className=''>Ingresar</button></Link>
    </div>
  );
}

export default LoginForm;