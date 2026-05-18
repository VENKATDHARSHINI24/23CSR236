// src/App.jsx

import { useState } from "react";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const [notifications] = useState([
    {
      id: 1,
      title: "Placement Drive",
      message: "Infosys Campus Recruitment on Monday",
      date: "2026-05-20",
      category: "placement"
    },
    {
      id: 2,
      title: "Workshop",
      message: "AI & Machine Learning Workshop Registration Open",
      date: "2026-05-19",
      category: "workshop"
    },
    {
      id: 3,
      title: "Results",
      message: "Semester Results Published in Student Portal",
      date: "2026-05-18",
      category: "academic"
    },
    {
      id: 4,
      title: "Tech Fest 2026",
      message: "Annual Techno-Cultural Festival - Register Now",
      date: "2026-05-17",
      category: "event"
    }
  ]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "academics", label: "Academics" },
    { id: "placement", label: "Placement" },
    { id: "notifications", label: "Notifications" },
    { id: "contact", label: "Contact Us" }
  ];

  // HOME PAGE CONTENT
  const renderHomePage = () => (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Excellence in Every Aspect</h1>
          <p>Learning Beyond Limits</p>
          <p className="hero-subtitle">
            Kongu Engineering College is a multi-disciplinary institution offering
            research-oriented education with a focus on excellence, innovation, and
            professional development.
          </p>
        </div>
      </section>

      <section className="notification-section">
        <div className="section-container">
          <h2 className="section-title">Latest Notifications</h2>
          <p className="section-subtitle">Stay updated with the latest announcements from Kongu Engineering College</p>
          <div className="notification-container">
            {notifications.map((item) => (
              <div className="notification-card" key={item.id}>
                <div className="card-header">
                  <h3>{item.title}</h3>
                  <span className={`category-badge ${item.category}`}>{item.category}</span>
                </div>
                <p className="card-message">{item.message}</p>
                <div className="card-footer">
                  <span className="card-date">{item.date}</span>
                  <button className="read-more-btn">View Details →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-container">
          <div className="about-content">
            <h2>About Kongu Engineering College</h2>
            <p>
              Kongu Engineering College is one of the leading autonomous engineering colleges
              in Tamil Nadu known for academic excellence, placement achievements, innovation, and
              research activities. With a strong focus on holistic development, we provide our students
              with a cutting-edge curriculum, hands-on learning approach, dynamic faculty, and 
              world-class infrastructure.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h4>126th</h4>
                <p>NIRF Ranking</p>
              </div>
              <div className="stat">
                <h4>94.3%</h4>
                <p>Placement Rate</p>
              </div>
              <div className="stat">
                <h4>5.5 LPA</h4>
                <p>Average Salary</p>
              </div>
              <div className="stat">
                <h4>371</h4>
                <p>Companies Visiting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <div className="section-container">
          <h2>Why Choose KEC?</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🎓</div>
              <h3>Academic Excellence</h3>
              <p>NAAC A++ Accreditation with comprehensive curriculum and experienced faculty</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">💼</div>
              <h3>World-Class Placements</h3>
              <p>Consistent 94%+ placement rate with top companies globally</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🔬</div>
              <h3>Research & Innovation</h3>
              <p>State-of-the-art labs and 15+ Centers of Excellence</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🌍</div>
              <h3>Global Recognition</h3>
              <p>Ranked among top engineering colleges in India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  // ABOUT PAGE CONTENT
  const renderAboutPage = () => (
    <section className="page-section">
      <div className="section-container">
        <h1 className="page-title">About Kongu Engineering College</h1>
        
        <div className="about-page">
          <div className="about-intro">
            <p>
              Kongu Engineering College (KEC) is an autonomous institution established in 1981, 
              committed to excellence in engineering education and research. Located in Perundurai, Erode, 
              the college has grown to be one of the leading engineering institutions in Tamil Nadu.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>🏆 Accreditations</h3>
              <ul>
                <li>NAAC A++ Grade</li>
                <li>NBA Accredited Programs</li>
                <li>ISO 9001:2015 Certified</li>
                <li>NIRF Ranking 126th</li>
              </ul>
            </div>

            <div className="about-card">
              <h3>👥 Faculty & Resources</h3>
              <ul>
                <li>200+ Qualified Faculty Members</li>
                <li>State-of-the-art Labs</li>
                <li>24/7 Library Access</li>
                <li>Extensive Research Facilities</li>
              </ul>
            </div>

            <div className="about-card">
              <h3>🎯 Mission & Vision</h3>
              <ul>
                <li>Mission: Transform students into competent professionals</li>
                <li>Vision: Global leadership in engineering education</li>
                <li>Values: Excellence, Integrity, Innovation</li>
              </ul>
            </div>

            <div className="about-card">
              <h3>📊 Campus Life</h3>
              <ul>
                <li>50+ Student Clubs</li>
                <li>Annual Tech Fest</li>
                <li>Sports Facilities</li>
                <li>Vibrant Cultural Programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // ACADEMICS PAGE CONTENT
  const renderAcademicsPage = () => (
    <section className="page-section">
      <div className="section-container">
        <h1 className="page-title">Academics</h1>
        
        <div className="academics-page">
          <div className="programs-intro">
            <p>
              KEC offers comprehensive undergraduate and postgraduate programs across multiple engineering disciplines, 
              combining theoretical knowledge with practical application.
            </p>
          </div>

          <div className="programs-grid">
            <div className="program-card">
              <h3>🎓 Undergraduate Programs</h3>
              <ul>
                <li>Civil Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Electronics & Communication</li>
                <li>Computer Science & Engineering</li>
                <li>Electrical & Electronics Engineering</li>
                <li>Information Technology</li>
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Automobile Engineering</li>
              </ul>
            </div>

            <div className="program-card">
              <h3>🏆 Postgraduate Programs</h3>
              <ul>
                <li>M.E. in various specializations</li>
                <li>M.Tech programs</li>
                <li>MBA</li>
                <li>MCA</li>
                <li>Ph.D. Programs</li>
              </ul>
            </div>

            <div className="program-card">
              <h3>🔬 Learning Features</h3>
              <ul>
                <li>Industry-aligned Curriculum</li>
                <li>Hands-on Lab Experience</li>
                <li>Research Opportunities</li>
                <li>Industry Internships</li>
                <li>Project-based Learning</li>
                <li>Expert Faculty Mentorship</li>
              </ul>
            </div>

            <div className="program-card">
              <h3>📚 Support Services</h3>
              <ul>
                <li>Academic Counseling</li>
                <li>Skill Development</li>
                <li>Placement Training</li>
                <li>Research Guidance</li>
                <li>Career Mentoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // PLACEMENT PAGE CONTENT
  const renderPlacementPage = () => (
    <section className="page-section">
      <div className="section-container">
        <h1 className="page-title">Placement</h1>
        
        <div className="placement-page">
          <div className="placement-stats">
            <div className="placement-stat-card">
              <h4>1693</h4>
              <p>Total Offers Received</p>
            </div>
            <div className="placement-stat-card">
              <h4>94.3%</h4>
              <p>Placement Rate</p>
            </div>
            <div className="placement-stat-card">
              <h4>5.5 LPA</h4>
              <p>Average Salary</p>
            </div>
            <div className="placement-stat-card">
              <h4>61.21 LPA</h4>
              <p>Highest Salary</p>
            </div>
            <div className="placement-stat-card">
              <h4>371</h4>
              <p>Companies Visited</p>
            </div>
            <div className="placement-stat-card">
              <h4>143</h4>
              <p>Offers Above 8 LPA</p>
            </div>
          </div>

          <div className="placement-info">
            <h3>Top Recruiting Companies</h3>
            <div className="companies-list">
              <div className="company-tag">TCS</div>
              <div className="company-tag">Infosys</div>
              <div className="company-tag">Wipro</div>
              <div className="company-tag">Accenture</div>
              <div className="company-tag">Cognizant</div>
              <div className="company-tag">Tech Mahindra</div>
              <div className="company-tag">Amazon</div>
              <div className="company-tag">Microsoft</div>
              <div className="company-tag">Google</div>
              <div className="company-tag">IBM</div>
            </div>
          </div>

          <div className="placement-process">
            <h3>Placement Process</h3>
            <ol className="process-steps">
              <li>Pre-Placement Training & Guidance</li>
              <li>Resume Building & Profile Enhancement</li>
              <li>Mock Interviews & Assessments</li>
              <li>Company Campus Recruitment Drives</li>
              <li>Selection & Offer Letter</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );

  // NOTIFICATIONS PAGE CONTENT
  const renderNotificationsPage = () => (
    <section className="page-section">
      <div className="section-container">
        <h1 className="page-title">All Notifications</h1>
        
        <div className="all-notifications">
          <div className="notifications-list">
            {notifications.map((item) => (
              <div className="full-notification-card" key={item.id}>
                <div className="notification-header">
                  <h3>{item.title}</h3>
                  <span className={`category-badge ${item.category}`}>{item.category}</span>
                </div>
                <p className="notification-content">{item.message}</p>
                <div className="notification-meta">
                  <span className="notification-date">📅 {item.date}</span>
                  <button className="read-full-btn">Read Full →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // CONTACT PAGE CONTENT
  const renderContactPage = () => (
    <section className="page-section">
      <div className="section-container">
        <h1 className="page-title">Contact Us</h1>
        
        <div className="contact-page">
          <div className="contact-info">
            <div className="contact-card">
              <h3>📍 Address</h3>
              <p>Kongu Engineering College</p>
              <p>Perundurai, Erode - 638060</p>
              <p>Tamil Nadu, India</p>
            </div>

            <div className="contact-card">
              <h3>📞 Phone</h3>
              <p>+91 94430 20583</p>
              <p>+91 99652 77765</p>
              <p>Toll Free: 1800-123-4567</p>
            </div>

            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>registrar@kongu.ac.in</p>
              <p>admissions@kongu.ac.in</p>
              <p>placements@kongu.ac.in</p>
            </div>

            <div className="contact-card">
              <h3>🌐 Follow Us</h3>
              <p>Facebook: Kongu Engineering College</p>
              <p>LinkedIn: Kongu Engineering College</p>
              <p>Instagram: @konguengineeringcollege</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="app">
      {/* ===== Top Navbar ===== */}
      <div className="top-navbar">
        <div className="top-left">
          <span>📣 Admission Enquiry 2026</span>
        </div>
        <div className="top-right">
          <span>Accreditation & IQAC</span>
          <span>Blogs</span>
          <span>ERP</span>
          <span>Careers</span>
          <span>Alumni</span>
          <span>Contact</span>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <nav className="navbar">
        <div className="logo-section">
          <h2>Kongu Engineering College</h2>
        </div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={currentPage === item.id ? "active" : ""}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* ===== PAGE CONTENT RENDERING ===== */}
      <div className="page-content">
        {currentPage === "home" && renderHomePage()}
        {currentPage === "about" && renderAboutPage()}
        {currentPage === "academics" && renderAcademicsPage()}
        {currentPage === "placement" && renderPlacementPage()}
        {currentPage === "notifications" && renderNotificationsPage()}
        {currentPage === "contact" && renderContactPage()}
      </div>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About KEC</h4>
            <ul>
              <li><a href="#">About College</a></li>
              <li><a href="#">Academics</a></li>
              <li><a href="#">Research</a></li>
              <li><a href="#">Rankings</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Student Resources</h4>
            <ul>
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Placements</a></li>
              <li><a href="#">Library</a></li>
              <li><a href="#">Portal</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📍 Perundurai, Erode</li>
              <li>📞 +91 94430 20583</li>
              <li>📧 registrar@kongu.ac.in</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
              <a href="#">YouTube</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Kongu Engineering College | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;