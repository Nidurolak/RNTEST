
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView as OriginalSafeAreaView, TouchableWithoutFeedback, Text, View, Keyboard, } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParam, TestFormData } from '../utils/types';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { getlocalAsyncStorage, setlocalAsyncStorage } from '../utils/infos/localStorage';
//import { containsKey, getData, getlocalAsyncStorage, setlocalAsyncStorage, storeData } from '../utils/infos/localStorage';


function Main(): React.JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const [numtest, setNumtest] = useState(0)
  const [textvalue, setTextvalue] = useState('')
  const [asyncText, setasyncText] = useState('저장된 초기값이 없습니다.')
  const { control, handleSubmit, formState: { errors } } = useForm<TestFormData>();

  const BTNActive = () => {
    setNumtest((prevNum) => prevNum + 1)
    navigation.navigate('test0')
  }

  //공식 문서 참고 구조
  const onSubmit: SubmitHandler<TestFormData> = (data) => {
    setTextvalue(data.content);
    setlocalAsyncStorage('test', data.content)
    /*async (): Promise<boolean> => {
      const hasdata = await containsKey('test');
      if (!hasdata) {
        await storeData('test', data);
        return true
      }
      return false
    }*/
    console.log("클릭됨" + "메인 line 36번")
    console.log(data.content + "메인 line 37번")
    console.log(getlocalAsyncStorage('test') + "메인 line 38번")
  };



  useEffect(() => {
    //실패한 방식, async로 비동기 호출을 진행하지 않아 값을 받지 못한 상태로 로직이 진행됨
    //console.log(getlocalAsyncStorage('test'))
    /*const getDatas = async (): Promise<string> => {
      const data = await getlocalAsyncStorage("test");
      return data
    }*/



    //console.log(getlocalAsyncStorage('test') + "메인 line 50번")
    //console.log("zzzzz" + "메인 line 51번")
    //asyncText = getlocalAsyncStorage('test') as any;



    const fetchData = async () => {
      const data = await getlocalAsyncStorage('test');
      console.log(data + "메인 line 50번");
      setasyncText(data as string)
    };

    fetchData();
  }, [])
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <CenteredButton onPress={BTNActive}>
          <ButtonText>버튼</ButtonText>
        </CenteredButton>
        <View>
          <Text>{numtest}</Text>
        </View>
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
          <ButtonText>입력</ButtonText>
        </CenteredButton>
      </Container>
    </TouchableWithoutFeedback>
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
  gap: 15px;
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

const Input = styled.TextInput`
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 40px;
  border-color: gray;
  border-width: 1px;
`
