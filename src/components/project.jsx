import React from "react";
import { Link } from "react-router-dom";
import "../css/Project.css";

const Project = () => {
  return (
    <div className="project-page">

      {/* Header */}
      <section className="project-hero">
        <h1>Our Projects</h1>
        <p>
          Explore our latest innovations and upcoming developments.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <div className="project-tag">Featured</div>

          <h2>3D Model Project</h2>

          <p>
            Experience our interactive 3D models and immersive visualization
            technology.
          </p>

          <a
            href="https://3dmodel-delta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View Project →
          </a>
        </div>

        {/* Future Project */}
        <div className="project-card coming-soon">
          <div className="project-tag orange">Coming Soon</div>

          <h2>AI Solutions</h2>

          <p>
            Intelligent automation and AI-powered applications are currently
            under development.
          </p>

          <button className="disabled-btn">
            Coming Soon
          </button>
        </div>

        {/* Future Project */}
        <div className="project-card coming-soon">
          <div className="project-tag orange">Coming Soon</div>

          <h2>Cloud Solutions</h2>

          <p>
            Scalable cloud infrastructure and enterprise services will be added
            in future updates.
          </p>

          <button className="disabled-btn">
            Coming Soon
          </button>
        </div>

        {/* More Projects */}
        <div className="project-card future-card">
          <h2>More Projects</h2>

          <p>
            New projects are continuously being developed. Stay tuned for
            exciting innovations and upcoming releases.
          </p>

          <Link to="/" className="project-btn">
            Learn More →
          </Link>
        </div>

      </section>
    </div>
  );
};

export default Project;