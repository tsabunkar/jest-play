// ! producing code
async function fetchData(name) {
  return new Promise((resolve, reject) => {
    if (name) {
      resolve('Hello ' + name);
    } else {
      reject('Error occured with name params');
    }
  });
}

// ! consuming code
/* fetchData((firstName = 'Tejas')).then((data) => {
  console.log(data);
});

console.log('--------');

fetchData().then((data) => {
  console.log(data);
}); */

/* 
const data = await fetchData((firstName = 'Tejas')); // !SyntaxError: await is only valid in async function
console.log(data);
 */

/* 
const foo = async () => {
  const data = await fetchData((firstName = 'Tejas'));
  console.log('Got data -> ', data);
  return data;
};

// ! This will be value in pending state bcoz foo(0 was async function which was never awaited or resolved
const value = foo();
console.log('Should be in pending state -> ', value);
 */

module.exports = { fetchData };
