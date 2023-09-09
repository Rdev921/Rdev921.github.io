import React from "react";
import "./contact.css";

const Contact = () => {
	const openLink = (url) => {
		window.open(url);
	};

	return (
		<div className="contact-main" id="contact">
			<div className="headingwrapper">
				<h1 className="contactheading">Contact</h1>
				<div className="headingwrapperDiv">
					<div className="headingwrapperDivLeft">
						<img
							src="https://technext.github.io/satner/img/about-us.png"
							alt="contact me"
						/>
					</div>
					<div className="headingwrapperDivRight">
						<div className="contact-info" id="contact-email">
							<button
								className="contact-button"
								onClick={() => openLink("mailto:uzairans532@gmail.com")}
							>
								<span className="button-icon">&#9993;</span>
								rishabhd921@gmail.com
							</button>
						</div>
						<div className="contact-info" id="contact-phone">
							<button
								className="contact-button"
								onClick={() => openLink("tel:+917271880500")}
							>
								<span className="button-icon">&#9742;</span>
								+91-8439147915
							</button>
						</div>
						<div className="contact-info" id="contact-location">
							<div><span className="button-icon location-icon">&#128205;</span>
								<span className="location-text">MuzaffarNagar, (U.P.)</span></div>
							
						</div>
						<div className="contact-socialLink">
							<img
								onClick={() => openLink("https://github.com/Rdev921/")}
								src={process.env.PUBLIC_URL + "./Images/github.png"}
								alt="GitHub"
								className="social-link-image"
								id="contact-github"
							/>
							<img
								onClick={() =>
									openLink("https://www.linkedin.com/in/rishabh-dev-884b511a2/")
								}
								src={process.env.PUBLIC_URL + "./Images/linkedin1.png"}
								alt="LinkedIn"
								className="social-link-image"
								id="contact-linkedin"
							/>

						</div>
					</div>
				</div>
			</div>
			{/* <div className="get-in-touch">
				<h2>Get in Touch for Project</h2>
				<p>
					"Let's power your ideas with the combined strength of MERN! Together, we can build innovative and scalable web applications that captivate users, streamline workflows, and drive success. Join forces with us to create a harmonious fusion of cutting-edge technologies and exceptional design, bringing your vision to life like never before."
				</p>
				<button
					className="contact-button"
					onClick={() => openLink("https://wa.me/7271880500")}
				>
					<span className="button-icon">&#9993;</span>
					WhatsApp Me
				</button>
			</div> */}
		</div>
	);
};

export default Contact;