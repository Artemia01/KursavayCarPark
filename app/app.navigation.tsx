import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./screens/login/login.screen";
import HomeScreen from "./screens/home/home.screen";
import { RegisterScreen } from "./screens/register/register.screen";
import ParkingScreen from "./screens/Parking/parking.screen";
import CardPayment from "./screens/CardPayment/cardpayment";
import auth from '@react-native-firebase/auth';
import QrCodeScreen from "./screens/qrCode/qrcode.screen";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
    const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <NavigationContainer>
        <Navigator initialRouteName="Login"
        screenOptions={{headerShown: false}} >
        <Screen name="Login" component={LoginScreen}></Screen>
        <Screen name="Register" component={RegisterScreen}></Screen> 
        </Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Navigator initialRouteName={'Home'} screenOptions={{headerShown: false}}>
     <Screen name="Home" component={HomeScreen}></Screen>
     <Screen name="CardPayment" component={CardPayment}></Screen>
     <Screen name="QrCode" component={QrCodeScreen}></Screen>
     <Screen name="Parking" component={ParkingScreen}></Screen>
     
      </Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;


