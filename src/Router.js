import React from 'react'
import { Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import SignInScreen from "./screens/signinScreen/SignInScreen"
import SignUpScreen from "./screens/signupScreen/SignUpScreen"

export default function Router() {
    return (
        <StatusBar barStyle='light-content' >
            <SignUpScreen />
        </StatusBar>
    )
}