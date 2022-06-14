import React from 'react';
import {View, Text, Image} from 'react-native';

const AlertHeader = props => {
  return (
    <View style={styles.wrapper.main}>
      <View style={styles.wrapper.support}>
        <Text style={styles.text.styling}>{props.title}</Text>
        <Image
          source={require('../../../assets/icon/alert.png')}
          style={styles.image.styling}
        />
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    main: {
      marginHorizontal: 70,
      backgroundColor: 'pink',
      marginTop: 15,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    support: {
      marginVertical: 5,
      position: 'relative',
    },
  },

  text: {
    styling: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
  },

  image: {
    styling: {
      width: 23,
      height: 23,
      position: 'absolute',
      left: 15,
    },
  },
};

export default AlertHeader;
