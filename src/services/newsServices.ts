import type { ArticlesResponse } from "@/types/newsDto";
import { api } from "./api";

export const getNews = async (limit?: number): Promise<ArticlesResponse> => {
  const response = await api.get<ArticlesResponse>("/articles/", {
    params: limit !== undefined ? { limit } : {},
  });
  return response.data;
};