
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { SafeAreaView as OriginalSafeAreaView, Text, View, } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParam } from '../utils/types';


function Main(): React.JSX.Element {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const [numtest, setNumtest] = useState(0)

    const BTNActive = () => {
        setNumtest((prevNum) => prevNum + 1)
        navigation.navigate('test0')
    }

    return (
        <Container>
            <CenteredButton onPress={BTNActive}>
                <ButtonText>버튼</ButtonText>
            </CenteredButton>
            <View>
                <Text>{numtest}</Text>
            </View>
        </Container>
    );
}

export default Main;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
