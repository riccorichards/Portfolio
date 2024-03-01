import { IoMdClose } from "react-icons/io";
import ChartTree from "../ChartTree";
import "./treeModal.css";
import { useContext } from "react";
import Context from "../../../context";

const TreeModal = () => {
  const getContext = useContext(Context);
  if (!getContext) throw new Error("Context is not defined");

  const { setIsPlanTree } = getContext;
  return (
    <div className="tree-modal-wrapper">
      <div style={{ position: "relative" }}>
        <div className="close-chart-tree" onClick={() => setIsPlanTree(false)}>
          <IoMdClose />
        </div>
        <ChartTree />
      </div>
    </div>
  );
};

export default TreeModal;
