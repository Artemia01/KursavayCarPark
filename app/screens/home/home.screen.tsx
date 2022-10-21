import React from "react";
import { Image, SafeAreaView } from "react-native";
import MapView,{ Marker } from "react-native-maps";
import { FAB } from "react-native-paper";
import { ConfirmParkingSpaceComponent } from "../../components/header/confirm-parking-space/confirm-parking-space.component";
import { HeaderComponent } from "../../components/header/header.components";
import { SearchingParkSpaceComponent } from "../../components/searching-park-space/searching-park-space.component";

import { homeStyle } from "./home.style";

interface HomeScreenProps{
    navigation: any;
}

const HomeScreen = (props: HomeScreenProps) =>{

    //const goParkingRoute = () => props.navigation.navigate("ParkingRoute")

    const state: number =1; //1 - точки на карте, 2- красніе маркеры, 3 - загрузка 

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
                style={homeStyle.flex}
                initialRegion={{
                    latitude: 47.8228900,
                    longitude: 35.1903100,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                  }}>
            {
                state == 1?
                <>
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
            </>
            :null
            }
            {
                state == 2?
                <>
                <Marker
                    description="Origin"
                    coordinate={{ latitude: 47.8228900, longitude: 35.173100}}>
                    
            </Marker>
            <Marker
                    description="Destination"
                    coordinate={{ latitude: 47.8508900, longitude: 35.13089100}}>
                    
            </Marker>
            {/* <Marker
                    description="Car Park #1"
                    coordinate={{ latitude: 47.8228900, longitude: 35.1533100}}>
                    <Image
                            style={homeStyle.markerImage}
                            source={require("../../../assets/pngwing.com.png")}/>
            </Marker>
            <Marker
                    description="Car Park #1"
                    coordinate={{ latitude: 47.8508900, longitude: 35.103100}}>
                    <Image
                            style={homeStyle.markerImage}
                            source={require("../../../assets/pngwing.com.png")}/>
            </Marker>
            <Marker
                    description="Car Park #1"
                    coordinate={{ latitude: 47.8328900, longitude: 35.1403100}}>
                    <Image
                            style={homeStyle.markerImage}
                            source={require("../../../assets/pngwing.com.png")}/>
            </Marker> */}
            </>
            :null
            }

        
            
            </MapView>
            {/* {
                state == 1?
                <FAB 
            style={homeStyle.fab}
            icon="plus"
            onPress={goParkingRoute}/> // кнопка плюс с формой 
            :null

            } */}
            {
                state == 2?
               <ConfirmParkingSpaceComponent />
                :null
            }
            {
                state == 3?
                <SearchingParkSpaceComponent />
                : null
            }
            
        </SafeAreaView>
    )
}

export default HomeScreen;