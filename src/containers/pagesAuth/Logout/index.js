import React, {Component} from 'react';
import {View} from 'react-native';

import HeaderBar from '../../../components/atoms/HeaderBar';
import AlertHeader from '../../../components/atoms/AlertHeader';
import DeskripsiPlusButtonAct from '../../../components/atoms/DeskripsiPlusButtonAct';

class Logout extends Component {
  render() {
    return (
      <View style={styles.wrapper.main}>
        {/* Header */}
        <HeaderBar />

        {/* Screen Registrasi */}
        <View style={styles.wrapper.mainscreen}>
          <View style={styles.wrapper.supportscreen}>
            <AlertHeader title="Logout?" />
            <DeskripsiPlusButtonAct
              title="Click 'Lanjut' untuk keluar."
              onPress={() => {
                alert('Logout succesfully!');
                this.props.navigation.navigate('Welcome');
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    main: {
      flex: 1,
    },

    mainscreen: {
      flex: 1,
      backgroundColor: '#616A6B',
    },

    supportscreen: {
      marginVertical: 250,
    },
  },
};

export default Logout;
