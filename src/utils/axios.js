import axios from "axios";

axios.defaults.baseURL = "https://679d0aa487618946e6543341.mockapi.io/crm/";

export const getCompaniesList = async () => {
  const response = await axios.get("/companieslist");
  return response.data;
};

export const getCompany = async (id) => {
  const company = await axios.get(`/companieslist/${id}`);
  return company;
};
