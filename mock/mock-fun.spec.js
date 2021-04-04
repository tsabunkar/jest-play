const forEachCustom = require('./mock-fun');

it('Mock Callback function', () => {
  // ! Define a mock/fake function instead of actual callback fun
  const mockCb = jest.fn((x) => x + 3); // !Example of Mock Implementation

  forEachCustom([1, 2, 3], mockCb);

  // ! all mocks have special property called --> `.mock`
  expect(mockCb.mock.calls.length).toBe(3); // ! The mock function is called Thrice, 3 arguments

  expect(mockCb.mock.calls[0][0]).toBe(1); // !first argument of the first call to the mockfunction was 1
  expect(mockCb.mock.calls[1][0]).toBe(2); // !first argument of the second call to the mockfunction was 2
  expect(mockCb.mock.calls[2][0]).toBe(3); // !first argument of the third call to the mockfunction was 3

  expect(mockCb.mock.results[0].value).toBe(4); // !return value of the first call to the function was 4 (1+3)
  expect(mockCb.mock.results[1].value).toBe(5);
  expect(mockCb.mock.results[2].value).toBe(6);

  expect(mockCb.mock.instances.length).toBe(3); // !This function was instantiated exactly Trhice
});

it('Mock Return Value', () => {
  // ! Fake return values for mocked function at EVERY CALL/INVOKE

  const myMock = jest.fn();
  myMock(); // ! return value of mock function would be undefined

  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

  expect(myMock()).toBe(10);
  expect(myMock()).toBe('x');
  expect(myMock()).toBe(true);
  expect(myMock()).toBe(true); // ! every invoke would be true return value
});

xit('Mock Return Value Ex-2', () => {
  const filterTestFn = jest.fn();
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
  const result = [11, 12].filter((num) => filterTestFn(num));
  console.log(result); // ! [11]

  const filterTestFn2 = jest.fn();
  filterTestFn2.mockReturnValueOnce(false).mockReturnValueOnce(true);
  const result2 = [11, 12].filter((num) => filterTestFn2(num));
  console.log(result2); // ! [12]

  console.log(filterTestFn.mock.calls);
});
