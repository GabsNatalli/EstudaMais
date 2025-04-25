import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <motion.header
        className="text-center py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">Seu estudo mais leve e inteligente</h1>
        <p className="text-lg text-gray-700">Plataforma de estudo para alunos e concurseiros.</p>
      </motion.header>
    </div>
  );
};

export default LandingPage;
