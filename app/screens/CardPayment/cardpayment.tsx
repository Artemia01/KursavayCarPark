import React from 'react';
import { SafeAreaView, View, Text} from "react-native";
import { Button} from 'react-native-paper';
import { CardPaymentStyle } from './cardpayment.style';
import { HeaderComponent } from "../../components/header/header.components";
import MaskInput, { Masks } from 'react-native-mask-input';

interface CardPaymentProps {
    navigation: any;
}

export const CardPayment = ({navigation}: any,props: CardPaymentProps) => {
    
     const QrCodeScreen =() => {
        
        if (creditCard.length == 19  && creditCardDate.length == 5 && creditCardCVV.length == 3)
        {
            navigation.navigate("QrCode") 
        }

        else {
            setError('All fields should be filled')
        }
     }

    
    const ParkingScreen =() => navigation.goBack()
    
    const [error, setError] = React.useState('');
    const [creditCard, setCreditCard] = React.useState('');
    const [creditCardDate, setCreditCardDate] = React.useState('');
    const [creditCardCVV, setCreditCardCVV] = React.useState('');
  
        return (
            <SafeAreaView >
            <HeaderComponent 
            title="Make Payment" 
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

                    <Text style={CardPaymentStyle.Error} >{error}</Text>
                                    
                <Button
                onPress={ParkingScreen}
                mode="elevated"
                style={CardPaymentStyle.cardButton}>Cancel Payment
                </Button>

                <Button
                 onPress={QrCodeScreen} 
                mode="contained"
                style={CardPaymentStyle.cardButton}>Confirm Payment
                </Button>
                </View>

                </SafeAreaView>
          );
        
}
export default CardPayment;


  
    