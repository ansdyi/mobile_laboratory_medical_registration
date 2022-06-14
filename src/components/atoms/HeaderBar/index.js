import React from 'react';
import {View, Image} from 'react-native';

const HeaderBar = () => {
  return (
    <View style={styles.wrapper.main}>
      <Image
        source={require('../../../assets/logo/logo.png')}
        style={styles.image.styling}
      />
    </View>
  );
};

const styles = {
  wrapper: {
    main: {
      height: 55,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderColor: '#e4e4e4',
    },
  },

  image: {
    styling: {
      width: 250,
      height: '100%',
    },
  },
};

export default HeaderBar;
