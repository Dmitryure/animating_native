import React, { useState } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { NavigationScreenConfigProps } from "react-navigation";
import Square from "../components/Square";
import {useTransition} from "react-native-redash";
import {not} from 'react-native-reanimated'

const { width } = Dimensions.get("window");

const UseTransitionScreen = ({ navigation } : NavigationScreenConfigProps<any>) => {
  const [toggle, setToggle] = useState(0);
  const transition = useTransition(toggle, not(toggle))

  const transition = {
    transform: [{ rotateX: "45deg" }, { rotateZ: "45deg" }],
  };

  return (
    <View style={styles.container}>
      <View style={styles.squareContainer}>
        <Square
          styleProp={{
            position: "absolute",
            ...transition,
          }}
        />
        <Square styleProp={{ position: "absolute" }} />
        <Square styleProp={{ position: "absolute" }} />
      </View>
      <View>
        <Button title={"toggle"} onPress={() => setToggle(!toggle)} />
      </View>
      <View style={styles.button}>
        <Button
          title={"back"}
          onPress={() => navigation.navigate("TransitionFlex")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
  },
  squareContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    bottom: 0,
  },
});

export default UseTransitionScreen;
