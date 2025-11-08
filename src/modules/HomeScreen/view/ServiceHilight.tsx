import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StyleProp, ViewStyle } from 'react-native';

// Get screen width for responsive sizing
const { width } = Dimensions.get('window');

// Define props for reusability
interface ServiceHighlightCardProps {
    title: string;
    description: string;
    imageSource: any; // Use ImageSourcePropType in a real app
    backgroundColor?: string;
    titleColor?: string;
    descriptionColor?: string;
    style?: StyleProp<ViewStyle>;
}

export const ServiceHighlightCard: React.FC<ServiceHighlightCardProps> = ({
    title,
    description,
    imageSource,
    backgroundColor = '#E6FFE6', // Light green default
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
        width: width * 0.9, // Responsive width
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 3, // Takes up more space than the image
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
        flex: 1, // Takes up less space than the text
        width: 60,
        height: 100,
    },
});
