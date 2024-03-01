import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import Context from "../../../context";
import ProfileWrapper from "../profileWrapper/ProfileWrapper";
import "./ProfileModal.css";
import About from "../About";
const ProfileModal = () => {
  const getContext = useContext(Context);
  if (!getContext) throw new Error("Context is not defined");

  const { setIsOpenProfile } = getContext;

  return (
    <div className="profile-modal">
      <div
        className="close-profile-modal"
        onClick={() => setIsOpenProfile(false)}
      >
        <IoMdClose />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <ProfileWrapper />
        <About />
      </div>
    </div>
  );
};

export default ProfileModal;
