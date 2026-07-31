function Home() {
    return (
        <main>
            <section className="Hero">
        
        <h1>portfolio professionnel collectif</h1>
        <p>
            Bienvenue sur notre plateforme presentant notre equipe, nos competence et nos realisations en developpement.
        </p>
        <button>
            Decouvrir nos projets
        </button>
        </section>
        <section className="about">

        <h2>Nos objectifs</h2>
        <p>creer une application web monopage , moderne avec React, Node.js et Express afin de presenter nos competences techniques.

        </p>
        </section>
        <section className="skills">
            <h2>Nos competences</h2>
        
        <ul>
            <li>developpemet frontend avec React </li>
            <li>creation d'interface responsive</li>
            <li>Gestion de projet avec Git et Github</li>
        </ul>
        </section>
        </main>
    );
}
export default Home;