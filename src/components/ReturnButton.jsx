export default function ReturnButton() {
  const menuReturn = () => {
    const menu = document.querySelector("#c-left");
    const project = document.querySelector("#c-right");
    const content = document.querySelector("#projects");
    content.style.overflow = "hidden";
    project.style.transform = "translateX(100%)";
    menu.style.transform = "translateX(0)";
    content.style.marginBottom = "";
  };

  return <i className="fa-regular fa-hand-point-left" onClick={menuReturn}></i>;
}
