import React from 'react';
import { useNews } from '../../hooks/useNews/api'
import { Text, View, TouchableOpacity } from 'react-native';
import { StyledArticleWrapper, StyledArticleContainer, StyledTextWrapper} from '../../components/common';

const NewsScreen = () => {
  const news = useNews('general');

  return (
    <StyledArticleWrapper>
      {news.map((article, index) => (
        <TouchableOpacity key={index}>
          <StyledArticleContainer>
            <StyledTextWrapper>
              <Text style={{ fontWeight: 'normal' }}>{article.title}</Text>
            </StyledTextWrapper>
          </StyledArticleContainer>
        </TouchableOpacity>
      ))}
    </StyledArticleWrapper>
  );
};

export default NewsScreen;