import { Link, useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const router = useRouter()

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Página Home</Text>
        <Text style={styles.subtitle}>Stack Navigator</Text>
        <Link style={styles.link} href="/profile">Ir para profile</Link>
        <Button onPress={()=>router.push("/profile")} title="Ir para profile"/>
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
