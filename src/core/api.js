import axios from "axios";

const apiUrl = "https://restcountries.eu/rest/v2/";

export async function getAllCountries() {
  try {
    const response = await axios.get(`${apiUrl}all`);
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getCountryByCode(code) {
  try {
    const response = await axios.get(`${apiUrl}alpha/${code}`);
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getCountryByRegion(region) {
    try {
      const response = await axios.get(`${apiUrl}region/${region}`);
      const data = response.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
