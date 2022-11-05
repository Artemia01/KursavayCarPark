import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, InputAccessoryView, TextInputComponent} from "react-native";
import { Button, Card, TextInput} from 'react-native-paper';
import { CardPaymentStyle } from './cardpayment.style';
import { HeaderComponent } from "../../components/header/header.components";

import { InputMode } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';


import MaskInput, { Masks } from 'react-native-mask-input';
import { formatWithMask } from 'react-native-mask-input'
import HomeScreen from '../home/home.screen';
import ParkingScreen from '../Parking/parking.screen';

interface CardPaymentProps {
    navigation: any;
}


export const CardPayment = ({navigation}: any,props: CardPaymentProps) => {
    
     const HomeScreen =() => navigation.navigate("Home")
     const ParkingScreen =() => navigation.navigate("Parking",)// не понимает к какой парковке вернуться 
    
    const [creditCard, setCreditCard] = React.useState('');
    const [creditCardDate, setCreditCardDate] = React.useState('');
    const [creditCardCVV, setCreditCardCVV] = React.useState('');
  
        return (
            <SafeAreaView >
            <HeaderComponent 
            title="Make Payment" 
            // hasBackButton={true}
            // navigation={props.navigation}
            />
               
                <View style={CardPaymentStyle.content}>

                    <View style={CardPaymentStyle.creditCard}>
                       
                    <View style={CardPaymentStyle.date1}>
                    <Text style={CardPaymentStyle.text1} >Nomber Card</Text>
                        <MaskInput 
                        
                            style={CardPaymentStyle.dates1}
                            maxLength={19}
                            value={creditCard}
                            onChangeText={setCreditCard}
                            mask={Masks.CREDIT_CARD}
                            />
                        </View>

                       <View style={CardPaymentStyle.date2}>
                        
                        
                       <Text style={CardPaymentStyle.text2}>MM/YY</Text>
                        <MaskInput 
                            style={CardPaymentStyle.dates2}
                            maxLength={5}
                            value={creditCardDate}
                            onChangeText={setCreditCardDate}
                            mask={Masks.DATE_MMDDYYYY}
                            />
                        <Text style={CardPaymentStyle.text3}>CVV</Text>
                        <MaskInput 
                            style={CardPaymentStyle.dates3}
                            maxLength={3}
                            value={creditCardCVV}
                            onChangeText={setCreditCardCVV}
                            mask={Masks.ZIP_CODE}
                            />

                        </View> 

                       

                </View>

                                    
                <Button
                onPress={HomeScreen}
                mode="elevated"
                style={CardPaymentStyle.cardButton}>Cancel Payment
                </Button>

                <Button
                 onPress={HomeScreen} // при оплате 
                mode="contained"
                style={CardPaymentStyle.cardButton}>Confirm Payment
                </Button>


                </View>





                </SafeAreaView>
          );
        
    
    
}


export default CardPayment;


  
    