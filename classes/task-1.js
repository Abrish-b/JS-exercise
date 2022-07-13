import ClassRoom from './task-0.js';

export default function initializeRooms() {
  const result = [];
  const val = [19, 20, 34];
  for (const x of val.values()) {
    const A = new ClassRoom(x);
    result.push(A);
  }
  return result;
}
