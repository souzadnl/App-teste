import React, {useState} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";


export default function Login({navigation}) {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    function logar() {
        if (user=="lin" && pass=="123") {
            navigation.navigate("Home")
        } else {
            console.log("não logou")
        }
    }

    return(
        <View style={styles.principal}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.subtitle}>Faça Login parar entrar no aplicativo</Text>
                </View>
                <View style={styles.view_inputs}>
                    <View>
                        <Text aria-label="label-user" id="user">Usuário</Text>
                        <TextInput aria-label="input" aria-labelledby="user" style={styles.box} placeholder="Insira seu usuário" value={user} onChangeText={setUser}></TextInput>
                    </View>
                    
                    <View>
                        <Text aria-label="label-pass" id="pass">Senha</Text>
                        <TextInput secureTextEntry={true} aria-label="input" aria-labelledby="pass" style={styles.box} placeholder="Insira sua senha" value={pass} onChangeText={setPass}></TextInput>
                    </View>
                </View>
                <View>
                    <Pressable style={styles.button} onPress={logar}><Text style={styles.textbutton}>Entrar</Text></Pressable>
                </View>
            </View>
        </View>
    )
}