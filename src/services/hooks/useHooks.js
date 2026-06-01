import { useQuery } from "@tanstack/react-query";
import {
  getAllCompanyCardsApi,
  getAllPartnerCardsApi,
  getAllProjectsApi,
  getAllReviewsApi,
} from "../api/api";

export const usePartnerCards = () => {
  return useQuery({
    queryKey: ["partner-cards"],
    queryFn: getAllPartnerCardsApi,
    select: (data) => {
      console.log("Partner data:", data);
      const cards = data?.partnerCards;
      return Array.isArray(cards) ? cards : [];
    },
  });
};

export const useCompanyCards = () => {
  return useQuery({
    queryKey: ["company-cards"],
    queryFn: getAllCompanyCardsApi,
    select: (data) => {
      const cards = data?.companyCard;
      return Array.isArray(cards) ? cards : [];
    },
  });
};

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjectsApi,
    select: (data) => {
      const projects = data?.projects;
      console.log(projects);
      return Array.isArray(projects) ? projects : [];
    },
  });
};

export const useReviews = () => {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: getAllReviewsApi,
    select: (data) => {
      const reviews = data?.reviews; // adjust based on your API response structure
      return Array.isArray(reviews) ? reviews : [];
    },
  });
};
