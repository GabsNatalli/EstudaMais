import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">EstudaFácil</h1>
        <div>
          <button className="mr-4">Entrar</button>
          <button className="bg-white text-primary px-4 py-2 rounded">Criar Conta</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
