import { Tabs } from "expo-router";
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { PRIMARY_COLOR } from '@/utils/constants';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: PRIMARY_COLOR,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
      }}/>

      <Tabs.Screen
        name='message'
        options={{
          title: 'Message',
          tabBarIcon: ({ color, focused }) => (
            <Feather name={focused ? 'message-circle' : 'message-circle'} color={color} size={24} />)
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            focused ?
              <FontAwesome name={'user'} color={color} size={24}/>
              :<Feather name={'user'} color={color} size={24} />
          ),
        }}/>
    </Tabs>
  );
}
