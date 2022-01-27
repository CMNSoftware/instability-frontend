import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';

//Assets
import { StyleVariables } from "../../assets/styleVariables"
import { Color } from "../../assets/color"


//Ek paketler
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function SignUpScreen() {

    return (
        <SafeAreaView style={styles.background}>
            <Text style={styles.KARARSIZ} >KARARSIZ</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Hemen bir hesap oluşturalım</Text>

                <TextInput
                    style={styles.input}
                    placeholder='E-Mail Adresiniz'
                    placeholderTextColor={Color.placeHolderColor}
                    keyboardType='email-address'
                >

                </TextInput>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: Color.backgroundColor,
        height: StyleVariables.width * 2.2
    },
    KARARSIZ: {
        fontSize: RFPercentage(9),
        textAlign: "center",
        marginTop: StyleVariables.width * 0.15,
        fontWeight: "900",
        color: Color.textColor,
    },
    inputContainer: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        marginHorizontal: StyleVariables.width * 0.1,
        marginTop: StyleVariables.width * 0.15
    },
    inputTitle: {
        color: Color.textColor,
        alignSelf: "flex-start",
        fontWeight: "bold"
    },
    input: {
        marginTop: StyleVariables.heightWindow * 0.01,
        backgroundColor: Color.inputColor,
        width: StyleVariables.width * 0.8,
        height: StyleVariables.heightWindow * 0.07,
        borderRadius: 10,
        paddingLeft: StyleVariables.width * 0.11,
        color: Color.textColor
    }
})

