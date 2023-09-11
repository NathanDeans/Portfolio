import cssLogo from "./cssLogo.png";
import gitLogo from "./gitLogo.png";
import htmlLogo from "./html5.png";
import JSLogo from "./javascriptLogo.png";
import reactLogo from "./React.png";
import soloShot from "./soloShot.png";
import nodeLogo from "./nodeLogo.png";
import "./bio.css";

function Bio() {
  return (
    <div id="bio" className="bio">
      <div className="bioTitle">
        <h1>About</h1>
      </div>
      <div className="bioContent">
        <div className="bioLeft">
          <img alt="headshot" src={soloShot} className="bioImage" />
          <div className="bio">
            <p>
              Building and creating has always been a focus of mine. From an
              early age I worked on small business ventures, this continued
              during my throughout my life until I found myself running several
              online businesses. Throughout the process I realized to truly
              provide value to customers I need to be able to buld something
              great... This is where I found my love of coding.
            </p>
          </div>
        </div>
        <div className="bioRight">
          <div className="languages">
            <div className="column1">
              <img
                className="logo"
                alt="css Logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />
              <img
                className="logo"
                alt="git Logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              />
              <img
                className="logo"
                alt="HTML logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
            </div>

            <div className="column2">
              <img
                className="logo"
                alt="JS Logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className="logo"
                alt="React Logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <img
                className="logo"
                alt="Node Logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
