import React from 'react';
import {View, Text, Image} from 'react-native';

const PinHeader = props => {
  return (
    <View style={styles.wrapper.main}>
      <View style={styles.wrapper.support}>
        <Text style={styles.text.styling}>{props.title}</Text>
        <Image
          source={require('../../../assets/icon/pin.png')}
          style={styles.image.styling}
        />
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    main: {
      marginHorizontal: 15,
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
      width: 20,
      height: 20,
      position: 'absolute',
      top: 2,
      left: 15,
    },
  },
};

export default PinHeader;
