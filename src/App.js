import './App.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Footer from './layouts/Footer';
import Login from './pages/login';
import NotFound from './pages/error/NotFound';
import StudentHome from './pages/student/index';
import TeacherHome from './pages/teacher/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-home" element={<StudentHome />} />
        <Route path="/teacher-home" element={<TeacherHome />} />
        <Route path="/page-not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="page-not-found" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;