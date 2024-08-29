import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaHome from './app/tamplates/TelaHome';
import TelaLogin from './app/tamplates/TelaLogin';
import TelaCadastro from './app/tamplates/TelaCadastro';
import TelaPerfis from './app/tamplates/TelaPerfis';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer  theme={{
     
      colors: { card: "#A42A5D", text: "#fff" }


    }}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Home" component={TelaHome} />
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Perfis" component={TelaPerfis} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
