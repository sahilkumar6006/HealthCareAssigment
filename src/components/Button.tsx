import React from 'react';
import { StyleProp, TextStyle, ViewStyle, ActivityIndicator, Pressable, StyleSheet } from 'react-native';

import { Colors, Outlines, Typography } from '@app/styles';


type Props = {
    /**
     * Should show a loading indicator or not.
     */
    loading?: boolean;
    /**
     * Whether the button is disabled.
     */
    disabled?: boolean;

    children?: React.ReactNode;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Title of button
     */
    title: string;
    /**
     * Styles of button.
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Style for the button title.
     */
    titleStyle?: StyleProp<TextStyle>;

    /**
     * Button Type
     */
    type?: 'primary' | 'secondary' | 'outline';
};

const Button = ({
    containerStyle,
    titleStyle,
    disabled,
    loading,
    children,
    title,
    type = 'primary',
    ...rest
}: Props) => {
    return (
        <Pressable
            {...rest}
            style={[
                styles.container,
                type === 'primary' && styles.primaryBackground,
                containerStyle,
                type === 'outline' && styles.outlineStyle,
                type === 'secondary' && styles.secondaryStyle,
                disabled && styles.disableStyle,
            ]}
            disabled={loading || disabled}>
            <>
                {(() => {
                    if (loading) {
                        return (
                            <ActivityIndicator
                                color={
                                    type === 'outline'
                                        ? Colors.primary.brand
                                        : Colors.textColor.onPrimary
                                }
                            />
                        );
                    }

                    if (children) {
                        return children;
                    }

                    return (
                        <Label
                            style={[
                                styles.titleStyle,
                                type === 'primary' && styles.primaryTitleStyle,
                                type === 'outline' && styles.outlineTextStyle,
                                titleStyle,
                            ]}>
                            {title}
                        </Label>
                    );
                })()}
            </>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: Colors.secondary.brand,
        ...Outlines.shadow.base,
    },
    titleStyle: {
        color: Colors.neutral.white,
        fontSize: '16@ms',
        ...Typography.textStyle.bold,
    },
    disableStyle: {
        opacity: 0.5,
        backgroundColor: Colors.neutral.s300,
    },
    primaryBackground: {
        backgroundColor: Colors.primary.brand,
    },
    primaryTitleStyle: {
        color: Colors.textColor.onPrimary,
    },
    outlineStyle: {
        backgroundColor: Colors.transparent.clear,
        borderColor: Colors.primary.brand,
        shadowOpacity: 0,
        elevation: 0,
    },
    secondaryStyle: {
        backgroundColor: Colors.neutral.s100,
    },
    outlineTextStyle: {
        color: Colors.primary.brand,
    },
});

export { Button };