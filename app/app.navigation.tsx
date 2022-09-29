import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./screens/login/login.screen";
import HomeScreen from "./screens/home/home.screen";
import { RegisterScreen } from "./screens/register/register.screen";
import ParkingScreen1 from "./screens/Parking/parking1.screen";
import ParkingScreen2 from "./screens/Parking/parking2.screen";
import ParkingScreen3 from "./screens/Parking/parking3.screen";
import ParkingScreen4 from "./screens/Parking/parking4.screen";
import ParkingScreen5 from "./screens/Parking/parking5.screen";
import BookingParkingScreen from "./screens/booking-parking/booking-parking.screen";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => (
    <NavigationContainer  >
        <Navigator  
        initialRouteName="Login"
        screenOptions={{headerShown: false}} > 
            <Screen name="Login" component={LoginScreen}></Screen>
            <Screen name="Home" component={HomeScreen}></Screen>
            <Screen name="Register" component={RegisterScreen}></Screen>
            {/* <Screen name="ParkingRoute" component={BookingParkingScreen}></Screen> */}
            <Screen name="Parking №1" component={ParkingScreen1}></Screen>
            <Screen name="Parking №2" component={ParkingScreen2}></Screen>
            <Screen name="Parking №3" component={ParkingScreen3}></Screen>
            <Screen name="Parking №4" component={ParkingScreen4}></Screen>
            <Screen name="Parking №5" component={ParkingScreen5}></Screen>

        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;
