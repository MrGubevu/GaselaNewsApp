import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import useCategory from '../../hooks/useCategory/useCategory';
import { useState } from 'react';
import { TouchableOpacityCategoryMenu } from '../../components/common';

const CategoryMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('general');
  const sources = useCategory({ selectedCategory });

  return (
    <View style={{
        backgroundColor: '#FFFFFF',
        padding: 10,
    }}>
      <ScrollView horizontal>
        <TouchableOpacityCategoryMenu onPress={() => setSelectedCategory('general')}>
          <Text>All</Text>
        </TouchableOpacityCategoryMenu>
        <TouchableOpacityCategoryMenu onPress={() => setSelectedCategory('business')}>
          <Text>Business</Text>
        </TouchableOpacityCategoryMenu>
        <TouchableOpacityCategoryMenu onPress={() => setSelectedCategory('entertainment')}>
          <Text>Entertainment</Text>
        </TouchableOpacityCategoryMenu>
        <TouchableOpacityCategoryMenu onPress={() => setSelectedCategory('health')}>
          <Text>Health</Text>
        </TouchableOpacityCategoryMenu>
        <TouchableOpacityCategoryMenu onPress={() => setSelectedCategory('science')}>
          <Text>Science</Text>
        </TouchableOpacityCategoryMenu>
        <TouchableOpacityCategoryMenu onPress={() => setSelectedCategory('sports')}>
          <Text>Sports</Text>
        </TouchableOpacityCategoryMenu>
        <TouchableOpacityCategoryMenu onPress={() => setSelectedCategory('technology')}>
          <Text>Technology</Text>
        </TouchableOpacityCategoryMenu>
      </ScrollView>
    
    </View>
  );
};

export default CategoryMenu;