import { useLinkProps } from "@react-navigation/native";
import React from "react";
import {  Image, SafeAreaView, View } from "react-native";
import MapView from "react-native-maps";
import { Avatar, Card,  Text, Title} from "react-native-paper";
//import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { HeaderComponent } from "../../components/header/header.components";
import { parkingStyle } from "./parking.style";
import { Button } from 'react-native-paper';
import { Screen } from "react-native-screens";

interface ParkingScreen1Props {
    
    id: number,
    latitude: number,
    longitude: number,
    name: string,
    address: string,
    image: string,

}



                       
const ParkingScreen = ({navigation,route}:any, props:ParkingScreen1Props) =>{
    const {name, address, image, description, price, raiting} = route.params;

    const Payment =() => navigation.navigate("CardPayment")
    

    
    

    return (
        <SafeAreaView >
                <HeaderComponent 
                title={name} 
                hasBackButton={true}
                navigation={navigation}/>
                <View >
                

                        <Image style= {parkingStyle.photo}
                        source={{uri: image}}/>

                 </View >
                
                <View style={parkingStyle.ramka}>
                    
                       <View style={parkingStyle.content}>
                            <Text style={parkingStyle.name}
                            >{name}</Text>

                            <Avatar.Icon 
                            style={parkingStyle.star}
                            size={24} icon="star" />

                            <Text style={parkingStyle.raiting}
                            > {raiting} </Text>

                            <Text style={parkingStyle.raitingText}
                            >Raiting </Text>

                        </View>

                        <View style={parkingStyle.line}></View>

                        <View style={parkingStyle.content}>
                            <Text style={parkingStyle.address}
                            >Address:</Text>

                            <Avatar.Icon 
                            style={parkingStyle.flag}
                            size={24} icon="flag" />


                            <Text style={parkingStyle.address}
                            >{address}</Text>
                        </View>

                       

                        <View style={parkingStyle.content}>
                            <Text style={parkingStyle.description}
                            >Description:</Text>

                            <Avatar.Icon 
                            style={parkingStyle.table}
                            size={24} icon="table" />

                            <Text style={parkingStyle.description}
                            >{description}</Text>
                        </View>

                        

                        <View style={parkingStyle.content}>

                            <Text style={parkingStyle.price}
                            >Price:</Text>

                            <Avatar.Icon 
                            style={parkingStyle.coin}
                            size={24} icon="currency-usd" />

                            <Text style={parkingStyle.price}
                            >{price}</Text>

                           
                        </View>

                        
                    </View>
                    <Button style={parkingStyle.button}
                                onPress={Payment}
                                mode="contained"
                                >Pay
                            </Button>

        </SafeAreaView>
    )
}

export default ParkingScreen;