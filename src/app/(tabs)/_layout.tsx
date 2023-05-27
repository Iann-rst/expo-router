import { Feather } from '@expo/vector-icons/';
import { Tabs } from "expo-router";
import { TabsHeader } from '../../components/TabsHeader';

export default function TabsLayout(){
  return(
    <Tabs 
      screenOptions={{
        tabBarInactiveTintColor: '#969CB2',
        tabBarActiveTintColor: '#FF872C',
        tabBarStyle: {
          height: 70
        },
        tabBarLabelStyle: {
          fontSize: 18,
          textTransform: 'uppercase'
        }
      }}
    >
      <Tabs.Screen 
        name="home"
        options={{
          header: ()=> (<TabsHeader/>),
          headerTitle: 'Home',
          tabBarIcon: ({size, color})=> <Feather name="home" size={size} color={color}/>
        }}
      />

      <Tabs.Screen 
        name="profile" 
        options={{
          headerShown: false,
          headerTitle: 'Profile',
          tabBarIcon: ({size, color})=> <Feather name="user" size={size} color={color} />
        }}
      />

      <Tabs.Screen 
        name="settings" 
        options={{
          headerShown: false,
          headerTitle: 'Settings',
          tabBarIcon: ({color, size})=> <Feather name="settings" size={size} color={color} />
        }}
      />
    </Tabs>
  )
}