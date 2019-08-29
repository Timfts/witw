import axios from "axios";

const apiUrl = "https://restcountries.eu/rest/v2/";

async function get(path) {
  try {
    const response = await axios.get(path);
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export function getAllCountries() {
  return get(`${apiUrl}all`);
}

export function getCountryByCode(code) {
  return get(`${apiUrl}alpha/${code}`);
}

export function getCountryByRegion(region) {
  return get(`${apiUrl}region/${region}`);
}
