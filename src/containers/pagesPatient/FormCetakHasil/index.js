import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

import HeaderFlexibel from '../../../components/atoms/HeaderFlexibel';
import ButtonActWithIcon from '../../../components/atoms/ButtonActWithIcon';
import IconlessHeader from '../../../components/atoms/IconlessHeader';

class FormCetakHasil extends Component {
  render() {
    return (
      <View style={styles.wrapper.main}>
        {/* Header */}
        <HeaderFlexibel title="Form Cetak Hasil Pemeriksaan Laboratorium" />

        {/* Screen Form Cetak Hasil */}
        <View style={styles.wrapper.mainscreen}>
          <View style={styles.wrapper.supportscreen}>
            <IconlessHeader title="Cetak Hasil Test" />

            <View style={styles.wrapper.mainform}>
              <View style={styles.wrapper.supportform}>
                <View style={styles.wrapper.rekammedis}>
                  <View style={styles.wrapper.flexible}>
                    <Text style={styles.text.flexible}>No. Rekam Medis</Text>
                  </View>
                  <TextInput
                    placeholder="*Wajib Di Isi"
                    style={styles.textinput.flexible}
                  />
                </View>

                <View style={styles.wrapper.tglpemeriksaan}>
                  <View style={styles.wrapper.flexible}>
                    <Text style={styles.text.flexible}>
                      Tanggal Pemeriksaan
                    </Text>
                  </View>
                  <TextInput
                    keyboardType="numeric"
                    placeholder="*Contoh: 03-06-2020"
                    style={styles.textinput.flexible}
                  />
                </View>
              </View>

              <View style={styles.wrapper.supportbutton}>
                <ButtonActWithIcon
                  title="Cetak Hasil"
                  img={require('../../../assets/icon/inbox.png')}
                  onPress={() => alert('ok')}
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
      backgroundColor: '#5F9EAD',
    },

    supportscreen: {
      marginVertical: 210,
    },

    mainform: {
      marginHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: 'white',
      alignItems: 'center',
      borderColor: '#BEBEBE',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },

    supportform: {
      marginVertical: 5,
      height: 65,
      width: 310,
    },

    rekammedis: {
      marginTop: 15,
    },

    tglpemeriksaan: {
      marginTop: 30,
    },

    flexible: {
      bottom: 10,
    },

    supportbutton: {
      marginTop: 130,
      marginBottom: 5,
    },
  },

  text: {
    flexible: {
      fontSize: 15,
      fontWeight: 'bold',
    },
  },

  textinput: {
    flexible: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'gray',
      fontSize: 15,
      paddingHorizontal: 15,
    },
  },
};

export default FormCetakHasil;
