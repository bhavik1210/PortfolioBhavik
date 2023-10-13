import './Experience.css'

function Experience() {
  return (
    <div className="experience" id='experience'>
      <h2 className="heading">
        <i class="fas fa-briefcase"></i> Experience
      </h2>

      <div className="timeline">
        <div className="container right">
          <div className="content">
            <div className="tag">
              <h2>Nettech India</h2>
            </div>
            <div className="desc">
              <h3>Full Stack Developer Trainer</h3>
              <p>Oct 2023 - present</p>
            </div>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <div className="tag">
              <h2>Nullclass Pvt ltd</h2>
            </div>
            <div className="desc">
              <h3>Web Developer | Internship</h3>
              <p>August 2022 - Dec 2022</p>
            </div>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <div className="tag">
              <h2>Skyline </h2>
            </div>
            <div className="desc">
              <h3>Web Developer | Internship</h3>
              <p>Feb 2022 - April 2022</p>
            </div>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <div className="tag">
              <h2>Self Employed</h2>
            </div>
            <div className="desc">
              <h3>Web Developer </h3>
              <p>2021 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
