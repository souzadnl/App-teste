import React, {useState} from "react";
import { View, Text, TextInput, Pressable, Image, FlatList } from "react-native";
import styles from "./styles";

export default function Product({navigation, route}) {

    const {id, valor, imagem, lanche, descricao} = route.params
    
    return(
        <View style={styles.principal}>
            <View style={styles.container}>
                <View style={styles.product_card}>
                    <Text style={styles.title_produto}>{lanche}</Text>

                    <Image source={{uri:imagem}} style={styles.imagem_estilizada}></Image>

                    <Text style={styles.descricao}>{descricao}</Text>
                    <Text style={styles.preco_lanche}>{valor}</Text>
                </View>
                
            </View>
        </View>
    )
}