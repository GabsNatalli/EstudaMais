import React from "react";

const UserDashboard = () => {
  return (
    <div className="flex">
      <aside className="w-64 bg-primary text-white h-screen p-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul>
          <li className="mb-2"><a href="#">Início</a></li>
          <li className="mb-2"><a href="#">Responder Questões</a></li>
          <li className="mb-2"><a href="#">Cadernos</a></li>
          <li className="mb-2"><a href="#">Meu Desempenho</a></li>
          <li><a href="#">Sair</a></li>
        </ul>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Bem-vindo, Usuário!</h1>
        <p className="text-gray-700 mt-2">Escolha uma opção no menu para começar.</p>
      </main>
    </div>
  );
};

export default UserDashboard;
