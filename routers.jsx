import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Login from "./components/login";
import Products from "./components/products";
import Home from "./components/home";
import Product from "./components/product";


const Pilha = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: "purple",
                    paddingVertical: 1,
                    borderTopColor: "transparent"
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "gray"
            }}
        

        >


            <Tab.Screen name="Login" component={Login} options={{
                tabBarStyle:{display: "none"},
                tabBarIcon:({size, color})=>(
                    <Feather name="user" size={size} color={color}></Feather>
                )
            }}></Tab.Screen>

            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon:({size, color})=>(
                    <Feather name="home" size={size} color={color}></Feather>
                )

            }}></Tab.Screen>

            <Tab.Screen name="Products" component={Products} options={{
                tabBarIcon:({size, color})=>(
                    <Feather name="inbox" size={size} color={color}></Feather>
                )
            }}></Tab.Screen>

        </Tab.Navigator>
    )
}

export default function Router() {
    return(
        <NavigationContainer>
            <Pilha.Navigator>

                <Pilha.Screen name="MyTabs" component={MyTabs} options={{headerShown: false}}>

                </Pilha.Screen>

                <Pilha.Screen name="Login" component={Login} options={{headerShown: false}}>
                    
                </Pilha.Screen>
                
                <Pilha.Screen name="Home" component={Home} options={{headerShown: false}}>

                </Pilha.Screen>

                <Pilha.Screen name="Products" component={Products} options={{headerShown: false}}>

                </Pilha.Screen>

                <Pilha.Screen name="Product" component={Product}>

                </Pilha.Screen>

            </Pilha.Navigator>
        </NavigationContainer>
    )
}