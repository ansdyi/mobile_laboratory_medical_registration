import React from 'react';
import {View, Text} from 'react-native';

const IconlessHeader = props => {
  return (
    <View style={styles.wrapper.main}>
      <View style={styles.wrapper.support}>
        <Text style={styles.text.styling}>{props.title}</Text>
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
    },
  },

  text: {
    styling: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
  },
};

export default IconlessHeader;
