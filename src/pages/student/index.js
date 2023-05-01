import React, { useState } from 'react';
import Header from "../../layouts/Header";
import { getRecommendations } from "../../services/StudentService";

function Student() {
  const userData = JSON.parse(localStorage.getItem('user'));

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionName, setSelectedOptionName] = useState(null);
  const [recommendedTopic, setRecommendedTopic] = useState(null);
  const [resourcesData, setResourcesData] = useState(null);

  const options = {
    'A few/A little': 9,
    'Be going to': 2,
    'Can/Can\'t': 6,
    'Comparative adjectives': 5,
    'Comparative/Superlative': 10,
    'Could/Couldn\'t': 7,
    'Modal verbs': 11,
    'Past simple': 13,
    'Present continuous': 1,
    'Present simple': 0,
    'Quantifiers': 12,
    'Shall': 3,
    'Should/Shouldn\'t': 14,
    'Superlatives adjectives': 8,
    'Too/Enough': 15,
    'Verb to be': 4,
    'Want/Need/Would': 16
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedOptionName(event.target.options[event.target.selectedIndex].text);
  };

  const handleRecommendation = async (event) => {
    const resourcesRes = await getRecommendations(userData.user_id, {
      mark: userData.mark,
      knowledge_level: userData.knowledge_level,
      learning_style: userData.learning_style,
      subject: selectedOption
    });
    setResourcesData(resourcesRes);
    setRecommendedTopic(selectedOptionName);
  };

  const exampleData = //ELIMINAR CUANDO resourceData DEJE DE SER SOLO UNO
    [
      "https://www.khanacademy.org/math/algebra",
      "https://www.khanacademy.org/math/geometry",
      "https://www.mathsisfun.com/index.htm",
      "https://www.khanacademy.org/science",
    ]

  return (
    <div className="mx-auto w-full container">
      <Header />
      <h1 className="text-3xl font-semibold text-sky-700 mt-10 mb-5">Recursos de aprendizaje</h1>
      <div className={`flex flex-row justify-center items-center ${resourcesData !== null ? 'justify-between' : ''}`}>
        {resourcesData !== null && (<p className="text-lg font-medium mb-4 text-left mx-6">Recursos recomendados:</p>)}
        <div className="flex flex-row justify-end items-center mb-4 mx-6 space-x-6">
          <select
            value={selectedOption ? selectedOption : ""}
            onChange={handleSelectChange}
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-70"
          >
            <option value="" disabled>Selecciona una opción</option>
            {Object.entries(options).map(([key, value]) => (
              <option key={value} value={value}>{key}</option>
            ))}
          </select>
          <button
            disabled={selectedOption === null}
            onClick={handleRecommendation}
            className="shadow-md py-2 px-4 rounded-md bg-sky-600 font-semibold text-white hover:bg-sky-700 disabled:bg-gray-400"
          >Obtener recomendaciones!</button>
        </div>
      </div>
      {resourcesData !== null && (
        <div>
          <div className="px-9 pt-9 pb-5 mx-20 mb-4 bg-sky-200 rounded-lg shadow-lg">
            <h1 className="font-semibold text-left mb-2 text-lg">{recommendedTopic ? `Tema - ${recommendedTopic}` : "Recursos de aprendizaje"}</h1>
            <ul className="text-left">
              {exampleData.map(resource => ( //CAMBIAR POR resourceData
                <li className="mb-4" key={resource}>
                  <span>● <a href={resource} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{resource}</a></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Student;