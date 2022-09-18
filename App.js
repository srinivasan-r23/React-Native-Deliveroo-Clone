import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import RestaurantScreen from "./screens/RestaurantScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          name="Restaurant"
          component={RestaurantScreen}
        ></Stack.Screen>
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
