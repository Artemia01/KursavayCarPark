import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import {  Appbar, Button, Card, TextInput} from 'react-native-paper';
import AppbarAction from 'react-native-paper/lib/typescript/components/Appbar/AppbarAction';
import { HeaderComponent } from '../../components/header/header.components';
import { registerStyle } from './register.style';
import auth from '@react-native-firebase/auth';


interface RegisterScreenProps {
    navigation: any;
}

export const RegisterScreen = (props: RegisterScreenProps) => {

    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState(''); //
    const [RepeatPasswordValue, setRepeatPasswordValue] = useState(''); //

    const handleOnChangelogin = (query: any) => {
       
        setLoginValue(query);
      };

    const handleOnChangePassword = (query: any) => {
       
        setPasswordValue(query);
      };

      const handleOnChangeRepeatePassword = (query: any) => {
       
        setRepeatPasswordValue(query);
      };

      const register = () => {
        if (loginValue && passwordValue && RepeatPasswordValue) {
          if (passwordValue === RepeatPasswordValue) {
            auth()
              .createUserWithEmailAndPassword(loginValue.toString(), passwordValue.toString())
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
                if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
                }
                console.log(error);
              });
          } else {
            console.log('Repeat password correctly!');
          }
        } else {
            console.log('Empty email or password!');
        }
      };

    return (
        
        <SafeAreaView>
               
            <ScrollView >
                 <HeaderComponent 
                        title="Register" navigation={props.navigation} />  
            
                <View style={registerStyle.content}>
                
                   
                    <TextInput 
                        label="Email" 
                        key="email-address"
                        onChangeText={handleOnChangelogin}
                        />
                    <TextInput 
                        label="Password" 
                        secureTextEntry={true} 
                        right={ <TextInput.Icon 
                        icon="eye-off-outline" 
                        color={registerStyle.icon.color} />}  
                        onChangeText={handleOnChangePassword}
                        />
                    <TextInput 
                        label="Confirm password" 
                        secureTextEntry={true} 
                        right={ <TextInput.Icon 
                        icon="eye-off-outline" 
                        color={registerStyle.icon.color}/>}
                        onChangeText={handleOnChangeRepeatePassword}
                        />
                    
                    <Button 
                        mode="contained" 
                        style={registerStyle.button} 
                        onPress={register}>Register</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}
