import React, { useState, useEffect, useCallback } from 'react';
import Header from "../../layouts/Header";
import ResourceModal from "./ResourceModal";
import { getStudentsByclass } from '../../services/TeacherService';
import { getRecommendationsHistoryById } from '../../services/StudentService';

function Teacher() {

  const userData = JSON.parse(localStorage.getItem('user'));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResources, setSelectedResources] = useState([]);
  const [studentsList, setStudentsList] = useState([]);

  const handleStudents = useCallback(async (event) => {
    const responseList = await getStudentsByclass(userData.class_)
    setStudentsList(responseList);
  }, [userData.class_]);

  useEffect(() => {
    handleStudents();
  }, [handleStudents]);

  const handleResourceByStudent = async (user_id) => {
    const resourcesList = await getRecommendationsHistoryById(user_id);
    if (resourcesList && resourcesList.length > 0) {
      setSelectedResources(resourcesList);
    } else {
      setSelectedResources([]);
    }
  };

  return (
    <div className="mx-auto w-full container">
      <Header />
      <h1 className="text-3xl font-semibold text-sky-700 mt-10 mb-5">Resumen</h1>
      <div className="p-9 mx-20 mb-4 bg-sky-200 rounded-lg shadow-lg">
        <div className="grid grid-cols-4 gap-4 py-2 mb-4 bg-white rounded-md">
          <div className="text-lg font-bold">Estudiante</div>
          <div className="text-lg font-bold">Nivel de conocimientos</div>
          <div className="text-lg font-bold"> Estilo de aprendizaje</div>
          <div className="text-lg font-bold">Recursos recomendados</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {studentsList.map(student => (
            <React.Fragment key={student.user_id}>
              <div>{student.name} {student.lastname}</div>
              <div>{student.knowledge_level}</div>
              <div>{student.learning_style}</div>
              <div>
                <button onClick={() => { setIsModalOpen(true); handleResourceByStudent(student.user_id); }}
                  className="bg-sky-600 p-1.5 rounded-md shadow-md text-white hover:bg-sky-700">
                  Ver recursos
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <ResourceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        resources={selectedResources}
      />
    </div>
  );
}

export default Teacher;