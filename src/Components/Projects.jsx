import React from "react";
import { Box, Button, SimpleGrid, useColorMode } from "@chakra-ui/react";
import gojo from "../assests/gojo.png";
import pirate from "../assests/pirate.png";
import style from "../assests/stylesup.png";
import frames from "../assests/lenskart.png";
import { FaGithub, FaEye } from "react-icons/fa";

// const Projects = () => {
//   return (
//     <Box className="nav-link projects" id="nav-link-projects">
//       <div
//         id="projects"
//         className="main_container"
//         style={{
//           // backgroundColor: "#edf2f8",
//           // backgroundColor: "#2c1e4a",
//           backgroundColor: "var(--bg-color)",
//           color: "white",
//         }}
//       >
//         <div className="project_container">
//           <div className="project_heading">
//             <h2 className="title">Projects</h2>
//           </div>

//           <div className="project_grid">
//             <SimpleGrid
//               columns={[1, 1, 2]}
//               spacing={100}
//             >
//               <Box>
//                 <div
//                   className="project_box project-card"
//                   style={{
//                     backgroundColor: "#1a202c",
//                   }}
//                 >
//                   <div className="project_image">
//                     <img src={frames} alt="Learning management" />
//                   </div>

//                   <div className="project_name project-title">
//                     <h2>Frames Lobbey</h2>
//                   </div>
//                   <div className="project_desc project-description">
//                     <p>
//                       This is one of the best project that I have made. This whole
//                       website divides in two parts admin and user page. This whole
//                       website is created by only in 4 days.
//                     </p>
//                   </div>
//                   <div className="project_tech_stack project-tech-stack">
//                     <h5>
//                       <span>Tech Stack :</span> JavaScript, HTML, CSS, React,
//                       ChakraUi
//                     </h5>
//                   </div>
//                   <div className="project_icon">
//                     <div className="github_link project-github-link">
//                       <a
//                         href="https://github.com/Suraj121704c/excellent-noise-5475/tree/main/glassworld"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaGithub />
//                       </a>
//                     </div>
//                     <div className="deploy_link project-deployed-link">
//                       <a
//                         href="https://glassworldheaven.netlify.app/"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaEye />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </Box>
//               <Box>
//                 <div
//                   className="project_box project-card"
//                   style={{
//                     backgroundColor: "#1a202c",
//                   }}
//                 >
//                   <div className="project_image">
//                     <img src={style} alt="Learning managemen" />
//                   </div>

//                   <div className="project_name project-title">
//                     <h2>Styles Up</h2>
//                   </div>
//                   <div className="project_desc project-description">
//                     <p>
//                       An E-Commerce Website : Clone of Paytm Mall . It is group
//                       project created by four peopls and I was the team Lead.
//                     </p>
//                   </div>
//                   <div className="project_tech_stack project-tech-stack">
//                     <h5>
//                       <span>Tech Stack :</span> React, JavaScript, HTML, CSS,
//                       Redux, ChakraUi
//                     </h5>
//                   </div>
//                   <div className="project_icon">
//                     <div className="github_link project-github-link">
//                       <a
//                         href="https://github.com/Suraj121704c/-easy-rose-1070/tree/main/paytm-mall"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaGithub />
//                       </a>
//                     </div>
//                     <div className="deploy_link project-deployed-link">
//                       <a
//                         href="https://styesup123112.netlify.app/"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaEye />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </Box>
//               <Box>
//                 <div
//                   className="project_box project-card"
//                   style={{
//                     backgroundColor: "#1a202c",
//                   }}
//                 >
//                   <div className="project_image">
//                     <img src={gojo} alt="Learning managemen" />
//                   </div>

//                   <div className="project_name project-title">
//                     <h2>Gojo Store</h2>
//                   </div>
//                   <div className="project_desc project-description">
//                     <p>
//                       Its an Indivisual Project completed withing 4 days and this
//                       is my first project in Masai School.
//                     </p>
//                   </div>
//                   <div className="project_tech_stack project-tech-stack">
//                     <h5>
//                       <span>Tech Stack :</span> JavaScript, HTML, CSS
//                     </h5>
//                   </div>
//                   <div className="project_icon">
//                     <div className="github_link project-github-link">
//                       <a
//                         href="https://github.com/Suraj121704c/divine-eggnog-8153"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaGithub />
//                       </a>
//                     </div>
//                     <div className="deploy_link project-deployed-link">
//                       <a
//                         href="https://glistening-sherbet-5d15f0.netlify.app/"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaEye />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </Box>
//               <Box>
//                 <div
//                   className="project_box project-card"
//                   style={{
//                     backgroundColor: "#1a202c",
//                   }}
//                 >
//                   <div className="project_image">
//                     <img src={pirate} alt="Learning managemen" />
//                   </div>

