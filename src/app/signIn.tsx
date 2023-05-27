import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SignIn(){
  const router = useRouter()

  function handleLogin(){
    router.replace('/home')
  }

  return(
    <View style={styles.container}>
        <Text style={styles.title}>SignIn</Text>
        <Text style={styles.subtitle}>Stack Navigation</Text>     
      <Pressable  onPress={handleLogin}>
        <Text style={styles.link}>Entrar na aplicação</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#38434D",
  },
  link: {
    color: "#38ff",
    fontSize: 20,
    fontWeight: "bold"
  },
});
