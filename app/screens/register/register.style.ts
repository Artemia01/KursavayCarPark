import { StyleSheet } from "react-native"
import { theme } from "../../../App.style"


export const registerStyle = StyleSheet.create({
    
    content : {
        padding: 15,
        paddingTop: 10,
        paddingBottom: '100%',
        backgroundColor: "rgb(215, 232, 205)" 
    },

   space:{
    marginBottom:10,
   },
  
    icon:{
        color: theme.colors.primary
    },
    button:{
        marginTop:40,
        margin: 15,
        marginLeft: 0,
        marginRight: 0,
    }
    

})