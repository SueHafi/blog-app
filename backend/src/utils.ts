export function setupIdGenerator(initialHighestId: number) {
  let lastId = initialHighestId;
  function generateId() {
    lastId++;
    return lastId;
  }
  return generateId;
}

export function getRandomElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
