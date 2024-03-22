import AsyncStorage from "@react-native-async-storage/async-storage";

export const setlocalAsyncStorage = async (key :string, value :any) => {
  try {
    await AsyncStorage.setItem(key, value);
    
    // 저장값 확인을 위한 console.log
    console.log(`setItem... ${key} : ${value}`);
  } catch (e) {
    throw e;
  }
    //return AsyncStorage.setItem(key, value) as any;
  };
  
  export const getlocalAsyncStorage = async (key :string) => {
    try {
      const res = await AsyncStorage.getItem(key);
      return res || '';
    } catch (e) {
      throw e;
    }
    //return AsyncStorage.getItem(key);
  };
  
  export const removelocalAsyncStorage = async (key:string) => {
    return AsyncStorage.removeItem(key);
  };
