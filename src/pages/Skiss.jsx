// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <div className="sm:h-[400px] h-[800px] bg-slate-600 mt-2">
      <h1 className="text-4xl text-center text-white">Skills</h1>
      <div className="flex flex-wrap justify-center p-6 gap-10 sm:mt-8">
        <div className="w-[200px] sm:mt-0 flex-col h-[120px] bg-white hover:shadow-lg shadow-lg rounded">
          <i className="fa-solid fa-lightbulb ml-4 mt-3 text-3xl text-yellow-400"></i>
          <h1 className="text-3xl text-center text-yellow-400">Inventions</h1>
        </div>
        <div className="w-[200px] sm:mt-0 mt-4 h-[120px] bg-white hover:shadow-lg shadow-lg rounded">
        <i className=" text-orange-400 text-3xl ml-4 mt-4 fa-regular fa-handshake"></i>
          <h1 className="text-3xl text-center text-orange-500">TeamWork</h1>
        </div>
        <div className="w-[200px] sm:mt-0 mt-4 h-[120px] bg-white hover:shadow-lg shadow-lg rounded">
        <i className="fa-solid fa-people-roof text-3xl mt-4 ml-4  text-blue-500 "></i>
          <h1 className="text-3xl text-center text-blue-500">mangement</h1>
        </div>
        <div className="w-[200px] sm:mt-0 mt-4 h-[120px] bg-white hover:shadow-lg shadow-lg rounded">
        <i className="fa-solid fa-bullhorn text-3xl mt-4 ml-4 text-yellow-400"></i>
          <h1 className="text-3xl text-center text-yellow-400">Marketing</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
