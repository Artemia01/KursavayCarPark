import React, { useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { LoginStyle } from './login.style';
import auth from '@react-native-firebase/auth';



interface LoginScreenProps {
    navigation: any;
}

export const LoginScreen = (props: LoginScreenProps ) => {


    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState(''); //

    const handleOnChangelogin = (query: any) => {
       
        setLoginValue(query);
      };

    const handleOnChangePassword = (query: any) => {
       
        setPasswordValue(query);
      };

    const login = () => {
        if (loginValue && passwordValue) {
            auth()
              .signInWithEmailAndPassword(loginValue.toString(), passwordValue.toString())
              .then(() => {
                console.log('User account created & signed in!');
              })
              .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                if (error.code === 'auth/user-not-found') {
                    console.log('That user is not found!');
                }
                if (error.code === 'auth/wrong-password') {
                    console.log('The password is invalid!');
                }
                console.log(error);
              });
          } else {
            console.log('Empty email or password!');
          }
          
            
          
            
        
      };

    const register = () => props.navigation.navigate("Register")

    return (
        <SafeAreaView style={LoginStyle.content}>
           <View style={LoginStyle.view}>
            <Card>
                <Card.Title title="Car Park" titleStyle={LoginStyle.cardTitle}></Card.Title>
                <Card.Content >
                    <TextInput 
                    
                        label="Email" 
                        key='email-adress'
                        onChangeText={handleOnChangelogin}>
                    </TextInput>
                    <TextInput 
                        label="Password" 
                        secureTextEntry={true}
                        onChangeText={handleOnChangePassword}>
                    </TextInput>
                    <Button 
                        uppercase={false}
                        style={LoginStyle.cardButton}>Forgot email/password
                    </Button>
                    <Button 
                        onPress={login}
                        mode="contained"
                        style={LoginStyle.cardButton}
                        testID="loginButton">
                            Login
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