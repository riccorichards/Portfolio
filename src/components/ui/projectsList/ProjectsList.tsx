import { FC, useContext } from "react";
import { ProjectType } from "../../../type";
import "./projectsList.css";
import { projects } from "../../../const";
import Header from "../header/Header";
import Profile from "../profile/Profile";
import Button from "../button/Button";
import { LuFileVideo2 } from "react-icons/lu";

import Context from "../../../context";

const Project: FC<{ project: ProjectType }> = ({ project }) => {
  const getContext = useContext(Context);
  if (!getContext) throw new Error("Context is not defined");

  const { setProjectId } = getContext;

  return (
    <div className="project">
      <Header Profile={Profile} />
      <img src={project.thumnail} alt={project.title} className="project-img" />
      <div className="project-info">
        <h3>
          <a
            href={project.url}
            style={{ color: "inherit", textDecoration: "none" }}
            target="_blunt"
          >
            {project.title}
          </a>
        </h3>
        <p>{project.desc}</p>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {project.readme === "N/A" ? (
            "N/A"
          ) : (
            <Button title="README" url={project.readme} />
          )}
          <div
            className="tutorial-btn"
            onClick={() => setProjectId(project.id)}
          >
            <span>Tutorial</span>
            <LuFileVideo2 className="gallery-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsList = () => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectsList;
