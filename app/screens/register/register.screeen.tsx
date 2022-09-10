import * as React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Appbar, Button, TextInput} from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.components';
import { registerStyle } from './register.style';


export const RegisterScreen = () => {
  
    return (
        <SafeAreaView>
            <ScrollView>
               <HeaderComponent title="Register "/>
                <View style={registerStyle.content}>
                    <TextInput label="Name"/>
                    <TextInput label="Email" key="email-address"/>
                    <TextInput label="Password" secureTextEntry={true} right={ <TextInput.Icon icon="eye-off-outline" color={registerStyle.icon.color} />}  />
                    <TextInput label="Confirm password" secureTextEntry={true} right={ <TextInput.Icon icon="eye-off-outline" color={registerStyle.icon.color}/>}/>
                    <TextInput label="Phone number" key='phone-pad' />
                    <Button mode="contained" style={registerStyle.button}>Register</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

