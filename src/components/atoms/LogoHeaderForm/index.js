import React from 'react';
import {View, Image} from 'react-native';

const LogoHeaderForm = () => {
  return (
    <View style={styles.wrapper.main}>
      <View style={styles.wrapper.support}>
        <Image
          source={require('../../../assets/logo/logo.png')}
          style={styles.image.styling}
        />
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    main: {
      height: 55,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 15,
      backgroundColor: 'pink',
      marginTop: 15,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },

    support: {
      marginVertical: 5,
    },
  },

  image: {
    styling: {
      width: 250,
      height: '100%',
    },
  },
};

export default LogoHeaderForm;
