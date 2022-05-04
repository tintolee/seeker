import React from 'react';
import {CardStyleInterpolators, createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import LineArrowLeft from '../../components/svg/icons/LineArrowLeft';
import {theme} from '../../components/Theme';
import Profile from './screens/profile/Profile';
import EditProfile from './screens/profile/EditProfile';
import ProfileSettings from './screens/profile/profileSettings/ProfileSettings';
import MyOpportunities from './screens/MyOpportunities';
import MyCollaborations from './screens/MyCollaborations';
import Connections from './screens/Connections';
import ProfileNotifications from './screens/profile/ProfileNotifications';
import PostFeed from './screens/PostFeed';
import {ChangePassword} from './screens/Settings/ChangePassword';
import PreviewModal from '../../components/PreviewModal';
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


// const ShareStack = createSharedElementStackNavigator();
const ProfileStack = createStackNavigator();


// const SharedStack = (props)=>{
//   return(
//   <ShareStack.Navigator mode={"modal"} screenOptions = {{}}>
//     <ShareStack.Screen 
//       name = {"Profile"} 
//       component = {(screenProps) => <Profile {...screenProps} updateAuthState={props.route.params.updateAuthState}/>} 
//       options={{headerShown: false}}
//     />
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
//             // cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
//             // gestureEnabled : false,
//             // transitionSpec: {
//             //   open: TransitionSpecs.RevealFromBottomAndroidSpec,
//             //   close: TransitionSpecs.TransitionIOSSpec,
//             // },
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
// )}

{/*  */}

export const ProfileNavigator = (props) => {
  return (
    <ProfileStack.Navigator
      
      headerMode = "screen"
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
      

          {/* <ProfileStack.Screen
            name="Profile"
            component = {SharedStack}
            initialParams = {props}
            options={{ headerShown: false}}/> */}
            
            <ProfileStack.Screen
              name = {"Profile"} 
              options={{headerShown: false}}
            >
              {(screenProps) => <Profile route={screenProps.route} {...screenProps} updateAuthState={props.updateAuthState}/>}
            </ProfileStack.Screen>
            {/* {(screenProps) => (
              <SharedStack
                {...screenProps}
                route={screenProps.route}
                updateAuthState={props.updateAuthState}
              />
            )} */}
          {/* </ProfileStack.Screen> */}
          <ProfileStack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              title: 'Edit Profile',
            }}
          />
          <ProfileStack.Screen
            name="ProfileSettings"
            options={{
              title: 'Profile Settings',
            }}>
            {(screenProps) => (
              <ProfileSettings
                {...screenProps}
                updateAuthState={props.updateAuthState}
              />
            )}
          </ProfileStack.Screen>
          <ProfileStack.Screen
            name="MyOpportunities"
            component={MyOpportunities}
            options={{
              title: 'My Opportunities',
            }}
          />
          <ProfileStack.Screen
            name="MyCollaborations"
            component={MyCollaborations}
            options={{
              title: 'My Collaborations',
            }}
          />
          <ProfileStack.Screen
            name="Connections"
            component={Connections}
            options={{
              title: 'Connections',
            }}
          />
          <ProfileStack.Screen
            name="ProfileNotifications"
            component={ProfileNotifications}
            options={{
              title: 'Notifications',
            }}
          />
          <ProfileStack.Screen
            name="ProfilePostFeed"
            component={PostFeed}
            options={({route}) => ({title: route.params.title})}
          />
          <ProfileStack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{
              title: 'Change Password',
            }}
          />
      

      {/* <ProfileStack.Group screenOptions={{ presentation: 'modal' }}> */}
        
      {/* </ProfileStack.Group> */}
      
    </ProfileStack.Navigator>
  );
};
