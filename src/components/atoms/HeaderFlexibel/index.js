import React from 'react';
import {View, Text} from 'react-native';

const HeaderFlexibel = props => {
  return (
    <View style={styles.wrapper.main}>
      <Text style={styles.text.styling}>{props.title}</Text>
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

  text: {
    styling: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  },
};

export default HeaderFlexibel;
