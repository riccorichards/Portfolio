import Echart from "echarts-for-react";
import { plans } from "../../const";

const ChartTree = () => {
  const option = {
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
    },
    series: [
      {
        type: "tree",
        data: [plans],
        left: "2%",
        right: "2%",
        top: "40.5%",
        bottom: "10%",
        symbol: "emptyCircle",
        orient: "BT",
        expandAndCollapse: true,
        label: {
          position: "bottom",
          rotate: 0,
          verticalAlign: "top",
          align: "center",
        },
        leaves: {
          label: {
            position: "top",
            rotate: 90,
            verticalAlign: "middle",
            align: "left",
            color: "#fff",
          },
        },
        emphasis: {
          focus: "descendant",
        },
        animationDurationUpdate: 750,
      },
    ],
  };
  return <Echart option={option} style={{ width: "100%", height: "75vh" }} />;
};

export default ChartTree;
