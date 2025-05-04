import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ghost-white text-marian-blue">
      <Header />

      {/* Hero Section */}
      <section className="hero flex flex-col md:flex-row items-center justify-around py-16 px-5 bg-columbia-blue gap-8">
        <div className="hero-text max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-marian-blue">Empresa Júnior de Consultoria Empresarial, Jurídica e Comunicação</h1>
          <p className="text-lg text-african-violet">Mais de 80 projetos desde 2007</p>
        </div>
        <img src="https://placehold.co/300x200?text=Hero" alt="Imagem hero" className="max-w-xs rounded shadow bg-white" />
      </section>

      {/* Services Section */}
      <section className="services py-12 px-5">
        <h2 className="section-title text-center text-2xl md:text-3xl font-semibold mb-8 text-marian-blue">Nossos Serviços</h2>
        <div className="cards flex flex-col md:flex-row justify-center gap-8">
          {[1,2,3].map((i) => (
            <div key={i} className="card bg-white border border-columbia-blue rounded-lg overflow-hidden p-6 w-full md:w-72 text-center shadow">
              <img src="https://placehold.co/200x150?text=Servi%C3%A7o" alt="Serviço" className="w-full h-auto mb-4 rounded bg-ghost-white" />
              <h4 className="font-semibold text-lg mb-2 text-african-violet">Subheading</h4>
              <p className="text-marian-blue">Body text for whatever you’d like to add more to the subheading.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients py-12 px-5 bg-ghost-white">
        <h2 className="section-title text-center text-2xl md:text-3xl font-semibold mb-8 text-marian-blue">Confira nossos clientes</h2>
        <div className="carousel flex items-center gap-8 overflow-x-auto justify-center">
          {[1,2,3].map((i) => (
            <img key={i} src={`https://placehold.co/100x100?text=Cliente+${i}`} alt={`Cliente ${i}`} className="h-24 w-24 object-cover rounded-full shadow bg-white" />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team bg-columbia-blue py-12 px-5 text-center">
        <h2 className="section-title text-2xl md:text-3xl font-semibold mb-8 text-marian-blue">Nossa equipe</h2>
        <div className="flex flex-col items-center">
          <img src="https://placehold.co/150x150?text=Equipe" alt="Equipe" className="w-36 h-36 rounded-full object-cover mb-4 bg-white" />
          <h4 className="font-semibold text-lg mb-2 text-african-violet">Subheading</h4>
          <p className="text-marian-blue">Body text for whatever you’d like to add more to the subheading.</p>
        </div>
      </section>

      {/* Contact & About Section */}
      <section className="contact flex flex-col md:flex-row flex-wrap justify-center bg-marian-blue text-white py-12 px-5 gap-12">
        <div className="contact-form flex-1 min-w-[300px] max-w-md">
          <h2 className="section-title text-2xl font-semibold mb-6 text-columbia-blue">Entre em contato conosco!</h2>
          <form className="flex flex-col gap-4">
            <label className="text-sm font-medium text-white">Email</label>
            <input type="email" placeholder="Seu e-mail" className="rounded px-3 py-2 text-marian-blue bg-white" />
            <label className="text-sm font-medium text-white">Mensagem</label>
            <textarea rows={4} placeholder="Como podemos te ajudar?" className="rounded px-3 py-2 text-marian-blue bg-white" />
            <button type="submit" className="bg-african-violet hover:bg-columbia-blue text-white rounded px-4 py-2 transition-colors">Enviar</button>
          </form>
        </div>
        <div className="about-text flex-1 min-w-[300px] max-w-md">
          <h2 className="section-title text-2xl font-semibold mb-6 text-columbia-blue">Sobre nós</h2>
          <p className="text-columbia-blue">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facere provident, saepe doloribus impedit ipsam perspiciatis accusamus iste atque modi nulla tempora soluta fugit dolorum, quo culpa doloremque consectetur repellat.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
