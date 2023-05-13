import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Profile(){
  const {back} = useRouter()
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Página Profile</Text>
      <Button onPress={back} title='Voltar para a Home'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
