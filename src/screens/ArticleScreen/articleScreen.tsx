import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ArticleScreen = () => {
  const route = useRoute();
  const article = (route.params as { article: { title: string; description: string;} }).article;

  return (
    <View>
      {article && (
        <>
          <Text>{article.title}</Text>
          <Text>{article.description}</Text>
        </>
      )}
    </View>
  );
};

export default ArticleScreen;