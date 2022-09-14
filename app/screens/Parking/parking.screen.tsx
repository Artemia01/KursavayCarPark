import React from "react";
import { SafeAreaView, View } from "react-native";
import MapView from "react-native-maps";
import { Avatar, Card, List, Text, Title } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header.components";
import { parkingStyle } from "./parking.style";

const ParkingScreen = () =>{

    return (
        <SafeAreaView style={parkingStyle.flex}>
            <HeaderComponent title={"Parking details"} hasBackButton={true}/>
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
                <Card.Title
                    title={"name"} 
                    titleStyle={parkingStyle.cardTitle}
                     right={() => 
                        <Text
                        style={parkingStyle.price}>150 UAH</Text>
                     } >
                </Card.Title>
                <Card.Content>
                <List.Item
                    title={"Parking"}
                    description="Work Time: 24/7"
                    left={() => 
                        <Avatar.Image
                            size={52}
                            source={{uri: "https://www.sq.com.ua/img/news/2018/03/14/parking.jpg"}}
                        />
                    }
                />
                <List.Item
                    title="Origin"
                    description="Zp,30"
                    left={()=>
                        <List.Icon icon="flag-outline"/>
                    }
                    />
                    <List.Item
                    title="Destination"
                    description="Destination street, 30"
                    left={()=>
                        <List.Icon icon="flag-checkered"/>
                    }
                    />
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

export default ParkingScreen;