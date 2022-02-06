import axiosClient from "./axiosClient";

const countriesApi = {
  getAll() {
    const url = "/countries";
    return axiosClient.get(url);
  },
  getCountryByName(slugCountry) {
    const url = `/dayone/country/${slugCountry}`;
    return axiosClient.get(url);
  },
};
export default countriesApi;
