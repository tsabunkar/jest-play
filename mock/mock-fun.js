function forEachCustom(items, callback) {
  for (let index = 0; index < items.length; index++) {
    items[index] = callback(items[index]);
  }
  return items;
}
/* 
const cb = (x) => {
  x = x + 1;
  return x;
};
console.log(forEachCustom([1, 2, 3], cb));

const transform = (x) => x * 2;
console.log(forEachCustom([1, 2, 3], transform));
 */

module.exports = forEachCustom;
