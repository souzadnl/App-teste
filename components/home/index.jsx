import React, {useState} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";


export default function Home({navigation}) {

    return(
        <View style={styles.principal}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Home</Text>
                    <Text style={styles.subtitle}>Faça Login parar entrar no aplicativo</Text>
                </View>

                <View>
                    <Pressable style={styles.button} onPress={()=>navigation.navigate("Products")}><Text style={styles.textbutton}>Produtos</Text></Pressable>
                </View>
            </View>
        </View>
    )
}