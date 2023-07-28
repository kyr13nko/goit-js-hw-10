import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY =
  'live_RaeMB30o8cK53Xzit1qts2oGvZcNIVdIE0sizWn04kRLekmqPWyepiCjOddIuxxA';

axios.defaults.headers.common['x-api-key'] = API_KEY;

function fetchBreeds() {
  return axios.get(`${BASE_URL}breeds`).then(response => {
    return response.data;
  });
}

function fetchCatByBreed(breedID) {
  return axios.get(`${BASE_URL}images/${breedID}`).then(response => {
    return response.data;
  });
}

export { fetchBreeds, fetchCatByBreed };

// function fetchBreeds() {
//   return fetch(`${BASE_URL}breeds?api_key=${API_KEY}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function fetchCatByBreed(breedID) {
//   return fetch(`${BASE_URL}images/${breedID}?api_key=${API_KEY}`).then(
//     response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }
