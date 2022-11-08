import { StyleSheet } from "react-native";

export const CardPaymentStyle =StyleSheet.create({
    content: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",  
     
},
    cardButton: {
        margin: 10,
        marginleft: 0,
        marginRight: 0,
        width: 300,


    },

    creditCard:{
        backgroundColor: "rgb(252, 253, 246)",
        marginLeft: 10,
        marginRight: 10,
        height: 300,
        width: '100%',
        padding: 12,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 30,
        borderColor: "rgb(215, 232, 205)",
        borderWidth: 5,

    },

    date1: {
        marginTop: 50,
        
    },
    date2: {
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",  
        
    },
    
    dates1 :{
        fontSize: 20,
        borderRadius: 15,
        borderColor: "rgb(215, 232, 205)",
        borderWidth: 2,
        marginLeft: 5,
    },
    dates2 :{
        fontSize: 20,
        borderRadius: 15,
        borderColor: "rgb(215, 232, 205)",
        borderWidth: 2,
        marginLeft: 5,
    },
    dates3 :{
        fontSize: 20,
        borderRadius: 15,
        borderColor: "rgb(215, 232, 205)",
        borderWidth: 2,
        marginLeft: 10,
    },
    
    text1 :{
        fontSize: 20,
        marginLeft: 10
    },

    text2 :{
        fontSize: 20,
        marginLeft: 10
    },

    text3 :{
        fontSize: 20,
        marginLeft: 50
    },

    Error: {
        color: "#f44336",
        marginLeft: 0,
        marginBottom:20,
    },
   
    
})