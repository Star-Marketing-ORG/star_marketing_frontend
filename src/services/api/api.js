import axiosInstance from "../../utils/axios";

export const getAllPartnerCardsApi = async () => {
  const { data } = await axiosInstance.get("/partner-card/all-partner-cards");
  return data;
};

export const getAllCompanyCardsApi = async () => {
  const { data } = await axiosInstance.get("/company-card/all-company-cards");
  return data;
};

// Get all projects
export const getAllProjectsApi = async () => {
  const { data } = await axiosInstance.get("/project/all-projects");
  console.log("api data:", data);
  return data;
};

// Get all reviews
export const getAllReviewsApi = async () => {
  const { data } = await axiosInstance.get("/review/all-reviews");
  return data;
};
