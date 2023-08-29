import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from  './styles'
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handleSignIn = () => {
    if (email === 'example@example.com' && password === '12341234') {
      setIsValid(true)
    } else {
      Alert.alert('', 'E-mail ou senha inválidos.')
      setIsValid(false)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar />
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          autoCapitalize='none'
          testID='input-email'
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          testID='input-password'
          secureTextEntry
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={handleSignIn}
          style={styles.button}
        >
          <Text
            testID='submit-button'
            style={styles.buttonTitle}
          >
            Entrar
          </Text>
        </TouchableOpacity>
          {
            isValid && <Text style={styles.success}>
              Released access!
            </Text>
          }
    </View>
  );
}

