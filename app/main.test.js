import {
  newPush,
  createLenghtMethod,
  newPop,
  newUnshift,
  newShift,
  newSome,
  newFind,
  newFilter,
  newMap,
} from "./main.js";

describe("Given createLengthMethod function", () => {
  describe("When it receives [1, 3, 5, 7]", () => {
    test("Then it should returns 4", () => {
      const word = [1, 3, 5, 7];
      const expectedResult = 4;

      const result = createLenghtMethod(word);
      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives 'hello'", () => {
    test("Then it should returns 5", () => {
      const word = "hello";
      const expectedResult = 5;

      const result = createLenghtMethod(word);
      expect(result).toBe(expectedResult);
    });
  });
});

describe("Given a newPush function", () => {
  describe("When it receives 4, 5, 6 and given the value 8", () => {
    test("Then it should returns 4", () => {
      const array = [4, 5, 6];
      const newElement = 8;

      const result = newPush(array, newElement);
      const expectedResult = 4;
      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives 'spider', 'cat' and given the value 'dog'", () => {
    test("Then it should returns 3", () => {
      const array = ["spider", "cat"];
      const newElement = "dog";

      const result = newPush(array, newElement);
      const expectedResult = 3;
      expect(result).toBe(expectedResult);
    });
  });
});

describe("Given a newPop function", () => {
  describe("When it receives 4, 3, 8", () => {
    test("Then it should returns 8", () => {
      const array = [4, 3, 8];
      const result = newPop(array);
      const expectedResult = 8;
      expect(result).toBe(expectedResult);
    });
  });

  // Por qué no detecta este test?
  describe("When it receives 'cat', 'dog', 'snake'", () => {
    test("Then it should returns 'snake'", () => {
      const array = ["cat", "dog", "snake"];
      const result = newPop(array);
      const expectedResult = "snake";
      expect(result).toBe(expectedResult);
    });
  });
});

describe("Given an newUnshift function", () => {
  describe("When it receives 'pink', 'yellow', 'fabada', and given the value 'red'", () => {
    test("Then it should returns 4", () => {
      const array = ["pink", "yellow", "fabada"];
      const value = "red";
      const result = newUnshift(array, value);
      const expectedResult = 4;
      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives 5, 7, 8 and given the value 9", () => {
    test("Then it should retuns 4", () => {
      const array = [5, 7, 8];
      const value = 9;
      const result = newUnshift(array, value);
      const expectedResult = 4;
      expect(result).toBe(expectedResult);
    });
  });
});

describe("Given a newShift function", () => {
  describe("When it receives 9, 8, 7", () => {
    test("Then it should returns 9", () => {
      const array = [9, 8, 7];
      const result = newShift(array);
      const expectedResult = 9;
      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives ['water', 'fire', 'earth']", () => {
    test("Then it should returns 'water'", () => {
      const array = ["water", "fire", "earth"];
      const result = newShift(array);
      const expectedResult = "water";
      expect(result).toBe(expectedResult);
    });
  });
});

describe("Give a newSome function", () => {
  describe("When it receives ['Tomás', 'Miguel', 'Fernando'] and the callback isMiguel", () => {
    test("Then it should returns true", () => {
      const array = ["Tomás", "Miguel", "Fernando"];
      const startsWithM = (element) => element.startsWith("M");

      const result = newSome(array, startsWithM);
      const expectedResult = true;
      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives [1, 3, 5, 7] and the callback isEven", () => {
    test("Then it should returns false", () => {
      const array = [1, 3, 5, 7];
      const isEven = (element) => {
        if (element % 2 === 0);
      };

      const result = newSome(array, isEven);
      const expectedResult = false;
      expect(result).toBe(expectedResult);
    });
  });
});

describe("Give a newFind function", () => {
  describe("When it receives ['wave', 'sea', 'sand'] and a callback starstWithW", () => {
    test("Then it should returns 'wave'", () => {
      const array = ["wave", "sea", "sand"];
      const startsWithW = (element) => element.startsWith("w");
      const result = newFind(array, startsWithW);
      const expectedResult = "wave";
      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives [1, 2, 183] and a callback greaterThanHundred", () => {
    test("Then it should returns 183", () => {
      const array = [1, 2, 183];
      const greaterThanHundred = (element) => element > 100;
      const result = newFind(array, greaterThanHundred);
      const expectedResult = 183;
      expect(result).toBe(expectedResult);
    });
  });
});

describe("Given a newFilter function", () => {
  describe("When it receives ['hello', 'bye', 'tomorrow', 'computer'] and a callback moreThanSixLetters", () => {
    test("Then it should returns 'tomorrow', 'computer'", () => {
      const array = ["hello", "bye", "tomorrow", "computer"];
      const moreThanSixLetters = (word) => word.length > 6;
      const result = newFilter(array, moreThanSixLetters);
      const expectedResult = ["tomorrow", "computer"];
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("When it receives [1, 2, 3, 4, 5, 6] and a callback greaterThanThree", () => {
    test("Then it should returns 4, 5, 6", () => {
      const array = [1, 2, 3, 4, 5, 6];
      const greaterThanThree = (number) => number > 3;
      const result = newFilter(array, greaterThanThree);
      const expectedResult = [4, 5, 6];
      expect(result).toStrictEqual(expectedResult);
    });
  });
});

describe("Given a newMap function", () => {
  describe("When it receives 1, 2, 3, 4 and the callback multiplyByTwo", () => {
    test("Then it should returns 2, 4, 6, 8", () => {
      const array = [1, 2, 3, 4];
      const multiplyByTwo = (number) => number * 2;
      const result = newMap(array, multiplyByTwo);
      const expectedResult = [2, 4, 6, 8];
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("When it receives 1, 4, 9 and the callback squareRoot", () => {
    test("Then it should returns 1, 2, 3", () => {
      const array = [1, 4, 9];
      const squareRoot = (number) => Math.sqrt(number);
      const result = newMap(array, squareRoot);
      const expectedResult = [1, 2, 3];
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
