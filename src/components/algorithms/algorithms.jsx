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

export const selectionSort = async (
  sortArray,
  containerRef,
  sleep,
  colorArray,
  setSortArray
) => {
  let array = [...sortArray];
  let length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      let bars = containerRef.current.childNodes;
      bars[j].style.backgroundColor = "#99ff00";
      bars[min].style.backgroundColor = "#c0eb75";
      await sleep(20);
      bars[j].style.backgroundColor = colorArray[j];
      bars[min].style.backgroundColor = colorArray[min];
      if (array[j] < array[min]) {
        min = j;
      }
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
    setSortArray([...array]);
  }
};

export const insertionSort = async (
  sortArray,
  containerRef,
  sleep,
  colorArray,
  setSortArray
) => {
  let array = [...sortArray];
  let length = array.length;
  for (let i = 1; i < length; i++) {
    let j = i - 1;
    let temp = array[i];
    let bars = containerRef.current.childNodes;
    bars[i].style.backgroundColor = "#99ff00";
    bars[j].style.backgroundColor = "#c0eb75";
    await sleep(100);
    bars[i].style.backgroundColor = colorArray[i];
    bars[j].style.backgroundColor = colorArray[j];
    await sleep(100);
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
    setSortArray([...array]);
  }
};

export const shellSort = async (
  sortArray,
  containerRef,
  sleep,
  colorArray,
  setSortArray
) => {
  let array = [...sortArray];
  let length = array.length;
  for (let gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < length; i++) {
      let temp = array[i];
      let j = i;
      let bars = containerRef.current.childNodes;
      bars[i].style.backgroundColor = "#99ff00";
      bars[j].style.backgroundColor = "#c0eb75";
      await sleep(70);
      bars[i].style.backgroundColor = colorArray[i];
      bars[j].style.backgroundColor = colorArray[j];
      await sleep(70);
      while (j >= gap && array[j - gap] > temp) {
        array[j] = array[j - gap];
        j -= gap;
      }
      array[j] = temp;
      setSortArray([...array]);
    }
  }
};

export const mergeSort = async (
  sortArray,
  containerRef,
  sleep,
  colorArray,
  setSortArray
) => {
  let array = [...sortArray];
  let length = array.length;
  let temp = new Array(length);
  const merge = async (array, left, mid, right) => {
    let i = left;
    let j = mid + 1;
    let k = left;
    while (i <= mid && j <= right) {
      if (array[i] < array[j]) {
        temp[k] = array[i];
        i++;
      } else {
        temp[k] = array[j];
        j++;
      }
      k++;
    }
    while (i <= mid) {
      temp[k] = array[i];
      i++;
      k++;
    }
    while (j <= right) {
      temp[k] = array[j];
      j++;
      k++;
    }
    for (let i = left; i <= right; i++) {
      array[i] = temp[i];
      setSortArray([...array]);
      let bars = containerRef.current.childNodes;
      bars[i].style.backgroundColor = "#99ff00";
      await sleep(50);
      bars[i].style.backgroundColor = colorArray[i];
    }
  };
  const mergeSortHelper = async (array, left, right) => {
    if (left < right) {
      let mid = Math.floor((left + right) / 2);
      await mergeSortHelper(array, left, mid);
      await mergeSortHelper(array, mid + 1, right);
      await merge(array, left, mid, right);
    }
  };
  await mergeSortHelper(array, 0, length - 1);
};

export const heapSort = async (
  sortArray,
  containerRef,
  sleep,
  colorArray,
  setSortArray
) => {
  let array = [...sortArray];
  let length = array.length;
  const heapify = async (array, length, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < length && array[left] > array[largest]) {
      largest = left;
    }
    if (right < length && array[right] > array[largest]) {
      largest = right;
    }
    if (largest !== i) {
      let temp = array[i];
      array[i] = array[largest];
      array[largest] = temp;
      setSortArray([...array]);
      let bars = containerRef.current.childNodes;
      bars[i].style.backgroundColor = "#99ff00";
      bars[largest].style.backgroundColor = "#c0eb75";
      await sleep(50);
      bars[i].style.backgroundColor = colorArray[i];
      bars[largest].style.backgroundColor = colorArray[largest];
      await heapify(array, length, largest);
    }
  };
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    await heapify(array, length, i);
  }
  for (let i = length - 1; i >= 0; i--) {
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    setSortArray([...array]);
    let bars = containerRef.current.childNodes;
    bars[0].style.backgroundColor = "#99ff00";
    bars[i].style.backgroundColor = "#c0eb75";
    await sleep(50);
    bars[0].style.backgroundColor = colorArray[0];
    bars[i].style.backgroundColor = colorArray[i];
    await heapify(array, i, 0);
  }
};

export const quickSort = async (
  sortArray,
  containerRef,
  sleep,
  colorArray,
  setSortArray
) => {
  let array = [...sortArray];
  let length = array.length;
  const partition = async (array, low, high) => {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        i++;
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        setSortArray([...array]);
        let bars = containerRef.current.childNodes;
        bars[i].style.backgroundColor = "#99ff00";
        bars[j].style.backgroundColor = "#c0eb75";
        await sleep(50);
        bars[i].style.backgroundColor = colorArray[i];
        bars[j].style.backgroundColor = colorArray[j];
      }
    }
    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    setSortArray([...array]);
    let bars = containerRef.current.childNodes;
    bars[i + 1].style.backgroundColor = "#99ff00";
    bars[high].style.backgroundColor = "#c0eb75";
    await sleep(50);
    bars[i + 1].style.backgroundColor = colorArray[i + 1];
    bars[high].style.backgroundColor = colorArray[high];
    return i + 1;
  };
  const quickSortHelper = async (array, low, high) => {
    if (low < high) {
      let pi = await partition(array, low, high);
      await quickSortHelper(array, low, pi - 1);
      await quickSortHelper(array, pi + 1, high);
    }
  };
  await quickSortHelper(array, 0, length - 1);
};
