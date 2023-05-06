const createLenghtMethod = (array) => {
  let sum = 0;
  for (value in array) {
    sum += 1;
  }

  return sum;
};

createLenghtMethod("Lorena");
