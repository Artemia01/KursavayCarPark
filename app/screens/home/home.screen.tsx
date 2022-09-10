import  React from 'react';
import { SafeAreaView } from 'react-native';
import { Title } from 'react-native-paper';
import MapView from 'react-native-maps';

const HomeScreen = () => {

    return (
        <SafeAreaView style={{flex: 1}}>
           <MapView 
           style={{flex: 1}}
           initialRegion={{
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0

           }}/>

        </SafeAreaView>
    )
}


export default HomeScreen;