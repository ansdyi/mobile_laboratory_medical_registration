import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const ButtonAct = props => {
  return (
    <TouchableOpacity style={styles.button.styling} onPress={props.onPress}>
      <Text style={styles.text.styling}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    styling: {
      backgroundColor: 'pink',
      paddingVertical: 8,
      paddingHorizontal: 10,
      alignSelf: 'center',
      borderRadius: 5,
      marginVertical: 5,
    },
  },

  text: {
    styling: {
      fontWeight: 'bold',
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
    },
  },
};

export default ButtonAct;
