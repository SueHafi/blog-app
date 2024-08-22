export type BlogData = {
  img: string;
  alt: string;
  title: string;
  excerpt: string;
  createdAt: string;
  content: string;
  author: string;
  id: number;
}

export function descendingDateSorter(a: BlogData ,b: BlogData) {
  const dateA = Date.parse(a.createdAt);
  const dateB = Date.parse(b.createdAt);
  return dateB - dateA;
}

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
