import React from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { LoginStyle } from './login.style';

interface LoginScreenProps {
    navigation: any;
}

export const LoginScreen = (props: LoginScreenProps ) => {

    const login =() => props.navigation.navigate("Home")
    const register = () => props.navigation.navigate("Register")

    return (
        <SafeAreaView style={LoginStyle.content}>
           <View style={LoginStyle.view}>
            <Card>
                <Card.Title title="Car Park" titleStyle={LoginStyle.cardTitle}></Card.Title>
                <Card.Content >
                    <TextInput 
                    
                        label="Email" 
                        key='email-adress'>
                    </TextInput>
                    <TextInput 
                        label="Password" 
                        secureTextEntry={true}>
                    </TextInput>
                    <Button 
                        uppercase={false}
                        style={LoginStyle.cardButton}>Forgot email/password
                    </Button>
                    <Button 
                        onPress={login}
                        mode="contained"
                        style={LoginStyle.cardButton}>Login
                    </Button>
                    <Button 
                        onPress={register}
                        style={LoginStyle.cardButton}>Register
                    </Button>
                </Card.Content>
            </Card>
            </View>
        </SafeAreaView>
    );
}