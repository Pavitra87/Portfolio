import "./mycard.css";
import mern from '../../assets/mern-img.png'
import profile from '../../assets/profile.jpg'


const Mycard = () => {
  return (
    <div id="home" className="mycardContainer">
      <div class="wrapper">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="myPersonalCard">
        <div className="title">
          <h1>Pavitra Naik __</h1>
          <div className="title-tag">
            <img
              src={mern}
              alt="MERN"
            />
            <div>
              <p className="titleHead bg-yellow">{`MERN Stack Developer`}</p>
              </div>
          </div>
        </div>
        <div className="profilecard">
          <img
            className="profile-pic"
            src={profile}
            alt="profile"
          />
          <p><a href="">pavitramn2000@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Mycard;
