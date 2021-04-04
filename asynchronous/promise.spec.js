const { fetchData } = require('./promise');

// ! Happy Scenario
it('Is promise value correct ?', () => {
  // ! Make sure to return the promise - if you omit this return statement, your test will complete.
  // ! before the promise was returned from fetchData
  return fetchData('Tejas').then((data) => {
    expect(data).toBe('Hello Tejas');
    expect(data).not.toBe('Tejas Sabunkar');
  });
});

// ! Error Scenario
it('the fetch fails with an error', () => {
  // !If you expect a promise to be rejected, use the .catch method. Make sure to add expect.assertions
  expect.assertions(1);
  return fetchData() // ! Since argument passed is undefined so fetchData will fail
    .then()
    .catch((e) => expect(e).toMatch('Error occured with name params'));
});

it('the fetch not-fails but resolved scenario', () => {
  expect.assertions(1);
  return fetchData('Sabunkar')
    .then((d) => expect(d).toMatch('Hello Sabunkar'))
    .catch((e) => expect(e).toMatch('Error occured with name params'));
});
