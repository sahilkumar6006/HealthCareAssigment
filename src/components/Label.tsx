import React from 'react';
import { Text, Pressable } from 'react-native';
import type { TextStyle, TextProps, StyleProp } from 'react-native';
import { Colors, FontSizes } from '../constants/theme';

type LabelPresetStyle = {
    textStyle: TextStyle;
    linkTextStyle: TextStyle;
};

const labelPresets: { [key: string]: LabelPresetStyle } = {
    default: {
        textStyle: {
            fontSize: FontSizes.medium,
            color: Colors.black,
            fontWeight: '400',
            textAlign: 'center',
        },
        linkTextStyle: {
            color: Colors.textLink,
            fontWeight: '600',
        },
    },
    small: {
        textStyle: {
            fontSize: FontSizes.small,
            color: Colors.textSecondary,
            fontWeight: '300',
            textAlign: 'center',
        },
        linkTextStyle: {
            color: Colors.textLink,
            fontWeight: '500',
            textDecorationLine: 'underline',
        },
    },
    header: {
        textStyle: {
            fontFamily: 'Baloo Thambi 2',
            fontSize: 20,
            lineHeight: 20,
            letterSpacing: 0,
            fontWeight: '700',
            color: Colors.black,
        },
        linkTextStyle: {
            color: Colors.textLink,
            fontWeight: '700',
        },

    },
    largeHeader: {
        textStyle: {
            fontFamily: 'Baloo Thambi 2',
            fontSize: 20,
            lineHeight: 20,
            letterSpacing: 0,
            fontWeight: '700',
            color: Colors.black,
        },
        linkTextStyle: {
            color: Colors.textLink,
            fontWeight: '700',
        },
    },

    labelPreset: {
        textStyle: {
            fontFamily: 'Baloo Thambi 2',
            fontWeight: '400',
            fontSize: 20,
            lineHeight: 20,
            letterSpacing: 0,
            textAlign: 'center',
            color: Colors.black,
            fontStyle: 'normal',
        },
        linkTextStyle: {
            color: Colors.textLink,
            fontWeight: '600',
        },
    }

};

type LabelProps = TextProps & {
    text?: string;
    onPress?: () => void;
    linkText?: string;
    preset?: keyof typeof labelPresets;
    children?: React.ReactNode;
    style?: StyleProp<TextStyle>;
};

export const Label = ({
    text,
    onPress,
    linkText,
    preset = 'default',
    children,
    style,
    ...rest
}: LabelProps) => {
    const presetStyles = labelPresets[preset] ?? labelPresets.default;
    const content = text ?? children;
    return (
        <Pressable onPress={onPress}>
            <Text {...rest} style={[presetStyles.textStyle, style]}>
                {content}
                {linkText && (
                    <Text style={presetStyles.linkTextStyle}> {linkText}</Text>
                )}
            </Text>
        </Pressable>
    );
};