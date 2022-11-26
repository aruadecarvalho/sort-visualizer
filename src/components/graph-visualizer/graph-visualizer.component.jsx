import { useState, useRef, useEffect } from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import {
  GraphVisualizerContainer,
  Graph,
  GraphBar,
  colorArray,
} from "./graph-visualizer.styles";
import { mergeSort } from "../algorithms/algorithms";

// create an obj vith value and color keys

const GraphVisualizer = () => {
  const [sortArray, setSortArray] = useState([]);
  const [arrayLength, setArrayLength] = useState(7);
  const containerRef = useRef(null);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => setSortArray(randomArray(10)), []);

  const randomArray = (length) => {
    let array = [];
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * 95) + 5);
    }
    return array;
  };

  const handleSliderChange = (event, newValue) => {
    setArrayLength(newValue);
    setSortArray(randomArray(newValue));
  };

  const handleBubbleSort = async () => {
    await mergeSort(sortArray, containerRef, sleep, colorArray, setSortArray);
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
      <button onClick={handleBubbleSort}>click</button>
      <Graph ref={containerRef} graphGap={25 / arrayLength}>
        {sortArray.map((value, index) => (
          <GraphBar
            barValue={`${value / 2}rem`}
            barWidth={`${100 / arrayLength}rem`}
            key={index}
            color={index}
          />
        ))}
      </Graph>
    </GraphVisualizerContainer>
  );
};

export default GraphVisualizer;
