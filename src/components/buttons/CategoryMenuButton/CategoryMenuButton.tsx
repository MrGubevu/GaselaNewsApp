import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { TouchableOpacityCategoryMenuProps } from './types';


const TouchableOpacityCategoryMenu = ({ onPress, children }: TouchableOpacityCategoryMenuProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchableOpacityCategoryMenu;