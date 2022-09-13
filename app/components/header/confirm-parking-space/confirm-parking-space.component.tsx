import React from "react";
import { View } from "react-native";
import { Card, List, IconButton,  Button} from "react-native-paper";
import { confirmParkingSpaceStyle } from "./confirm-parking-space.style";

export const ConfirmParkingSpaceComponent = () =>{

    return (

        <Card>
            <Card.Content>
                <List.Item
                    title="150.00 UAH"
                    description="Total amount for a parking space " 
                    left={() =>
                        <IconButton
                            icon="car"
                            size={30}
                            style={confirmParkingSpaceStyle.icon}
                            iconColor={confirmParkingSpaceStyle.icon.color}/>
                    }
                    right={() =>
                        <View>
                            <Button
                            style={confirmParkingSpaceStyle.cancelButton}>Cancel</Button>
                            <Button mode="contained">Confirm</Button>
                        </View>
                    }/>

        </Card.Content>
    </Card>
    ) 
}