import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StyleProp, ViewStyle } from 'react-native';

const { width } = Dimensions.get('window');

interface ServiceHighlightCardProps {
    title: string;
    description: string;
    imageSource: any;
    backgroundColor?: string;
    titleColor?: string;
    descriptionColor?: string;
    style?: StyleProp<ViewStyle>;
}

export const ServiceHighlightCard: React.FC<ServiceHighlightCardProps> = ({
    title,
    description,
    imageSource,
    backgroundColor = '#E6FFE6',
    titleColor = '#000000',
    descriptionColor = '#333333',
    style,
}) => {
    return (
        <View style={[styles.cardContainer, { backgroundColor }, style]}>
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
                <Text style={[styles.description, { color: descriptionColor }]}>{description}</Text>
            </View>

            <Image
                source={imageSource}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 15,
        margin: 10,
        width: width * 0.9,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 3,
        paddingRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
    },
    image: {
        flex: 1,
        width: 60,
        height: 100,
    },
});
