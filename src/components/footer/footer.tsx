import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { StyledFooter } from './styles';
// import { useNavigation } from '@react-navigation/native';
import search from './../../assets/icons/search.png' 
import home from '../../assets/icons/home.png'
import category from '../../assets/icons/apps.png'
import favorites from '../../assets/icons/bookmark.png'
import profile from '../../assets/icons/user.png'

const Footer = () => {
//   const navigation = useNavigation();

  return (
    <StyledFooter style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: '#ffffff', 
        padding: '20px',
        alignItems: 'center',
        }}>
      <TouchableOpacity >
        <Image source={home} style={{width: 30, height: 30}}/>
      </TouchableOpacity>
      <TouchableOpacity >
      <Image source={search} style={{width: 30, height: 30}}/>
      </TouchableOpacity>
      <TouchableOpacity >
       <Image source={category} style={{width: 50, height: 50}}/>
      </TouchableOpacity>
      <TouchableOpacity >
      <Image source={favorites} style={{width: 30, height: 30}}/>
      </TouchableOpacity>
      <TouchableOpacity >
      <Image source={profile} style={{width: 30, height: 30}}/>
      </TouchableOpacity>
    </StyledFooter>
  );
};

export default Footer;