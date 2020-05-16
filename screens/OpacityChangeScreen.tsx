import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import Animated, {
    Value,
    useCode,
    eq,
    cond,
    Clock,
    add,
    interpolate,
    Extrapolate,
    startClock,
    set,
    not,
} from "react-native-reanimated";

export default ({navigation}) => {
    const clock = new Clock();
    const startAnimation = new Value(0);
    const startTime = new Value(0);
    const duration = 1000;
    const endTime = add(startTime, duration);
    const from = new Value(1);
    const to = new Value(0);
    const opacity = interpolate(clock, {
        inputRange: [startTime, endTime],
        outputRange: [from, to],
        extrapolate: Extrapolate.CLAMP,
    });
    useCode(
        () => [
            cond(eq(startAnimation, 1), [
                startClock(clock),
                set(startTime, clock),
                set(from, not(from)),
                set(to, not(to)),
                set(startAnimation, 0),
            ]),
        ],
        []
    );

    return (
        <View style={styles.container}>
            <Animated.View style={{opacity}}>
                <View style={styles.square}></View>
            </Animated.View>
            <Button title="hello" onPress={() => startAnimation.setValue(1)}/>
            <Button
                title="Next"
                onPress={() => navigation.navigate("TransitionFlex")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
    },
    square: {
        flex: 0.7,
        backgroundColor: "#000",
        width: 250,
    },
});
