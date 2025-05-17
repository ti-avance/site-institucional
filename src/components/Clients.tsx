export default function Clients (){
    return(
    <section className="clients py-12 px-5 bg-ghost-white">
        <h2 className="section-title text-center text-2xl md:text-3xl font-semibold mb-8 text-marian-blue">Confira nossos clientes</h2>
        <div className="carousel flex items-center gap-8 overflow-x-auto justify-center">
          {[1,2,3].map((i) => (
            <img key={i} src={`https://placehold.co/100x100?text=Cliente+${i}`} alt={`Cliente ${i}`} className="h-24 w-24 object-cover rounded-full shadow bg-white" />
          ))}
        </div>
      </section>
    )
}