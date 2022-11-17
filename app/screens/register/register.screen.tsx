import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Text, TextInput} from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.components';
import { registerStyle } from './register.style';
import auth from '@react-native-firebase/auth';

interface RegisterScreenProps {
    navigation: any;
}

export const RegisterScreen = (props: RegisterScreenProps) => {

    const [error, setError] = useState('');

    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState(''); 
    const [RepeatPasswordValue, setRepeatPasswordValue] = useState(''); 

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
        setError('')
        if (loginValue && passwordValue && RepeatPasswordValue) {
          if (passwordValue === RepeatPasswordValue) {
            auth()
              .createUserWithEmailAndPassword(loginValue.toString(), passwordValue.toString())
             
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
                if (error.code === 'auth/email-already-in-use') {
                  setError('That email address is already in use!');
                }
                if (error.code === 'auth/weak-password') {
                  setError('Password should be at least 6 characters');
                }
                console.log(error);
              });
          } else {
            setError('Repeat password correctly!');
          }
        } else {
          setError('Empty email or password!');
        }
      };


    return (
        
        <SafeAreaView>
               <HeaderComponent 
                        title="Register" 
                        hasBackButton={true}
                        navigation={props.navigation} />  
            <ScrollView >
                 
            <View >
                <View style={registerStyle.content}>
                
                   
                    <TextInput 
                        style={registerStyle.space}
                        label="Email" 
                        key="email-address"
                        onChangeText={handleOnChangelogin}
                        />
                    <TextInput 
                        style={registerStyle.space}
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

                     <Text style={registerStyle.Error}> 
                        {error.toString()}
                    </Text>

                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}
