export default function Team() {
    return (
        <section className="team bg-columbia-blue py-12 px-5 text-center">
            <h2 className="section-title text-2xl md:text-3xl font-semibold mb-8 text-marian-blue">Nossa equipe</h2>
            <div className="flex flex-col items-center">
                <img src="https://placehold.co/150x150?text=Equipe" alt="Equipe" className="w-36 h-36 rounded-full object-cover mb-4 bg-white" />
                <h4 className="font-semibold text-lg mb-2 text-african-violet">Subheading</h4>
                <p className="text-marian-blue">Body text for whatever you’d like to add more to the subheading.</p>
            </div>
        </section>
    )
}