import React, {useEffect, useState} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import * as actions from '../../../../_redux/actions';
import {FullScreenCircleIndicator} from '../../../../../../components/Indicator';
import All from './All';
import Collaborations from './Collaborations';
import Connections from './Connections';
import Opportunities from './Opportunities';
import styles from './styles';

export default function TabViews({route}) {
  const layout = useWindowDimensions();
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const {discover, user} = useSelector(
    (state) => ({
      discover: state.discoverReducer.discover,
      user: state.seekerReducer.seeker,
    }),
    shallowEqual,
  );

  useEffect(() => {
    getAllData();
  }, [dispatch]);

  useEffect(() => {
    if (route.params?.forceUpdate) {
      // Force update Routemap and posts if navigation has forceUpdate param.
      getAllData();
    }
  }, [route.params?.forceUpdate]);

  const getAllData = () => {
    return dispatch(actions.fetchContents())
      .then(() => dispatch(actions.fetchOpportunities()))
      .then(() => dispatch(actions.fetchCollaborations()))
      .then(() => dispatch(actions.fetchConnectionPosts(user?.id)))
      .then(() => dispatch(actions.fetchDiscover()))
      .then(() => setLoading(false));
  };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'all', title: 'All'},
    {key: 'opportunities', title: 'Opportunities'},
    {key: 'collaborations', title: 'Collaborations'},
    {key: 'connections', title: 'Connections'},
  ]);

  const renderScene = ({route}) => {
    if (loading) {
      return <FullScreenCircleIndicator />;
    }
    switch (route.key) {
      case 'all':
        return (
          <All allPosts={discover} userId={user.id} getAllData={getAllData} />
        );
      case 'opportunities':
        return (
          <Opportunities
            opportunities={discover.filter((d) => d.postType === 'OPPORTUNITY')}
            userId={user.id}
          />
        );
      case 'collaborations':
        return (
          <Collaborations
            collaborations={discover.filter(
              (d) => d.postType === 'COLLABORATION',
            )}
          />
        );
      case 'connections':
        return (
          <Connections posts={discover.filter((d) => d.postType === 'POST')} />
        );
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <View style={{backgroundColor: 'white', paddingHorizontal: 16}}>
      <TabBar
        {...props}
        indicatorStyle={styles.tabIndicator}
        style={{backgroundColor: 'white'}}
        tabStyle={{width: 'auto'}}
        scrollEnabled={true}
        renderLabel={({route, focused, color}) => (
          <Text style={styles.tabLabel}>{route.title}</Text>
        )}
      />
    </View>
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      scrollEnabled={true}
      // lazy={true}
      // renderLazyPlaceholder={() => <FullScreenCircleIndicator />}
    />
  );
}
