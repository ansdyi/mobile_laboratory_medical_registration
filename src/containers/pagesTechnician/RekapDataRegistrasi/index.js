import React, {Component} from 'react';
import {View} from 'react-native';

import HeaderBar from '../../../components/atoms/HeaderBar';
import AlertHeader from '../../../components/atoms/AlertHeader';
import ButtonAct from '../../../components/atoms/ButtonAct';

class RekapDataRegistrasi extends Component {
  render() {
    return (
      <View style={styles.wrapper.main}>
        {/* Header */}
        <HeaderBar />

        {/* Screen Registrasi */}
        <View style={styles.wrapper.mainscreen}>
          <View style={styles.wrapper.supportscreen}>
            <AlertHeader title="Pilih Kategori Pasien" />
            <View style={styles.wrapper.mainoption}>
              <View style={styles.wrapper.pasienbaru}>
                <ButtonAct
                  title="Pasien Baru"
                  onPress={() => this.props.navigation.navigate('PasienBaru')}
                />
              </View>
              <View style={styles.wrapper.pasienlama}>
                <ButtonAct
                  title="Pasien Lama"
                  onPress={() => this.props.navigation.navigate('PasienLama')}
                />
              </View>
            </View>
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
      backgroundColor: '#696969',
    },

    supportscreen: {
      marginVertical: 230,
    },

    mainoption: {
      marginHorizontal: 70,
      paddingVertical: 20,
      backgroundColor: 'white',
      alignItems: 'center',
      borderColor: '#BEBEBE',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },

    pasienbaru: {
      borderEndColor: 'black',
      paddingVertical: 20,
    },

    pasienlama: {
      borderTopWidth: 2,
      paddingVertical: 20,
    },
  },

  text: {
    styling: {
      textAlign: 'center',
      fontSize: 20,
    },
  },
};

export default RekapDataRegistrasi;
