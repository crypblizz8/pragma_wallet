import { registerRootComponent } from "expo";
import React from "react";

import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Setup Wallet</Text>
      <Button title="Create Wallet" onPress={() => {}} />
      <Button title="Import Wallet" onPress={() => {}} />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Connect to dapps via Wagmi</Text>
      <Button title="Connect dapp" onPress={() => {}} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Wallet" component={HomeScreen} />
        <Tab.Screen name="dApp" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
