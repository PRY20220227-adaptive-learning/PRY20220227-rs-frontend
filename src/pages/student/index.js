import Header from "../../layouts/Header";

function Student() {
  return (
    <div>
      <Header />
      <h1 className="text-xl">Recursos de aprendizaje</h1>
      <p className="text-lg">Recursos recomendados:</p>
      <div className="bg-sky-200 rounded-lg">
        <ul>
          <li>
            <h1>Video - Past Simple</h1>
            <p>URL del video</p>
          </li>
          <li>
            <h1>Mapa conceptual - Possesive Adjetives</h1>
            <p>URL del contenido educativo</p>
          </li>
          <li>
            <h1>Video - Possessive Adjetives</h1>
            <p>URL del video</p>
          </li>
          <li>
            <h1>Infografía - Past Simple TO BE</h1>
            <p>URL de la infografía</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Student;