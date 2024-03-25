import AsyncStorage from "@react-native-async-storage/async-storage";

/*export const setlocalAsyncStorage = async (key :string, value :any) => {
  try {
    await AsyncStorage.setItem(key, value);
    
    // 저장값 확인을 위한 console.log
    console.log(`setItem... ${key} : ${value}`);
  } catch (e) {
    throw e;
  }
    //return AsyncStorage.setItem(key, value) as any;
  };*/
  export const setlocalAsyncStorage = (key :string, value :any) => {
    const jsonValue = JSON.stringify(value); // 값(value)을 JSON 문자열로 변환
    return AsyncStorage.setItem(key, value);
  };
  
  /*export const getlocalAsyncStorage = async (key :string) => {
    try {
      const res = await AsyncStorage.getItem(key);
      return res || 'asd';
    } catch (e) {
      throw e;
    }
    //return AsyncStorage.getItem(key);
  };*/
  
export const getlocalAsyncStorage = async (key: string) => {
  try {
    console.log(await AsyncStorage.getItem(key) + "로컬 저장 콘솔")
    return await AsyncStorage.getItem(key);
  } catch (error) {
    throw error;
  }
};
  export const removelocalAsyncStorage = async (key:string) => {
    return AsyncStorage.removeItem(key);
  };
