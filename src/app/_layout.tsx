import { Stack } from "expo-router";

export default function StackLayout(){
  return(
    <Stack screenOptions={{
      headerShown: false,
      animation: "fade"
    }}>
      <Stack.Screen 
        name="signUp" 
        options={{
          headerShown: false,
          headerTitle: 'Cadastrar',
        }}
      />
      
      <Stack.Screen 
        name="signIn" 
        options={{
          headerShown: true,
          headerTitle: 'Logar'
        }}
      />
    </Stack>
  )
}