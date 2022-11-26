export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const randomArray = (length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 95) + 5);
  }
  return array;
};
