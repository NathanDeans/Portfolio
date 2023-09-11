import "./projects.css";
import parkApp from "./parkApp.png";
import calcApp from "./calcApp.png";
import resumeApp from "./resumeApp.png";

function Projects() {
  return (
    <>
      <div className="projectsContent">
        <h2>Projects</h2>

        <div className="projects">
          <div className="project">
            <div className="nameDescript">
              <h2>Resume Builder</h2>
              <p>
                This React application generates resumes for those looking for
                employment
              </p>
            </div>
            <div className="projectImg">
              <img
                className="projectScreenshot"
                alt="national park web app screenshot"
                src={parkApp}
              />
            </div>
          </div>

          <div className="project">
            <div className="nameDescript">
              <h2>National Park Trip Planner</h2>
              <p>
                This web application makes use of the National parks web API to
                display weather photos and other important information needed
                for your trip.
              </p>
            </div>
            <div className="projectImg">
              <img
                className="projectScreenshot"
                alt="calculator web app screenshot"
                src={calcApp}
              />
            </div>
          </div>

          <div className="project">
            <div className="nameDescript">
              <h2>Fantasy Football Trade Calculator</h2>
              <p>
                This "calculator" allows fantasy football managers to enter
                players into the tool in order to determine the value of a trade
                proposition
              </p>
            </div>
            <div className="projectImg">
              <img
                className="projectScreenshot"
                alt="resume web app screenshot"
                src={resumeApp}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
