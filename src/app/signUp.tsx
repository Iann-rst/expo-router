import { Link, useRouter } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function SignUp() {
  const router = useRouter()

  return (
    <View style={styles.container}>
        <Text style={styles.title}>SignUp</Text>
        <Text style={styles.subtitle}>Stack Navigation</Text>
        <Link style={styles.link} href="/signIn">Ir para SignIn</Link>
    </View>
  );
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
  link: {
    color: "#38ff",
    fontSize: 20,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 16,
    color: "#38434D",
  },
});
