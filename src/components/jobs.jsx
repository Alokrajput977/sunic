import React, { useState, useMemo } from "react";
import "../css/CareersPage.css";
import Footer from "../components/Footer"

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFresher, setIsFresher] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [applicationForm, setApplicationForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    experienceYears: "",
    previousCompany: "",
    currentLpa: "",
    expectedLpa: "",
    resumeLink: "",
    coverNote: "",
  });

  // Dynamic Array containing 40+ structured high-tier IT engineering job role profiles
  const jobProfiles = useMemo(() => [
    // --- 1. Frontend Engineering Roles ---
    { id: 1, category: "Frontend", title: "React.js Developer", location: "Gurugram, IN", type: "Full-Time", experience: "2-4 Yrs", salary: "8-14 LPA" },
    { id: 2, category: "Frontend", title: "Senior Frontend Engineer (Next.js)", location: "Remote", type: "Full-Time", experience: "5-8 Yrs", salary: "18-26 LPA" },
    { id: 3, category: "Frontend", title: "UI Developer (Tailwind & TypeScript)", location: "Gurugram, IN", type: "Full-Time", experience: "1-3 Yrs", salary: "6-10 LPA" },
    { id: 4, category: "Frontend", title: "Vue.js Systems Engineer", location: "Gurugram, IN", type: "Full-Time", experience: "3-5 Yrs", salary: "11-16 LPA" },
    { id: 5, category: "Frontend", title: "Junior Frontend Intern", location: "Gurugram, IN", type: "Internship", experience: "0-1 Yrs (Fresher)", salary: "3-5 LPA" },
    { id: 6, category: "Frontend", title: "Web Accessibility (WCAG) Specialist", location: "Remote", type: "Contract", experience: "4+ Yrs", salary: "14-20 LPA" },

    // --- 2. Backend Engineering Roles ---
    { id: 7, category: "Backend", title: "Node.js Core Developer", location: "Gurugram, IN", type: "Full-Time", experience: "3-6 Yrs", salary: "12-18 LPA" },
    { id: 8, category: "Backend", title: "Python Django/FastAPI Developer", location: "Gurugram, IN", type: "Full-Time", experience: "2-5 Yrs", salary: "10-16 LPA" },
    { id: 9, category: "Backend", title: "Senior Java Spring Boot Engineer", location: "Remote", type: "Full-Time", experience: "6-9 Yrs", salary: "22-32 LPA" },
    { id: 10, category: "Backend", title: "GoLang High-Concurrency Engineer", location: "Gurugram, IN", type: "Full-Time", experience: "4-7 Yrs", salary: "20-30 LPA" },
    { id: 11, category: "Backend", title: "PHP Laravel Web Developer", location: "Gurugram, IN", type: "Full-Time", experience: "2-4 Yrs", salary: "7-11 LPA" },
    { id: 12, category: "Backend", title: "Ruby on Rails Microservices Engineer", location: "Remote", type: "Full-Time", experience: "5+ Yrs", salary: "16-24 LPA" },

    // --- 3. Full-Stack Engineering Roles ---
    { id: 13, category: "Full-Stack", title: "MERN Stack Application Developer", location: "Gurugram, IN", type: "Full-Time", experience: "2-5 Yrs", salary: "11-17 LPA" },
    { id: 14, category: "Full-Stack", title: "Senior Full-Stack Engineer (Python + React)", location: "Remote", type: "Full-Time", experience: "6+ Yrs", salary: "24-35 LPA" },
    { id: 15, category: "Full-Stack", title: "Full-Stack Web Dev (.NET Core + Angular)", location: "Gurugram, IN", type: "Full-Time", experience: "3-6 Yrs", salary: "13-20 LPA" },
    { id: 16, category: "Full-Stack", title: "JAMstack Solutions Architect", location: "Remote", type: "Full-Time", experience: "5-8 Yrs", salary: "20-28 LPA" },

    // --- 4. Cloud, DevOps & Infrastructure ---
    { id: 17, category: "Cloud & DevOps", title: "Cloud DevOps Platform Engineer (AWS)", location: "Gurugram, IN", type: "Full-Time", experience: "3-5 Yrs", salary: "15-22 LPA" },
    { id: 18, category: "Cloud & DevOps", title: "Site Reliability Engineer (SRE Kubernetes)", location: "Remote", type: "Full-Time", experience: "5+ Yrs", salary: "25-38 LPA" },
    { id: 19, category: "Cloud & DevOps", title: "Azure Infrastructure Cloud Specialist", location: "Gurugram, IN", type: "Full-Time", experience: "2-4 Yrs", salary: "12-18 LPA" },
    { id: 20, category: "Cloud & DevOps", title: "CI/CD Automation Pipeline Architect", location: "Gurugram, IN", type: "Full-Time", experience: "4-7 Yrs", salary: "18-27 LPA" },
    { id: 21, category: "Cloud & DevOps", title: "Cloud Security & Compliance Auditor", location: "Remote", type: "Full-Time", experience: "5+ Yrs", salary: "22-30 LPA" },

    // --- 5. Logistics, Automation & Government Projects ---
    { id: 22, category: "Automation Systems", title: "ICD Yard Management System Architect", location: "Gurugram, IN", type: "Full-Time", experience: "6+ Yrs", salary: "24-36 LPA" },
    { id: 23, category: "Automation Systems", title: "Industrial IoT Embedded Engineer", location: "Gurugram, IN", type: "Full-Time", experience: "3-5 Yrs", salary: "14-20 LPA" },
    { id: 24, category: "Automation Systems", title: "Container Tracking Solutions Lead", location: "Gurugram, IN", type: "Full-Time", experience: "5-8 Yrs", salary: "20-28 LPA" },
    { id: 25, category: "Automation Systems", title: "RFID & Telematics Integration Expert", location: "Gurugram, IN", type: "Contract", experience: "4+ Yrs", salary: "16-22 LPA" },

    // --- 6. Mobile Application Engineering ---
    { id: 26, category: "Mobile Apps", title: "React Native Mobile Developer", location: "Gurugram, IN", type: "Full-Time", experience: "2-4 Yrs", salary: "9-15 LPA" },
    { id: 27, category: "Mobile Apps", title: "Flutter Application Engineer", location: "Remote", type: "Full-Time", experience: "2-5 Yrs", salary: "10-16 LPA" },
    { id: 28, category: "Mobile Apps", title: "Native iOS Swift Developer", location: "Gurugram, IN", type: "Full-Time", experience: "3-6 Yrs", salary: "14-22 LPA" },
    { id: 29, category: "Mobile Apps", title: "Native Android Kotlin Architect", location: "Gurugram, IN", type: "Full-Time", experience: "4+ Yrs", salary: "16-25 LPA" },

    // --- 7. Data Engineering & Artificial Intelligence ---
    { id: 30, category: "Data Science & AI", title: "Machine Learning Operations (MLOps) Lead", location: "Remote", type: "Full-Time", experience: "5+ Yrs", salary: "28-42 LPA" },
    { id: 31, category: "Data Science & AI", title: "Data Engineer (Spark / Kafka)", location: "Gurugram, IN", type: "Full-Time", experience: "3-5 Yrs", salary: "14-22 LPA" },
    { id: 32, category: "Data Science & AI", title: "AI Integration & Prompt Systems Engineer", location: "Gurugram, IN", type: "Full-Time", experience: "1-3 Yrs", salary: "8-13 LPA" },
    { id: 33, category: "Data Science & AI", title: "Business Intelligence Analyst (PowerBI)", location: "Gurugram, IN", type: "Full-Time", experience: "2-4 Yrs", salary: "7-11 LPA" },

    // --- 8. UI/UX Design & Product Lifecycle ---
    { id: 34, category: "Design & Management", title: "Product UI/UX Interface Designer", location: "Gurugram, IN", type: "Full-Time", experience: "2-4 Yrs", salary: "8-13 LPA" },
    { id: 35, category: "Design & Management", title: "Lead Product Manager (ERP Systems)", location: "Gurugram, IN", type: "Full-Time", experience: "6+ Yrs", salary: "22-32 LPA" },
    { id: 36, category: "Design & Management", title: "Technical Content & UX Writer", location: "Remote", type: "Full-Time", experience: "1-3 Yrs", salary: "5-8 LPA" },

    // --- 9. Quality Assurance & System Validation ---
    { id: 37, category: "Quality Assurance", title: "Automation QA Test Engineer (Selenium)", location: "Gurugram, IN", type: "Full-Time", experience: "2-5 Yrs", salary: "7-12 LPA" },
    { id: 38, category: "Quality Assurance", title: "Performance & Penetration Security Tester", location: "Remote", type: "Full-Time", experience: "4+ Yrs", salary: "15-23 LPA" },
    { id: 39, category: "Quality Assurance", title: "Manual Systems & API Tester (Postman)", location: "Gurugram, IN", type: "Full-Time", experience: "1-3 Yrs", salary: "5-8 LPA" },
    
    // --- 10. Freshers Graduate Pipeline ---
    { id: 40, category: "Freshers Hub", title: "Graduate Engineer Trainee (GET)", location: "Gurugram, IN", type: "Full-Time", experience: "Fresher (2025/2026)", salary: "4.5-6 LPA" },
    { id: 41, category: "Freshers Hub", title: "Management Trainee (Operations)", location: "Gurugram, IN", type: "Full-Time", experience: "Fresher", salary: "4-5.5 LPA" }
  ], []);

  // Filter Categories
  const categories = ["All", "Frontend", "Backend", "Full-Stack", "Cloud & DevOps", "Automation Systems", "Mobile Apps", "Data Science & AI", "Design & Management", "Quality Assurance", "Freshers Hub"];

  // Filtered Job Array Calculation
  const filteredJobs = useMemo(() => {
    return jobProfiles.filter((job) => {
      const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            job.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, jobProfiles]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setSelectedJob(null);
      setIsFresher(false);
      setApplicationForm({
        fullName: "",
        email: "",
        phone: "",
        experienceYears: "",
        previousCompany: "",
        currentLpa: "",
        expectedLpa: "",
        resumeLink: "",
        coverNote: "",
      });
    }, 2500);
  };

  return (
    <div className="sunicCareersWrapper">
      
      {/* Hero Branding Block */}
      <section className="sunicCareersHero">
        <div className="orangeGlowOverlay"></div>
        <div className="careersHeroContainer">
          <span className="careersMiniTag">Sunic Core Careers</span>
          <h1 className="careersMainTitle">Join the Engine of Technical Transformation</h1>
          <p className="careersSubtitle">
            Explore {jobProfiles.length} active deployment tracks. We are looking for skilled frontend, backend, fullstack engineers, and cloud infrastructure specialists to scale our automated ecosystems.
          </p>
          
          {/* LinkedIn Style Interactive Search Anchor bar */}
          <div className="linkedinSearchBar">
            <div className="searchBlock">
              <i className="fas fa-search searchIcon"></i>
              <input 
                type="text" 
                placeholder="Search job titles, skills, or programming profiles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="searchMetrics">
              <span>Found <strong>{filteredJobs.length}</strong> Open Positions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Board Space Layout */}
      <div className="careersMainBoard">
        <div className="careersHorizontalContainer">
          
          {/* Filter Categories Pill Grid */}
          <div className="categoryFiltersGrid">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filterPillBtn ${selectedCategory === cat ? "activePill" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Job Cards Layout Output */}
          <div className="linkedinJobCardsGrid">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="linkedinStyleJobCard">
                  <div className="cardHeaderMeta">
                    <span className="jobCategoryBadge">{job.category}</span>
                    <span className="jobTypeBadge">{job.type}</span>
                  </div>
                  <h3 className="jobPositionTitle">{job.title}</h3>
                  <p className="companyContextTitle">Sunic Tech Solutions Ltd.</p>
                  
                  <div className="jobMetricsRow">
                    <div className="metricNode"><i className="fas fa-map-marker-alt"></i> {job.location}</div>
                    <div className="metricNode"><i className="fas fa-briefcase"></i> {job.experience}</div>
                    <div className="metricNode"><i className="fas fa-wallet"></i> {job.salary}</div>
                  </div>

                  <div className="cardActionBottom">
                    <button 
                      className="linkedinApplyBtn"
                      onClick={() => {
                        setSelectedJob(job);
                        if (job.category === "Freshers Hub" || job.experience.toLowerCase().includes("fresher")) {
                          setIsFresher(true);
                        }
                      }}
                    >
                      Apply Now <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="noJobsFallback">
                <i className="fas fa-folder-open emptyIcon"></i>
                <h4>No System Roles Matching Search Query</h4>
                <p>Try refining your search keyword filter string or switch categories.</p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Application Slip Sheet Overlay Modal */}
      {selectedJob && (
        <div className="modalDarkOverlay">
          <div className="applicationSheetCard">
            
            {formSubmitted ? (
              <div className="successStateContainer">
                <div className="successCheckCircle">✓</div>
                <h3>Profile Pipeline Integrated</h3>
                <p>Thank you for choosing Sunic Tech. Your application for <strong>{selectedJob.title}</strong> has been transmitted to our Gurugram human capital dashboard.</p>
              </div>
            ) : (
              <>
                <div className="modalHeaderBlock">
                  <div>
                    <span className="modalContextLabel">Applying For Integration Position</span>
                    <h2>{selectedJob.title}</h2>
                    <p className="modalSubtext">{selectedJob.category} Matrix — {selectedJob.location}</p>
                  </div>
                  <button className="closeModalXBtn" onClick={() => { setSelectedJob(null); setIsFresher(false); }}>&times;</button>
                </div>

                <form className="modalApplicationForm" onSubmit={handleFormSubmit}>
                  
                  {/* Freshers Checkbox Flag Toggle */}
                  <div className="fresherToggleBlock">
                    <label className="checkboxSwitchContainer">
                      <input 
                        type="checkbox" 
                        checked={isFresher} 
                        onChange={(e) => setIsFresher(e.target.checked)} 
                      />
                      <span className="customCheckboxVisual"></span>
                      <span className="checkboxLabelText">I am a Fresher / Entry Level Candidate (No previous corporate history)</span>
                    </label>
                  </div>

                  <div className="formFieldRow">
                    <div className="fieldGroup">
                      <label>Full Name *</label>
                      <input type="text" name="fullName" value={applicationForm.fullName} onChange={handleInputChange} required placeholder="Anisha Chaurasiya" />
                    </div>
                    <div className="fieldGroup">
                      <label>Email Address *</label>
                      <input type="email" name="email" value={applicationForm.email} onChange={handleInputChange} required placeholder="anisha@example.com" />
                    </div>
                  </div>

                  <div className="formFieldRow">
                    <div className="fieldGroup">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" value={applicationForm.phone} onChange={handleInputChange} required placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className="fieldGroup">
                      <label>Experience Duration *</label>
                      <select 
                        name="experienceYears" 
                        value={isFresher ? "0" : applicationForm.experienceYears} 
                        onChange={handleInputChange} 
                        disabled={isFresher}
                        required
                      >
                        {isFresher ? (
                          <option value="0">0 Years (Fresher Blueprint)</option>
                        ) : (
                          <>
                            <option value="">Select Experience Range</option>
                            <option value="1-2 Years">1 - 2 Years</option>
                            <option value="2-4 Years">2 - 4 Years</option>
                            <option value="4-7 Years">4 - 7 Years</option>
                            <option value="7+ Years">7+ Years Architecture Development</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  {/* Experienced-Only Fields (Dynamically Disabled/Hidden based on isFresher state) */}
                  <div className={`fresherCollapsibleSection ${isFresher ? "collapsedState" : ""}`}>
                    <div className="fieldGroup structuralSpacing">
                      <label>Previous Corporate Organization {!isFresher && "*"}</label>
                      <input 
                        type="text" 
                        name="previousCompany" 
                        value={isFresher ? "" : applicationForm.previousCompany} 
                        onChange={handleInputChange} 
                        required={!isFresher}
                        placeholder="e.g. Infosys, Wipro, Tech Startup Labs" 
                      />
                    </div>
                    
                    <div className="formFieldRow structuralSpacing">
                      <div className="fieldGroup">
                        <label>Current Remuneration (LPA) {!isFresher && "*"}</label>
                        <input 
                          type="text" 
                          name="currentLpa" 
                          value={isFresher ? "" : applicationForm.currentLpa} 
                          onChange={handleInputChange} 
                          required={!isFresher}
                          placeholder="e.g. 6.5 LPA" 
                        />
                      </div>
                      <div className="fieldGroup">
                        <label>Expected Remuneration (LPA) *</label>
                        <input 
                          type="text" 
                          name="expectedLpa" 
                          value={applicationForm.expectedLpa} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="e.g. 12 LPA" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Fresher Specific Expected Salary Row placeholder */}
                  {isFresher && (
                    <div className="fieldGroup structuralSpacing">
                      <label>Expected Remuneration (LPA) *</label>
                      <input 
                        type="text" 
                        name="expectedLpa" 
                        value={applicationForm.expectedLpa} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="e.g. 5 LPA" 
                      />
                    </div>
                  )}

                  <div className="fieldGroup structuralSpacing">
                    <label>Resume Asset URL Link (Google Drive / Dropbox) *</label>
                    <input type="url" name="resumeLink" value={applicationForm.resumeLink} onChange={handleInputChange} required placeholder="https://drive.google.com/your-resume-link" />
                  </div>

                  <div className="fieldGroup structuralSpacing">
                    <label>Core Technical Toolkit / Cover Note Summary</label>
                    <textarea name="coverNote" rows="3" value={applicationForm.coverNote} onChange={handleInputChange} placeholder="Highlight code frameworks you deploy, languages, cloud certifications, or major repositories..." />
                  </div>

                  <button type="submit" className="modalSubmitAppBtn">
                    Submit Professional Profile <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </>
            )}

          </div>
        </div>
      )}
       <Footer/>

    </div>
    
  );
};

export default CareersPage;