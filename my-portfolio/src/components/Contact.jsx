export default function Contact() {
    return (
      <section id="contact" className="bg-[var(--navy)] text-center pt-[100px]">
        <h2 className="text-4xl font-bold text-[var(--green)]">Contact</h2>
        <form className="mt-6 max-w-lg mx-auto bg-[var(--light-navy)] p-6 rounded-lg">
          <input type="text" placeholder="Your name" className="w-full p-2 border rounded-lg mb-4" />
          <input type="email" placeholder="Your email" className="w-full p-2 border rounded-lg mb-4" />
          <textarea placeholder="Message" className="w-full p-2 border rounded-lg mb-4"></textarea>
          <button type="button" 
          className="text-[var(--green)] bg-[var(--navy)] border border-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--navy)] focus:ring-[var(--green)] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-1">
            Submit
          </button>
          </form>
      </section>
    );
  }
  