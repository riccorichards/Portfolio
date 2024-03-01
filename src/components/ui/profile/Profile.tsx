import profile from "../../../assets/profile2.webp";

const Profile = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <img
        src={profile}
        alt="profile"
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #284c52",
          boxShadow: "0 0 5px #284c522e",
        }}
      />
      <h3>Ricco</h3>
    </div>
  );
};

export default Profile;
