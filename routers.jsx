import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/login";
import Products from "./components/products";
import Home from "./components/home";

const Pilha = createStackNavigator()

export default function Router() {
    return(
        <NavigationContainer>
            <Pilha.Navigator>

                <Pilha.Screen name="Login" component={Login}>
                    
                </Pilha.Screen>

                
                <Pilha.Screen name="Home" component={Home}>

                </Pilha.Screen>


                <Pilha.Screen name="Products" component={Products}>

                </Pilha.Screen>

            </Pilha.Navigator>
        </NavigationContainer>
    )
}