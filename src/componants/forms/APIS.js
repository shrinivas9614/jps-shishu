import api from './api'; // assuming this code is in a separate file

api.get('/students')
  .then(response => {
    console.log(response.data); // process the response data
  })
  .catch(error => {
    console.error(error); // handle any errors
  });
