import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import SignInScreen from './screens/signinScreen/SignInScreen'

export default function Router() {
    return (
        <SafeAreaView>
            <SignInScreen />
        </SafeAreaView>
    )
}
