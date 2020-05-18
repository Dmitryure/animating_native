import React, {useRef, useState} from "react";
import {Button, StyleSheet, View} from "react-native";
import {NavigationScreenConfigProps} from "react-navigation";

import {Transition, Transitioning, TransitioningView} from "react-native-reanimated";
import Square from "../components/Square";

const transition = <Transition.Change durationMs={400} interpolation="easeInOut"/>

const TransitionFlexChange = ({navigation} : NavigationScreenConfigProps<any>) => {

    const ref = useRef<TransitioningView>(null)

    const [layout, setLayout] = useState("row")
    const [wrap, setWrap] = useState(false)

    return (
        <>
            <Transitioning.View
                style={{...styles.container, flexWrap: wrap ? "wrap" : "nowrap", flexDirection: layout}} {...{
                ref,
                transition
            }} >
                <Square/>
                <Square/>
                <Square/>
            </Transitioning.View>
            <View>
                <Button title="row" onPress={() => {
                    if (ref.current) {
                        ref.current.animateNextTransition()
                    }
                    setLayout("row")
                }}/>
                <Button title="column" onPress={() => {
                    if (ref.current) {
                        ref.current.animateNextTransition()
                    }
                    setLayout("column")
                }}/>
                <Button title="wrap" onPress={() => {
                    if (ref.current) {
                        ref.current.animateNextTransition()
                    }
                    setWrap(!wrap)
                }}/>
                <Button title="back" onPress={() => navigation.navigate("Home")}/>
                <Button title="next" onPress={() => navigation.navigate("useTransition")}/>

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

})

export default TransitionFlexChange;
