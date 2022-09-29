import React from "react";
import { SafeAreaView, View } from "react-native";
import MapView from "react-native-maps";
import { Avatar, Card, List, Text, Title} from "react-native-paper";
import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { HeaderComponent } from "../../components/header/header.components";
import { parkingStyle } from "./parking.style";

interface ParkingScreen4Props {
    navigation: any;
}



const ParkingScreen4 = (props: ParkingScreen4Props) =>{

    return (
        <SafeAreaView style={parkingStyle.flex}>
            <HeaderComponent 
            title={"Parking №4"} 
            hasBackButton={true}
            navigation={props.navigation}/>
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
                    title={"Parking №4"}
                    description="Work Time: 24/7"
                    left={() => 
                        <Avatar.Image
                            size={80}
                            source={{uri: "https://fainaidea.com/wp-content/uploads/2016/04/img-20150930174534-663-1.jpg"}}
                        />
                    }
                />
                 <List.Item
                    title="Address"
                    description="Vozzjednannya Ukrainy st,4"
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
                     <Text style={[parkingStyle.box, { backgroundColor: "gray" }]} >1</Text>
                     <Text style={[parkingStyle.box, { backgroundColor: "gray" }]}>2</Text>
                     <Text style={[parkingStyle.box, { backgroundColor: "gray" }]}>3</Text>
                     <Text style={[parkingStyle.box, { backgroundColor: "steelblue" }]}>4</Text>
                     <Text style={[parkingStyle.box, { backgroundColor: "steelblue" }]}>5</Text>
                     <Text style={[parkingStyle.box, { backgroundColor: "gray" }]}>6</Text>
                     <Text style={[parkingStyle.box, { backgroundColor: "gray" }]}>7</Text>
                     <Text style={[parkingStyle.box, { backgroundColor: "gray" }]}>8</Text>
                     <Text style={[parkingStyle.box, { backgroundColor: "gray" }]}>9</Text>
                     <Text style={[parkingStyle.box, { backgroundColor: "gray" }]}>10</Text> 
                     <Text style={[parkingStyle.box, { backgroundColor: "gray" }]}>11</Text>
                     <Text style={[parkingStyle.box, { backgroundColor: "steelblue" }]}>12</Text>
                    </View>
                </View>
                </View>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

export default ParkingScreen4;