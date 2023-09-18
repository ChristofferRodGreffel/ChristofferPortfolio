import { useState } from "react";
import AnnaRod from "./projects/AnnaRod";
import WeekDish from "./projects/WeekDish";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState("project1");

  let contentToDisplay = null;

  switch (selectedProject) {
    case "project1":
      contentToDisplay = <AnnaRod />;
      break;
    case "project2":
      contentToDisplay = <WeekDish />;
      break;
    default:
      contentToDisplay = <h1>This project is coming soon. Hang in tight!</h1>;
  }

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);

    const viewportWidth = window.innerWidth;

    if (viewportWidth < 930) {
      const menu = document.querySelector("#c-left");
      const project = document.querySelector("#c-right");
      menu.style.transform = "translateX(-150%)";
      project.style.transform = "translateX(0%)";
    }
  };

  return (
    <div className="section" id="content">
      <div id="c-left">
        <div id="c-left-container">
          <div onClick={() => handleProjectClick("project1")} className="project-name">
            <h2>Kunstgalleri</h2>
            <div className="c-left-below">
              <div className="color-rect one"></div>
              <p>Hjemmeside til kunster Anna Rod</p>
            </div>
          </div>
          <div onClick={() => handleProjectClick("project2")} className="project-name">
            <h2>WeekDish</h2>
            <div className="c-left-below">
              <div className="color-rect two"></div>
              <p>Nem planlægning af mad</p>
            </div>
          </div>
          <div onClick={() => handleProjectClick("project3")} className="project-name">
            <h2>Rideklubben</h2>
            <div className="c-left-below">
              <div className="color-rect three"></div>
              <p>Sportsrideklubben Silkeborg</p>
            </div>
          </div>
          <div onClick={() => handleProjectClick("project4")} className="project-name">
            <h2>Tuborg Squash</h2>
            <div className="c-left-below">
              <div className="color-rect four"></div>
              <p>Oplevelseshjemmeside</p>
            </div>
          </div>
        </div>
      </div>
      <div id="c-right">{contentToDisplay}</div>
    </div>
  );
}
