import { useState, useRef, useEffect } from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import {
  GraphVisualizerContainer,
  Graph,
  GraphBar,
} from "./graph-visualizer.styles";

// create an obj vith value and color keys
const defaultArray = [99, 54, 23, 10, 43, 76, 88];

const GraphVisualizer = () => {
  const [sortArray, setSortArray] = useState(defaultArray);
  const [arrayLength, setArrayLength] = useState(7);
  const containerRef = useRef(null);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // define a color for each bar in the graph in a obj
  const bubbleSort = async () => {
    let array = [...sortArray];
    let length = array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        let bars = containerRef.current.childNodes;
        bars[j].style.filter = "brightness(200%)";
        bars[j + 1].style.filter = "brightness(150%)";
        await sleep(100);
        bars[j].style.filter = "brightness(100%)";
        bars[j + 1].style.filter = "brightness(100%)";
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          setSortArray([...array]);
        }
        bars[j].style.filter = "brightness(200%)";
        bars[j + 1].style.filter = "brightness(200%)";
        await sleep(100);
        bars[j].style.filter = "brightness(100%)";
        bars[j + 1].style.filter = "brightness(100%)";
      }
    }
  };

  const randomArray = (length) => {
    let array = [];
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * 100));
    }
    return array;
  };

  const handleSliderChange = (event, newValue) => {
    setArrayLength(newValue);
    setSortArray(randomArray(newValue));
  };

  return (
    <GraphVisualizerContainer>
      <Box width={300}>
        <Slider
          defaultValue={10}
          aria-label="Default"
          onChange={handleSliderChange}
          min={5}
          max={25}
        />
      </Box>
      <button onClick={bubbleSort}>click</button>
      <Graph ref={containerRef} graphGap={25 / arrayLength}>
        {sortArray.map((value, index) => (
          <GraphBar
            barValue={`${value / 2}rem`}
            barWidth={`${100 / arrayLength}rem`}
            key={index}
            color={"red"}
          />
        ))}
      </Graph>
    </GraphVisualizerContainer>
  );
};

export default GraphVisualizer;
