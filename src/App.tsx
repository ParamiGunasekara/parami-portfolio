
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
          <a href="#skills">Skills</a>
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
      
      {/* About Me Section */}
      <section id="about" className="about-section">
        <p className="section-label">GET TO KNOW ME</p>
        <h2 className="section-title">
          About <span>Me.</span>
        </h2>

        <div className="about-content">
          <p>
            I'm an Industrial Information Technology
            undergraduate at Uva Wellassa University of
            Sri Lanka, with an interest in DevOps and
            cloud technologies.
          </p>

          <p>
            I'm currently learning about automation,
            containerization, CI/CD, and cloud
            infrastructure while developing my
            technical and problem-solving skills.
          </p>

          <div className="education-info">
            <h3>Education</h3>
            <p>
              BSc in Industrial Information Technology
            </p>
            <p>Uva Wellassa University of Sri Lanka</p>
            <p>Expected Graduation: 2027</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <p className="section-label">WHAT I'M LEARNING</p>
        <h2 className="section-title">
          Technical <span>Skills.</span>
        </h2>

        <div className="skills-grid">
          {[
            'Linux',
            'Docker',
            'Kubernetes',
            'Git & GitHub',
            'CI/CD',
            'Networking',
            'React',
            'Java',
            'HTML & CSS',
            'PHP',
            'SQL & Databases',
          ].map((skill) => (
            <div className="skill-card" key={skill}>
              <span className="skill-dot"></span>
              {skill}
            </div>
          ))}
        </div>
      </section>

{/* Certifications Section */}
<section id="certifications" className="certifications-section">
  <p className="section-label">MY LEARNING JOURNEY</p>

  <h2 className="section-title">
    My <span>Certifications.</span>
  </h2>

  <div className="certifications-grid">
    <div className="certificate-card">
      <p className="certificate-category">DEVOPS</p>
      <h3>DevOps Foundations: Microservices</h3>
      <p className="certificate-provider">LinkedIn Learning</p>
      <p className="certificate-date">July 2026</p>

      <a
        href="/certificates/devops-microservices.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-button"
      >
        View Certificate ↗
      </a>
    </div>

    <div className="certificate-card">
      <p className="certificate-category">KUBERNETES</p>
      <h3>Kubernetes From 10000 Feet</h3>
      <p className="certificate-provider">
        CoDeKu DevOps Academy
      </p>

      <a
        href="/certificates/kubernetes-fundamentals.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-button"
      >
        View Certificate ↗
      </a>
    </div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="contact-section">
  <p className="section-label">LET'S CONNECT</p>

  <h2 className="section-title">
    Get In <span>Touch.</span>
  </h2>

  <p className="contact-description">
    I'm always interested in learning opportunities,
    collaborations, and connecting with people in
    technology. Feel free to reach out!
  </p>

  <div className="contact-links">
    <a
      href="mailto:paramih36@gmail.com"
      className="contact-card"
    >
      <span className="contact-icon">✉</span>
      <span>Email Me</span>
    </a>

    <a
      href="https://github.com/ParamiGunasekara"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">⌘</span>
      <span>GitHub</span>
    </a>

    <a
      href="https://www.linkedin.com/in/hansikaparami"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">in</span>
      <span>LinkedIn</span>
    </a>

    <a
      href="https://www.hackerrank.com/parami36"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">{"</>"}</span>
      <span>HackerRank</span>
    </a>
  </div>
</section>

{/* Footer */}
<footer className="footer">
  <p>
    © {new Date().getFullYear()} Parami Gunasekara.
    Built with React & TypeScript.
  </p>
</footer>

    </div>
  )
}

export default App
