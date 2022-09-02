import { StyleSheet, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./Screens/Home";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
