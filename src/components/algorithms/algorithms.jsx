export const bubbleSort = async (
  sortArray,
  containerRef,
  sleep,
  colorArray,
  setSortArray
) => {
  let array = [...sortArray];
  let length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      let bars = containerRef.current.childNodes;
      bars[j].style.backgroundColor = "#99ff00";
      bars[j + 1].style.backgroundColor = "#c0eb75";
      await sleep(20);
      bars[j].style.backgroundColor = colorArray[j];
      bars[j + 1].style.backgroundColor = colorArray[j + 1];
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        setSortArray([...array]);
      }
      bars[j].style.backgroundColor = "#99ff00";
      bars[j + 1].style.backgroundColor = "#c0eb75";
      await sleep(20);
      bars[j].style.backgroundColor = colorArray[j];
      bars[j + 1].style.backgroundColor = colorArray[j + 1];
    }
  }
};
