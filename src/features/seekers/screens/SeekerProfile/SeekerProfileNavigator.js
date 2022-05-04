import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LineArrowLeft from '../../../../components/svg/icons/LineArrowLeft';
import {theme} from '../../../../components/Theme';
import RouteMapDetail from '../RouteMapDetail';
import RouteMapsList from '../RouteMapsList';
import SeekerPostFeed from '../PostFeed';
import SeekerProfile from './index';
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import PreviewModal from '../../../../components/PreviewModal';

const SeekerProfileStack = createStackNavigator();
// const ShareStack = createSharedElementStackNavigator();


// const SharedStack = (props)=>(
//   <ShareStack.Navigator mode={"modal"} screenOptions={{headerShown: false}}>
//     <ShareStack.Screen name = {"SeekerRouteMapDetail"} component = {RouteMapDetail} />
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

export const SeekerProfileNavigator = ({route}) => {
  return (
    <SeekerProfileStack.Navigator
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
      <SeekerProfileStack.Screen
        name="SeekerProfile"
        component={SeekerProfile}
        initialParams={route.params}
        options={{
          title: null,
        }}
      />
      <SeekerProfileStack.Screen
        name="SeekerPostFeed"
        component={SeekerPostFeed}
        options={({route}) => ({title: route.params.title})}
      />
      <SeekerProfileStack.Screen
        name="SeekerRouteMaps"
        component={RouteMapsList}
        options={{
          title: 'Route Maps',
        }}
      />
      
      <SeekerProfileStack.Screen
        name="SeekerRouteMapDetail"
        component={RouteMapDetail}
        options={{
          title: 'Route Map',
          header: () => null,
        }}
      />
      {/* <SeekerProfileStack.Screen
        name="SeekerRouteMapDetail"
        component={SharedStack}
        options  ={{headerShown: false}}
      /> */}
    </SeekerProfileStack.Navigator>
  );
};