//                   <div className="project_name project-title">
//                     <h2>Pirated Store</h2>
//                   </div>
//                   <div className="project_desc project-description">
//                     <p>
//                       An Platform that helps in buying products. This website is a
//                       clone of geeksbuying. Created by the group of 4.
//                     </p>
//                   </div>
//                   <div className="project_tech_stack project-tech-stack">
//                     <h5>
//                       <span>Tech Stack :</span> Advance JavaScript, HTML, CSS
//                     </h5>
//                   </div>
//                   <div className="project_icon">
//                     <div className="github_link project-github-link">
//                       <a
//                         href="https://github.com/Shahid77137/abundant-coat-8487_"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaGithub />
//                       </a>
//                     </div>
//                     <div className="deploy_link project-deployed-link">
//                       <a
//                         href="https://nimble-crostata-869bd1.netlify.app/"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaEye />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </Box>
//             </SimpleGrid>
//           </div>
//         </div>
//       </div>
//     </Box>
//   );
// };
// export default Projects;

// import React from "react";
import geek from "../assests/pirate.png";
import lens from "../assests/lenskart.png";
import stale from "../assests/stylesup.png";
import { SiNetlify } from "react-icons/si";
// import gojo from "../assests/gojo.png";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="main-text">
          <h2>
            <span>Projects</span>
          </h2>
          <p style={{ marginTop: "2%" }}>
            Some of the things that i have built...
          </p>
        </div>

        <div className="nav-link projects" id="nav-link-projects">
          <div className="project-card">
            <img src={frames} alt="" />
            <div className="layer">
              <h5 className="project-title">FASHIQUE</h5>
              <p className="project-description">
                Fashique is a online fashion retailer inspired by asos.com, that
                follows the latest fashion trends, primarily aimed at young
                adults.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : REACT, REDUX, JS, HTML, CSS, CHAKRA UI
              </p>
              <div id="project-links">
                <div className="project-deployed-link">
                  <a href="https://fashique.vercel.app/" target="_blank">
                    <i>Live {/*  <SiNetlify size={15} /> */}</i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Vikas23sharma/large-house-6330"
                    target="_blank"
                    id="project-deployed-link">
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={style} alt="" />
            <div className="layer">
              <h5 className="project-title">DOLLAR STORE</h5>
              <p className="project-description">
                Dollar store is a domestic merchandise retail stores.Inspired
                from Bed Bath & Beyond that was founded in 1971.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : HTML , CSS, JS, REACT, CHAKRA UI
              </p>
              <div id="project-links">
                <div className="project-deployed-link">
                  <a href="https://vsdollarstore.netlify.app/" target="_blank">
                    <i>Live {/* <SiNetlify /> */}</i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Vikas23sharma/uttermost-rat-9889/tree/main/bbby"
                    target="_blank"
                    id="project-deployed-link">
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={gojo} alt="" />
            <div className="layer">
              <h5 className="project-title">Myntra</h5>
              <p className="project-description">
                The Project is inspired from Myntra which is a major Indian
                fashion e-commerce company.
              </p>
              <p className="project-tech-stack">Tech-Stack : HTML, CSS, JS</p>
              <div id="project-links">
                <div className="project-deployed-link">
                  <a
                    href="https://jazzy-selkie-afc155.netlify.app/"
                    target="_blank">
                    <i>Live {/* <SiNetlify /> */}</i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/PrashantGIT7388/blessed-story-3613"
                    target="_blank"
                    id="project-deployed-link">
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={pirate} alt="" />
            <div className="layer">
              <h5 className="project-title">V apparels</h5>
              <p className="project-description">
                V apparels is a luxury department store.Inspired from a United
                Kingdom based E-commerce website.
              </p>
              <p className="project-tech-stack">Tech-Stack : HTML, CSS, JS</p>
              <div id="project-links">
                <div className="project-deployed-link">
                  <a
                    href="https://fluffy-malasada-634452.netlify.app/"
                    target="_blank">
                    <i>Live {/* <SiNetlify /> */}</i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Vikas23sharma/verdant-straw-7365"
                    target="_blank"
                    id="project-deployed-link">
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
