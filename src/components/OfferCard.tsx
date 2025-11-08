import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StyleProp, ViewStyle, TouchableOpacity, Animated } from 'react-native';
import Button from './Button';

const { width } = Dimensions.get('window');

interface OfferCardProps {
    offerPercentage: string;
    offerDescription: string;
    upToText: string;
    imageSource: any;
    onPressShopNow: () => void;
    backgroundColor?: string;
    style?: StyleProp<ViewStyle>;
}

export const OfferCard: React.FC<OfferCardProps> = ({
    offerPercentage,
    offerDescription,
    upToText,
    imageSource,
    onPressShopNow,
    backgroundColor = '#F0E6FF',
    style,
}) => {
    const slideAnim = useRef(new Animated.Value(width)).current;

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
        }).start();
    }, [slideAnim])
    return (
        <Animated.View style={[styles.offerCardContainer, { backgroundColor }, style,
        {
            transform: [{ translateX: slideAnim }]
        }
        ]}>
            <View style={styles.offerTextContainer}>
                <View style={styles.percentageWrapper}>
                    <Text style={styles.upToText}>{upToText}</Text>
                    <Text style={styles.percentageText}>{offerPercentage}</Text>
                </View>
                <Text style={styles.descriptionText}>offer</Text>
                <Text style={styles.offerDescriptionText}>{offerDescription}</Text>



                <Button title={'SHOP NOW'} onPress={() => {
                    console.log('pressed')
                }} />
            </View>

            <Image
                source={imageSource}
                style={styles.image}
                resizeMode="contain"
            />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    offerCardContainer: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 15,
        margin: 10,
        width: width * 0.9,
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    offerTextContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    percentageWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: -10,
    },
    upToText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        transform: [{ rotate: '-90deg' }],
        marginTop: 18,
        marginRight: -20,
    },
    percentageText: {
        fontSize: 40,
        fontWeight: '900',
        color: '#000',
        marginLeft: 20,
    },
    descriptionText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10,
        marginBottom: 5,
    },
    offerDescriptionText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        marginLeft: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 156,
        height: 40,
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        width: 100,
        height: 120,
    },
});