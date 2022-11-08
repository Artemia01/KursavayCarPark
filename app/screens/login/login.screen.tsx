import React, { useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';
import { LoginStyle } from './login.style';
import auth from '@react-native-firebase/auth';

interface LoginScreenProps {
    navigation: any;
}

export const LoginScreen = (props: LoginScreenProps ) => {
    
    const [error, setError] = useState('');

    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState(''); 

    const handleOnChangelogin = (query: any) => {
       
        setLoginValue(query);
      };

    const handleOnChangePassword = (query: any) => {
       
        setPasswordValue(query);
      };

    const login = () => {
        
        setError('')
        if (loginValue && passwordValue) {
            auth()
              .signInWithEmailAndPassword(loginValue.toString(), passwordValue.toString())
              .then(() => {
                console.log('User account created & signed in!');
              })
              .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    setError('That email address is invalid!');
                }
                if (error.code === 'auth/user-not-found') {
                    setError('That user is not found!');
                }
                if (error.code === 'auth/wrong-password') {
                    setError('The password is invalid!');
                }
                setError(error);
              });
          } else {
            setError('Empty email or password!');
          }
      };

    const register = () => props.navigation.navigate("Register")

    return (
        <SafeAreaView style={LoginStyle.content}>
           <View style={LoginStyle.view}>
            <Card>
                <Card.Title title="Login" titleStyle={LoginStyle.cardTitle}></Card.Title>
                <Card.Content >
                    <TextInput 
                        label="Email" 
                        key='email-adress'
                        onChangeText={handleOnChangelogin}>
                    </TextInput>
                    <TextInput 
                        style={LoginStyle.textspace}
                        label="Password" 
                        secureTextEntry={true}
                        onChangeText={handleOnChangePassword}>
                    </TextInput>
                    <View style={LoginStyle.buttonspace}>
                    <Button 
                        onPress={login}
                        mode="contained"
                        style={LoginStyle.cardButton}
                        testID="loginButton">
                            Login
                    </Button>
                    <Button 
                        onPress={register}
                        mode="contained-tonal"
                        style={LoginStyle.cardButton}>Register
                    </Button>
                    </View>
                    <Text style={LoginStyle.Error}> 
                        {error.toString()}
                    </Text>
                </Card.Content>
                
            </Card>
            </View>
            
        </SafeAreaView>
    );
}