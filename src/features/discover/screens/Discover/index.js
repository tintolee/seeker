import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import SearchBar from './components/SearchBar';
import TabView from './components/TabView';
import AddPostModal from './components/AddPostModal';
import styles from './styles';

export default function Discover({route}) {
  const [addPostModalVisible, setAddPostModalVisible] = useState(false);

  const toggleAddPostModal = () => {
    setAddPostModalVisible(!addPostModalVisible);
  };

  return (
    <View style={styles.container}>
      <SearchBar />
      <TabView route={route} />
      <TouchableOpacity
        style={styles.buttonGPlusStyle}
        activeOpacity={0.5}
        onPress={toggleAddPostModal}>
        <Image
          source={require('../../../../assets/img/gradientPlus.png')}
          style={styles.buttonGPlusStyle}
        />
      </TouchableOpacity>
      <AddPostModal
        visible={addPostModalVisible}
        toggleModal={toggleAddPostModal}
      />
    </View>
  );
}
