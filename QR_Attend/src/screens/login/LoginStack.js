import {createStackNavigator} from "react-navigation";
import {Loading} from "./Loading";
import {HomeScreen} from "./HomeScreen";
import {Signup} from "./Signup";
import {Image, Text, TouchableOpacity} from "react-native";
import React from "react";


export const LoginStack = createStackNavigator({
        login: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                headerStyle: {backgroundColor: 'white'},
                headerTitle: 'Login',
                headerTintColor: 'black',
            })
        },
        signup: {
            screen: Signup,
            navigationOptions: ({navigation}) => ({
                headerStyle: {backgroundColor: 'white'},
                headerTitle: (
                    <Image source={require('../../res/images/Bridgr4.png')} style={{width: 140, height: 35}}/>
                ),
                headerTintColor: 'white',
            })
        }
    },
    {
        headerMode: 'float',
        navigationOptions: ({navigation}) => ({
            headerStyle: {backgroundColor: 'white'},
            headerTitle: (
                <Image source={require('../../res/images/Bridgr4.png')} style={{width: 140, height: 35}}/>
            ),
            headerTintColor: 'white',
        })
    });
