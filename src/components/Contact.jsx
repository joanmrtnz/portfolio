
export default function Contact() {

  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center justify-center text-center px-0 m-auto"
    >
      <div
        className="section-readable group border border-[var(--green)] w-full max-w-[980px] min-h-[360px] sm:min-h-[420px] md:min-h-[480px] p-6 sm:p-8 md:p-10 flex flex-col justify-center transition-all duration-300 hover:shadow-[0_0_20px_5px_var(--green)]"
      >
        <h2
          className="type-section text-[var(--green)]"
        >
          Let&apos;s Connect_
        </h2>

        <p
          className="type-body text-[var(--light-slate)] my-[54px] sm:my-[82px] mx-auto"
        >
          I’m looking for <strong>Product Engineer</strong> or <strong>Full-stack Product Engineer</strong> opportunities where I can help turn ideas into <strong>shipped products</strong>. I’m especially interested in teams that value <strong>communication</strong>, <strong>ownership</strong>, <strong>product thinking</strong>, and <strong>strong technical execution</strong> across frontend, backend, mobile, and infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-2 items-center justify-center">
          <a
            href="mailto:info@jnmrtnz.com"
            className="text-[var(--green)] border border-[var(--green)] px-4 py-2 sm:px-6 sm:py-3 rounded-lg type-ui underline-offset-4 transition-all duration-300 hover:underline focus-visible:underline focus:outline-none"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/joan-mart%C3%ADnez-744477136/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--green)] border border-[var(--green)] px-4 py-2 sm:px-6 sm:py-3 rounded-lg type-ui underline-offset-4 transition-all duration-300 hover:underline focus-visible:underline focus:outline-none"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
