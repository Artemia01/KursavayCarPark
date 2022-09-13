import React from "react";
import { View } from "react-native";
import { ActivityIndicator, Button, Title } from "react-native-paper";
import { searchingParkSpaceStyle } from "./searching-park-space.style";

 export const SearchingParkSpaceComponent = () => {

    return (
        <View
        style={searchingParkSpaceStyle.flexCenterColumn}>
        <ActivityIndicator
            color={searchingParkSpaceStyle.icon.color}
            animating={true}/>
        <Title
        style={searchingParkSpaceStyle.title}>Parking Search</Title>
        <Button
            style={searchingParkSpaceStyle.cancelParkButton}
            mode="contained">
                Cancel
            </Button>
    </View>
    )
 }