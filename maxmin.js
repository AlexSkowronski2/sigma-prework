let array = [],
  arrayRange = 50,
  arraySize = 50,
  maxMin = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function fillArray() {
  for (let i = 0; i < getRandomInt(arraySize); i++) {
    array.push(getRandomInt(arrayRange));
  }
  console.log(array);
  return array;
}
fillArray();

function returnMin(array) {
  let minimum = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    if (minimum > array[i + 1]) {
      minimum = array[i + 1];
    }
  }
  return minimum;
}

function returnMax(array) {
  let maximum = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    if (maximum < array[i + 1]) {
      maximum = array[i + 1];
    }
  }
  return maximum;
}

maxMin.push(returnMin(array));
maxMin.push(returnMax(array));
console.log(maxMin);
