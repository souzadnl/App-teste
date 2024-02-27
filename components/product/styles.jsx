import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 50,
        marginHorizontal: 30,
        height: "70%",
        borderRadius: 20
    },
    principal: {
        flex: 1,
        backgroundColor: "brown"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center"
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 30,
        color: "#888",
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
        width: "80%"
    },
    product_card: {
        width: "90%",
        height: "90%"
    },
    imagem_estilizada: {
        width: "100%",
        height: "50%"
    },
    preco_lanche: {
        color: "brown",
        fontSize: 30,
        fontWeight: "500",
        marginLeft: "auto",
        marginTop: 15
    },
    descricao: {
        fontSize: 14,
        color: "gray",
        marginVertical: 15
    },
    title_produto: {
        color: "brown",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center"
    }


})

export default styles