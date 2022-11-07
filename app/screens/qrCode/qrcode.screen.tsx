import React, { useState } from "react";
import { Dimensions, SafeAreaView, View } from "react-native";
import { Button, Text, TextInput, Title } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header.components";
import { qrCodeScreen } from "./qrcode.style";
import QRCode from "react-qr-code";

interface QrCodeScreenProps {
    navigation: any;
}
const {width} = Dimensions.get('screen');



const QrCodeScreen = ({navigation}: any,props: QrCodeScreenProps) => {

    const HomeScreen =() => navigation.navigate("Home")

    const [orderNumber, setOrderNumber] = useState(Math.floor(Math.random() * (999999999 - 100000000 + 1) ) + 100000000);

    return (
        <SafeAreaView >
            <View style={qrCodeScreen.container}>
                <Text style={qrCodeScreen.text}>Your order N:{orderNumber}
                </Text>

                <View style={qrCodeScreen.qr}>
                <QRCode
                    size={width*0.6}
                    style={{ height: "100%", maxWidth: "100%", width: "100%" }}
                    value={orderNumber.toString()}
                    // viewBox={`0 0 256 256`}
                    />
                </View>

                <Button
                 onPress={HomeScreen} // при оплате 
                mode="contained"
                >Close
                </Button>
            </View>
           
        </SafeAreaView>
    )
}

export default QrCodeScreen;