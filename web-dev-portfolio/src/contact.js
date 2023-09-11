import "./contact.css";

function Contact() {
  return (
    <>
      <div className="contactContent">
        <h2>Contact</h2>
        <form className="contactForm">
          <label>Name:</label>
          <input id="name"></input>

          <label>Email</label>
          <input id="email" type="email"></input>

          <label>Message:</label>
          <input type="text"></input>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
