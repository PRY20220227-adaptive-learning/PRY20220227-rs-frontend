import Header from "../../layouts/Header";

function Student() {
  const json = [
    { resName: "Video - Past Simple", resUrl: "https://www.youtube.com/watch?v=VLj-Dbz-CWk" },
    { resName: "Mapa conceptual - Possesive Adjetives", resUrl: "https://www.youtube.com/watch?v=asxvza123k" },
    { resName: "Video - Possessive Adjetives", resUrl: "https://www.youtube.com/watch?v=xgdjhghgk" },
    { resName: "Infografía - Past Simple TO BE", resUrl: "https://www.youtube.com/watch?v=VLALSDaga" },
  ]
  return (
    <div className="mx-auto w-full container">
      <Header />
      <h1 className="text-3xl font-semibold text-sky-700 mt-10 mb-5">Recursos de aprendizaje</h1>
      <p className="text-lg font-medium text-left mb-4 mx-6">Recursos recomendados:</p>
      <div className="px-9 pt-9 pb-5 mx-20 bg-sky-200 rounded-lg shadow-lg">
        <ul className="text-left">
          {
            json.map(resource => (
              <li className="mb-4" key={resource.resName}>
                <h1 className="font-medium">{resource.resName}</h1>
                <p className="italic">{resource.resUrl}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Student;