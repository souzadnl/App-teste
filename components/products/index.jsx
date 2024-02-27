import React, {useState} from "react";
import { View, Text, TextInput, Pressable, Image, FlatList } from "react-native";
import styles from "./styles";

export default function Products({navigation}) {

    lista = [
        {
            id: 1,
            nome: "X-Tudo",
            preco: "R$ 25,00",
            foto: "https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/receitas-de-x-tudo.jpg",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non massa mattis, vulputate odio vel, iaculis elit. Suspendisse faucibus neque lacus. Phasellus nulla ante."
        },
        {
            id: 2,
            nome: "X-Egg",
            preco: "R$ 15,00",
            foto: "https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/x-egg-73519.jpg",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non massa mattis, vulputate odio vel, iaculis elit. Suspendisse faucibus neque lacus. Phasellus nulla ante."
        },
        {
            id: 3,
            nome: "X-Frango",
            preco: "R$ 20,00",
            foto: "https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/x-frango-73524.jpg",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non massa mattis, vulputate odio vel, iaculis elit. Suspendisse faucibus neque lacus. Phasellus nulla ante."
        },
        {
            id: 4,
            nome: "X-Bacon",
            preco: "R$ 20,00",
            foto: "https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/Promocao_201604250326298462d3ef9f92300092a34b211e303c1b.jpg",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non massa mattis, vulputate odio vel, iaculis elit. Suspendisse faucibus neque lacus. Phasellus nulla ante."
        },
        {
            id: 5,
            nome: "X-Salada",
            preco: "R$ 15,00",
            foto: "https://static3.depositphotos.com/1001485/138/i/450/depositphotos_1388871-stock-photo-hamburger.jpg",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non massa mattis, vulputate odio vel, iaculis elit. Suspendisse faucibus neque lacus. Phasellus nulla ante."
        },
        {
            id: 6,
            nome: "X-Burguer",
            preco: "R$ 15,00",
            foto: "https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/d0416bbddd7e82156eb29941b516e8fd-snack-bar.jpg",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non massa mattis, vulputate odio vel, iaculis elit. Suspendisse faucibus neque lacus. Phasellus nulla ante."
        }
    ]

    

    return(
        <View style={styles.principal}>
            <View style={styles.container}>
                <Text style={styles.title}>Produtos</Text>
                <Text style={styles.subtitle}>Lista de produtos</Text>
                
                <FlatList data = {lista} numColumns={2} renderItem={({item}) => 

                
                <View style={styles.product_card}>
                    <Pressable onPress={()=>navigation.navigate("Product", {
                        id: item.id,
                        lanche: item.nome,
                        valor: item.preco,
                        imagem: item.foto,
                        descricao: item.descricao
                    })}>
                        <Image source={{uri:item.foto}} style={{width:90, height:90}}></Image>
                        <Text>Lanche: {item.nome} Valor: {item.valor}</Text>
                    </Pressable>  
                </View>
                
                }>

                </FlatList>
            </View>
        </View>
    )
}