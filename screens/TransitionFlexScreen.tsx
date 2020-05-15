import React, { useState, useRef } from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import { Transitioning, Transition, TransitioningView } from "react-native-reanimated";

const transition = <Transition.Change durationMs={400} interpolation="easeInOut"/>

const TransitionFlexChange = ({ navigation }) => {

  const ref = useRef<TransitioningView>(null)

  const [layout, setLayout] = useState("row")
  const [wrap, setWrap] = useState(false)

  return (
    <>
      <Transitioning.View 
        style={{ ...styles.container, flexWrap: wrap ? "wrap" : "nowrap", flexDirection: layout }} {...{ref, transition}} >
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </Transitioning.View>
      <View>
        <Button title="row" onPress={() => {
          if(ref.current) {
            ref.current.animateNextTransition()
          }
          setLayout("row")}} />
         <Button title="column" onPress={() => {
          if(ref.current) {
            ref.current.animateNextTransition()
          }
          setLayout("column")}} />
         <Button title="wrap" onPress={() => {
          if(ref.current) {
            ref.current.animateNextTransition()
          }
          setWrap(!wrap)}} />
        <Button title="back" onPress={() => navigation.navigate("Home")} />

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  box: {
    backgroundColor: "#FFA",
    width: 150,
    height: 50,
    borderRightColor: "black",
    borderRightWidth: 5,
  }
})

export default TransitionFlexChange;
