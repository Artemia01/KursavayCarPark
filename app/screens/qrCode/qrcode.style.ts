import { StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const qrCodeScreen = StyleSheet.create({
    
    container: {
        height:'100%',
        width:'80%',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
       
        

    },

    qr:{
        marginVertical:20,
    },

    text: {
        fontSize:22,
        fontWeight: "bold",
    }


})