import React from 'react';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import {theme} from './App.style';
import HomeScreen from './app/screens/home/home.screen';
import { LoginScreen } from './app/screens/login/login.screen';
import { RegisterScreen } from './app/screens/register/register.screeen';


const App = () => {

  return (
   <PaperProvider theme={theme}>
      
      <HomeScreen/>
   </PaperProvider>
  );
};



export default App;
