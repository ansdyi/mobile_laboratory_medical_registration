import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const NavBarIcon = props => {
  return (
    <View style={styles.wrapper.main}>
      <TouchableOpacity onPress={props.onPress} style={styles.button.styling}>
        <Image source={props.img} style={styles.image.styling} />
        <Text style={{color: props.active ? 'black' : 'gray'}}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  wrapper: {
    main: {
      flex: 1,
    },
  },

  button: {
    styling: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5,
    },
  },

  image: {
    styling: {
      width: 28,
      height: 28,
    },
  },
};

export default NavBarIcon;
