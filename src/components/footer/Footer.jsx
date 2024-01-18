import "./footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      <h2>Contact Me </h2>
      <div className="footeritem">
        <div className="footerlink">
          <a
            href="https://www.linkedin.com/in/pavitra-naik-897153238/"
            target="_blank"
            rel="noreferrer"
          >
            <p>LINKEDIN</p>
          </a>
          <a
            href="https://github.com/Pavitra87"
            target="_blank"
            rel="noreferrer"
          >
            <p>GITHUB</p>
          </a>
          
        </div>
        <p>Made by Pavitra Naik 💖</p>
        <div className="bar1-f"></div>
      </div>
    </div>
  );
};

export default Footer;

