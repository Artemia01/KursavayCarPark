import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View } from "react-native";
import MapView from "react-native-maps";
import { Avatar, Card, List, Text, Title} from "react-native-paper";
import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { HeaderComponent } from "../../components/header/header.components";
import { parkingStyle } from "./parking.style";

interface ParkingScreen1Props {
    
    id: number,
    latitude: number,
    longitude: number,
    parkingButtons: Array <{id: number, pay: boolean}>,
    name: string,
    address: string,
    image: string,

}

interface ParkingButtonProps {
    id: number;
    pay: boolean;
}



const parkingButtons = [{'id':1, 'pay':true}, {'id':2, 'pay':true}, {'id':3, 'pay':true}, {'id':4, 'pay':true}, {'id':5, 'pay':true}, {'id':6, 'pay':true}, 
                       {'id':7, 'pay':true}, {'id':8, 'pay':true}, {'id':9, 'pay':true}, {'id':10, 'pay':true}, {'id':11, 'pay':true}, {'id':12, 'pay':true}]



                       
const ParkingScreen = ({navigation,route}:any, props:ParkingScreen1Props) =>{
    const {name, address, image} = route.params;

    const Payment =() => navigation.navigate("CardPayment")
    

     const ParkingButton = (props: ParkingButtonProps) => <Text key= {props.id} style={[parkingStyle.box, { backgroundColor: "gray" }]} onPress={Payment} >{props.id}</Text>
    

    return (
        <SafeAreaView style={parkingStyle.flex}>
            <HeaderComponent 
            title={name} 
            hasBackButton={true}
            navigation={navigation}/>
            <View style={parkingStyle.flex}>
                <MapView
                    initialRegion={{
                        latitude: 47.8228900,
                        longitude: 35.1903100,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }}
                    style={parkingStyle.flex}>

                </MapView>
            </View>
            <Card>
                <Card.Content>
                <List.Item
                    title={name}
                    description="Work Time: 24/7"
                    left={() => 
                        <Avatar.Image
                            size={80}
                            source={{uri: image}}
                        />
                    }
                />
                 <List.Item
                    title="Address"
                    description={address}
                    left={()=>
                        <List.Icon icon="flag-outline"/>
                    }
                    />
                    <View style={parkingStyle.row}>
                    
                    <Text style={[parkingStyle.boxmark, { backgroundColor: "gray" }]} >Booked</Text>
                    <Text style={[parkingStyle.boxmark, { backgroundColor: "steelblue" }]} >UnBooked</Text>
                    </View>
                    
                    
                   
                <View>


                <View style={parkingStyle.button}>
                <View style={parkingStyle.row}>
                  {parkingButtons.map(ParkingButton)}
                    </View>
                </View>
                </View>




                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

export default ParkingScreen;