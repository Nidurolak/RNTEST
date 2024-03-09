
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    Button,
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

import styled from 'styled-components/native';

export type RootStackParam = {
    main: undefined;
    test0: undefined;
    test1: undefined;
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CenteredButton = styled.TouchableOpacity`
  background-color: wheat;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

function Main(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <Container>
                <CenteredButton onPress={() => navigation.navigate('test0')}>
                    <ButtonText>버튼</ButtonText>
                </CenteredButton>
            </Container>
        </SafeAreaView>
    );
}

export default Main;
