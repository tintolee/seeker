import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import * as actions from '../../_redux/actions';
import {FullScreenCircleIndicator} from '../../../../components/Indicator';
import RouteMapDetailHeader from './components/RouteMapDetailHeader';
import RouteMapDetailStats from './components/RouteMapDetailStats';
import RouteMapPosts from './components/RouteMapPosts';
import RouteMapOptions from './components/RouteMapOptions';
import RouteMapAddPostModal from './components/RouteMapAddPostModal';
import RouteMapDeleteModal from './components/RouteMapDeleteModal';
import ReachedDestinationModal from './components/ReachedDestinationModal';
import styles from './styles';

export default function RouteMapDetail({route}) {
  const [optionsModalVisible, setOptionsModalVisible] = useState(false);
  const [addPostModalVisible, setAddPostModalVisible] = useState(false);
  const [reachedDestinationModalVisible, setReachedDestinationModalVisible] =
    useState(false);
  const [routeMapDeleteModalVisible, setRouteMapDeleteModalVisible] =
    useState(false);
  const [optionType, setOptionType] = useState('');

  const navigation = useNavigation();

  const {routeMapId} = route.params;

  const dispatch = useDispatch();
  const _state = useSelector((state) => state.routeMapsReducer);
  const {actionsLoading, routeMapDetail, user} = useSelector(
    (state) => ({
      actionsLoading: state.routeMapsReducer.actionsLoading,
      routeMapDetail: state.routeMapsReducer.routeMapDetail,
      user: state.seekerReducer.seeker,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(actions.fetchRouteMap(routeMapId));
  }, [dispatch]);

  useEffect(() => {
    if (route.params?.forceUpdate) {
      // Force update Routemap and posts if navigation has post param.
      dispatch(actions.fetchRouteMap(routeMapId));
    }
  }, [route.params?.forceUpdate]);

  const handlePostFeedOnPress = (postId, firstName, lastName) => {
    
    navigation.navigate('RouteMapPostFeed', {
      postId: postId,
      title: `${firstName} ${lastName}`,
    });
  };

  const toggleOptionsModal = () => {
    setOptionsModalVisible(!optionsModalVisible);
  };

  const toggleAddPostModal = () => {
    setAddPostModalVisible(!addPostModalVisible);
  };

  const toggleRouteMapDeleteModal = () => {
    setRouteMapDeleteModalVisible(!routeMapDeleteModalVisible);
  };

  const toggleReachedDestinationModal = () => {
    setReachedDestinationModalVisible(!reachedDestinationModalVisible);
  };

  const onOptionsModalHide = () => {
    if (optionType === 'DeleteRouteMap') {
      toggleRouteMapDeleteModal();
    }
    setOptionType('');
  };

  //To be able to call modal after other modal closed
  const handleDeleteRouteMapOnPress = () => {
    setOptionType('DeleteRouteMap');

    toggleOptionsModal();
  };

  const handleMarkCompleteOnPress = () => {
    var input = {id: routeMapId, isCompleted: !routeMapDetail.isCompleted};

    dispatch(actions.updateRouteMap(input)).then(() => {
      toggleOptionsModal();

      dispatch(actions.fetchRouteMap(routeMapId)).then(() => {
        setTimeout(() => {
          input.isCompleted && toggleReachedDestinationModal();
        }, 300);
      });
    });
  };

  const handleEditRouteMapOnPress = () => {
    toggleOptionsModal();

    setTimeout(() => {
      navigation.navigate('RouteMapsEdit', {
        id: routeMapId,
      });
    }, 50);
  };

  return (
    <View style={styles.container}>
      {actionsLoading ? (
        <FullScreenCircleIndicator />
      ) : (
        <>
          {routeMapDetail ? (
            <>
              <RouteMapDetailHeader
                routeMap={routeMapDetail}
                actionOnPress={toggleOptionsModal}
              />
              <RouteMapDetailStats routeMap={routeMapDetail} />
              <RouteMapPosts
                isMine={true}
                posts={routeMapDetail?.posts.items}
                seeker={user}
                postFeedOnPress={handlePostFeedOnPress}
                toggleAddPostModal={toggleAddPostModal}
              />
            </>
          ) : null}
        </>
      )}

      {!routeMapDetail?.isCompleted && (
        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={toggleAddPostModal}>
          <Image
            source={require('../../../../assets/img/gradientPlus.png')}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
      )}
      
      <RouteMapOptions
        visible={optionsModalVisible}
        isCompleted={routeMapDetail?.isCompleted}
        toggleModal={toggleOptionsModal}
        deleteRouteMapOnPress={handleDeleteRouteMapOnPress}
        editRouteMapOnPress={handleEditRouteMapOnPress}
        markCompleteOnPress={handleMarkCompleteOnPress}
        onModalHide={onOptionsModalHide}
      />
      
      <RouteMapAddPostModal
        visible={addPostModalVisible}
        toggleModal={toggleAddPostModal}
        routeMap={routeMapDetail}
      />
      
      <ReachedDestinationModal
        visible={reachedDestinationModalVisible}
        toggleModal={toggleReachedDestinationModal}
      />
      
      <RouteMapDeleteModal
        visible={routeMapDeleteModalVisible}
        toggleModal={toggleRouteMapDeleteModal}
        routeMap={routeMapDetail}
      />
    </View>
  );
}
