import React, { FC, useContext, useState } from "react";
import { IoIosMore } from "react-icons/io";
import resumeFile from "../../../assets/RICHARD T.pdf";
import "./header.css";
import Context from "../../../context";
const Header: FC<{ title?: string; Profile?: React.ComponentType }> = ({
  title,
  Profile,
}) => {
  const [isOpenOption, setIsOpenOption] = useState<boolean>(false);

  const getContext = useContext(Context);
  if (!getContext) throw new Error("Context is not defined");

  const { screenSize, setIsPlanTree, setIsOpenProfile } = getContext;

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Richard_T_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpenOption(false);
  };

  const handleMapTree = () => {
    setIsPlanTree(true);
    setIsOpenOption(false);
  };
  return (
    <header className="header">
      {title && <h3>{title}</h3>}
      {!title && (
        <div onClick={() => setIsOpenProfile(true)}>
          {Profile && <Profile />}
        </div>
      )}
      <IoIosMore
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpenOption(!isOpenOption)}
      />
      {isOpenOption && (
        <div className="opened-option">
          <span onClick={handleDownloadResume}>Download Resume</span>
          {screenSize > 850 ? null : (
            <span onClick={handleMapTree}>Show Plan</span>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
