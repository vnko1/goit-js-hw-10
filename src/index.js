import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputEl = document.getElementById('search-box');
const listEl = document.querySelector('.country-list');
const infoContainer = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(getValue, DEBOUNCE_DELAY));

function getValue(e) {
  const inputValue = e.target.value.trim();
  if (inputValue === '') {
    clearHtml();
  } else {
    fetchCountries(inputValue)
      .then(data => {
        if (data.length > 10) {
          logInfo();
        } else if (data.length > 1) {
          infoContainer.innerHTML = '';
          listEl.innerHTML = listMarkUp(data);
        } else {
          listEl.innerHTML = '';
          infoContainer.innerHTML = infoContainerMarkUp(data);
        }
      })
      .catch(logError);
  }
}

function clearHtml() {
  listEl.innerHTML = '';
  infoContainer.innerHTML = '';
}

function logInfo() {
  Notify.info('Too many matches found. Please enter a more specific name.', {
    clickToClose: true,
  });
}

function logError() {
  Notify.failure('Oops, there is no country with that name', {
    clickToClose: true,
  });
}

function listMarkUp(countries) {
  return countries
    .map(country => {
      return `<li style='list-style:none; display: flex; align-items: center; gap: 10px'><img src='${country.flags.svg}' width='20' height="20"><p>${country.name}</p></li>`;
    })
    .join('');
}

function infoContainerMarkUp(countries) {
  const country = countries[0];
  const languages = country.languages
    .reduce((acc, language) => {
      acc.push(language.name);
      return acc;
    }, [])
    .join(', ');
  const { flags, name, capital, population } = country;
  const mark = `<div style = 'display: flex; align-items: center; gap: 10px'><img src = '${flags.svg}' width='30' height = '30'><h1>${name}</h1></div><p><span style = 'font-weight: 700'>Capital:</span> ${capital}</p><p><span style = 'font-weight: 700'>Population:</span> ${population}</p><p><span style = 'font-weight: 700'>Languages:</span> ${languages}</p>`;
  return mark;
}
