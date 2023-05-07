export const createLenghtMethod = (word) => {
  let value = 0;
  for (value in word) {
    value++;
  }

  return value;
};

export const newPush = (array, ...newElement) => {
  const elementsToAdd = [...newElement];

  for (let index = 0; index < elementsToAdd.length; index++) {
    array[array.length] = elementsToAdd[index];
  }

  return array.length;
};

const createNewArray = (array, ...newElement) => [...array, ...newElement];

export const newPop = (array) => {
  if (array.length === 0) {
    return undefined;
  }

  const lastElement = array[array.length - 1];
  array.length -= 1;
  return lastElement;
};

export const newUnshift = (array, ...newElement) => {
  const elementsToAdd = [...newElement, ...array];
  array.length = 0;

  for (let index = 0; index < elementsToAdd.length; index++) {
    array[index] = elementsToAdd[index];
  }

  return array.length;
};

export const newShift = (array) => {
  const originalElements = [...array];
  const elementRemoved = array[0];
  array.length = 0;

  for (let index = 1; index < originalElements.length; index++) {
    array[index - 1] = originalElements[index];
  }

  return elementRemoved;
};

export const newSome = (array, callBackFunction) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callBackFunction(element)) {
      return true;
    }
  }

  return false;
};

export const newFind = (array, callBackFunction) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (callBackFunction(element)) {
      return element;
    }
  }
};

export const newFilter = (array, callBackFunction) => {
  let newArrayToReturn = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (callBackFunction(element)) {
      newArrayToReturn = createNewArray(newArrayToReturn, element);
    }
  }

  return newArrayToReturn;
};

export const newMap = (array, callBackFunction) => {
  let newArrayToReturn = [];
  if (!callBackFunction) {
    return [...array];
  }

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const argumentToAdd = callBackFunction(element);
    newArrayToReturn = createNewArray(newArrayToReturn, argumentToAdd);
  }

  return newArrayToReturn;
};
