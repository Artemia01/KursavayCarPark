import React, { useState } from 'react';
import { Appbar, Menu } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

interface HeaderComponentParams{
    hasBackButton? : boolean;
    navigation?: any;
    title: string;
   
}

export const HeaderComponent = (props: HeaderComponentParams) => {

    const [visible, setVisible] = useState(false);

    const goBack = () => props.navigation?.goBack();
    const openMenu = ()=> setVisible(true);
    const closeMenu = ()=> setVisible(false);

    
    
    const logout = () => {
        props.navigation?.navigate("Login")
        closeMenu();
    }

    return(
        <Appbar>
            {
                props.hasBackButton ?
                <Appbar.BackAction 
                    onPress={goBack}/>
                :
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Appbar.Action
                            icon="menu"
                            onPress={openMenu}/>
                    }>
                    
                     <Menu.Item
                        title="LogOut" 
                        onPress={() => {
                            auth().signOut();
                          }}/>
                </Menu>

            }
         
            <Appbar.Content title={props.title}/>
        </Appbar>
    )
}
