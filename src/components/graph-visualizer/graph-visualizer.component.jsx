import { useState, useRef, useEffect } from "react";

import Slider from "@mui/material/Slider";
import DropDownSelector from "../dropdown-selector/dropdown-selector.component";

import { sleep, randomArray } from "../../utils/utils";

import {
  GraphVisualizerContainer,
  Graph,
  GraphBar,
  colorArray,
  Button,
  SelectionContainer,
} from "./graph-visualizer.styles";

import {
  bubbleSort,
  selectionSort,
  insertionSort,
  shellSort,
  mergeSort,
  heapSort,
  quickSort,
} from "../algorithms/algorithms";

const algorithmsObject = {
  "Bubble Sort": bubbleSort,
  "Selection Sort": selectionSort,
  "Insertion Sort": insertionSort,
  "Shell Sort": shellSort,
  "Merge Sort": mergeSort,
  "Heap Sort": heapSort,
  "Quick Sort": quickSort,
};

const GraphVisualizer = () => {
  const [sortArray, setSortArray] = useState([]);
  const [arrayLength, setArrayLength] = useState(7);
  const [algorithm, setAlgorithm] = useState("None");

  const containerRef = useRef(null);

  useEffect(() => setSortArray(randomArray(10)), []);

  const handleReset = () => setSortArray(randomArray(arrayLength));

  const handleSliderChange = (newValue) => {
    setArrayLength(newValue);
    setSortArray(randomArray(newValue));
  };

  const handleAlgorithm = async () => {
    if (algorithm === "None") {
      return;
    }
    let algorithmFunction = algorithmsObject[algorithm];
    await algorithmFunction(
      sortArray,
      containerRef,
      sleep,
      colorArray,
      setSortArray
    );
  };

  return (
    <GraphVisualizerContainer>
      <Slider
        defaultValue={10}
        aria-label="Default"
        onChange={handleSliderChange}
        min={5}
        max={25}
      />
      <SelectionContainer>
        <DropDownSelector
          data={Object.keys(algorithmsObject)}
          text="Select an algorithm"
          setAlgorithm={setAlgorithm}
        />
        <Button onClick={handleReset} inverted={true}>
          Reset
        </Button>
        <Button onClick={handleAlgorithm}>Start</Button>
      </SelectionContainer>
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
