
import { StackScreenProps } from '@react-navigation/stack';
import { Routes } from './constants';

export type IStackParamsList = {
    [Routes.SplashScreen]: undefined;
    [Routes.loginScreen]: undefined;
};

export type NavigationProps<RouteName extends keyof IStackParamsList> =
    StackScreenProps<IStackParamsList, RouteName>;

export { Routes };