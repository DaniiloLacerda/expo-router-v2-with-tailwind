import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import "../../../global.css";

export default function TabRoutesLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Config",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="settings"
              size={size}
              color={color}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
