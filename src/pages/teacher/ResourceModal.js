function ResourceModal({ isOpen, onClose, resources }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg relative">
        <button className="absolute right-4 top-1 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <span className="text-3xl">&times;</span>
        </button>
        <div className="text-2xl font-semibold">Recursos de recomendación</div>
        {resources.map((resource, index) => (
          <div key={index} className="my-4">
            <h1 className="text-left font-medium">{resource.resName}</h1>
            <a href={resource.resUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{resource.resUrl}</a>
          </div>
        ))}
      </div>
    </div >
  );
}

export default ResourceModal;