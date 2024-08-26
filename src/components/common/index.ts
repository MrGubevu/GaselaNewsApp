import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: #f7f7f7;
`;

const StyledApplicationWrapper = styled.View`
  flex: 1;
`;

const StyledTextWrapper = styled.View`
flex: 1;
padding-left: 5px;
padding-right: 12px;
text-align: justify;
justify-content: left;
max-width: 300px
`

const StyledArticleContainer = styled.View`
display: flex;
flex-direction: row;
marginBottom: 20px;
background-color: #FFFFFF; 
margin: 10px;
padding: 20px;
border-radius: 10px;
shadow-color: #000;
shadow-offset: 0 2px;
shadow-opacity: 0.25;
shadow-radius: 4px;
`

const StyledArticleWrapper = styled.View`
  padding: 10px;
 
`;

const StyledActionsWrapper = styled.View`
  width: 100%;
  position: absolute;
  top: 20px;
  flex-direction: row;
  padding: 0 20px;
`;

const TouchableOpacityCategoryMenu = styled.TouchableOpacity `
  background-color: #FFFFFF;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 8px;
`;

export { 
    StyledSafeAreaView, 
    StyledApplicationWrapper, 
    StyledActionsWrapper,
    StyledArticleWrapper,
    StyledArticleContainer,
    StyledTextWrapper,
    TouchableOpacityCategoryMenu
 };