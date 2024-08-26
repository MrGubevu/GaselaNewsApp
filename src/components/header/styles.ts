import styled from 'styled-components/native';


const StyledHeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px 20px; 
  background-color: #fff;
  shadow-color: #000;
   shadow-offset: {
    width: 0;
    height: 2;
  };
  shadow-opacity: 0.2;
  shadow-radius: 4;
  elevation: 5;
  height: 60;
  width: 100%; 
`;

const ImageStyle = styled.Image`
  width: 40px;
  height: 40px;
`;

const LogoStyle = styled.Image`
  width: 200px;
  height: 50px;
`;

export {StyledHeaderContainer, ImageStyle, LogoStyle}

