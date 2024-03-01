import "./networks.css";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodewars, SiUpwork } from "react-icons/si";
const Networks = () => {
  return (
    <section className="networks">
      <FaGithubSquare className="network-item" />
      <FaLinkedin className="network-item" />
      <SiUpwork className="network-item" />
      <MdEmail className="network-item" />
      <SiLeetcode className="network-item" />
      <SiCodewars className="network-item" />
    </section>
  );
};

export default Networks;
