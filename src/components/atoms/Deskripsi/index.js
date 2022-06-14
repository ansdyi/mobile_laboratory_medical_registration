import React from 'react';
import {View, Text} from 'react-native';

const Deskripsi = props => {
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
      paddingVertical: 10,
      backgroundColor: 'white',
      alignItems: 'center',
      borderColor: '#BEBEBE',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },

    support: {
      marginVertical: 5,
      height: 65,
      width: 310,
    },
  },

  text: {
    styling: {
      textAlign: 'center',
    },
  },
};

export default Deskripsi;
