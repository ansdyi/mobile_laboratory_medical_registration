import React from 'react';
import {View, Text} from 'react-native';

import ButtonAct from '../ButtonAct';

const DeskripsiPlusButtonAct = props => {
  return (
    <View style={styles.wrapper.main}>
      <View style={styles.wrapper.support}>
        <Text style={styles.text.styling}>{props.title}</Text>
      </View>
      <View style={styles.wrapper.supportbutton}>
        <ButtonAct title="Lanjut" onPress={props.onPress} />
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    main: {
      marginHorizontal: 70,
      backgroundColor: 'white',
      alignItems: 'center',
      borderColor: '#BEBEBE',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },

    support: {
      marginTop: 30,
      height: 35,
      width: 250,
    },

    supportbutton: {
      marginTop: 30,
      marginBottom: 15,
    },
  },

  text: {
    styling: {
      textAlign: 'center',
      fontSize: 20,
    },
  },
};

export default DeskripsiPlusButtonAct;
