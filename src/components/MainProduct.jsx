import React, { useState, useEffect } from 'react';
import '../css/SunicTechnology.css';
import Footer from '../components/Footer';
const SunicTechnology = () => {
  const [activeTab, setActiveTab] = useState('software');

  // animated counters
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const duration = 5000; 
    const steps = 100; 
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
      description: 'Custom software development, enterprise applications, and mobile app development tailored to your business needs.',
      features: ['Web Applications', 'Mobile Apps', 'Cloud Solutions', 'ERP Systems'],
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'hardware',
      title: 'Hardware Infrastructure',
      description: 'Complete hardware solutions including servers, networking equipment, and specialized hardware for various industries.',
      features: ['Server Setup', 'Network Infrastructure', 'Hardware Maintenance', 'IoT Devices'],
      image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'government',
      title: 'Government Projects',
      description: 'Expertise in handling large-scale government projects including ICD yard container management systems.',
      features: ['ICD Yard Management', 'Container Tracking', 'Customs Software', 'Security Systems'],
      image: 'https://cdn.pixabay.com/photo/2024/05/07/00/42/work-8744593_1280.png'
    },
    {
      id: 'automation',
      title: 'Automation Solutions',
      description: 'Streamline your operations with our cutting-edge automation websites and applications.',
      features: ['Process Automation', 'Workflow Management', 'AI Integration', 'Robotic Process Automation'],
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const projectsData = [
    {
      title: "ICD Yard Management System",
      category: "Government Project",
      image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Enterprise Resource Planning",
      category: "Software Solution",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Data Center Setup",
      category: "Hardware Infrastructure",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Process Automation",
      category: "Automation Solution",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const currentService = services.find(service => service.id === activeTab);

  return (
    <div className="sunicTechnologyContainer">
      {/* Navigation */}

      {/* Hero Section */}
      <section id="home" className="sunicHeroSection">
        <div className="sunicHeroContent">
          <h1 className="sunicHeroTitle">Innovative IT Solutions for the Digital Age</h1>
          <p className="sunicHeroDescription">
            Providing cutting-edge hardware, software, and automation solutions with expertise in government projects including ICD yard container management.
          </p>
          <div className="sunicHeroButtons">
            <button className="sunicButtonPrimary">Our Services</button>
            <button className="sunicButtonSecondary">Contact Us</button>
          </div>
        </div>
        <div className="sunicHeroImage">
          <img src="https://cdn.pixabay.com/photo/2024/04/25/02/23/ai-generated-8718795_1280.png" alt="Sunic Technology Solutions" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="sunicServicesSection">
        <div className="sunicSectionHeader">
          <h2 className="sunicSectionTitle">Our Services</h2>
          <p className="sunicSectionSubtitle">Comprehensive IT solutions tailored to your business needs</p>
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
            <p>{currentService.description}</p>
            <ul className="sunicServiceFeatures">
              {currentService.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="sunicButtonPrimary">Learn More</button>
          </div>
          <div className="sunicServiceImage">
            <img src={currentService.image} alt={currentService.title} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="sunicProjectsSection">
        <div className="sunicSectionHeader">
          <h2 className="sunicSectionTitle">Our Projects</h2>
          <p className="sunicSectionSubtitle">Successful implementations across various industries</p>
        </div>

        <div className="sunicProjectsGrid">
          {projectsData.map((project, index) => (
            <div key={index} className="sunicProjectCard">
              <div className="sunicProjectImage">
                <img src={project.image} alt={project.title} />
                <div className="sunicProjectOverlay">
                  <h4>{project.title}</h4>
                  <p>{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="sunicAboutSection">
        <div className="sunicSectionHeader">
          <h2 className="sunicSectionTitle">About Sunic Technology</h2>
          <p className="sunicSectionSubtitle">Leading the way in IT innovation since 2010</p>
        </div>

        <div className="sunicAboutContent">
          <div className="sunicAboutText">
            <p>
              Sunic Technology is a premier IT solutions provider specializing in hardware, software, and automation systems. 
              With extensive experience in handling government projects, including ICD yard container management systems, 
              we deliver robust and scalable solutions to meet the evolving needs of our clients.
            </p>
            <p>
              Our team of experts is dedicated to providing cutting-edge technology solutions that drive efficiency, 
              productivity, and growth for businesses of all sizes.
            </p>
            <div className="sunicStatsContainer">
              <div className="sunicStatItem">
                <h3>{projects}+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="sunicStatItem">
                <h3>{clients}+</h3>
                <p>Clients Served</p>
              </div>
              <div className="sunicStatItem">
                <h3>{years}+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="sunicAboutImage">
            <img src="https://cdn.pixabay.com/photo/2020/10/21/21/55/man-5674344_1280.png" alt="Sunic Technology Team" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="sunicContactSection">
        <div className="sunicSectionHeader">
          <h2 className="sunicSectionTitle">Get In Touch</h2>
          <p className="sunicSectionSubtitle">Ready to transform your business with our IT solutions?</p>
        </div>

        <div className="sunicContactContent">
          <div className="sunicContactInfo">
            <h3>Contact Information</h3>
            <div className="sunicContactItem">
              <strong>Email:</strong> SunicTechnology@gmail.com

            </div>
            <div className="sunicContactItem">
              <strong>Phone:</strong> +1 (555) 123-4567
            </div>
            <div className="sunicContactItem">
              <strong>Address:</strong> Tower A, Spaze iTech Park, Unit No-561, Tower-B, B1, 5th Floor, Sohna - Gurgaon Rd, Sector 49, Gurugram, Haryana 122018
            </div>
          </div>
          <div className="sunicContactForm">
            <h3>Send us a Message</h3>
            <form className="sunicForm">
              <div className="sunicFormGroup">
                <input type="text" placeholder="Your Name" className="sunicFormInput" />
              </div>
              <div className="sunicFormGroup">
                <input type="email" placeholder="Your Email" className="sunicFormInput" />
              </div>
              <div className="sunicFormGroup">
                <textarea placeholder="Your Message" className="sunicFormTextarea" rows="5"></textarea>
              </div>
              <button type="submit" className="sunicButtonPrimary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SunicTechnology;
