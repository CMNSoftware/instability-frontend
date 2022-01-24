import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function SignInScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View >
            <Text style={[styles.title,{fontFamily:'SourceSansPro-Bold.ttf'}]}>Kararsız</Text>
            </View>
            <View>
                <Text style={styles.label}>Hoşgeldin!</Text>
            </View>
            <View style={styles.board}>
                <View>
                    <TextInput 
                    placeholder='      E-Mail Adresiniz'
                    style={styles.emailInput}
                    />
                       <Icon name="user-alt"  size={15} style={{position:'absolute', left:45, top:30, color:'#626262'}}/>
                    </View>
                    <View>
                    <TextInput 
                    placeholder='      Şifreniz'
                    style={styles.passwordInput}
                    />
                        <Icon name="lock"  size={15} style={{position:'absolute', left:45, top:20, color:'#626262'}}/>
                    </View>
            </View>
            <View>
                <Text style={styles.forgetPasword}>Şifreni mi unuttun?</Text>
            </View>
            <View style={styles.signInButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    <Text style={styles.authText}>
                        Birlikte giriş yap:
                    </Text>
                </View>
                <View style={styles.authLogos}>
                    <View style={styles.authLogo}>
                        <Icon name="google"  size={30} style={styles.googleLogo}/>
                    </View>
                    <View style={styles.authLogo}>
                     <Icon name="apple"  size={30} style={styles.appleLogo}/>
                    </View>
                    <View style={styles.authLogo}>
                    <Icon name="facebook-f"  size={30} style={styles.facebookLogo}/>
                    </View>
                </View>
            </View>
            <View style={styles.signUpRouter}>
                <Text style={styles.signUpQuestion}>Hesabın yok mu? <Text style={styles.signUpRouterText}>Hemen Kayıt ol</Text> </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   container:{
    backgroundColor:"#1A1A1A"
   },
    title: {
        marginTop:95,
        fontWeight: "900",
        fontSize:70,
        textAlign: 'center'
        },
    label:{
        marginTop:77,
        marginLeft:38,
        fontSize:20,
        lineHeight:23.87,
        fontFamily: 'SourceSansPro-SemiBold'
    },
    emailInput:{
        backgroundColor: "#262626",
        marginHorizontal: 36,
        marginTop: 10,
        borderRadius: 10,
        padding: 15,
        marginBottom: 30

    },
    passwordInput:{
        backgroundColor: "#262626",
        marginHorizontal: 36,
        borderRadius: 10,
        padding: 15
    },
    forgetPasword:{
        color:"#FF4B26",
        textAlign: 'right',
        marginTop: 9,
        marginRight: 37
    },
    signInButton: {
        marginTop:20,
        alignItems: 'center'
    },
    button:{
        backgroundColor: '#FF4B26',
        width: 140,
        height: 55,
        borderRadius:10    
    },
    buttonText:{
        textAlign:'center',
        marginTop:15,
        marginBottom: 16,
        fontSize:20  
    },
    authText:{
        color:"#676767",
        textAlign:"center",
        marginTop:52,
        fontSize:12,
        lineHeight:18,
        fontWeight:"400"
    },
    authLogos:{
        justifyContent:"center",
        marginTop:10,
        flexDirection: "row"
    },
    authLogo:{
        backgroundColor:"#676767",
        width:48,
        height:48,
        borderRadius:48,
        marginHorizontal:20
    },
    signUpRouter:{
        marginTop:32
    },
    signUpQuestion:{
        color:"#676767",
        fontSize:12,
        fontWeight:'400',
        lineHeight:18,
        textAlign: 'center',
        textShadowColor:'rgba(255, 75, 38, 0.5)',
        textShadowOffset: {width:0, height:4},
        textShadowRadius:20
    },
    signUpRouterText:{
        color:'#FF4B26'
    },
    googleLogo:{
        position: 'absolute',
        top:6,
        bottom:6,
        right:9,
        left:9
    },
    appleLogo:{
        position: 'absolute',
        top:6,
        bottom:6,
        right:12,
        left:12,
        color: '#000000'
    },
    facebookLogo:{
        position: 'absolute',
        top:6,
        bottom:6,
        right:12,
        left:14,
        color:'#3b5998'
    }
})