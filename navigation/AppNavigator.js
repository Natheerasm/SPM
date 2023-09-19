import { View,Text } from "react-native";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screen/Home";
import Login from "../screen/Login";

const Stack=createNativeStackNavigator();

export default function AppNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" options={{headerShown:false}} component={Login}/>
                <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>   
            </Stack.Navigator>
        </NavigationContainer>
    )
}