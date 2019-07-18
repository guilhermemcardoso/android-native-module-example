import React, { Fragment } from 'react';
import { Button, View } from 'react-native';
import ToastExample from './ToastExample';

const App = () => {
    return (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Button
                onPress={() => ToastExample.show('Toast nativo sendo exibido', ToastExample.SHORT)}
                title='Clique aqui'
                color='#841584'
                accessibilityLabel='Clique aqui para visualizar um toast'
            />
        </View>
    );
};

export default App;
