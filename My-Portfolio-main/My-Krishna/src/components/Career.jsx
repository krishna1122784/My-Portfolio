import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Chandigarh University</h5>
              </div>
              <h3>2023–2027</h3>
            </div>
            <p>
              Pursuing Bachelor's Degree. Built a strong foundation in programming,
              algorithms, and data structures. Active participant in hackathons and
              tech events.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class 12th</h4>
                <h5>BSEB Board</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed Higher Secondary Education with a focus on science and
              mathematics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Achievements</h4>
                <h5>Various Platforms</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Certified Full Stack Developer (Spring & Angular) by Infosys Springboard,
              Programming with JavaScript by META via Coursera, and Relational DBA by
              IBM via Coursera. Top 10 finalist in Zinnovatio-2.0 hackathon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
