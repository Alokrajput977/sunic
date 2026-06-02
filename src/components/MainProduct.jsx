import React, { useState, useEffect } from 'react';
import '../css/SunicTechnology.css';
import Footer from '../components/Footer';

const SunicTechnology = () => {
  const [activeTab, setActiveTab] = useState('software');

  // Animated counters state
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const duration = 2000; // Optimized duration for snappier UI feel
    const steps = 50; 
    const intervalTime = duration / steps;

    const counters = [
      { target: 500, setter: setProjects },
      { target: 250, setter: setClients },
      { target: 13, setter: setYears },
    ];

    counters.forEach(({ target, setter }) => {
      let current = 0;
      const increment = target / steps;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(Math.floor(current));
        }
      }, intervalTime);
    });
  }, []);

  const services = [
    {
      id: 'software',
      title: 'Software Solutions',
      description: 'Engineered for scaling enterprises. We construct responsive, secure web platforms and distributed software environments using modern architectural models designed to streamline your operations.',
      features: ['Web Applications & Microservices', 'Native & Cross-Platform Mobile Apps', 'Cloud-Native Deployments', 'Custom Enterprise Resource Planning (ERP)'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'hardware',
      title: 'Hardware Infrastructure',
      description: 'Future-proof framework setups ensuring complete hardware continuity. From provisioning dense physical architecture to high-performance computing pipelines tailored for maximum system uptime.',
      features: ['Enterprise Server Deployments', 'Secure Network Switching Architecture', 'Proactive Hardware Maintenance Loops', 'Industrial IoT Ecosystem Integration'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'government',
      title: 'Government Projects',
      description: 'Trusted tech partnerships handling mission-critical, large-scale public initiatives. Specializing heavily in custom Inland Container Depot (ICD) yard management systems and automated logistical workflows.',
      features: ['ICD Yard Container Orchestration', 'Real-time Asset Tracking Systems', 'Customs clearance software pipelines', 'High-Perimeter Automated Security Arrays'],
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'automation',
      title: 'Automation Solutions',
      description: 'Systematically eliminate repetitive operational friction. We embed artificial intelligence components and custom robotic process software directly into your web applications to accelerate core metrics.',
      features: ['Intelligent Process Automation (IPA)', 'Adaptive Workflow Management', 'Generative AI & Data Pipelines', 'Robotic Process Automation (RPA) Systems'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80'
    }
  ];

  const projectsData = [
    {
      title: "Automated ICD Yard Orchestration",
      category: "Government Logistics Infrastructure",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Next-Gen Enterprise Cloud ERP Suite",
      category: "Custom Software Development",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Resilient Tier-3 Core Data Center",
      category: "Hardware & Network Infrastructure",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "AI-Powered Warehouse Analytics Dashboard",
      category: "Intelligent Automation Integration",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const currentService = services.find(service => service.id === activeTab);

  return (
    <div className="sunicTechnologyContainer">
      {/* 1. Hero Section */}
      <section id="home" className="sunicHeroSection">
        <div className="sunicHeroContainer">
          <div className="sunicHeroContent">
            <span className="sunicHeroTag">Enterprise IT Innovation</span>
            <h1 className="sunicHeroTitle">Architecting Resilient Infrastructure for Global Enterprise</h1>
            <p className="sunicHeroDescription">
              Sunic Technology deploys top-tier enterprise software architectures, robust hardware environments, and automated custom systems engineered for heavy-duty logistical tracking and government infrastructure projects.
            </p>
            <div className="sunicHeroButtons">
              <a href="#services" className="sunicButtonPrimary">Explore Services</a>
              <a href="#contact" className="sunicButtonSecondary">Partner With Us</a>
            </div>
          </div>
          <div className="sunicHeroImageFrame">
            <div className="sunicHeroGlow"></div>
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Sunic Digital Transformation Hub" 
            />
          </div>
        </div>
      </section>

      {/* 2. Services Segment */}
      <section id="services" className="sunicServicesSection">
        <div className="container">
          <div className="sunicSectionHeader">
            <span className="sunicSectionTag">Capabilities</span>
            <h2 className="sunicSectionTitle">Enterprise Services</h2>
            <div className="sunicTitleBar"></div>
            <p className="sunicSectionSubtitle">High-performance technical domains tailored for complex industry scales</p>
          </div>

          <div className="sunicServicesTabs">
            {services.map(service => (
              <button
                key={service.id}
                className={`sunicTabButton ${activeTab === service.id ? 'sunicTabButtonActive' : ''}`}
                onClick={() => setActiveTab(service.id)}
              >
                {service.title}
              </button>
            ))}
          </div>

          <div className="sunicServiceContent">
            <div className="sunicServiceDescription">
              <h3>{currentService.title}</h3>
              <p className="sunicServiceDescText">{currentService.description}</p>
              <ul className="sunicServiceFeatures">
                {currentService.features.map((feature, index) => (
                  <li key={index}>
                    <span className="sunicCheckIcon">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="sunicButtonPrimary inline-btn">Request Service Scope</button>
            </div>
            <div className="sunicServiceImage">
              <img src={currentService.image} alt={currentService.title} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Projects Showcase Grid */}
      <section id="projects" className="sunicProjectsSection">
        <div className="container">
          <div className="sunicSectionHeader">
            <span className="sunicSectionTag">Case Studies</span>
            <h2 className="sunicSectionTitle">Our Dynamic Projects</h2>
            <div className="sunicTitleBar"></div>
            <p className="sunicSectionSubtitle">Proven systems execution across high-reliability environments</p>
          </div>

          <div className="sunicProjectsGrid">
            {projectsData.map((project, index) => (
              <div key={index} className="sunicProjectCard">
                <div className="sunicProjectImage">
                  <img src={project.image} alt={project.title} />
                  <div className="sunicProjectOverlay">
                    <span className="sunicProjCategory">{project.category}</span>
                    <h4>{project.title}</h4>
                    <span className="sunicProjLink">View Deployment Framework <i className="fas fa-arrow-right"></i></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About & Animated Statistics Matrix */}
      <section id="about" className="sunicAboutSection">
        <div className="container">
          <div className="sunicAboutGrid">
            <div className="sunicAboutText">
              <span className="sunicSectionTag text-left">Enterprise Identity</span>
              <h2 className="sunicSectionTitle text-left">Pioneering Intelligent System Architectures</h2>
              <div className="sunicTitleBar left-align"></div>
              <p className="sunicAboutMainPara">
                Established as an innovative industry leader, Sunic Technology develops complex hardware topologies, resilient software products, and smart digital process automation frameworks.
              </p>
              <p className="sunicAboutSubPara">
                Our distinct area of command rests inside custom government enterprise programs. We are chosen to engineer, configure, and maintain container tracking applications and ICD yards where structural tracking accuracy is non-negotiable.
              </p>
              
              <div className="sunicStatsContainer">
                <div className="sunicStatItem">
                  <h3>{projects}+</h3>
                  <div className="sunicStatBar"></div>
                  <p>Deployments Formed</p>
                </div>
                <div className="sunicStatItem">
                  <h3>{clients}+</h3>
                  <div className="sunicStatBar"></div>
                  <p>Active Enterprise Clients</p>
                </div>
                <div className="sunicStatItem">
                  <h3>{years}+</h3>
                  <div className="sunicStatBar"></div>
                  <p>Years Industry Domain</p>
                </div>
              </div>
            </div>
            
            <div className="sunicAboutImageFrame">
              <div className="sunicAboutImageCard">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sunic Engineering Strategy Group" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Node Section */}
      <section id="contact" className="sunicContactSection">
        <div className="container">
          <div className="sunicContactCard">
            <div className="sunicContactGrid">
              <div className="sunicContactInfo">
                <span className="sunicContactTag">Let's Connect</span>
                <h3>Initiate Infrastructure Discovery Architecture</h3>
                <p>Consult with our lead hardware/software engineers to optimize your workflow layers or arrange system scoping panels.</p>
                
                <div className="sunicContactDetails">
                  <div className="sunicDetailItem">
                    <div className="sunicDetailIcon"><i className="fas fa-envelope"></i></div>
                    <div>
                      <span className="detailLabel">Corporate Communications</span>
                      <span className="detailValue">SunicTechnology@gmail.com</span>
                    </div>
                  </div>
                  <div className="sunicDetailItem">
                    <div className="sunicDetailIcon"><i className="fas fa-phone-alt"></i></div>
                    <div>
                      <span className="detailLabel">Direct Central Routing</span>
                      <span className="detailValue">+1 (555) 123-4567</span>
                    </div>
                  </div>
                  <div className="sunicDetailItem">
                    <div className="sunicDetailIcon"><i className="fas fa-map-marker-alt"></i></div>
                    <div>
                      <span className="detailLabel">HQ Engineering Labs</span>
                      <span className="detailValue">Tower A, Spaze iTech Park, Unit No-561, Tower-B, B1, 5th Floor, Sohna - Gurgaon Rd, Sector 49, Gurugram, Haryana 122018</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sunicContactFormWrapper">
                <h3>Submit Architecture Request</h3>
                <form className="sunicForm" onSubmit={(e) => e.preventDefault()}>
                  <div className="sunicFormGroup">
                    <input type="text" placeholder="Your Name" className="sunicFormInput" required />
                  </div>
                  <div className="sunicFormGroup">
                    <input type="email" placeholder="Your Corporate Email" className="sunicFormInput" required />
                  </div>
                  <div className="sunicFormGroup">
                    <textarea placeholder="Describe your software, hardware, or automation system performance needs..." className="sunicFormTextarea" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="sunicFormSubmitBtn">Transmit Inquiry <i className="fas fa-paper-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SunicTechnology;