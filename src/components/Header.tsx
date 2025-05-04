import React from "react";

export default function Header() {
  return (
    <header className="bg-marian-blue px-8 py-4 flex justify-between items-center">
      <div className="font-bold text-lg text-white">AVANCE CONSULTORIA JÚNIOR</div>
      <nav className="flex items-center gap-4">
        <a href="#" className="font-bold text-columbia-blue hover:text-african-violet transition-colors">Home</a>
        <a href="#" className="font-bold text-columbia-blue hover:text-african-violet transition-colors">Serviços</a>
        <a href="#" className="font-bold text-columbia-blue hover:text-african-violet transition-colors">Contato</a>
        <a href="#" className="font-bold text-columbia-blue hover:text-african-violet transition-colors">Blog</a>
        <button className="ml-4 px-3 py-1 bg-african-violet text-white rounded hover:bg-marian-blue transition-colors">Login</button>
      </nav>
    </header>
  );
}
