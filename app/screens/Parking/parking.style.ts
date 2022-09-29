import { StyleSheet } from "react-native"
import { theme } from "../../../App.style"

export const parkingStyle = StyleSheet.create ({
    flex: {
        flex: 1
    },
    cardTitle: {
        color: theme.color
    },
   
    box: {
        width: 70,
        height: 50,
        textAlign: "center",
        marginHorizontal: "1%",
        paddingHorizontal: 9,
        paddingVertical: 15,
        borderRadius: 4,
      
        alignSelf: "flex-start",
        
        marginBottom: 6,
        minWidth: "23%",
       
        
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        
    },
    button: {
        paddingHorizontal: 9,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "white",
        alignSelf: "flex-start",
        marginBottom: 6,
        
        
      },
      boxmark: {
        width: 20,
        height: 40,
        textAlign: "center",
        marginHorizontal: "3.5%",
        borderRadius: 4,
        alignSelf: "flex-start",
        marginBottom: 9,
        minWidth: "93%",
        paddingVertical: 3,
        fontSize: 24
        
       
        
    },
    
   
    

})