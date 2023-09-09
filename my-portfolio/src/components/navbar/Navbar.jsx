import "./navbar.css";
import { Link } from "react-scroll";
import { HiDownload } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Navbar() {
  const openLink = (url) => {
    window.open(url);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id="nav-menu" className="navbar">
      <div className="wrapper">
        <div className="wrapperLeft">
          <Link to="home" smooth={true} offset={-50} duration={500}>
            <h3 style={{fontSize:"25px", fontWeight:"900",marginLeft:'12px'}}>Rishabh</h3>
          </Link>
        </div>
        <div className="wrapperRight">
          <div>
            <Link
              to="home"
              smooth={true}
              offset={-50}
              duration={500}
              className="nav-link home"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="about"
              smooth={true}
              offset={-50}
              duration={500}
              className="nav-link about"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="skills"
              smooth={true}
              offset={-50}
              duration={500}
              className="nav-link skills"
            >
              Skills
            </Link>
          </div>
          <div>
            <Link
              to="github-main"
              smooth={true}
              offset={-50}
              duration={500}
              className="nav-link skills"
            >
              Github
            </Link>
          </div>
          <div>
            <Link
              to="projects"
              smooth={true}
              offset={-50}
              duration={500}
              className="nav-link projects"
            >
              Projects
            </Link>
          </div>
          <div>
            <Link
              to="contact"
              smooth={true}
              offset={-50}
              duration={500}
              className="nav-link contact"
            >
              Contact
            </Link>
          </div>
          <div>
          
          <a href="https://drive.google.com/uc?id=1cDaJNw_WaXS3zt0xkyOmiOeP99g91nY0&export=download"
              className="nav-link resume"
              id="resume-link-1"
            >
              <div
                onClick={() =>
                  openLink(
                    "https://drive.google.com/file/d/1cDaJNw_WaXS3zt0xkyOmiOeP99g91nY0/view?usp=sharing",
                  )
                }
                className="navbar-resume"
                id="resume-button-1"
              >
                Resume <HiDownload />
              </div>
            </a>
          </div>
        </div>
        <div className="responce">
          <RxHamburgerMenu onClick={onOpen} />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            backgroundColor="black"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody marginTop={"30px"}>
                <div className="drawerbody">
                  <div>
                    <Link
                      to="home"
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={onClose}
                    >
                      Home
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="about"
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={onClose}
                    >
                      About
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="skills"
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={onClose}
                    >
                      Skills
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="github-main"
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={onClose}
                    >
                      Github
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="projects"
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={onClose}
                    >
                      Projects
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="contact"
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={onClose}
                    >
                      Contact
                    </Link>
                  </div>
                  <div>
                  <a href="https://drive.google.com/uc?id=1cDaJNw_WaXS3zt0xkyOmiOeP99g91nY0&export=download">
                      <div
                        className="navbar-resume"
                        onClick={() => {
                          onClose();
                          openLink(
                            "https://drive.google.com/file/d/1cDaJNw_WaXS3zt0xkyOmiOeP99g91nY0/view?usp=sharing",
                          );
                        }}
                      >
                        Resume <HiDownload />
                      </div>
                    </a>
                  </div>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Navbar;