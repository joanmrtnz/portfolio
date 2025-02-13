import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="about">
          <h2>Sobre mí</h2>
          <p>Hola, soy un programador especializado en...</p>
        </section>
        <section id="projects">
          <h2>Proyectos</h2>
          <p>Aquí puedes ver mis trabajos más destacados.</p>
        </section>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>

      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
