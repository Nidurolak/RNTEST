

import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import { Text, View, } from 'react-native';
import { RootStackParam, TestFormData } from '../utils/types';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { getlocalAsyncStorage, removelocalAsyncStorage } from '../utils/infos/localStorage';

function Test0(): React.JSX.Element {
  const [numtest, setNumtest] = useState(0)
  const [textvalue, setTextvalue] = useState('')
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const { control, handleSubmit, formState: { errors } } = useForm<TestFormData>();

  const BTNActive = () => {
    setNumtest((prevNum) => prevNum + 1)
    navigation.navigate('test1')
  }

  const onSubmit: SubmitHandler<TestFormData> = (data) => {
    removelocalAsyncStorage('test')
    setTextvalue(data.content);
  };

  var asyncText;
  useEffect(() => {
    //console.log(getlocalAsyncStorage('test'))
    /*const getDatas = async (): Promise<string> => {
      const data = await getlocalAsyncStorage("test");
      return data
    }*/
    asyncText = getlocalAsyncStorage("test");
  }, [])
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
      <View>
        <Text>현재 저장된 값 : {textvalue}</Text>
        <Text>초기 에이싱크 값 : {asyncText}</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="저장 내용"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="content"
        />
        <CenteredButton onPress={handleSubmit(onSubmit)}>
          <ButtonText>에이싱크값 삭제</ButtonText>
        </CenteredButton></View>
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

const Input = styled.TextInput`
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 40px;
  border-color: gray;
  border-width: 1px;
`