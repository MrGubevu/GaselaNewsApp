import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/header/header';
import CategoryMenu from '../../screens/CategoryScreen/categoryScreen';
import NewsScreen from '../../screens/NewsScreen/NewsScreen';
import Footer from '../../components/footer/footer';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <CategoryMenu />
      <NewsScreen />
      <Footer />
    </View>
  );
};

export default HomeScreen;