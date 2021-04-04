// ! producing code
function fetchData(name) {
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

module.exports = { fetchData };
