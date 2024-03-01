import "./networks.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodewars, SiUpwork } from "react-icons/si";
const Networks = () => {
  return (
    <section className="networks">
      <a
        href="https://github.com/riccorichards"
        target="_blunk"
        style={{ color: "inherit" }}
      >
        <FaGithubSquare className="network-item" />
      </a>
      <a
        href="https://www.linkedin.com/in/riccot/"
        target="_blunk"
        style={{ color: "inherit" }}
      >
        <FaLinkedin className="network-item" />
      </a>
      <a
        href="https://www.upwork.com/freelancers/~019ca3b560397f1173"
        target="_blunk"
        style={{ color: "inherit" }}
      >
        <SiUpwork className="network-item" />
      </a>
      <a
        href="https://leetcode.com/riccorichards/"
        target="_blunk"
        style={{ color: "inherit" }}
      >
        <SiLeetcode className="network-item" />
      </a>
      <a
        href="https://www.codewars.com/users/riccorichards"
        target="_blunk"
        style={{ color: "inherit" }}
      >
        <SiCodewars className="network-item" />
      </a>
    </section>
  );
};

export default Networks;
