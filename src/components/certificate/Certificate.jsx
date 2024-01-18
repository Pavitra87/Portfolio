import "./certificate.css";
import react from '../../assets/react.jpg'
import internship from '../../assets/internship.jpg'

const Certificate = () => {
  return (
    <div id="certificate" className="c-continer">
      <div className="cerContainer">
        <div className="c-head">
          <h1>CHECK OUT SOME OF MY CERTIFICATIONS.</h1>
          <div className="bar2c"></div>
        </div>
        <div className="certicareList">
          <a href="https://trainings.internshala.com/certificate/preview/react/coc/dashbaord/">
            <img
              src={react}
              alt="img"
            />
          </a>
          
          <a href="https://trainings.internshala.com/certificate/preview/ppt/coc/dashbaord/">
            <img
              src={internship}
              alt="internship"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
