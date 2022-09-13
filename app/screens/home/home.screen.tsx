import React from "react";
import { SafeAreaView } from "react-native";
import MapView from "react-native-maps";

const HomeScreen = () =>{

    return (
        <SafeAreaView style={{flex:1}}>
            <MapView
                style={{flex:1}}
                initialRegion={{
                    latitude: 47.8228900,
                    longitude: 35.1903100,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04,
                  }}/>
        </SafeAreaView>
    )
}

export default HomeScreen;