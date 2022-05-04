import React, { useState, useEffect } from "react";
import { View, Text, Linking ,StyleSheet} from 'react-native';
import { Storage } from "aws-amplify";
import { palette, theme } from '../../../../../components/Theme';
import moment from 'moment';
export default function FileMessage({ file }) {
    console.log(file)
    const [fileSource, setFileSource] = useState("");

    useEffect(() => {

        getFile(file.messageFile);

    }, []);

    const getFile = async (file) => {
        try {
            const fileURL = await Storage.get(file.key, {
                bucket: file.bucket,
                region: file.region,
            });
            setFileSource(fileURL);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.row}>
            <Text style={styles.text}
                onPress={() => Linking.openURL(fileSource)}>
                {file.name}
            </Text>
            <Text style={styles.messageTime}>{moment(file.createdAt).format('hh:mm a').toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
     // flexDirection: 'row',
      alignItems: 'flex-end',
      padding: 15,
      backgroundColor: palette.orange,
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20
    },
    text:{
        color:palette.white,
        marginBottom:5
    },
    messageTime:{
        color:palette.white,
        fontSize:12

    }

  });
  