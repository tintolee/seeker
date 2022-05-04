import React from 'react';
import {View, Text, TouchableOpacity, Image, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImageS3 from '../../../../../components/Image/ImageS3';
import {FullScreenCircleIndicator} from '../../../../../components/Indicator';
import {
  LineArrowLeft,
  LineMoreHorizontal,
} from '../../../../../components/svg/icons';
import styles from '../styles';
import { theme } from '../../../../../components/Theme';
import moment from 'moment';
import { useSelector } from 'react-redux';


// post?.photo?.length == !0 || post.photo?
//             <View style={[styles.image]}>
//               <SharedElement id ={post.id}>
//                   <ImageS3
//                     imageObj={post?.photo?.length == !0 ? post?.photo[0] : post?.photo}
//                     style={[styles.image]}
//                   />
//                 </SharedElement>
//               <View style={styles.layer}>
//                 <Text style={styles.title}>{post.blog.blogTitle}</Text>
//               </View>
//             </View>

export default function Header({ user,photo,blog,actionOnPress, seeker, createdAt,opportunityProvider}) {
  const navigation = useNavigation();


  const handleProfileOnPress = () => {
    if (seeker?.id == user.id || opportunityProvider?.id == user.id) {
      navigation.navigate('Profile');
    } else {
      if (seeker?.id) {
        navigation.navigate('SeekerProfile', {seekerId: seeker.id});
      }
      else if (opportunityProvider?.id) {
        navigation.navigate('ProviderProfile', {providerId: opportunityProvider?.id});
      }
    }
  };


  return (
    <View style={styles.header}>
        {
          photo?.length == !0 || photo?
          <View style={styles.image}>
            <View style={styles.layer}/>
            <ImageS3
              imageObj={photo?.length == !0 ? photo[0] : photo}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          :
          <></>
        }
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.content}>
          <View style={styles.navigator}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LineArrowLeft width={24} height={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={actionOnPress}>
              <LineMoreHorizontal width={24} height={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <Text style={{ ...theme.typography.titleRouteMap, color: theme.colors.white,marginBottom: theme.spacing.m}}>{blog.blogTitle}</Text>
          </View>
          <View style={styles.bottomContent}>
            
            <TouchableOpacity onPress= {handleProfileOnPress}>
              <ImageS3
                imageObj={seeker?.profilePic || opportunityProvider?.logo}
                resizeMode="cover"
                style={{height: 35, width: 35, backgroundColor: theme.colors.primary, borderRadius: 100, marginRight: 10}}
              />
            </TouchableOpacity>
              
              <Text style={[theme.typography.title8,{color: theme.colors.white}]}>
                  {`Published By `}
                <TouchableWithoutFeedback  onPress= {handleProfileOnPress} style={{backgroundColor: 'red'}}>
                  <Text style={{fontWeight: "bold"}}>
                      {seeker?.firstName || opportunityProvider.displayName}
                  </Text>
                  </TouchableWithoutFeedback>
                </Text>
              <Text style={[theme.typography.title8,{color: theme.colors.white}]}>{`  |  `}</Text>
            <Text style={[theme.typography.title8,{color: theme.colors.white}]}>{moment(createdAt).format("DD/MM/YYYY")}</Text>
            
          </View>
        </View>
        
      </SafeAreaView>
    </View>
  );
}
