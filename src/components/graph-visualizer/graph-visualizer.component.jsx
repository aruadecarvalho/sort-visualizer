import { useState, useRef } from "react";

import {
  GraphVisualizerContainer,
  Graph,
  GraphBar,
} from "./graph-visualizer.styles";

const defaultArray = [99, 54, 23, 10, 43, 76, 88];
const GraphVisualizer = () => {
  const [sortArray, setSortArray] = useState(defaultArray);
  const containerRef = useRef(null);
  const colorArray = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
  ];

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const bubbleSort = async () => {
    let array = [...sortArray];
    let length = array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        let bars = containerRef.current.childNodes;
        bars[j].style.backgroundColor = colorArray[1];
        bars[j + 1].style.backgroundColor = colorArray[1];
        await sleep(100);
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          setSortArray([...array]);
        }
        bars[j].style.backgroundColor = colorArray[0];
        bars[j + 1].style.backgroundColor = colorArray[0];
      }
    }
  };

  return (
    <GraphVisualizerContainer>
      <Graph ref={containerRef}>
        {sortArray.map((value, index) => (
          <GraphBar
            barValue={`${value / 2}rem`}
            barZIndex={index}
            key={index}
            color={colorArray[index]}
            barPosition={`${index * 12}rem`}
          />
        ))}
      </Graph>
      <button onClick={bubbleSort}>click</button>
    </GraphVisualizerContainer>
  );
};

export default GraphVisualizer;
