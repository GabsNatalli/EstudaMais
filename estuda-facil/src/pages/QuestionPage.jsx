import React from "react";

const QuestionPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Resolução de Questões</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <p className="text-lg font-medium mb-4">Enunciado da questão aqui...</p>
        <ul className="mb-4">
          <li><button className="block w-full text-left p-2 border rounded mb-2">A) Alternativa A</button></li>
          <li><button className="block w-full text-left p-2 border rounded mb-2">B) Alternativa B</button></li>
          <li><button className="block w-full text-left p-2 border rounded mb-2">C) Alternativa C</button></li>
          <li><button className="block w-full text-left p-2 border rounded mb-2">D) Alternativa D</button></li>
          <li><button className="block w-full text-left p-2 border rounded">E) Alternativa E</button></li>
        </ul>
        <button className="bg-primary text-white px-4 py-2 rounded">Responder</button>
      </div>
    </div>
  );
};

export default QuestionPage;
