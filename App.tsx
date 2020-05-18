import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OpacityChangeScreen from "./screens/OpacityChangeScreen";
import TransitionFlexChange from "./screens/TransitionFlexScreen";
import UseTransitionScreen from "./screens/useTransitionScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={OpacityChangeScreen} />
        <Stack.Screen name="TransitionFlex" component={TransitionFlexChange} />
        <Stack.Screen name="useTransition" component={UseTransitionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
