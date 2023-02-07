import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
    fetchCountries(inputValue)
      .then(data => {
        if (data.length > 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (data.length > 1) {
          console.log(data);
        }
      })
      .catch(console.log);
  }
}

function listMarkUp(data) {}
