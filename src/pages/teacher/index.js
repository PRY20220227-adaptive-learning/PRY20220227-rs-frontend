import React, { useState } from 'react';
import Header from "../../layouts/Header";
import ResourceModal from "./ResourceModal"

function Teacher() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResources, setSelectedResources] = useState([]);

  const json = [
    {
      studentName: "Maryori Bautista",
      studentLevel: "Intermedio",
      learningStyle: "Lectura/Escritura",
      recResources: [
        {
          resName: "PDF-Adjetives",
          resUrl: "https://www.youtube.com/watch?v=VLj-Dbz-CWk"
        },
        {
          resName: "PPT- Present perfect",
          resUrl: "https://www.youtube.com/watch?v=VLj-Dbz-CWk"
        },
        {
          resName: "PDF - First conditional",
          resUrl: "https://www.youtube.com/watch?v=VLj-Dbz-CWk"
        }
      ]
    },
    {
      studentName: "Johana Campos",
      studentLevel: "Avanzado",
      learningStyle: "Visual",
      recResources: [
        {
          resName: "Video-Past Present",
          resUrl: "https://www.youtube.com/watch?v=VLj-Dbz-CWk"
        },
        {
          resName: "Video-Past Present",
          resUrl: "https://www.youtube.com/watch?v=VLj-Dbz-CWk"
        },
        {
          resName: "Video-Past Present",
          resUrl: "https://www.youtube.com/watch?v=VLj-Dbz-CWk"
        }
      ]
    },
    {
      studentName: "Andrew Dulanto",
      studentLevel: "Básico",
      learningStyle: "Auditivo",
      recResources: [
        {
          resName: "Audio-Present Simple",
          resUrl: "https://www.youtube.com/watch?v=VLj-Dbz-CWk"
        },
        {
          resName: "Audio-Present Simple",
          resUrl: "https://www.youtube.com/watch?v=VLj-Dbz-CWk"
        },
        {
          resName: "Audio-Present Simple",
          resUrl: "https://www.youtube.com/watch?v=VLj-Dbz-CWk"
        }
      ]
    },
    {
      studentName: "Balto Alfaro",
      studentLevel: "Avanzado",
      learningStyle: "Kinestesico",
      recResources: [
        {
          resName: "Dinámica-Present Simple",
          resUrl: "https://www.youtube.com/watch?v=agawqrqk"
        },
        {
          resName: "Dinámica-Present Simple",
          resUrl: "https://www.youtube.com/watch?v=agawqrqk"
        },
        {
          resName: "Dinámica-Present Simple",
          resUrl: "https://www.youtube.com/watch?v=agawqrqk"
        }
      ]
    },
  ];

  return (
    <div className="mx-auto w-full container">
      <Header />
      <h1 className="text-3xl font-semibold text-sky-700 mt-10 mb-5">Resumen</h1>
      <div className="p-9 mx-20 mb-4 bg-sky-200 rounded-lg shadow-lg">
        <div className="grid grid-cols-4 gap-4 py-2 mb-4 bg-white rounded-md">
          <div className="text-lg font-bold">Estudiante</div>
          <div className="text-lg font-bold">Nivel de conocimientos</div>
          <div className="text-lg font-bold"> Estilo de aprendizaje</div>
          <div className="text-lg font-bold">Recursos de recomendación</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {json.map(item => (
            <React.Fragment key={item.studentName}>
              <div>{item.studentName}</div>
              <div>{item.studentLevel}</div>
              <div>{item.learningStyle}</div>
              <div>
                <button onClick={() => { setIsModalOpen(true); setSelectedResources(item.recResources); }}
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