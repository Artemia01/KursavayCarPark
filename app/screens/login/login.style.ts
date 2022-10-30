import { StyleSheet } from "react-native";
import { red100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

export const LoginStyle =StyleSheet.create({
    content: {
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#75975e" 
    },
    view: {
        width: "80%"
    },
    cardTitle: {
        color: "rgb(101,37,131)", //цвет текста Кар парк
        
    },

    cardButton: {
        marginTop: 10,
        margin: 2,
        marginleft: 0,
        marginRight: 0
    },

    Error: {
        color: "#f44336",
        marginLeft: 70,
    },
   
    
})