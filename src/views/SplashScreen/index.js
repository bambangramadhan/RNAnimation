import React, { useRef, useState } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Animated
} from "react-native";
import VIcon from "../../components/VIcon";

const CIRCLE_SIZE = 80;

const Circle = ({ onPress, animatedValue }) => {
    const inputRange = [0, 0.001, 0.5, 0.501, 1];
    const containerBg = animatedValue.interpolate({
        inputRange,
        outputRange: ['gold', 'gold', 'gold', '#444', '#444']
    })
    const circleBg = animatedValue.interpolate({
        inputRange,
        outputRange: ['#444', '#444', '#444', 'gold', 'gold']
    })
    return (
        <Animated.View
            style={[
                StyleSheet.absoluteFillObject,
                styles.circleContainer,
                {
                    backgroundColor: containerBg
                }
            ]}>
            <Animated.View
                style={[styles.circle, {
                    backgroundColor: circleBg,
                    transform: [
                        {
                            perspective: 400
                        },
                        {
                            rotateY: animatedValue.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: ['0deg', '-90deg', '-180deg']
                            })
                        },
                        {
                            scale: animatedValue.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: [1, 8, 1]
                            })
                        },
                        {
                            translateX: animatedValue.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: [0, 40, 0]
                            })
                        }
                    ],

                }]}>
                <TouchableOpacity onPress={onPress}>
                    <View style={[styles.circle, styles.circleButton]}>
                        <VIcon
                            type="AntDesign"
                            name="arrowright"
                            size={28}
                            color="#fff"
                        />
                    </View>
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    )
}

const SplashScreen = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const animation = (toValue) =>
        Animated.timing(animatedValue, {
            toValue,
            duration: 3000,
            useNativeDriver: false
        });

    const [index, setIndex] = useState(0);
    const onPress = () => {
        setIndex(index === 1 ? 0 : 1);
        animation(index === 1 ? 0 : 1).start();
    };

    return (
        <View style={styles.container}>
            <Circle onPress={onPress} animatedValue={animatedValue} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    circleContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 8,
        paddingBottom: 100,
        backgroundColor: 'gold'
    },
    circle: {
        backgroundColor: '#444',
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2
    },
    circleButton: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SplashScreen;