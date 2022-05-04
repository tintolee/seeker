import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LineArrowLeft from '../../components/svg/icons/LineArrowLeft';
import {theme} from '../../components/Theme';
import RouteMapsList from './screens/RouteMapsList';
import RouteMapDetail from './screens/RouteMapDetail';
import PostFeed from '../posts/screens/PostFeed';
import RouteMapDesign from './screens/RouteMapDesign';

// import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import PreviewModal from '../../components/PreviewModal';

// const ShareStack = createSharedElementStackNavigator();
const RouteMapsStack = createStackNavigator();

// const SharedStack = (props)=>(
//   <ShareStack.Navigator mode={"modal"} screenOptions={{headerShown: false}}>
//     <ShareStack.Screen name = {"RouteMapDetail"} component = {RouteMapDetail} />
//     <ShareStack.Screen
//           name="PreviewModal"
//           component={PreviewModal}
//           sharedElements = {(route)=>{
//             return [route?.params?.post?.id]
//           }}
//           options={{
//             headerShown: false,
//             cardStyle: { backgroundColor: 'transparent' },
//             gestureResponseDistance: {
//               vertical: 600
//             },
//             cardOverlayEnabled: false,
//             cardStyleInterpolator: ({ current: { progress } }) => ({
//               cardStyle: {
//                 opacity: progress.interpolate({
//                   inputRange: [0, 0.5, 0.9, 1],
//                   outputRange: [0, 0.25, 0.7, 1],
//                 }),

//               },
//               overlayStyle: {
//                 opacity: progress.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [0, 0.5],
//                   extrapolate: 'clamp',
//                 }),
//               },
//             }),
//         }}/>

//   </ShareStack.Navigator>
// )

export const RouteMapsNavigator = () => {
  return (
    <RouteMapsStack.Navigator
      headerMode="screen"
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
      <RouteMapsStack.Screen
        name="RouteMapsList"
        component={RouteMapsList}
        options={{
          title: 'Route Maps',
        }}
      />
      <RouteMapsStack.Screen
        name={'RouteMapDetail'}
        component={RouteMapDetail}
        options={{headerShown: false}}
      />

      <RouteMapsStack.Screen
        name="RouteMapPostFeed"
        component={PostFeed}
        options={({route}) => ({title: route.params.title})}
      />
      <RouteMapsStack.Screen name="RouteMapDesign" component={RouteMapDesign} />
    </RouteMapsStack.Navigator>
  );
};
