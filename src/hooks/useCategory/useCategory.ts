import { useState, useEffect } from 'react';
import { API_KEY } from './constants';
import { Source } from './types';

interface UseCategoryProps {
  selectedCategory: string;
}

const useCategory = ({ selectedCategory }: UseCategoryProps) => {
  const [sources, setSources] = useState<Source[]>([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/sources?apiKey=${API_KEY}&category=${selectedCategory}`)
      .then(response => response.json())
      .then(data => setSources(data.sources));
  }, [selectedCategory]);

  return sources;
};

export default useCategory;