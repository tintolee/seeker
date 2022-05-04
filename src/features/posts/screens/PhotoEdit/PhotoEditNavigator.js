import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LineArrowLeft from '../../../../components/svg/icons/LineArrowLeft';
import {theme} from '../../../../components/Theme';
import SelectRouteMap from '../SelectRouteMap';
import PhotoEdit from './index';

const PhotoEditStack = createStackNavigator();

export const PhotoEditNavigator = ({route}) => {
  return (
    <PhotoEditStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.headerBackground,
          shadowColor: 'transparent',
        },
        headerTintColor: theme.colors.primary,
        headerTitleStyle: {
          ...theme.typography.headerTitle,
        },
        headerHideShadow: true,
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {marginLeft: theme.spacing.m},
        headerBackImage: () => (
          <LineArrowLeft width={24} height={24} color={theme.colors.primary} />
        ),
      }}>
      <PhotoEditStack.Screen
        name="PhotoEdit"
        component={PhotoEdit}
        initialParams={route.params}
        options={{
          title: 'New Photo',
        }}
      />
      <PhotoEditStack.Screen
        name="SelectRouteMap"
        component={SelectRouteMap}
        options={{
          title: 'Select a route map',
        }}
      />
    </PhotoEditStack.Navigator>
  );
};
