import { useEffect, useState } from 'react';
import { BASE_URL, API_KEY, PARAM_Q } from './constants';
import { NewsResponse, Article } from './types';

const fetchNews = async (keyword: string): Promise<NewsResponse | null> => {
  try {
    const response = await fetch(`${BASE_URL}?${PARAM_Q}=${keyword}&apiKey=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const useNews = (keyword: string): Article[] => {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    fetchNews(keyword).then((data) => {
      if (data) {
        setNews((prevNews: Article[]) => [...prevNews, ...data.articles]);
      }
    });
  }, [keyword]);

  return news;
};

export { fetchNews, useNews };