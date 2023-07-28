import { fetchBreeds, fetchCatByBreed } from './cat-api';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  info: document.querySelector('.cat-info'),
};

refs.select.addEventListener('change', onSelectChange);

insertSelectValues();

function insertSelectValues() {
  refs.loader.classList.remove('is-hidden');
  refs.select.classList.add('is-hidden');
  fetchBreeds()
    .then(data => {
      createSelectMarkup(data);
      refs.select.classList.remove('is-hidden');
    })
    .catch(() => {
      // refs.error.classList.remove('is-hidden');
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
    .finally(() => {
      refs.loader.classList.add('is-hidden');
    });
}

function onSelectChange(event) {
  refs.loader.classList.remove('is-hidden');
  refs.info.innerHTML = '';

  const breedID = event.target.value;

  fetchCatByBreed(breedID)
    .then(data => {
      createCatInfoMarkup(data);
    })
    .catch(() => {
      // refs.error.classList.remove('is-hidden');
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
    .finally(() => {
      refs.loader.classList.add('is-hidden');
    });
}

function createSelectMarkup(arr) {
  const selectValues = arr
    .map(({ reference_image_id, name }) => {
      return `<option value="${reference_image_id}">${name}</option>`;
    })
    .join('');

  refs.select.insertAdjacentHTML('beforeend', selectValues);

  new SlimSelect({
    select: '#single',
    settings: {
      placeholderText: 'Please, choose a cat',
    },
  });
}

function createCatInfoMarkup({ breeds, url }) {
  const selectInfo = `
    <img src="${url}" alt="${breeds[0].name}" width="300">
    <div>
      <h2>${breeds[0].name}</h2>
      <p>${breeds[0].description}</p>
      <p><b>Temperaments:</b> ${breeds[0].temperament}</p>
    </div>
  `;

  refs.info.insertAdjacentHTML('beforeend', selectInfo);
}
