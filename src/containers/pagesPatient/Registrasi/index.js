import React, {Component} from 'react';
import {View} from 'react-native';

import HeaderBar from '../../../components/atoms/HeaderBar';
import AlertHeader from '../../../components/atoms/AlertHeader';
import DeskripsiPlusButtonAct from '../../../components/atoms/DeskripsiPlusButtonAct';

class Registrasi extends Component {
  render() {
    return (
      <View style={styles.wrapper.main}>
        {/* Header */}
        <HeaderBar />

        {/* Screen Registrasi */}
        <View style={styles.wrapper.mainscreen}>
          <View style={styles.wrapper.supportscreen}>
            <AlertHeader title="Daftar Test Lab?" />
            <DeskripsiPlusButtonAct
              title="Click 'Lanjut' untuk mengisi form Registrasi."
              onPress={() => this.props.navigation.navigate('FormRegistrasi')}
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
      backgroundColor: '#5F9EAD',
    },

    supportscreen: {
      marginVertical: 250,
    },
  },
};

export default Registrasi;
