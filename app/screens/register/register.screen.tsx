import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import {  Appbar, Button, Card, TextInput} from 'react-native-paper';
import AppbarAction from 'react-native-paper/lib/typescript/components/Appbar/AppbarAction';
import { HeaderComponent } from '../../components/header/header.components';
import { registerStyle } from './register.style';



interface RegisterScreenProps {
    navigation: any;
}

export const RegisterScreen = (props: RegisterScreenProps) => {

    const register =() => props.navigation.navigate("Home");
  
    return (
        
        <SafeAreaView>
               
            <ScrollView >
                 <HeaderComponent 
                        title="Register" />  
             {/* <Card.Title title="Register" titleStyle={registerStyle.flex}></Card.Title>  */}
                {/* <Appbar>
                    <Appbar.BackAction/>
                    <Appbar.Content title="Register"></Appbar.Content>
                </Appbar> */}
                <View style={registerStyle.content}>
                
                    <TextInput 
                        label="Name"
                        />
                    <TextInput 
                        label="Email" 
                        key="email-address"/>
                    <TextInput 
                        label="Password" 
                        secureTextEntry={true} 
                        right={ <TextInput.Icon 
                        icon="eye-off-outline" 
                        color={registerStyle.icon.color} />}  />
                    <TextInput 
                        label="Confirm password" 
                        secureTextEntry={true} 
                        right={ <TextInput.Icon 
                        icon="eye-off-outline" 
                        color={registerStyle.icon.color}/>}/>
                    <TextInput label="Phone number" key='phone-pad' />
                    <Button 
                        mode="contained" 
                        style={registerStyle.button} 
                        onPress={register}>Register</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}
