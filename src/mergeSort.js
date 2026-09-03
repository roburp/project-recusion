export function mergeSort(array) {
  if (!Array.isArray(array)) throw new Error("Input must be an array.");
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);

  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else result.push(right[j++]);
  }

  while (i < left.length) {
    result.push(left[i++]);
  }

  while (j < right.length) {
    result.push(right[j++]);
  }
  return result;
}

console.log(mergeSort([]));
