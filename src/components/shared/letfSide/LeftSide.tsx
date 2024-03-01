import About from "../../ui/About";
import Certificates from "../../ui/certificates/Certificates";
import Header from "../../ui/header/Header";
import ProfileWrapper from "../../ui/profileWrapper/ProfileWrapper";
import "./leftSide.css";

const LeftSide = () => {
  return (
    <aside className="left-side">
      <Header title="Profile" />
      <ProfileWrapper />
      <About />
      <Certificates />
    </aside>
  );
};

export default LeftSide;
