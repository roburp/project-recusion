import { mergeSort } from "../src/mergeSort.js";

test("returns an empty array for []", () => {
  expect(mergeSort([])).toEqual([]);
});

test("returns [73] for [73]]", () => {
  expect(mergeSort([73])).toEqual([73]);
});

test("returns [1, 2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
  expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});
test("returns [0, 1, 1, 2, 3, 5, 8, 13] for [3, 2, 1, 13, 8, 5, 0, 1]", () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
