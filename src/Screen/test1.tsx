import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View, } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParam } from '../utils/types';


function Test1(): React.JSX.Element {
  const [numtest, setNumtest] = useState(0)

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  const BTNActive = () => {
    setNumtest((prevNum) => prevNum + 1)
    navigation.popToTop()
  }

  const BTNActive0 = () => {
    setNumtest((prevNum) => prevNum + 1)
    navigation.push('test1')
  }
  const BTNActive1 = () => {
    setNumtest((prevNum) => prevNum + 1)
    navigation.navigate('test1')
  }

  return (
    <Container>
      <CenteredButton onPress={BTNActive}>
        <ButtonText>팝투탑버튼 + 숫자 더하기</ButtonText>
      </CenteredButton>
      <CenteredButton onPress={BTNActive0}>
        <ButtonText>푸쉬 제자리 버튼 + 숫자 더하기</ButtonText>
      </CenteredButton>
      <CenteredButton onPress={BTNActive1}>
        <ButtonText>네비 제자리 버튼 + 숫자 더하기</ButtonText>
      </CenteredButton>
      <CenteredButton onPress={() => navigation.goBack()}>
        <ButtonText>뒤돌아가기</ButtonText>
      </CenteredButton>
      <View>
        <Text>{numtest}</Text>
      </View>
    </Container>)

}

export default Test1

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
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
