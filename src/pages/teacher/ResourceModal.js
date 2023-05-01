function ResourceModal({ isOpen, onClose, resources }) {
  const moment = require("moment");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg relative opacity-100 transition duration-300 max-w-3xl w-full">
        <button
          className="absolute right-4 top-1 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <span className="text-3xl">&times;</span>
        </button>
        <div className="text-2xl font-semibold">Recursos recomendados</div>
        {resources.length === 0 ? (
          <div>
            <div className="text-center text-gray-500 m-6 text-3xl font-semibold">
              No hay recursos recomendados{" "}
              <span className="mr-2 text-3xl">&#x1F641;</span>
            </div>
          </div>
        ) : (
          <div className="h-96 overflow-y-scroll">
            {resources.map((resource, index) => (
              <div key={index} className="my-4 px-2">
                <div className="flex flex-row justify-between">
                  <h1 className="text-left font-medium">{resource.topic}</h1>
                  <h1 className="text-left font-medium">
                    {moment.utc(resource.date).format("DD/MM/YYYY")}
                  </h1>
                </div>
                <div className="text-left break-words">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{resource.url}</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourceModal;