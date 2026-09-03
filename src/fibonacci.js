// Fibonacci implementation without recursion
export function fibs(num) {
  if (num === 0) return [];
  if (num === 1) return [0];

  let first = 0;
  let second = 1;
  const array = [first, second];

  for (let i = 2; i < num; i++) {
    let next = first + second;
    array.push(next);

    first = second;
    second = next;
  }
  return array;
}

// Fibonacci implementation with recursion
export function fibsRec(num) {
  if (num === 0) {
    return [];
  }

  if (num === 1) {
    return [0];
  }

  if (num === 2) {
    return [0, 1];
  }

  const array = fibsRec(num - 1);

  array.push(array[array.length - 1] + array[array.length - 2]);

  return array;
}
