const axios = require('axios');

class Rocket {
  static getAllRockets() {
    return axios
      .get('https://isrospacex.com/launches.json')
      .then(function (response) {
        // handle success
        // console.log(response.data.launcheList);
        return response.data.launcheList;
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
        return error;
      });
  }

  transformRockets() {
    // ! You cannot do -> this.getAllRockets()  <== static method bind to class rather than instance
    return Rocket.getAllRockets()
      .then((rockets) => {
        rockets = rockets.map((rocket) => {
          return {
            name: `India ${rocket.name}`,
          };
        });
        //   console.log(rockets);
        return rockets;
      })
      .catch((err) => {
        return 'Error occured while transforming';
      });
  }
}

// !below code will FAIL -> Static method calls are made directly on the class and are not callable on instances of the class.
// !Static methods are often used to create utility functions
// Rocket.getAllRockets().then((data) => {
//   console.log(data);
// });

/* 
new Rocket().transformRockets().then((data) => {
  console.log(data);
});
 */
module.exports = Rocket;
