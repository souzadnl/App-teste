import React, {useState} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseConfig";
import axios from "axios";

export default function Register({navigation}) {
    
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [cep, setCep] = useState('')
    const auth = getAuth(app);

    function pesquisar () {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response)=>{
            console.log(response.data.logradouro)
        })
    }

    function cadastrar() {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigation.navigate("Home")
            // ...
        })
        .catch((error) => {

            if(pass.length < 6) {
                console.log('Sua senha tem que ter no minimo 5 caracteres');
             }

            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return(
        <View style={styles.principal}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Crie sua conta</Text>
                    <Text style={styles.subtitle}>Vimos que você é novo por aqui, crie uma conta!</Text>
                </View>
                <View style={styles.view_inputs}>

                    <View>
                        <Text aria-label="label-email" id="user">email</Text>
                        <TextInput aria-label="input" aria-labelledby="email" style={styles.box} placeholder="Insira seu email" value={email} onChangeText={setEmail}></TextInput>
                    </View>
                    
                    <View>
                        <Text aria-label="label-pass" id="pass">Senha</Text>
                        <TextInput secureTextEntry={true} aria-label="input" aria-labelledby="pass" style={styles.box} placeholder="Insira sua senha" value={pass} onChangeText={setPass}></TextInput>
                    </View>

                    <View>
                        <Text aria-label="label-cel" id="cep">CEP</Text>
                        <TextInput aria-label="input" aria-labelledby="cep" style={styles.box} placeholder="Insira seu cep" value={cep} onChangeText={setCep}></TextInput>
                    </View>

                </View>
                <View>
                    <Pressable style={styles.button} onPress={cadastrar}><Text style={styles.textbutton}>Cadastrar</Text></Pressable>
                </View>
            </View>
        </View>
    )
}