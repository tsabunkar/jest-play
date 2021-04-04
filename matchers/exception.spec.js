// ! toThrow() <-- check whether a particular function throws an error

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  // ! Note: the function that throws an exception needs to be invoked within a wrapping function () => func
  // ! otherwise the toThrow assertion will fail.
  expect(() => compileAndroidCode()).toThrow(); // ! () => compileAndroidCode() <-- Wrapping function
  expect(() => compileAndroidCode()).toThrow(Error);

  // !You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
