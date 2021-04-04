/**
 * toBeNull matches only null
 * toBeUndefined matches only undefined
 * toBeDefined is the opposite of toBeUndefined
 * toBeTruthy matches anything that an if statement treats as true
 * toBeFalsy matches anything that an if statement treats as false
 *
 */
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy(); // !null is Falsy
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy(); // !0 is Falsy
});

test('undefined', () => {
  let a;
  expect(a).not.toBeNull();
  expect(a).toBeUndefined();
  expect(a).not.toBeDefined();
  expect(a).not.toBeTruthy();
  expect(a).toBeFalsy(); // !undefined is Falsy
});

test('empty string', () => {
  let a = '';
  expect(a).not.toBeNull();
  expect(a).toBeDefined();
  expect(a).not.toBeUndefined();
  expect(a).not.toBeTruthy();
  expect(a).toBeFalsy(); // !empty string is Falsy
});

test('empty Array or Object', () => {
  let a = {};

  expect(a).not.toBeNull();
  expect(a).toBeDefined();
  expect(a).not.toBeUndefined();
  expect(a).toBeTruthy(); // ! empty object is truthy
  expect(a).not.toBeFalsy();

  let b = [];
  expect(b).not.toBeNull();
  expect(b).toBeDefined();
  expect(b).not.toBeUndefined();
  expect(b).toBeTruthy(); // ! empty Array is truthy
  expect(b).not.toBeFalsy();
});
