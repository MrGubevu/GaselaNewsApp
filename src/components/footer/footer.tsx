import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StyledFooter } from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <TouchableOpacity >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text>Profile</Text>
      </TouchableOpacity>
    </StyledFooter>
  );
};

export default Footer;