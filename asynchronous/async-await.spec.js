const { fetchData } = require('./promise');

// ! Happy Scenario
it('Is Async-Await value correct ?', async () => {
  // !<--- ASYNC Keyword before the function definition

  const data = await fetchData('Tejas');
  expect(data).toBe('Hello Tejas');
  expect(data).not.toBe('Tejas Sabunkar');
});

// ! Error Scenario
it('the Async-Await fetch fails with an error', async () => {
  // !If you expect a promise to be rejected, use the .catch method. Make sure to add expect.assertions
  expect.assertions(1);
  try {
    await fetchData(); // ! Since argument passed is undefined so fetchData will fail
  } catch (err) {
    expect(err).toMatch('Error occured with name params');
  }
});

it('the Async-Await fetch not-fails but resolved scenario', async () => {
  expect.assertions(1);
  let d = '';
  try {
    d = await fetchData('Sabunkar');
  } catch (err) {
    expect(err).toMatch('Error occured with name params');
  }

  expect(d).toMatch('Hello Sabunkar');
});

// !Super-Sexy way of async-await
it('Success: combining async-await with resolve-reject', async () => {
  await expect(fetchData('logictech')).resolves.toBe('Hello logictech');
});

it('Error: combining async-await with resolve-reject', async () => {
  await expect(fetchData()).rejects.toBe('Error occured with name params');
});
