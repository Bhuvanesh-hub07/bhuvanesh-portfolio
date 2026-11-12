import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const profile = {
  name: 'Bhuvanesh S',
  email: 'bbhuvanesh680@gmail.com',
  phone: '+91 9585678034',
  location: 'Hosur, Tamil Nadu, India',
  github: 'https://github.com/Bhuvanesh-hub07',
  linkedin: 'https://www.linkedin.com/in/bhuvanesh-s-5b6689296',
};

const projects = [
  {
    n: '01',
    title: 'Multiplier-Less 2-D DCT Architecture',
    category: 'VLSI · RTL DESIGN',
    date: 'Jul 2026 — Present',
    description: 'A multiplier-less 2-D Discrete Cosine Transform architecture using CSD encoding to reduce hardware complexity and computational cost.',
    tech: ['Verilog HDL', 'FPGA / RTL', 'CSD Encoding'],
    visual: 'dct',
  },
  {
    n: '02',
    title: 'AI-Based Employee Wellness Platform',
    category: 'AI · NLP',
    date: 'Aug 2026 — Present',
    description: 'An AI-based platform exploring emotion analysis and personalized wellness recommendations with NLP and transformer models.',
    tech: ['Python', 'BERT / DistilBERT', 'NLP', 'Machine Learning'],
    visual: 'wellness',
  },
  {
    n: '03',
    title: 'AquaVolt — Telemetry & Monitoring',
    category: 'EMBEDDED · IoT',
    date: 'Feb 2026',
    description: 'An IoT system for real-time water and energy monitoring using sensor inputs and cloud dashboards for telemetry and usage awareness.',
    tech: ['ESP32', 'ACS712', 'YF-S201', 'SEN18', 'DHT11', 'Blynk', 'ThingSpeak'],
    visual: 'aquavolt',
    featured: true,
  },
  {
    n: '04',
    title: 'AI-Based Disease Detection Using CNN',
    category: 'AI · COMPUTER VISION',
    date: 'Oct 2025',
    description: 'A CNN-based medical image classification project covering brain tumor and bone fracture detection, with model validation.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    visual: 'vision',
  },
  {
    n: '05',
    title: 'Smart Agriculture Monitoring',
    category: 'EMBEDDED · IoT',
    date: 'Dec 2025',
    description: 'An ESP32-based monitoring system for soil nutrients, rainfall, temperature, and humidity to support data-informed agriculture.',
    tech: ['ESP32', 'Arduino IDE', 'NPK Sensor', 'Rain Sensor', 'DHT11'],
    visual: 'agriculture',
  },
  {
    n: '06',
    title: 'NICU Vital Signs Monitoring',
    category: 'HEALTH TECH · EMBEDDED',
    date: 'Aug 2025',
    description: 'A prototype for monitoring temperature and pulse / SpO₂ using sensors and GSM-based alerts. This is an academic prototype, not a certified medical device.',
    tech: ['Arduino Uno', 'DS18B20', 'MAX30102', 'SIM800L', 'ThingSpeak'],
    visual: 'nicu',
  },
];

const experience = [
  {
    role: 'AI/ML Intern',
    company: 'Infosys Springboard · Internship 7.0',
    period: 'Aug 2026 — Present',
    details: 'Hands-on work with AI/ML, NLP, transformer models, Python-based model development, testing, evaluation, and documentation.',
  },
  {
    role: 'Quality Control Intern',
    company: 'Enercon Asia Pacific Systems Pvt. Ltd. · Hosur',
    period: 'Jun 2026 — Jul 2026',
    details: 'Supported quality inspection and electrical testing of transformers, motors, PCBs, relays, sensors, and control components.',
  },
  {
    role: 'Embedded Systems Intern',
    company: 'ISM University of Skills · Bengaluru',
    period: 'Apr 2026 — May 2026',
    details: 'Developed Embedded C applications, interfaced sensors, and practiced circuit simulation, debugging, and hardware–software integration.',
  },
  {
    role: 'Engineering Intern',
    company: 'Titan Watches Pvt. Ltd. · Hosur',
    period: 'Jul 2025 — Dec 2025',
    details: 'Gained exposure to electronics assembly, automated testing, quality inspection, precision measurement, and manufacturing quality practices.',
  },
];

