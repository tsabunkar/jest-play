// ! Ex: Synchronous Callback - which is executed immediately.
function fetchData(callback) {
  let name = `Tejas`;
  return callback(name);
}

function greet(firstName) {
  // ! is a callback function which will be passed as an argument to fetchData function
  return 'Hello ' + firstName;
}

// console.log(fetchData(greet));

module.exports = { fetchData, greet };
