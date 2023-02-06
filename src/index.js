import debounce from 'lodash.debounce';
import './css/styles.css';
import fetchCountries from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;
const inputEl = document.getElementById('search-box');
const listEl = document.querySelector('.country-list');
const infoContainer = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(getValue, DEBOUNCE_DELAY));

function getValue(e) {
  const inputValue = e.target.value.trim();
  if (inputValue !== '') {
    fetchCountries(inputValue).then(data => console.log(data));
  }
}
