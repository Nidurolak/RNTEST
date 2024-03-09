

import React from 'react';
import type { PropsWithChildren } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styled from 'styled-components/native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { RootStackParam } from './main';


const Container = styled.View`
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CenteredButton = styled.TouchableOpacity`
  background-color: #3498db;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

function Test0(): React.JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();


    return (
        <SafeAreaView style={backgroundStyle}>
            <Container>
                <CenteredButton onPress={() => navigation.navigate('test1')}>
                    <ButtonText>버튼</ButtonText>
                </CenteredButton>
            </Container>
        </SafeAreaView>)
}

export default Test0