import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StyledHeaderContainer } from './styles';




const Header = () => {
  return (
    <StyledHeaderContainer>
      
      <TouchableOpacity>
        <Text>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        
      </TouchableOpacity>
    </StyledHeaderContainer>
  );
};

export default Header;