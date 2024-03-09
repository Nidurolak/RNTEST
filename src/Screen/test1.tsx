import React from 'react';
import type { PropsWithChildren } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

import styled from 'styled-components/native';

const Container = styled.View`
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CenteredButton = styled.TouchableOpacity`
  background-color: black;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

function Test1(): React.JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();


    return (
        <SafeAreaView style={backgroundStyle}>
            <Container>
                <CenteredButton onPress={() => navigation.navigate('main')}>
                    <ButtonText>버튼</ButtonText>
                </CenteredButton>
            </Container>
        </SafeAreaView>)
}

export default Test1