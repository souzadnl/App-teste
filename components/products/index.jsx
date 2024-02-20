import React, {useState} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";


export default function Products({navigation}) {

    lista = {
        

    }

    

    return(
        <View style={styles.principal}>
            <View style={styles.container}>
                <Text style={styles.title}>Produtos</Text>
                <Text style={styles.subtitle}>Lista de produtos</Text>
                
                <FlatList data = {lista} numColumns={2} renderItem={({item}) => 

                <View>
                    <Text>Lanche: {item.lanche} Valor: {item.valor}</Text>
                </View>
                
                }>

                </FlatList>
            </View>
        </View>
    )
}