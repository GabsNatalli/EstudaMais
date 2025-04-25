import React from "react";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-secondary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Entrar</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Digite seu email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Senha</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="admin" className="mr-2" />
            <label htmlFor="admin" className="text-sm">Entrar como admin</label>
          </div>
          <button className="w-full bg-primary text-white py-2 rounded">Entrar</button>
          <p className="text-center text-sm mt-4">
            Não tem uma conta? <a href="#" className="text-primary">Criar conta</a>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginPage;
