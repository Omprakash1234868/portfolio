import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Om Prakash</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div>
          <p className="hello">Hello, I'm</p>

          <h1>Omprakash Kumar Yadav</h1>

          <h2>Software Engineer | Frontend Developer</h2>

          <p className="hero-text">
            B.Tech CSE (AI) student passionate about software development,
            frontend development and problem solving.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#contact" className="btn outline">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <p>
          I am Omprakash Kumar Yadav, a B.Tech Computer Science and Engineering
          (Artificial Intelligence) student. I am interested in Software
          Engineering, Frontend Development, Java, DSA and building
          real-world applications.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>

        <div className="skills">
          <span>Java</span>
          <span>DSA</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Python</span>
          <span>SQL</span>
          <span>MySQL</span>
          <span>Git & GitHub</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>

        <div className="project-container">

          <div className="project-card">
            <h3>Multilanguage AI Summarizer & Translator</h3>
            <p>
              AI-based application for summarizing and translating text into
              multiple languages using Python and NLP.
            </p>
            <p className="tech">Python • AI • NLP</p>
          </div>

          <div className="project-card">
            <h3>Attendance Leave Management System</h3>
            <p>
              Web-based system designed to manage student attendance and
              leave records efficiently.
            </p>
            <p className="tech">HTML • CSS • JavaScript</p>
          </div>

          <div className="project-card">
            <h3>E-Commerce Website</h3>
            <p>
              Responsive e-commerce website with product sections and
              user-friendly interface.
            </p>
            <p className="tech">HTML • CSS • JavaScript</p>
          </div>

        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h3>Rungta College of Engineering and Technology</h3>
          <p>B.Tech — Computer Science & Engineering (AI)</p>
          <p>2023 – 2027</p>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <h2 className="section-title">Experience</h2>

        <div className="education-card">
          <h3>Frontend Development Intern</h3>
          <p>Cognifyz Technologies</p>
          <p>
            Worked on frontend development tasks using HTML, CSS, JavaScript,
            Bootstrap and SCSS.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2 className="section-title">Contact Me</h2>

        <a
            href="https://gmail.com/omprakash74636@gmail.com"
            target="_blank"
          >
             gmail
          </a>
        

        <div className="social-links">
          <a
            href="https://github.com/Omprakash1234868"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Om Prakash Kumar. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;