import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, SafeAreaView as OriginalSafeAreaView, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import test0 from './Screen/test0';
import test1 from './Screen/test1';
import Main from './Screen/main';
import styled from 'styled-components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (<NavigationContainer>
    <SafeAreaStyledComp>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="test0" component={test0} />
        <Stack.Screen name="test1" component={test1} />
      </Stack.Navigator>
    </SafeAreaStyledComp>

  </NavigationContainer >
  );
}

const SafeAreaStyledComp = styled(OriginalSafeAreaView)`
    flex : 1;
`

export default App;
