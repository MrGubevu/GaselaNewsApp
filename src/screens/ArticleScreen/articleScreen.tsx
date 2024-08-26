import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';



const ArticleScreen = () => {
  const route = useRoute();
  const article = (route.params as { article: { title: string; description: string; urlToImage: string } }).article;

  return (
    <View>
      {article && (
        <>
          <Image source={{ uri: article.urlToImage }} style={{ width: 80, height: 80 }} />
          <Text>{article.title}</Text>
          <Text>{article.description}</Text>
        </>
      )}
    </View>
  );
};

export default ArticleScreen;