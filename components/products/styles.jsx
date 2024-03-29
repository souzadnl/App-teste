import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 30,
        marginHorizontal: 30,
        height: "90%",
        borderRadius: 20,
    },
    principal: {
        flex: 1
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "white"
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 30,
        color: "white",
        textAlign: "center",
        paddingHorizontal: 50
        
    },
    box: {
        width: "100%",
        height: 40,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#f5f5f5",
        fontSize: 14,
        color: "#888",
        marginBottom: 20,
        marginTop: 5
    },
    button: {
        backgroundColor: "#cb1bf7",
        width: "100%",
        marginTop: 20,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    textbutton: {
        color: "white",
        fontWeight: "500",
        fontSize: 14
    },
    view_inputs: {
        width: "80%",
    },
    product_card: {
        padding: 5,
        width: "45%",
        backgroundColor: "white",
        borderRadius: 5,
        margin: 5
    }

})

export default styles