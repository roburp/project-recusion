import { fibs, fibsRec } from "../src/fibonacci.js";

test("fibs: returns an empty array for 0", () => {
  expect(fibs(0)).toEqual([]);
});
fibs;
test("fibs: returns [0] for 1", () => {
  expect(fibs(1)).toEqual([0]);
});

test("fibs: returns the first 2 Fibonnaci numbers", () => {
  expect(fibs(2)).toEqual([0, 1]);
});

test("fibs: returns the first 8 Fibonacci numbers", () => {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("fibsRec: returns an empty array for 0", () => {
  expect(fibsRec(0)).toEqual([]);
});

test("fibsRec: returns [0] for 1", () => {
  expect(fibsRec(1)).toEqual([0]);
});

test("fibsRec: returns the first 2 Fibonnaci numbers", () => {
  expect(fibsRec(2)).toEqual([0, 1]);
});

test("fibsRec: returns the first 8 Fibonacci numbers", () => {
  expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

/*


test("returns the first 2 Fibonacci numbers", () => {
  expect(fibs(2)).toEqual([0, 1]);
});

test("returns the first 5 Fibonacci numbers", () => {
  expect(fibs(5)).toEqual([0, 1, 1, 2, 3]);
});

test("returns the first 8 Fibonacci numbers", () => {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
*/
