import React from "react";

const PerformancePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Meu Desempenho</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <p>Total de questões respondidas: <strong>10</strong></p>
        <p>Acertos: <strong>7</strong></p>
        <p>Erros: <strong>3</strong></p>
        <p>Percentual de acertos: <strong>70%</strong></p>
        <div className="mt-4">
          <p>Gráfico (mock):</p>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default PerformancePage;
