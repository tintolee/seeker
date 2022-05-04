import { StyleSheet, Text, View,TouchableWithoutFeedback, TouchableOpacity,  } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { Button,Dimensions } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import ImageS3 from '../Image/ImageS3';

import { theme } from '../Theme';
import { Image } from 'react-native';
import { renderIcon } from '../svg/utils/renderIcon';

import ReportContent from '../ReportContent'

import { HeartFill, CombinedShape } from '../svg/icons';
import { selectReportType } from '../../utils/constants';
import PostDeleteModal from '../../features/posts/screens/PostFeed/components/PostDeleteModal';



const {width, height} = Dimensions.get('window')



export default function index({navigation,onClose, isMine, post,seeker,isVisible, onPress =false}) {
    const [reportVisible, setReportVisible] = React.useState(false);
    const handleOnPressShare = () => {
        onClose()
        navigation.navigate('Share', {post});
      };
    

      const editStepOnPress = () => {
        if (post) {
        onClose();
          switch (post.type) {
            case 'MILESTONE':
              return setTimeout(() => {
                navigation.navigate('MilestoneEdit', {
                  id: post.id,
                  previousScreen: 'RouteMapDetail',
                });
              }, 250);
            case 'BLOG':
              return setTimeout(() => {
                navigation.navigate('BlogEdit', {
                  id: post.id,
                  previousScreen: 'RouteMapDetail',
                });
              }, 250);
            case 'PHOTO':
              return setTimeout(() => {
                navigation.navigate('PhotoEdit', {
                  id: post.id,
                  previousScreen: 'RouteMapDetail',
                });
              }, 250);
            case 'VIDEO':
              return setTimeout(() => {
                navigation.navigate('VideoEdit', {
                  id: post.id,
                  previousScreen: 'RouteMapDetail',
                });
              }, 250);
            default:
              return Alert.alert('Coming soon...');
          }
        }
      };


    const handleProfileOnPress = () => {
        if (isMine) {
          navigation.navigate('Profile');
        } else {
          if (seeker.id) {
            navigation.navigate('SeekerProfile', {seekerId: seeker.id});
          } 
        //   else if (providerId) {
        //     navigation.navigate('ProviderProfile', {providerId});
        //   }
        }
      };

    return (
        <>
        <Modal 
            animationIn = {"fadeIn"}
            animationOut = {"fadeOut"}
            animationInTiming = {500}
            animationOutTiming = {500}
            backdropColor = {0}
            style= {{marginLeft: 0, marginRight: 0}}
            isVisible = {isVisible}>
            <BlurView
                style={{width: width,height: height}}
                blurType="materialDark"
                blurAmount={0.7}
            />
            {
            reportVisible == "delete"?
                <PostDeleteModal
                    visible={reportVisible == "delete"}
                    toggleModal={()=>setReportVisible(false)}
                    post={post}
                />
            :
            reportVisible == "report"?
                <ReportContent
                //   about={title}
                //   type={reportType}
                  reportType={selectReportType('Seeker Post')}
                  title={`${post?.seeker?.firstName} ${post?.seeker?.lastName} - ${post?.caption}`}
                  visible={reportVisible == "report"}
                  toggleModal={() => setReportVisible(false)}
                />
            :
            <Modal
                    isVisible = {isVisible}
                    swipeDirection = {"down"}
                    animationIn = {"fadeInUp"}
                    animationOut = {"fadeOutDown"}
                    animationInTiming = {1000}
                    animationOutTiming = {500}
                    onSwipeComplete = {onClose}
                    backdropColor = {1}
                    style= {{marginLeft: 0, marginRight: 0}}
                >
                <TouchableWithoutFeedback onPress = {onClose}>
                    <View style={{flex:1,}}>
                            {/* <Draggable x={0} y={0} onRelease = {()=>{alert("sa")}} > */}
                            <View style={{ flex: 1,justifyContent: 'center', padding: 15}}>
                                <View style={{overflow: "hidden", borderRadius: 20}}>
                                    <TouchableOpacity activeOpacity = {.9} style={styles.imgCircle} onPress = {handleProfileOnPress}>
                                        <ImageS3 imageObj={seeker?.profilePic} style={{height: 30, width: 30, marginRight: 10,borderRadius: 100}} />
                                        {/* <Image source={{uri: "https://imagevars.gulfnews.com/2020/03/31/Speak-like-Doremon--a-cartoon-character--women-told_1713038d0c1_medium.jpg"}} style={{height: 30, width: 30, marginRight: 10}} /> */}
                                        <Text style={{fontSize: 14, fontWeight: "700"}}>{seeker?.firstName} {seeker?.lastName}</Text>
                                    </TouchableOpacity>
                                    {
                                        post?.photo?.length == !0 || post?.photo?
                                        <TouchableOpacity activeOpacity = {.9} onPress= {()=>{
                                            onClose()
                                            if(onPress){
                                                onPress();
                                                return
                                            }

                                            navigation.navigate('ProfilePostFeed', {postId: post.id,title: `${seeker?.firstName} ${seeker?.lastName}`})
                                        }}>
                                            {/* <SharedElement id ={post.id}>
                                            </SharedElement> */}
                                                <ImageS3
                                                    imageObj={post?.photo?.length == !0 ? post?.photo[0] : post?.photo}
                                                    style={{width: "100%", height: 230,backgroundColor: theme.colors.primary}}
                                                />
                                        </TouchableOpacity>
                                        :
                                        
                                        <TouchableOpacity 
                                            style={{backgroundColor:theme.colors.primary}}
                                            onPress= {()=>{
                                                if(onPress){
                                                    onPress();
                                                    return
                                                }
                                                onClose()
                                                navigation.navigate('ProfilePostFeed', {
                                                    postId: post.id,
                                                    title: `${seeker?.firstName} ${seeker?.lastName}`,
                                                })
                                        }}>
                                            <View style={{width: "100%", height: 230,alignItems: 'center', justifyContent: 'center'}}>
                                                {
                                                    post?.blog?.blogTitle?
                                                        <Text style={[theme.typography.title3,{color: theme.colors.white}]}>{post.blog.blogTitle}</Text>
                                                    :
                                                    post?.milestone?.title?
                                                        <Text style={[theme.typography.title3,{color: theme.colors.white}]}>{post.milestone.title}</Text>
                                                    :<></>
                                                }
                                            </View>
                                        </TouchableOpacity>
                                    }
                                </View>
                                <View style={{backgroundColor: theme.colors.background, marginVertical: 20, borderRadius: 10, paddingVertical: 10, overflow: "hidden"}}>
                                    {
                                    isMine?
                                        <>
                                        
                                            <TouchableOpacity onPress={handleOnPressShare} activeOpacity={0.5}>
                                                <View style={styles.container}>
                                                    <View style={[styles.oval]}>
                                                        {renderIcon("edit", "white")}
                                                    </View>
                                                    <View style={styles.nameContainer}>
                                                        <Text style={styles.name}>{"Share Step"}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={editStepOnPress} activeOpacity={0.5}>
                                                <View style={styles.container}>
                                                    <View style={[styles.oval]}>
                                                        <HeartFill width={18} height={18} color="#fff" fill = {"#fff"}/>
                                                    </View>
                                                    <View style={styles.nameContainer}>
                                                        <Text style={styles.name}>{"Edit Step"}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {setReportVisible("delete")}} activeOpacity={0.5}>
                                                <View style={styles.container}>
                                                    <View style={[styles.oval]}>
                                                        <CombinedShape width={18} height={18} color="#fff" />
                                                    </View>
                                                    <View style={[styles.nameContainer,{borderBottomWidth: 0}]}>
                                                        <Text style={styles.name}>{"Delete Step"}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </>
                                    :
                                    <>
                                        <TouchableOpacity onPress={handleOnPressShare} activeOpacity={0.5}>
                                            <View style={styles.container}>
                                                <View style={[styles.oval]}>
                                                    {renderIcon("edit", "white")}
                                                </View>
                                                <View style={styles.nameContainer}>
                                                    <Text style={styles.name}>{"Share Step"}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {setReportVisible("report")}} activeOpacity={0.5}>
                                            <View style={styles.container}>
                                                <View style={[styles.oval]}>
                                                    {renderIcon("flag", "white")}
                                                </View>
                                                <View style={styles.nameContainer}>
                                                    <Text style={styles.name}>{"Flag as inappropriate"}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        {/* <TouchableOpacity onPress={()=>{}} activeOpacity={0.5}>
                                            <View style={styles.container}>
                                                <View style={[styles.oval]}>
                                                    {renderIcon("eye", "white")}
                                                </View>
                                                <View style={styles.nameContainer}>
                                                    <Text style={styles.name}>{"View Profile"}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity> */}
                                        {/* <TouchableOpacity onPress={()=>{}} activeOpacity={0.5}>
                                            <View style={styles.container}>
                                                <View style={[styles.oval]}>
                                                    {renderIcon("messageCircle", "white")}
                                                </View>
                                                <View style={[styles.nameContainer,{borderBottomWidth: 0}]}>
                                                    <Text style={styles.name}>{"Message Seeker"}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity> */}
                                    </>
                                    }
                                    
                                </View>
                            </View>
                            {/* </Draggable> */}
                        
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        }
        </Modal>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexDirection: 'row',
      },
      oval: {
        height: 34,
        width: 34,
        // backgroundColor:'#f59532',
        backgroundColor: '#f59532',
        borderRadius: 34,
        padding: 5,
        marginHorizontal: theme.spacing.m,
        alignItems: 'center',
        justifyContent: 'center',
      },
      nameContainer:{
        marginRight: theme.spacing.m,
        borderBottomColor: theme.colors.grayIcon, 
        borderBottomWidth: 1, flex: 1, 
        paddingVertical: 20,
      },
      name: {
        ...theme.typography.title6,
      },
      imgCircle: {
        backgroundColor: '#fff', padding: 10, flexDirection: 'row', alignItems: 'center'
      }

});
