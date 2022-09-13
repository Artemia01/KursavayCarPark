import React from "react";
import { Image, SafeAreaView } from "react-native";
import MapView,{ Marker } from "react-native-maps";
import { FAB } from "react-native-paper";
import { ConfirmParkingSpaceComponent } from "../../components/header/confirm-parking-space/confirm-parking-space.component";
import { HeaderComponent } from "../../components/header/header.components";
import { SearchingParkSpaceComponent } from "../../components/searching-park-space/searching-park-space.component";

import { homeStyle } from "./home.style";

const HomeScreen = () =>{

    const state: number =3; //1 - точки на карте, 2- красніе маркеры, 3 - загрузка 

    return (
        <SafeAreaView style={homeStyle.flex}>
            <HeaderComponent title="CarPark" />
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
                    coordinate={{ latitude: 47.8228900, longitude: 35.173100}}>
                    <Image
                            style={homeStyle.markerImage}
                            source={require("../../../assets/pngwing.com.png")}/>
            </Marker>
            <Marker
                    description="Car Park #1"
                    coordinate={{ latitude: 47.8508900, longitude: 35.13089100}}>
                    <Image
                            style={homeStyle.markerImage}
                            source={require("../../../assets/pngwing.com.png")}/>
            </Marker>
            <Marker
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
            {
                state == 1?
                <FAB 
            style={homeStyle.fab}
            icon="plus"/>
            :null

            }
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