import React from 'react';
import Navigation from './src/navigation/index'; 
import { ThemeProvider } from 'styled-components'; 
import { theme } from './src/theme/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Navigation/>
      </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  
  );
}

export default App;