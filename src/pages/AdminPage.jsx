import React from "react";

const AdminPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Área Administrativa</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-lg font-medium mb-4">Inserir Nova Questão</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Enunciado</label>
            <textarea className="w-full px-3 py-2 border rounded" rows="3"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Alternativas</label>
            <input className="w-full px-3 py-2 border rounded mb-2" placeholder="Alternativa A" />
            <input className="w-full px-3 py-2 border rounded mb-2" placeholder="Alternativa B" />
            <input className="w-full px-3 py-2 border rounded mb-2" placeholder="Alternativa C" />
            <input className="w-full px-3 py-2 border rounded mb-2" placeholder="Alternativa D" />
            <input className="w-full px-3 py-2 border rounded" placeholder="Alternativa E" />
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded">Salvar Questão</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
