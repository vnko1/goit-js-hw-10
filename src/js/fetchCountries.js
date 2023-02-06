export default function fetchCountries(name) {
  fetch(`https://restcountries.com/v2/name/${name}`)
    .then(response => {
      return response.json();
    })
    .then(data => console.log(data));
}
