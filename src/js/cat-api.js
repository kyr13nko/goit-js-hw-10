const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY =
  'live_RaeMB30o8cK53Xzit1qts2oGvZcNIVdIE0sizWn04kRLekmqPWyepiCjOddIuxxA';

function fetchBreeds() {
  return fetch(`${BASE_URL}breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedID) {
  return fetch(
    `${BASE_URL}/images/${breedID}?api_key=${API_KEY}`
    // `${BASE_URL}/images/?breed_ids=${breedID}&api_key=${API_KEY}`
    // https://api.thecatapi.com/v1/images/${breedId}?api_key=${API_KEY}
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
