import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function TabsHeader(){
  const insets = useSafeAreaInsets()
  const router = useRouter()

  const signOut = ()=>{
    router.replace('/')
  }

  return(
    <View style={[styles.container, {paddingTop: insets.top + 10}]}>
      <View style={styles.content}>
        <Text style={styles.title}>Seja bem-vindo,</Text>
        <Text style={styles.subTitle}>Iann Rodrigues</Text>
      </View>
      <TouchableOpacity activeOpacity={0.6} onPress={signOut}>
        <Ionicons name="exit-outline" size={24}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#d1d5db'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#27272a',
    fontSize: 16
  },
  subTitle: {
    color: '#030712',
    fontSize: 18,
    fontWeight: 'bold'
  }
})