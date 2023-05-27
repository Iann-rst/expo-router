import { useFocusEffect } from 'expo-router';
import { BackHandler, StyleSheet, Text, View } from 'react-native';

export default function Home(){


  // Evitar voltar para a tela de cadastro
  useFocusEffect(()=> {
    const backAction = () => {
      BackHandler.exitApp()
      return true;
    }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)

    return () => backHandler.remove()
  })
 
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Página Home</Text>
      <Text>Tabs Navigation</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
})