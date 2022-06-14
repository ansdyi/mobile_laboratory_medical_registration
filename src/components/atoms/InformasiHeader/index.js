import React from 'react';
import {View, Text, Image} from 'react-native';

const InformasiHeader = props => {
  return (
    <View style={styles.wrapper.main}>
      <View style={styles.wrapper.support}>
        <Text style={styles.text.styling}>{props.title}</Text>
        <Image
          source={require('../../../assets/icon/biochemist.png')}
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
      width: 24,
      height: 24,
      position: 'absolute',
      left: 15,
    },
  },
};

export default InformasiHeader;
