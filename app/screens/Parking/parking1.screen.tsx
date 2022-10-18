import React from "react";
import { SafeAreaView, View } from "react-native";
import MapView from "react-native-maps";
import { Avatar, Card, List, Text, Title} from "react-native-paper";
import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { HeaderComponent } from "../../components/header/header.components";
import { parkingStyle } from "./parking.style";

interface ParkingScreen1Props {
    navigation: any;
}



const ParkingScreen1 = (props: ParkingScreen1Props) =>{
    const Payment =() => props.navigation.navigate("CardPayment")

    return (
        <SafeAreaView style={parkingStyle.flex}>
            <HeaderComponent 
            title={"Parking №1"} 
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
                    title={"Parking №1"}
                    description="Work Time: 24/7"
                    left={() => 
                        <Avatar.Image
                            size={80}
                            source={{uri: "https://www.sq.com.ua/img/news/2018/03/14/parking.jpg"}}
                        />
                    }
                />
                 <List.Item
                    title="Address"
                    description="Fortechna st,54"
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
                     <Text style={[parkingStyle.box, { backgroundColor: "gray" }]} onPress={Payment} >1</Text>
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

export default ParkingScreen1;