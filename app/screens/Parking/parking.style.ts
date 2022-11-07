import { StyleSheet } from "react-native"

export const parkingStyle = StyleSheet.create ({
   
   

    photo: {
        width:410, 
        height:330,
        borderColor: "rgb(215, 232, 205)",
        borderWidth: 5,
        borderRadius: 20,
    },

    ramka: {
        padding:10,
        marginTop: 10,
        borderColor: "rgb(215, 232, 205)",
        borderWidth: 5,
        borderRadius: 20,
    },

    name: {
        
        fontSize: 26,
        
    },

    raiting: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
        marginTop: 8,
        fontSize: 18,
        borderColor: '#FFD700',
        borderWidth: 3,
        borderRadius: 15,
        width:55,
        height:27,
        backgroundColor:'#FFD700',
       

        
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
        marginBottom:5,
        flexDirection: "row",  
        
        
    },
    
   
    star: {
        marginLeft: 39,
        marginTop:9,
    },

    flag: {
        marginRight:10,
        marginLeft: 79,
        marginTop:5,
    },

    table: {
        marginRight:10,
        marginLeft: 49,
        marginTop:5,
    },

    coin: {
        marginRight:10,
        marginLeft: 112,
        marginTop:3,
    },


    line: {
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        borderColor: "rgb(215, 232, 205)",
        borderBottomWidth: 3,

    },
    

})