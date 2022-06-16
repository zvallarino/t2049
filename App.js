import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import tw from 'twrnc';
import { AuthProvider } from './hooks/useAuth';
import StackNavigator from './StackNavigator';
import * as Google from "expo-auth-session/providers/google"
import * as WebBrowser from "expo-web-browser"
import { useState } from 'react';

export default function App() {

  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();

  const [request, ]
  return (
    <NavigationContainer>
      <AuthProvider> 
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

