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
    'A few/A little': 0,
    'Be going to': 1,
    'Can/Can\'t': 2,
    'Comparative adjectives': 3,
    'Comparative/Superlative': 4,
    'Could/Couldn\'t': 5,
    'Modal verbs': 6,
    'Past simple': 7,
    'Present continuous': 8,
    'Present simple': 9,
    'Quantifiers': 10,
    'Shall': 11,
    'Should/Shouldn\'t': 12,
    'Superlatives adjectives': 13,
    'Too/Enough': 14,
    'Verb to be': 15,
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
              {resourcesData.map(resource => ( //CAMBIAR POR resourceData
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