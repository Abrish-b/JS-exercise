export const weakMap = new WeakMap();
export function queryAPI(obj) {
  if (weakMap.has(obj)) {
    const count = weakMap.get(obj) + 1;
    if (count >= 5) throw new Error('Endpoint load is high');
    weakMap.set(obj, count);
  } else weakMap.set(obj, 1);
}

// export {weakMap, queryAPI};
