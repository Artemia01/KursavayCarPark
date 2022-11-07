import { StyleSheet } from "react-native"
import { theme } from "../../../App.style"

export const parkingStyle = StyleSheet.create ({
   
    photo: {
        width:410, 
        height:330,
        borderColor: '#d3d3d3',
        borderWidth: 5,
        borderRadius: 20,
    },

    ramka: {
        marginTop: 10,
        borderColor: '#d3d3d3',
        borderWidth: 5,
        borderRadius: 20,
    },

    name: {
        
        fontSize: 30,
        
    },

    raiting: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
        marginTop: 8,
        fontSize: 18,
        borderColor: '#FFD700',
        borderWidth: 5,
        borderRadius: 20,
        width:55,
        height:27,

        
    },

    raitingText: {
        marginLeft:5,
        marginTop: 5,
        fontSize: 22,

        
    },


    address: {
        fontSize: 22,
      
    },

    description: {
        fontSize: 22,
        
    },

    price: {
        fontSize: 22,
        
    },

    button: {
        marginTop:10,
        height:40,
        width:250,
        marginLeft:90,
        

    },

    content: {
        marginLeft:10,
        flexDirection: "row",  
        
        
    },
    
   
    star: {
        marginLeft: 20,
        marginTop:9,
    },

    flag: {
        marginRight:10,
        marginLeft: 37,
        marginTop:5,
    },

    table: {
        marginRight:10,
        marginLeft: 7,
        marginTop:5,
    },

    coin: {
        marginRight:10,
        marginLeft: 69,
        marginTop:3,
    },


    line: {
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        borderColor: '#d3d3d3',
        borderBottomWidth: 3,

    },
    

})