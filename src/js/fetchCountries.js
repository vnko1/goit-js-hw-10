export default function fetchCountries(name) {
  return fetch(`https://restcountries.com/v2/name/${name}`).then(response => {
    console.log(response);
    return response.json();
  });
}