const awards = [
  ['01', '1st Place — Brain Tumor Detection using CNN', 'VELONIX 2K25 · Er. Perumal Manimekalai College of Engineering · 2025'],
  ['02', '1st Place — Wireless Electricity', 'National Level Symposium · PSV College of Engineering, Krishnagiri · 2025'],
  ['03', '2nd Place — AI-Powered Image Processing', 'PRAGYA 2K24 · R.P. Sarathy Institute of Technology, Salem · 2024'],
  ['04', '1st Place — AquaVolt: Telemetry & Monitoring', 'Reviva’26 · Government College of Engineering, Bargur · 2026'],
  ['05', '2nd Place — AquaVolt: Telemetry & Monitoring', 'National Level Symposium · Paavai Engineering College, Namakkal · 2026'],
  ['06', 'Participant — TN-IMPACT Hackathon', 'AquaVolt: Telemetry & Monitoring System · SONA College of Technology, Salem · 2026'],
];

const skillGroups = [
  { title: 'Embedded & Hardware', items: ['Embedded C', 'Arduino UNO', 'ESP32', '8051', 'Sensor interfacing', 'Hardware debugging'] },
  { title: 'AI & Programming', items: ['Python', 'TensorFlow', 'CNN', 'NLP', 'BERT / DistilBERT', 'C / C++'] },
  { title: 'IoT & Connectivity', items: ['MQTT concepts', 'Blynk', 'ThingSpeak', 'Wireless communication', 'Networking'] },
  { title: 'Tools & Systems', items: ['Verilog HDL', 'FPGA / RTL', 'Proteus', 'Tinkercad', 'Git / GitHub', 'VS Code', 'PLC / SCADA'] },
];

const categories = ['All', 'Embedded · IoT', 'AI · ML', 'VLSI'];

