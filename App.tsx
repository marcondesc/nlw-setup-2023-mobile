import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
 } from '@expo-google-fonts/inter';

import { Loading } from './src/Components/Loading';


export default function App() {
  const [fontsloaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if (!fontsloaded){
    return (
      <Loading />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Marcondes diz: Hello World!!</Text>
      <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
    text: {
      color: '#FFF',
      fontFamily: 'Inter_800ExtraBold'
    }
});
