const { fetchData, greet } = require('./sync-callback');

// console.log(fetchData(greet));

test('Is callback value correct ? ', (done) => {
  function myGreetCb(data) {
    try {
      expect(data).toBe('Tejas');
      done(); // !If done() is never called/invoked, the test will fail (with timeout error)
    } catch (error) {
      done(error);
    }
  }

  fetchData(myGreetCb);
});
