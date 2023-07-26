import { fetchBreeds, fetchCatByBreed } from './cat-api';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  info: document.querySelector('.cat-info'),
};

refs.select.addEventListener('change', onSelectChange);

test();

function test() {
  fetchBreeds()
    .then(data => {
      insertSelectValues(data);
    })
    .catch(console.warn);
}

function onSelectChange(event) {
  const breedID = event.target.value;

  console.dir(event.target);

  fetchCatByBreed(breedID)
    .then(data => {
      console.log(data);
    })
    .catch(console.warn);
}

function insertSelectValues(arr) {
  const selectValues = arr
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');

  refs.select.insertAdjacentHTML('beforeend', selectValues);
}
