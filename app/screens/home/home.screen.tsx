import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, Platform, PermissionsAndroid } from "react-native";
import MapView,{ Callout, Circle, Marker } from "react-native-maps";
import { FAB, Text } from "react-native-paper";
import { ConfirmParkingSpaceComponent } from "../../components/header/confirm-parking-space/confirm-parking-space.component";
import { HeaderComponent } from "../../components/header/header.components";
import { SearchingParkSpaceComponent } from "../../components/searching-park-space/searching-park-space.component";
import Geolocation from "@react-native-community/geolocation";
import { homeStyle } from "./home.style";
import {firebase} from '@react-native-firebase/firestore';

interface HomeScreenProps{
    navigation: any;
}

interface ParkingsProps{
    id: number,
    latitude: number,
    longitude: number,
    name: string,
    address: string,
    image: string,
    description: string,
    price: string,
    raiting: string,
}


const parkings = [

{'id': 1, 'latitude': 47.8228900, 'longitude': 35.173100, 'name': 'Parking #1', 'address':'Fortechna st,54', 'image':'https://www.sq.com.ua/img/news/2018/03/14/parking.jpg',
 'description':'Covered car park', 'price': '2$', 'raiting': '4.6/5'},

{'id': 2, 'latitude': 47.8508900, 'longitude': 35.13089100, 'name': 'Parking #2', 'address':'Ponusiuk st,67', 'image':'https://storage.sea.com.ua/uploads/images/completed-projects/Parkovka/parkovka.jpg',
'description':'Covered car park', 'price': '3$', 'raiting': '4.9/5'},

{'id': 3, 'latitude': 47.8228900, 'longitude': 35.1533100, 'name': 'Parking #3', 'address':' Prochen st,18', 'image':'https://fainaidea.com/wp-content/uploads/2016/04/img-20150930174534-663-1.jpg',
'description':'Covered car park', 'price': '1.5$', 'raiting': '4.2/5'},

{'id': 4, 'latitude': 47.8508900, 'longitude': 35.103100, 'name': 'Parking #4', 'address':'Ukrain st,78', 'image':'https://kolobok.ua/i/81/36/35/813635/42c8371c5ae472166b7f93b720b225f4-resize_crop_1Xquality_100Xallow_enlarge_0Xw_1200Xh_630.jpg',
'description':'Covered car park', 'price': '2.75$', 'raiting': '4.1/5'},

{'id': 5, 'latitude': 47.8328900, 'longitude': 35.1403100,'name': 'Parking #5', 'address':'Stalev st,39', 'image':'https://s3-eu-central-1.amazonaws.com/enka-panel/extras/aboutus/kashirskaya-plaza-parking.jpg?1612786352577', 
'description':'Covered car park', 'price': '0$', 'raiting': '3.7/5'}

]




const HomeScreen = (props: HomeScreenProps) =>{

const renderMarker = (props:ParkingsProps) => (<Marker 
    key={props.id}
    description={"Car Parking"}
    coordinate={{ latitude: props.latitude, longitude: props.longitude}}

    onPress={() => openMark(props)}>
    <Image
            style={homeStyle.markerImage}
            source={require("../../../assets/pngwing.com.png")}/>
</Marker>)


const [region, setRegion] = useState(); //можно убрать нулл



useEffect(() =>{
    getMyLocation()
}, [])


function getMyLocation(){
    Geolocation.getCurrentPosition( info => {
        console.log("LAT ", info.coords.latitude)
        console.log("LONG ", info.coords.longitude)

    })
}




   

    const openMark = (item:ParkingsProps) => props.navigation.navigate("Parking",{name:item.name, address:item.address, image:item.image, description:item.description, price:item.price, raiting:item.raiting},)
    
    

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
                minZoomLevel={1}
                showsUserLocation={true}
                loadingEnabled={true}
                >
              
               {parkings.map (renderMarker)} 


            
                

            </MapView>



            
               
            
        </SafeAreaView>
    )
}

export default HomeScreen;