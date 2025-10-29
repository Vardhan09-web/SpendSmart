import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Tailwind is Working 
      </h1>
      <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
        Click Me
      </button>
    </div>
  );
};

export default App;
