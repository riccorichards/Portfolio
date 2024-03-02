import React, { FC, useContext, useState } from "react";
import { IoIosMore } from "react-icons/io";
import resumeFile from "../../../assets/Richards Trofimov.pdf";
import "./header.css";
import Context from "../../../context";
import Utils from "../../../utils/Utils";
const Header: FC<{ title?: string; Profile?: React.ComponentType }> = ({
  title,
  Profile,
}) => {
  const [isOpenOption, setIsOpenOption] = useState<boolean>(false);

  const getContext = useContext(Context);
  if (!getContext) throw new Error("Context is not defined");

  const { screenSize, setIsPlanTree, setIsOpenProfile } = getContext;

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
          <span
            onClick={() =>
              Utils.handleDownloadResume(resumeFile, "Richard_T_Resume.pdf")
            }
          >
            Download Resume
          </span>
          {screenSize > 850 ? null : (
            <span onClick={handleMapTree}>Show Plan</span>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
