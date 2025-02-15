export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-[var(--navy)] text-center">
        <h2 className="text-4xl font-bold text-[var(--green)]">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-20">
          <div className="bg-[var(--light-navy)] p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600">Description.</p>
          </div>
          <div className="bg-[var(--light-navy)] p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-600">Description.</p>
          </div>
          <div className="bg-[var(--light-navy)] p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-600">Description.</p>
          </div>
        </div>
      </section>
    );
  }
  