function ProjectVisual({ type, title }) {
  return (
    <div className={`project-visual project-visual-${type}`}>
      <svg viewBox="0 0 520 300" role="img" aria-label={`${title} technical illustration`}>
        <title>{title}</title>
        <path className="visual-rule" d="M24 42H496M24 258H496" />
        <text className="visual-label" x="28" y="30">ENGINEERING NOTE / {type.toUpperCase()}</text>
        <text className="visual-index" x="464" y="280">{type === 'aquavolt' ? '03' : type === 'wellness' ? '02' : type === 'vision' ? '04' : type === 'agriculture' ? '05' : type === 'nicu' ? '06' : '01'}</text>
        {type === 'dct' && (
          <>
            <text className="visual-data" x="34" y="76">2D DCT</text>
            <text className="visual-small" x="34" y="96">CSD ENCODING</text>
            {Array.from({ length: 64 }, (_, i) => {
              const x = 186 + (i % 8) * 27;
              const y = 72 + Math.floor(i / 8) * 22;
              return <rect className={i % 9 === 0 || i === 1 ? 'matrix-cell matrix-cell-active' : 'matrix-cell'} key={i} x={x} y={y} width="16" height="13" />;
            })}
            <path className="visual-accent-line" d="M42 136H139M42 144H113M42 152H126" />
            <text className="visual-small" x="34" y="192">LOW-COMPLEXITY</text>
            <text className="visual-data" x="34" y="218">MULTIPLIER-FREE</text>
          </>
        )}
        {type === 'wellness' && (
          <>
            <text className="visual-small" x="36" y="78">LANGUAGE INPUT</text>
            <path className="visual-muted-line" d="M36 99H154M36 111H129M36 123H144" />
            <path className="visual-accent-line" d="M175 110H222M211 100L222 110L211 120" />
            <rect className="visual-panel" x="238" y="66" width="236" height="142" />
            <text className="visual-small" x="256" y="91">EMOTION ANALYSIS</text>
            <path className="visual-wave" d="M256 140C269 140 269 113 282 113S295 161 308 161S321 128 334 128S347 150 360 150S373 120 386 120S399 143 412 143S425 132 438 132" />
            <text className="visual-data" x="256" y="185">NLP → PERSONALIZED SUPPORT</text>
          </>
        )}
        {type === 'aquavolt' && (
          <>
            <rect className="visual-panel" x="35" y="62" width="450" height="166" />
            <text className="visual-small" x="54" y="87">AQUAVOLT / LIVE TELEMETRY</text>
            <text className="visual-small" x="54" y="122">WATER FLOW</text>
            <path className="visual-wave" d="M166 118H211L221 104L235 137L251 111L267 119H452" />
            <text className="visual-small" x="54" y="164">ENERGY USE</text>
            <path className="visual-accent-line" d="M166 160H203L215 151L229 174L244 143L260 161H452" />
            <path className="visual-muted-line" d="M54 190H452" />
            <circle className="visual-node" cx="452" cy="118" r="4" />
            <circle className="visual-node" cx="452" cy="160" r="4" />
            <text className="visual-small" x="54" y="214">ESP32 · CLOUD DASHBOARD</text>
          </>
        )}
        {type === 'vision' && (
          <>
            <text className="visual-small" x="35" y="78">IMAGE CLASSIFICATION</text>
            <rect className="visual-panel" x="36" y="91" width="173" height="123" />
            {Array.from({ length: 36 }, (_, i) => {
              const row = Math.floor(i / 6);
              const col = i % 6;
              const active = (row === 1 && col > 1 && col < 5) || (row === 2 && col > 0 && col < 5) || (row === 3 && col > 1 && col < 4);
              return <rect className={active ? 'scan-cell scan-cell-active' : 'scan-cell'} key={i} x={54 + col * 23} y={107 + row * 16} width="13" height="9" />;
            })}
            <path className="visual-accent-line" d="M232 129H279M268 119L279 129L268 139" />
            <text className="visual-small" x="303" y="112">CNN MODEL</text>
            <text className="visual-data" x="303" y="140">BRAIN TUMOR</text>
            <text className="visual-data" x="303" y="162">BONE FRACTURE</text>
            <path className="visual-muted-line" d="M303 180H464M303 190H425" />
          </>
        )}
        {type === 'agriculture' && (
          <>
            <path className="visual-muted-line" d="M40 204H476" />
            <path className="visual-plant" d="M124 204V145M124 171C108 164 101 153 101 142C113 144 123 151 124 163M124 183C140 176 147 165 147 154C135 156 125 163 124 175" />
            <path className="visual-plant" d="M282 204V131M282 160C263 150 257 138 259 125C273 129 281 137 282 151M282 176C301 166 307 153 305 141C291 145 283 153 282 167" />
            <path className="visual-accent-line" d="M60 221H440" />
            <circle className="visual-node" cx="124" cy="122" r="5" />
            <circle className="visual-node" cx="282" cy="110" r="5" />
            <circle className="visual-node" cx="418" cy="153" r="5" />
            <path className="visual-muted-line" d="M124 122V101H418V153M282 110V101" />
            <text className="visual-small" x="337" y="125">ESP32 SENSOR NETWORK</text>
            <text className="visual-data" x="337" y="184">SOIL · RAIN · CLIMATE</text>
          </>
        )}
        {type === 'nicu' && (
          <>
            <rect className="visual-panel" x="35" y="65" width="450" height="159" />
            <text className="visual-small" x="54" y="92">VITALS / ACADEMIC PROTOTYPE</text>
            <text className="visual-data" x="54" y="128">PULSE</text>
            <text className="visual-data" x="54" y="164">SpO₂</text>
            <path className="visual-wave" d="M136 123H183L193 112L207 140L223 97L240 123H448" />
            <path className="visual-accent-line" d="M136 159H208L220 151L231 168L242 147L255 159H448" />
            <text className="visual-small" x="54" y="198">TEMPERATURE · GSM ALERTS</text>
          </>
        )}
      </svg>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg className="download-icon" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 1.75v8.5m0 0 3-3m-3 3-3-3M2.5 10.75v2.75h11v-2.75" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const revealItems = document.querySelectorAll('.scroll-reveal');

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [filter]);

  function handlePortraitPointerMove(event) {
    if (event.pointerType !== 'mouse') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty('--portrait-rotate-x', `${-y * 3}deg`);
    event.currentTarget.style.setProperty('--portrait-rotate-y', `${x * 4}deg`);
  }

  function resetPortraitPointer(event) {
    if (event.pointerType !== 'mouse') return;
    event.currentTarget.style.setProperty('--portrait-rotate-x', '0deg');
    event.currentTarget.style.setProperty('--portrait-rotate-y', '-2deg');
  }

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Embedded · IoT') return project.category.includes('EMBEDDED') || project.category.includes('IoT');
    if (filter === 'AI · ML') return project.category.includes('AI') || project.category.includes('NLP') || project.category.includes('COMPUTER VISION');
    return project.category.includes('VLSI');
  });

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#home" aria-label="Bhuvanesh home">
            <span className="brand-mark">B<span>.</span></span>
            <span className="brand-name">Bhuvanesh S<small>Electronics & Communication</small></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
          <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
            {[
              ['About', '#about'],
              ['Projects', '#projects'],
              ['Experience', '#experience'],
              ['Recognition', '#achievements'],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Get in touch <span>↗</span></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <h1 className="hero-name">Bhuvanesh S</h1>
            <p className="eyebrow"><span /> Electronics & Communication Engineering · Class of 2027</p>
            <h2 className="hero-statement" aria-label="Building intelligent systems.">
              <span className="hero-statement-line"><span>Building intelligent</span></span>
              <span className="hero-statement-line"><span>systems.</span></span>
            </h2>
            <p className="hero-intro">
              I’m an ECE student in Hosur exploring embedded systems, IoT, VLSI, and AI/ML. I enjoy turning engineering ideas into practical prototypes and intelligent systems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore selected work <span>↘</span></a>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn profile <span>↗</span></a>
              <a className="resume-link" href={`${import.meta.env.BASE_URL}resume.pdf`} download="Bhuvanesh-S-Resume.pdf">
                <DownloadIcon /> Download Resume
              </a>
            </div>
            <div className="hero-meta">
              <span>{profile.location}</span>
              <span>Open to internships & entry-level opportunities</span>
            </div>
          </div>
          <div className="portrait-entry">
            <div className="portrait-float">
              <figure
                className="hero-portrait"
                onPointerMove={handlePortraitPointerMove}
                onPointerLeave={resetPortraitPointer}
              >
                <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Bhuvanesh S" />
                <figcaption><span>BHUVANESH S</span><span>ECE · EMBEDDED SYSTEMS · IoT</span></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <div className="discipline-strip" aria-label="Areas of interest">
          <div className="section-wrap discipline-inner">
            <span>Areas of practice</span>
            <p>Embedded systems <i>·</i> Internet of Things <i>·</i> VLSI & RTL <i>·</i> AI / ML <i>·</i> Hardware integration</p>
          </div>
        </div>

        <section className="section-wrap content-section about-section" id="about">
          <div className="section-heading scroll-reveal">
            <div><span className="section-kicker">01 / ABOUT</span><h2>Curiosity, made<br />practical.</h2></div>
            <p className="heading-note">A foundation in electronics, with a growing interest in the systems that connect hardware and intelligence.</p>
          </div>
          <div className="about-grid scroll-reveal">
            <div className="about-copy">
              <p>I’m pursuing a <strong>B.E. in Electronics & Communication Engineering</strong> at Er. Perumal Manimekalai College of Engineering, Hosur. My interests span microcontrollers and sensor interfaces to digital architectures and machine-learning applications.</p>
              <p>Through academic projects and industrial internships, I’ve explored prototype development, hardware debugging, quality inspection, and model development. I’m keen to keep learning, collaborate with engineering teams, and contribute to solutions that solve real problems.</p>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Explore my GitHub <span>↗</span></a>
            </div>
            <div className="stats-grid" aria-label="Portfolio at a glance">
              <div><strong>06<span>+</span></strong><span>Projects documented</span></div>
              <div><strong>04</strong><span>Internship experiences</span></div>
              <div><strong>07.85</strong><span>CGPA out of 10</span></div>
              <div><strong>06<span>+</span></strong><span>Awards & recognitions</span></div>
            </div>
          </div>
          <div className="education-strip scroll-reveal">
            <span className="education-label">EDUCATION</span>
            <div><h3>B.E. Electronics & Communication Engineering</h3><p>Er. Perumal Manimekalai College of Engineering · Hosur, Tamil Nadu</p></div>
            <span className="education-date">2023 — 2027 <small>EXPECTED</small></span>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap content-section">
            <div className="section-heading scroll-reveal">
              <div><span className="section-kicker">02 / SELECTED WORK</span><h2>Projects with a<br />purpose.</h2></div>
              <p className="heading-note">Embedded prototypes, connected systems, digital design, and applied AI—each an opportunity to learn by building.</p>
            </div>
            <div className="filter-row scroll-reveal" role="group" aria-label="Filter projects">
              {categories.map((category) => {
                const count = category === 'All'
                  ? projects.length
                  : projects.filter((project) => {
                    if (category === 'Embedded · IoT') return project.category.includes('EMBEDDED') || project.category.includes('IoT');
                    if (category === 'AI · ML') return project.category.includes('AI') || project.category.includes('NLP') || project.category.includes('COMPUTER VISION');
                    return project.category.includes('VLSI');
                  }).length;
                return (
                  <button
                    key={category}
                    className={filter === category ? 'filter-btn active' : 'filter-btn'}
                    type="button"
                    aria-pressed={filter === category}
                    onClick={() => setFilter(category)}
                  >
                    {category}<span>{String(count).padStart(2, '0')}</span>
                  </button>
                );
              })}
            </div>
            <div className="project-list">
              {filteredProjects.map((project, index) => (
                <article className="project-row scroll-reveal" key={project.n} style={{ transitionDelay: `${(index % 4) * 75}ms` }}>
                  <ProjectVisual type={project.visual} title={project.title} />
                  <div className="project-copy">
                    <div className="project-meta">
                      <span>{project.category}</span>
                      {project.featured && <span className="project-featured">Featured project</span>}
                      <span>{project.date}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                    <a className="project-link" href={profile.github} target="_blank" rel="noreferrer">View code on GitHub <span>↗</span></a>
                  </div>
                </article>
              ))}
            </div>
            <div className="github-callout scroll-reveal">
              <p>More experiments and code</p>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Visit GitHub <span>↗</span></a>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section skills-section">
          <div className="section-heading scroll-reveal">
            <div><span className="section-kicker">03 / TOOLKIT</span><h2>Tools for the<br />work at hand.</h2></div>
            <p className="heading-note">A growing toolkit across electronics, firmware, connected devices, and intelligent applications.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group scroll-reveal" key={group.title} style={{ transitionDelay: `${index * 75}ms` }}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap content-section">
            <div className="section-heading scroll-reveal">
              <div><span className="section-kicker">04 / EXPERIENCE</span><h2>Learning by<br />doing.</h2></div>
              <p className="heading-note">Experience across AI workflows, embedded development, electronics testing, and manufacturing quality.</p>
            </div>
            <div className="timeline">
              {experience.map((item, index) => (
                <article className="timeline-item scroll-reveal" key={item.company} style={{ transitionDelay: `${index * 70}ms` }}>
                  <span className="timeline-index">0{index + 1}</span>
                  <div className="timeline-content">
                    <div className="timeline-top"><div><h3>{item.role}</h3><p>{item.company}</p></div><span className="timeline-period">{item.period}</span></div>
                    <p className="timeline-details">{item.details}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap content-section awards-section" id="achievements">
          <div className="section-heading scroll-reveal">
            <div><span className="section-kicker">05 / RECOGNITION</span><h2>Milestones<br />along the way.</h2></div>
            <p className="heading-note">Recognition earned through student projects, technical events, and engineering competitions.</p>
          </div>
          <div className="awards-list">
            {awards.map(([number, title, detail]) => (
              <article className="award-row scroll-reveal" key={number} style={{ transitionDelay: `${(Number(number) - 1) * 55}ms` }}>
                <span className="award-number">{number}</span>
                <div><h3>{title}</h3><p>{detail}</p></div>
                <span className="award-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
          <div className="extra-roles scroll-reveal">
            <h3 className="extra-roles-title">BEYOND THE CLASSROOM</h3>
            <div className="extra-roles-featured">Google Student Ambassador · 2026</div>
            <div className="extra-roles-list">
              <span>President · Maths Club, PMC Tech</span>
              <span>National Entrepreneurship Challenge · IIT Bombay, 2024</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <span className="section-kicker">06 / CONTACT</span>
            <div className="contact-heading">
              <h2>Good work starts<br />with a conversation.</h2>
              <p>I’m open to internships, entry-level opportunities, project collaborations, and conversations about embedded systems and AI.</p>
            </div>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<span>↗</span></a>
            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
              <a className="resume-contact-link" href={`${import.meta.env.BASE_URL}resume.pdf`} download="Bhuvanesh-S-Resume.pdf"><DownloadIcon /> Download Resume</a>
              <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">B<span>.</span></span><span className="brand-name">Bhuvanesh S<small>Electronics & Communication</small></span></a>
        <span>Designed & built with curiosity · © {new Date().getFullYear()}</span>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
