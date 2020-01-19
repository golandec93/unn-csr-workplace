export function randomId(): number {
  return Math.floor(Math.random() * (100)) + 100;
}

export function* range(start, end) {
  yield start;
  if (start === end) { return; }
  yield* range(start + 1, end);
}
