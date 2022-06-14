import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

var iconHome = this.props.active
  ? require('../../../assets/icon/home-active.png')
  : require('../../../assets/icon/home-inactive.png');

var iconRegistrasi = this.props.active
  ? require('../../../assets/icon/portfolio-active.png')
  : require('../../../assets/icon/portfolio-inactive.png');

var iconLogout = this.props.active
  ? require('../../../assets/icon/logout-active.png')
  : require('../../../assets/icon/logout-inactive.png');

class NavBarIconPatient extends Component {
  render() {
    return (
      <View style={styles.wrapper.main}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={styles.button.styling}>
          <Image source={iconHome} style={styles.image.styling} />
          <Text>Home</Text>
        </TouchableOpacity>
        {/*
        <TouchableOpacity style={styles.button.styling}>
          <Image source={iconRegistrasi} style={styles.image.styling} />
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button.styling}>
          <Image source={iconLogout} style={styles.image.styling} />
          <Text>Home</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

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

export default NavBarIconPatient;
