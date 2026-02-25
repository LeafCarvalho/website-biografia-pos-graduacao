export interface Author {
  name: string;
  socials: string | null;
}

export interface Launch {
  id: string;
  provider: string;
}

export interface Event {
  id: string;
  provider: string;
}

export interface Article {
  id: number;
  title: string;
  authors: Author[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: Launch[];
  events: Event[];
}

export interface ArticlesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Article[];
}