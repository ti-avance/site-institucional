export default function Services() {
  return (
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
  )
}