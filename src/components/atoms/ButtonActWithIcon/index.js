import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

const ButtonActWithIcon = props => {
  return (
    <TouchableOpacity style={styles.button.styling} onPress={props.onPress}>
      <Text style={styles.text.styling}>{props.title}</Text>
      <Image source={props.img} style={styles.image.styling} />
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    styling: {
      backgroundColor: 'pink',
      paddingVertical: 8,
      paddingHorizontal: 60,
      alignSelf: 'center',
      borderRadius: 5,
      marginVertical: 5,
      position: 'relative',
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

  image: {
    styling: {
      width: 25,
      height: 25,
      position: 'absolute',
      left: 15,
      top: 6,
    },
  },
};

export default ButtonActWithIcon;
