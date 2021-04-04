// !toContain() <-- check if an array or iterable contains a particular item

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(shoppingList).not.toContain('shampoo');
  expect(new Set(shoppingList)).toContain('beer');
});
