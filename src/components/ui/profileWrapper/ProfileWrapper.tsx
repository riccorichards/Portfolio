import profileImg from "../../../assets/profile2.webp";
import "./profileWrapper.css";
const ProfileWrapper = () => {
  return (
    <div className="profile-wrapper">
      <img src={profileImg} alt="profile" className="profile-img" />
      <h2>Ricco Richards</h2>
      <h4>Software developer</h4>
    </div>
  );
};

export default ProfileWrapper;
