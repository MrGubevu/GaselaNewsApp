import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { StyledHeaderContainer, ImageStyle, LogoStyle } from './styles';




const Header = () => {
  return (
    <StyledHeaderContainer>
      <ImageStyle source={require('../../assets/icons/weather.png') as any} />
      <TouchableOpacity>
        <Text>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <LogoStyle source={require('../../../src/assets/logo.png') as any} />
      </TouchableOpacity>
    </StyledHeaderContainer>
  );
};

export default Header;