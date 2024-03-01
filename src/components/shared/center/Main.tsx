import TechStack from "../../ui/mainTeches/TechStack";
import ProjectsList from "../../ui/projectsList/ProjectsList";
import "./main.css";

const Main = () => {
  


  return (
    <main className="main">
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Lobster, sans-serif",
          letterSpacing: "2px",
        }}
      >
        Ricco Network
      </h1>
      <TechStack />
      <ProjectsList />
    </main>
  );
};

export default Main;
