import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/shared/center/Main";
import LeftSide from "./components/shared/letfSide/LeftSide";
import RightSide from "./components/shared/rightSide/RightSide";
import Context from "./context";
import GalleryModal from "./components/ui/galleryModal/GalleryModal";
import Networks from "./components/shared/networks/Networks";
import TreeModal from "./components/ui/treeModal/TreeModal";
import ProfileModal from "./components/ui/ProfileModal/ProfileModal";

function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<number | null>(null);
  const [isPlanTree, setIsPlanTree] = useState<boolean>(false);
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [screenSize]);

  const closeGallery = () => {
    setProjectId(null);
  };
  const values = {
    screenSize,
    setIsOpenProfile,
    isOpenModal,
    setIsOpenModal,
    setIsPlanTree,
    setProjectId,
  };
  return (
    <Context.Provider value={values}>
      <div className="main-div">
        <Networks />
        {screenSize > 600 ? <LeftSide /> : null}
        <Main />
        {screenSize > 850 ? <RightSide /> : null}
      </div>
      {projectId && (
        <GalleryModal projectId={projectId} closeGallery={closeGallery} />
      )}
      {isPlanTree && <TreeModal />}
      {isOpenProfile && screenSize < 600 && <ProfileModal />}
    </Context.Provider>
  );
}

export default App;
