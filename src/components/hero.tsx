import React from 'react';

export default function Hero() {
  return (
    <section className="hero flex flex-col md:flex-row items-center justify-around py-16 px-5 bg-columbia-blue gap-8">
      <div className="hero-text max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-marian-blue">Empresa Júnior de Consultoria Empresarial, Jurídica e Comunicação</h1>
        <p className="text-lg text-african-violet">Mais de 80 projetos desde 2007</p>
      </div>
      <img src="https://placehold.co/300x200?text=Hero" alt="Teste" className="max-w-xs rounded shadow bg-white" />
    </section>
  );
}
