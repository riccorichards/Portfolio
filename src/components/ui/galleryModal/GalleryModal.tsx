import { FC } from "react";
import { projects } from "../../../const";
import "./galleryModal.css";
import { LuVideoOff } from "react-icons/lu";

const GalleryModal: FC<{
  projectId: number;
  closeGallery: () => void;
}> = ({ projectId, closeGallery }) => {
  const gallery = projects[projectId - 1].gallery;
  return (
    <div className="gallery-wrapper">
      <div onClick={closeGallery} className="close-gallery">
        Close
      </div>
      {gallery.length > 0 ? (
        <div></div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <LuVideoOff />
            <h2>Videos is not existing...</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryModal;
