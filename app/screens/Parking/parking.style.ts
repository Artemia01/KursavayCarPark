import { StyleSheet } from "react-native"
import { theme } from "../../../App.style"

export const parkingStyle = StyleSheet.create ({
    flex: {
        flex: 1
    },
    cardTitle: {
        color: theme.color
    },
    price: {
        color: theme.color,
        fontSize: 16,
        fontWeight: "bold",
        marginEnd: 15
    }
})