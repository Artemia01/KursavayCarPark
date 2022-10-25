import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, Platform, PermissionsAndroid } from "react-native";
import MapView,{ Callout, Circle, Marker } from "react-native-maps";
import { FAB, Text } from "react-native-paper";
import { ConfirmParkingSpaceComponent } from "../../components/header/confirm-parking-space/confirm-parking-space.component";
import { HeaderComponent } from "../../components/header/header.components";
import { SearchingParkSpaceComponent } from "../../components/searching-park-space/searching-park-space.component";
import Geolocation from "@react-native-community/geolocation";
import { homeStyle } from "./home.style";

interface HomeScreenProps{
    navigation: any;
}

const HomeScreen = (props: HomeScreenProps) =>{
   
const [region, setRegion] = useState(null);

useEffect(() =>{
    getMyLocation()
}, [])

function getMyLocation(){
    Geolocation.getCurrentPosition( info => {
        console.log("LAT ", info.coords.latitude)
        console.log("LONG ", info.coords.longitude)

    })
}



    //const goParkingRoute = () => props.navigation.navigate("ParkingRoute")

   

    const openMark1 = () => props.navigation.navigate("Parking №1")
    const openMark2 = () => props.navigation.navigate("Parking №2")
    const openMark3 = () => props.navigation.navigate("Parking №3")
    const openMark4 = () => props.navigation.navigate("Parking №4")
    const openMark5 = () => props.navigation.navigate("Parking №5")
    

    return (
        <SafeAreaView style={homeStyle.flex}>
             <HeaderComponent title="CarPark" 
                    navigation={props.navigation}/> 
            <MapView
                onMapReady={() => {
                    Platform.OS === 'android' ?
                    PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                        .then(() => {
                            console.log("USUARIO ACEITOU")
                        })
                    : ''
                   
                }}

                style={homeStyle.flex}
                region={region}
                zoomEnabled={true}
                minZoomLevel={13}
                showsUserLocation={true}
                loadingEnabled={true}
                >
              
               


            
                <Marker 
                    description="Car Park #1"
                    coordinate={{ latitude: 47.8228900, longitude: 35.173100}}
                    onPress={openMark1}>
                    <Image
                            style={homeStyle.markerImage}
                            source={require("../../../assets/pngwing.com.png")}/>
            </Marker>
            <Marker
                    description="Car Park #2"
                    coordinate={{ latitude: 47.8508900, longitude: 35.13089100}}
                    onPress={openMark2}>
                    <Image
                            style={homeStyle.markerImage}
                            source={require("../../../assets/pngwing.com.png")}/>
            </Marker>
            <Marker
                    description="Car Park #3"
                    coordinate={{ latitude: 47.8228900, longitude: 35.1533100}}
                    onPress={openMark3}>
                    <Image
                            style={homeStyle.markerImage}
                            source={require("../../../assets/pngwing.com.png")}/>
            </Marker>
            <Marker
                    description="Car Park #4"
                    coordinate={{ latitude: 47.8508900, longitude: 35.103100}}
                    onPress={openMark4}>
                    <Image
                            style={homeStyle.markerImage}
                            source={require("../../../assets/pngwing.com.png")}/>
            </Marker>
            <Marker
                    description="Car Park #5"
                    coordinate={{ latitude: 47.8328900, longitude: 35.1403100}}
                    onPress={openMark5}>
                    <Image
                            style={homeStyle.markerImage}
                            source={require("../../../assets/pngwing.com.png")}/>
            </Marker>

            </MapView>



            
               
            
        </SafeAreaView>
    )
}

export default HomeScreen;