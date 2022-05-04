import React,{useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {
  FilledPinFill,
  FilledCalendarFill,
  EnterIcon,
} from '../../../../components/svg/icons';
import ImageS3 from '../../../../components/Image/ImageS3';
import Footer from '../../../../components/Post/components/Footer';
import styles from './styles';
import Header from './Header'
import { theme } from '../../../../components/Theme';
import Button from '../../../../components/form/Button';
import ContinueReadingModal from './ContinueReadingModal'
import { useSelector } from 'react-redux';

export default function index({route}) {
  const navigation = useNavigation();

  const post =  route?.params

  const [isLiked, setIsLiked] = useState(false);
  const [likeAnimation, setlikeAnimation] = useState(false);

  const likeHandler = (isPress) => {
    if (!isLiked) {
      setlikeAnimation(!likeAnimation);
      setIsLiked(!isLiked);
    }
    if (isPress) {
      setIsLiked(!isLiked);
    }
  };
  const [optionsModalVisible, setOptionsModalVisible] = useState(false);
  // console.log(post)
  const toggleOptionsModal = () => {
    setOptionsModalVisible(!optionsModalVisible);
  };

  const {seeker} = useSelector((state) => ({
    seeker: state.seekerReducer.seeker,
  }));

  

  return (
    <ScrollView style={styles.container}>
      <Header {...post} actionOnPress={toggleOptionsModal} user ={seeker}/>
      <View style={{flex: 1, marginVertical: 30, marginHorizontal: 20}}>
        <View style={{marginVertical: 10}}>
          <Text style={[theme.typography.caption,{color: theme.colors.black}]}>{post.blog.blogDescription}</Text>
        </View>
      </View>
      <Footer
        type="seeker"
        likesCount={1}
        caption={post?.caption}
        postedAt={post?.createdAt}
        username={post?.seeker?.firstName}
        onPressShare={()=>{}}
        onPressLike={() => likeHandler('press')}
        isLiked={isLiked}
        post={post}
      />
      <ContinueReadingModal
        visible={optionsModalVisible}
        toggleModal={toggleOptionsModal}
      />
      {/* <View style={{margin: theme.spacing.sm}}>
        <View style={{marginBottom: theme.spacing.m}}>
          <Text style={{...theme.typography.title7,fontWeight: "700"}}>#barcalys #lifeskills #opportunity #finance #money Creadit Scrore WorkShop - Learn the typical mistakes people make when applying for credit</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.inputContainer} onPress={()=>{}} activeOpacity={0.5}>
            <Text style={[styles.text]}>
              {'None selected'}
            </Text>
            <EnterIcon height={28} width={28} color={theme.colors.fieldIcon} />
          </TouchableOpacity>  
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity onPress={()=>{}} style={{marginRight: theme.spacing.sm}}>
            <View style={[styles.containerCommonStyle]}>
                <Text style={[styles.textCommonStyle]}>View Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}}>
            <View style={[styles.containerCommonStyle]}>
                <Text style={[styles.textCommonStyle]}>View Route Map</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> */}
    </ScrollView>
  );
}