import { useEffect, useState } from "react";
import AnnaRod from "./projects/AnnaRod";
import WeekDish from "./projects/WeekDish";
import Sps from "./projects/Sps";
import Weather from "./projects/Weather";
import ProjectLink from "./ProjectLink";

const checkMobile = () => {
  if (window.innerWidth > 930) {
    return "project1";
  } else {
    return "";
  }
};

const setMargin = () => {
  const menuHeight = document.querySelector("#c-left").clientHeight;
  const projectHeight = document.querySelector("#c-right").clientHeight;
  const content = document.querySelector("#projects");

  if (projectHeight > menuHeight) {
    const correctMargin = projectHeight - menuHeight + 50;
    content.style.marginBottom = `${correctMargin}px`;
  }
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(checkMobile());

  let contentToDisplay = null;

  switch (selectedProject) {
    case "project1":
      contentToDisplay = <AnnaRod />;
      break;
    case "project2":
      contentToDisplay = <WeekDish />;
      break;
    case "project3":
      contentToDisplay = <Sps />;
      break;
    case "project4":
      contentToDisplay = <Weather />;
      break;
    default:
      contentToDisplay = <h1>This project is coming soon. Hang in tight!</h1>;
  }

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);

    const viewportWidth = window.innerWidth;
    const menu = document.querySelector("#c-left");
    const project = document.querySelector("#c-right");
    const content = document.querySelector("#projects");

    if (viewportWidth < 930) {
      menu.style.transform = "translateX(-100%)";
      project.style.transform = "translateX(0)";
      content.style.overflow = "visible";
    }

    setMargin();
  };

  useEffect(() => {
    setMargin();
  });

  const projects = [
    {
      title: "Kunstgalleri",
      description: "Hjemmeside til kunster Anna Rod",
      projectId: "project1",
      rectClass: "color-rect one",
    },
    {
      title: "WeekDish",
      description: "Nem planlægning af mad",
      projectId: "project2",
      rectClass: "color-rect two",
    },
    {
      title: "Rideklubben",
      description: "Sportsrideklubben Silkeborg",
      projectId: "project3",
      rectClass: "color-rect three",
    },
    {
      title: "WeatherApp",
      description: "Få hurtig oversigt over vejret",
      projectId: "project4",
      rectClass: "color-rect four",
    },
  ];

  return (
    <div className="section" id="projects">
      <div id="c-left">
        <div id="c-left-container">
          {projects.map((project, key) => {
            return <ProjectLink key={key} title={project.title} description={project.description} projectId={project.projectId} color={project.rectClass} handleProjectClick={handleProjectClick} />;
          })}
        </div>
      </div>
      <div id="c-right">{contentToDisplay}</div>
    </div>
  );
}
