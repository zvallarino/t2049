import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'


const LoginScreen = () => {
    const { user } = useAuth()

    console.log(user)
  return (
    <View>
      <Text>I am the login screen</Text>
    </View>
  )
}

export default LoginScreen