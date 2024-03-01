import { useContext } from "react";
import { certificates } from "../../../const";
import "./certificates.css";
import Context from "../../../context";
import Utils from "../../../utils/Utils";

const Certificates = () => {
  const getContext = useContext(Context);
  if (!getContext) {
    throw new Error("useContext must be inside a Provider with a value");
  }
  const { screenSize } = getContext;

  const responsive = screenSize < 1275;
  const style = {
    width: responsive ? "75%" : "",
    margin: responsive ? "0 auto" : "",
    height: responsive ? "100px" : "",
  };

  return (
    <div className="certificates-wrapper">
      <h3>Certificates</h3>
      <div className="certificates-list">
        {certificates.map((item) => (
          <img
            src={item.source}
            key={item.id}
            className="certitificate-img"
            style={style}
            onClick={() => Utils.handleDownloadResume(item.source, item.source)}
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
