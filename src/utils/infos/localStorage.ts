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

  export const storeData = async (key: string, value: any) => {
    try {
      const stringValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, stringValue);
    } catch (e: any) {
      console.error(e.message);
    }
  };

  export const getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const data = JSON.parse(value);
        return data;
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  export const removeData = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e: any) {
      console.error(e.message);
    }
  };
  export const containsKey = async (key: string) => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      return keys.includes(key);
    } catch (e: any) {
      console.error(e.message);
    }
  };