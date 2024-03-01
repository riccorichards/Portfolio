import { FC } from "react";
import "./button.css";
const Button: FC<{ title: string; url: string }> = ({ title, url }) => {
  return (
    <button className="button">
      <a href={url} target="_blunk">
        {title}
      </a>
    </button>
  );
};

export default Button;
