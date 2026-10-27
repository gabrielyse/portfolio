import { useState } from 'react';

const github = 'https://github.com/gabrielyse';
const linkedin = 'https://www.linkedin.com/in/gabriel-camposcom/';

const skills = {
  'Linguagens': ['Python', 'Java', 'TypeScript', 'JavaScript'],
  'Frontend': ['React', 'TypeScript', 'JavaScript'],
  'Fundamentos': ['Lógica de programação', 'Bancos de dados', 'APIs'],
};

const projects = [
  {
    title: 'Newe Logic',
    category: 'Case selecionado',
    description: 'Projeto desenvolvido para transformar aprendizado em solução, com atenção à experiência, lógica e acabamento.',
    technologies: ['Desenvolvimento web', 'Lógica', 'Produto'],
  },
  {
    title: 'Altave',
    category: 'Projeto atual',
    description: 'Um case em andamento, onde sigo explorando construção digital com responsabilidade e intenção.',
    technologies: ['Desenvolvimento web', 'Aprendizado', 'Produto'],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className="navbar">
      <div className="container">
        <button className="menu-button" type="button" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '×' : '☰'}
        </button>
        <nav className="navbar-links" aria-label="Navegação principal">
          <a href="#inicio">Home</a><a href="#sobre">Sobre</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a>
        </nav>
      </div>
      {menuOpen && <nav className="mobile-menu" aria-label="Navegação mobile">
        <a href="#inicio" onClick={closeMenu}>Home</a><a href="#sobre" onClick={closeMenu}>Sobre mim</a><a href="#projetos" onClick={closeMenu}>Projetos</a><a href="#contato" onClick={closeMenu}>Contato</a>
      </nav>}
    </header>

    <main>
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h1>Gabriel Campos</h1>
          <h2>Backend Developer</h2>
          <p>Construindo minha trajetória em tecnologia por meio de desenvolvimento de software, projetos e aprendizado contínuo.</p>
          <div className="hero-cta">
            <a href="#contato" className="cta-button primary">Entre em contato</a>
            <a href={github} target="_blank" rel="noreferrer" className="cta-button secondary">Meu GitHub</a>
          </div>
        </div>
      </section>

      <section id="sobre" className="about">
        <h2>Sobre mim</h2>
        <div className="about-container">
          <div className="image-wrapper"><img src="/assets/gabriel-campos.jpeg" alt="Gabriel Campos" /></div>
          <div className="about-content">
            <p className="sobreText">Sou estudante de Análise e Desenvolvimento de Sistemas na Fatec e estou construindo minha trajetória na área de tecnologia, buscando constantemente ampliar meus conhecimentos e desenvolver minhas habilidades.</p>
            <p className="sobreText">Tenho me aprofundado em programação, especialmente em Python, Java, TypeScript e React. Na Aprendizagem por Projetos Integrados (API), desenvolvi três projetos até o momento — um a cada semestre — e venho explorando desenvolvimento de software, lógica de programação, bancos de dados e APIs.</p>
            <p className="sobreText">Tenho interesse em transformar os conhecimentos adquiridos nos estudos em soluções práticas. Sou curioso, dedicado e com muita vontade de aprender, buscando oportunidades para contribuir com uma equipe e evoluir continuamente como profissional.</p>
          </div>
        </div>
        <div className="education">
          <h3>Formação acadêmica</h3>
          <div className="courses">
            <article className="course-box">
              <div className="course-mark"><img src="/assets/fatec.jpeg" alt="Fatec" /></div>
              <h4>Desenvolvimento de Sistemas Multiplataforma</h4>
              <p className="school">Fatec</p>
              <p className="status">2025–2028 · Em andamento</p>
            </article>
          </div>
        </div>
        <div className="achievements">
          <h3>Em desenvolvimento</h3>
          <ul>
            <li>Três projetos realizados na Aprendizagem por Projetos Integrados</li>
            <li>Estudo contínuo de programação, bancos de dados e APIs</li>
            <li>Interesse em criar soluções práticas com tecnologia</li>
          </ul>
        </div>
      </section>

      <section className="technologies" aria-labelledby="technologies-title">
        <h2 id="technologies-title">Tecnologias &amp; ferramentas</h2>
        <p className="intro-text">Conhecimentos que venho desenvolvendo na graduação e em projetos práticos.</p>
        <div className="technologies-container">
          {Object.entries(skills).map(([category, items]) => <article className="skill-category" key={category}>
            <h3>{category}</h3>
            <div className="skills-grid">{items.map((skill) => <div className="skill-item" key={skill}><span className="skill-dot" /><span className="skill-name">{skill}</span></div>)}</div>
          </article>)}
        </div>
      </section>

      <section id="projetos" className="projects">
        <h2>Projetos</h2>
        <div className="project-list">
          {projects.map((project) => <article className="project-item" key={project.title}>
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">{project.technologies.map((technology) => <span className="tech-badge" key={technology}>{technology}</span>)}</div>
          </article>)}
        </div>
      </section>

      <section id="contato" className="contact">
        <h2 className="section-title">Entre em contato</h2>
        <div className="cards-grid">
          <article className="contact-card"><h3>LinkedIn</h3><p>Conecte-se comigo e acompanhe minha trajetória profissional.</p><a className="contact-link" href={linkedin} target="_blank" rel="noreferrer">Visitar perfil</a></article>
          <article className="contact-card"><h3>GitHub</h3><p>Veja meus estudos, exercícios e projetos em desenvolvimento.</p><a className="contact-link" href={github} target="_blank" rel="noreferrer">Visitar perfil</a></article>
        </div>
      </section>
    </main>
  </>;
}

export default App;
