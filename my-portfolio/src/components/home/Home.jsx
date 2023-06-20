import "./home.css";

import { HiDownload } from "react-icons/hi";


function Home () {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="home-main" id="home">
      <div className="homeWrapper">
        <div className="homeLeft">
          <div id="user-detail-name" style={{fontWeight:"600",fontSize:"50px"}}>Hii, Rishabh</div>
         
          <div>
          
          <img  id="user-detail-intro" src="https://readme-typing-svg.herokuapp.com?font=Archivo&weight=600&size=25&pause=1000&color=000000&background=39393900&width=435&lines=An+Aspiring+Full+Stack+Web+Developer;An+Enthusiast+%26+Life+Long+Learner" alt="Typing SVG" />
         {/* <strong id="user-detail-intro">  A skilled Full Stack Web Developer 💻</strong> */}

         <div style={{marginRight:"20px"}}>
          Aspiring Full Stack Web Developer Skilled in MERN stack with hands-on experience in developing scalable websites using a wide range of Front-end and Back-end skills like HTML, CSS, JavaScript, React, Redux, MongoDB, and Node JS. Looking forward to joining a progressive organization with opportunities to work on challenging projects.
          </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1cDaJNw_WaXS3zt0xkyOmiOeP99g91nY0&export=download"
            id="resume-link-2"
          >

          
            <div
              onClick={() =>
                openLink(
                  "https://drive.google.com/file/d/1cDaJNw_WaXS3zt0xkyOmiOeP99g91nY0/view?usp=sharing"
                )
              }
              className="home-resume"
              id="resume-button-2"
            >
              Resume <HiDownload />
            </div>
          </a>
        </div>

        <div className="homeright">
          <img style={{
            borderRadius:"45%",
            border:"3px solid black",
            width:"500px",
            height:"530px"
            }}
            className="home-img"
            src={"https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif"}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;