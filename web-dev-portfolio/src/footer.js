import "./footer.css";
import gitHubLogo from "./gitLogo.png";
import emailLogo from "./email-box.svg";

function Footer() {
  return (
    <>
      <div className="footerIcons">
        <img className="footerLogo" src={gitHubLogo} alt="gitHub Logo" />
        <img
          className="footerLogo"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          alt="linkedIn Logo"
        />
      </div>
    </>
  );
}

export default Footer;
