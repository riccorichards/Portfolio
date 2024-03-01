import { useContext } from "react";
import { techStack } from "../../../const";
import "./techStack.css";
import Context from "../../../context";
const TechStack = () => {
  const getContext = useContext(Context);
  if (!getContext) {
    throw new Error("useContext must be inside a Provider with a value");
  }
  const { screenSize } = getContext;
  const limit = screenSize < 1025;

  const style = { width: limit ? "35px" : "", height: limit ? "35px" : "" };

  return (
    <div className="tech-list">
      {techStack.map((tech) => (
        <div
          className="tech"
          key={tech.id}
          style={{ backgroundColor: tech.color, ...style }}
        >
          <tech.source
            style={{
              color: "#fff",
              fontSize: limit ? "24px" : "28px",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default TechStack;
