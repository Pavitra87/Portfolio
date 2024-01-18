import "./about.css";
import resume from '../../assets/Pavitra.pdf'

const About = () => {
  return (
    <div className="aboutcontainer" id="about">
      <div className="partContainer">
        <div className="partleft">
          <h1>ABOUT ME</h1>
          <div className="bar1"></div>
        </div>
        <div className="partrightAbout">
          <p>

            Hello, My name is Pavitra.I have completed Bachelor's of Computer Application(BCA)
            in Karnataka University Dharwad.  i have done many project in
            React and Node (basically MERN ),allowing me to build a responsive web pages.
            I have knowledge in ES6+ features,asynchronus programming and functional programming
            concept to effectively build applications.
          </p>
          <a
            href="https://drive.google.com/file/d/1YXlFhOtVIFTEj6ovw5wydLJv-DrJTIit/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
           >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
