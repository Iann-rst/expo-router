import { StyleSheet, Text, View } from 'react-native'

export default function Profile(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Profile</Text>
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