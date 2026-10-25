
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          PG<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="home" className="hero">
        <p className="greeting">HELLO, I'M</p>

        <h1>
          Parami <span>Gunasekara.</span>
        </h1>

        <h2>
          Industrial IT Undergraduate
          <br />
          DevOps & Cloud Enthusiast
        </h2>

        <p className="hero-description">
          Passionate about cloud technologies, automation,
          and building reliable systems. Currently learning
          and exploring the world of DevOps.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            Explore My Work
          </a>

          <a
            href="https://github.com/ParamiGunasekara"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            GitHub Profile
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
