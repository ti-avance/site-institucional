export default function Contact() {
    return (
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
    )
}