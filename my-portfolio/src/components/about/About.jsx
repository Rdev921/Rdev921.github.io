// import "./about.css";
function About() {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="about section" id="about">
    
      <h1 className="aboutH1">About me</h1>

      <div className="aboutWrapper">
        <div className="aboutWrapperDiv">
          <div className="aboutMe" id="user-detail-intro">
            <div id="user-detail-name">A Passionate aspiring Full Stack Web Developer skilled
in MERN Stack. Is proficient in developing websites
using HTML, CSS, JavaScript, React, Redux, and
ChakraUI. Looking forward to working in an
organization that can challenge my abilities as a web
developer.
</div> 
          </div>
          <div className="about-socialLink">
            <img
              onClick={() => openLink("https://github.com/Rdev921")}
              src={process.env.PUBLIC_URL + "./Images/github.png"}
           
              alt="About"
            />
            <img
              onClick={() => openLink("https://www.linkedin.com/in/rishabh-dev-884b511a2/")}
              src={process.env.PUBLIC_URL + "./Images/linkedin1.png"}
              alt="About"
            />
          </div>
        </div>
        <div className="aboutWrapperExp">
          {/* <img
            src="https://technext.github.io/satner/img/about-us.png"
            alt="About"
          /> */}

<div>    <span style={{color :"#ff3a5e  " , fontSize:"40px"}} >  1200+ </span>          <br/> Hrs Coding</div>
<div>
<div> <span style={{color :"#ff3a5e  " , fontSize:"40px"}}  >  30+ </span>    <br/>  Mini Projects </div>
<div> <span style={{color :"#ff3a5e  " , fontSize:"40px"}}  >  3+ </span>    <br/>  Major Projects </div>
<div> <span style={{color :"#ff3a5e  " , fontSize:"40px"}}  >  300+ </span>   <br/>  DSA Problem </div>
<div> <span style={{color :"#ff3a5e  " , fontSize:"40px"}}  >  200+ </span>    <br/>  Hrs Soft Skills </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default About;