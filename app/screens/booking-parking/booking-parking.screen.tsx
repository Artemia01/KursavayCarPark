import React from "react";
import { SafeAreaView, View } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header.components";
import { bookingParkingStyle } from "./booking-parking.style";

interface BookingParkingScreenProps {
    navigation: any;
}

const BookingParkingScreen = (props: BookingParkingScreenProps) => {

    const destinations: number[] = [1, 2];

    return (
        <SafeAreaView>
            <HeaderComponent 
            title="Booking Parking" 
            hasBackButton={true}
            navigation={props.navigation}/>
            <View style={bookingParkingStyle.marginHorizontal}>
                <TextInput
                    label="Number of the Car"/>
                <TextInput
                    label="Origin"/>
                    {
                        destinations.map((destination: number, index: number) => //#5 7:54
                            <TextInput
                                key={`destination${index}`}
                                label="Destination"
                                right={
                                    destinations.length > 1?
                                    <TextInput.Icon
                                    icon="close"
                                    color={bookingParkingStyle.buttonIconRemove.color}
                                    style={bookingParkingStyle.buttonIconRemove}/>
                                :null
                                }/>
                        )
                    }
            

            </View>
            <View>
                <Button
                icon="plus"
                style={bookingParkingStyle.buttonIconAdd}
                labelStyle={bookingParkingStyle.buttonIconAddLabelStyle}
                >
                    
                </Button>
            </View>
            <Button
                mode="contained"
                uppercase={false}
                style={bookingParkingStyle.readyButtonStyle}
                labelStyle={bookingParkingStyle.readyButtonLabelStyle}>
                Ready
            </Button>
        </SafeAreaView>
    )
}

export default BookingParkingScreen;