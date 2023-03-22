import React from 'react';
import Header from "../../layouts/Header";

function Teacher() {

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
          resName: "PDF - Firts conditional",
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
  ];

  return (
    <div className="mx-auto w-full container">
      <Header />
      <h1 className="text-3xl font-semibold text-sky-700 mt-10 mb-5">Resumen</h1>
      <div className="p-9 mx-20 bg-sky-200 rounded-lg shadow-lg">
        <div className="grid grid-cols-4 gap-4 py-2 mb-2 bg-white rounded-md">
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
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teacher;