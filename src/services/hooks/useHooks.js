import { useQuery } from "@tanstack/react-query";
import {
  getAllCompanyCardsApi,
  getAllPartnerCardsApi,
  getAllProjectsApi,
  getAllReviewsApi,
  getAllServicesApi,
} from "../api/api";

const queryOptions = {
  retry: false,
  refetchOnWindowFocus: false,
};

export const usePartnerCards = () => {
  return useQuery({
    queryKey: ["partner-cards"],
    queryFn: getAllPartnerCardsApi,
    ...queryOptions,
    select: (data) => {
      // Check what shape your API returns
      // If API returns { partnerCards: [...] }, use data.partnerCards
      // If API returns [...] directly, use data
      const cards = data?.partnerCards || data;
      return Array.isArray(cards) ? cards : [];
    },
  });
};

export const useCompanyCards = () => {
  return useQuery({
    queryKey: ["company-cards"],
    queryFn: getAllCompanyCardsApi,
    ...queryOptions,
    select: (data) => {
      const cards = data?.companyCard || data?.companyCards || data;
      return Array.isArray(cards) ? cards : [];
    },
  });
};

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjectsApi,
    ...queryOptions,
    select: (data) => {
      const projects = data?.projects || data;
      return Array.isArray(projects) ? projects : [];
    },
  });
};

export const useReviews = () => {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: getAllReviewsApi,
    ...queryOptions,
    select: (data) => {
      const reviews = data?.reviews || data;
      return Array.isArray(reviews) ? reviews : [];
    },
  });
};

export const useServices = () => {
  return useQuery({
    queryKey: ["all-services"],
    queryFn: getAllServicesApi,
    ...queryOptions,
    select: (data) => {
      const services = data?.services || data;
      if (!Array.isArray(services)) return { marketing: [], development: [], design: [] };

      const marketing = [];
      const development = [];
      const design = [];

      services.forEach((service) => {
        const selected = service?.selectedService?.toLowerCase();
        if (selected === "marketing") marketing.push(service);
        else if (selected === "development") development.push(service);
        else if (selected === "design") design.push(service);
      });

      return { marketing, development, design };
    },
  });
};