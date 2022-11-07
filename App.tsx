
import React from 'react';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import {theme} from './App.style';
import AppNavigator from './app/app.navigation';
import BookingParkingScreen from './app/screens/qrCode/qrcode.screen';
import CardPayment from './app/screens/CardPayment/cardpayment';
import HomeScreen from './app/screens/home/home.screen';
import { LoginScreen } from './app/screens/login/login.screen';
import ParkingScreen from './app/screens/Parking/parking.screen';
import { RegisterScreen } from './app/screens/register/register.screen';




const App = () => {
  

  
  return (
    
   <PaperProvider theme={theme}>
         
         
        <AppNavigator />
   </PaperProvider>
  );
};



export default App;
