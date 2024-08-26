export interface NewsResponse {
    articles(articles: any): unknown;
    data: Article[];
    pagination: Pagination;
  }
  
export interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  category: string;
  language: string;
  country: string;
  published_at: string;
}
  
  export interface Pagination {
    limit: number;
    offset: number;
    count: number;
    total: number;
  }

export type API_KEY = string;
export type BASE_URL = string;
export type PARAM_Q = 'q';
  