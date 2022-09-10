import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { LoginStyle } from './login.style';

export const LoginScreen = () => {

    return (
        <SafeAreaView style={LoginStyle.content}>
           <View style={LoginStyle.view}>
            <Card>
                <Card.Title title="Car Park" titleStyle={LoginStyle.cardTitle}></Card.Title>
                <Card.Content>
                    <TextInput label="Email" key='email-adress'></TextInput>
                    <TextInput label="Password" secureTextEntry={true}></TextInput>
                    <Button uppercase={false} style={LoginStyle.cardButton}>Forgot email/password</Button>
                    <Button mode="contained"style={LoginStyle.cardButton}>Login</Button>
                    <Button style={LoginStyle.cardButton}>Register</Button>
                </Card.Content>
            </Card>
            </View>
        </SafeAreaView>
    );
}