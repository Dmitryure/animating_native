import React from "react";
import { StyleSheet, View } from "react-native";
import { isEqual } from "lodash";

type Props = {
  styleProp?: Record<any, any>;
};

const Square = ({ styleProp }: Props) => {
  const styles = StyleSheet.create({
    square: {
      ...styleProp,
      backgroundColor: "#FFA",
      width: 150,
      height: 50,
      borderRightColor: "black",
      borderRightWidth: 5,
    },
  });
  console.log(styleProp ? styleProp.transform : styleProp);
  return <View style={styles.square} />;
};

export default Square;
