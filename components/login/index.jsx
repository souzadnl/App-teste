
import React, {useState} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseConfig";

export default function Login({navigation}) {
    
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const auth = getAuth(app);

    function logar() {
        signInWithEmailAndPassword(auth, user, pass)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigation.navigate("Home")
            // ...
        })
        .catch((error) => {
            navigation.navigate("Register")
            const errorCode = error.code;
            const errorMessage = error.message;
        });
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