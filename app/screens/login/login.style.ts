import { StyleSheet } from "react-native";


export const LoginStyle =StyleSheet.create({
    content: {
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "rgb(215, 232, 205)" 
    },
    view: {
        width: "80%"
    },
    cardTitle: {
        fontSize:22,
        fontWeight:'bold',
        marginLeft:115,
        
    },
    textspace:{
        marginTop:5,
    },
    buttonspace:{
        marginTop:25,
    },

    cardButton: {
        // padding:7,
        marginTop: 15,
        margin: 2,
        marginleft: 0,
        marginRight: 0,
        fontSize:22,
        
    },

    Error: {
        color: "#f44336",
        marginLeft: 70,
    },
   
    
})