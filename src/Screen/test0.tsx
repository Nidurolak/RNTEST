

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import { Text, View, } from 'react-native';
import { RootStackParam } from '../utils/types';

function Test0(): React.JSX.Element {
  const [numtest, setNumtest] = useState(0)

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  const BTNActive = () => {
    setNumtest((prevNum) => prevNum + 1)
    navigation.navigate('test1')
  }

  return (
    <Container>
      <CenteredButton onPress={BTNActive}>
        <ButtonText>test1 이동 + 숫자 더하기</ButtonText>
      </CenteredButton>
      <CenteredButton onPress={() => navigation.goBack()}>
        <ButtonText>메인으로 뒤돌아가기</ButtonText>
      </CenteredButton>
      <View>
        <Text>{numtest}</Text>
      </View>
    </Container>)
}

export default Test0

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CenteredButton = styled.TouchableOpacity`
  background-color: blue;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;
