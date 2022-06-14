import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

import HeaderFlexibel from '../../../components/atoms/HeaderFlexibel';
import IconlessHeader from '../../../components/atoms/IconlessHeader';
import ButtonAct from '../../../components/atoms/ButtonAct';
import {dataRef} from '../../../config/reference';

class SettingInformasi extends Component {
  state = {
    key: this.props.navigation.state.params.key,
    alerta: this.props.navigation.state.params.alerta,
    nama_pemeriksaan: this.props.navigation.state.params.nama_pemeriksaan,
    deskripsi_pemeriksaan: this.props.navigation.state.params
      .deskripsi_pemeriksaan,
  };

  editData = key => {
    dataRef
      .child(this.state.alerta)
      .child(key)
      .update({
        nama_pemeriksaan: this.state.nama_pemeriksaan,
        deskripsi_pemeriksaan: this.state.deskripsi_pemeriksaan,
      });
    alert('Data edited successfully!');
    this.props.navigation.navigate('ListInformasi');
  };

  deleteData = key => {
    dataRef
      .child(this.state.alerta)
      .child(key)
      .remove();
    alert('Data removed succesfully!');
    this.props.navigation.navigate('ListInformasi');
  };

  render() {
    return (
      <View style={styles.wrapper.main}>
        {/* Header */}
        <HeaderFlexibel title="Form Edit Informasi" />

        {/* Screen Form Cetak Hasil */}
        <ScrollView style={styles.wrapper.mainscreen}>
          <View style={styles.wrapper.supportscreen}>
            <IconlessHeader title="Informasi" />

            <View style={styles.wrapper.mainform}>
              <View style={styles.wrapper.supportform}>
                <View style={styles.wrapper.namapemeriksaan}>
                  <View style={styles.wrapper.flexible}>
                    <Text style={styles.text.flexible}>Nama Pemeriksaan</Text>
                  </View>
                  <TextInput
                    value={this.state.nama_pemeriksaan}
                    onChangeText={nama_pemeriksaan =>
                      this.setState({nama_pemeriksaan})
                    }
                    placeholder="-"
                    style={styles.textinput.flexible}
                  />
                </View>

                <View style={styles.wrapper.deskripsipemeriksaan}>
                  <View style={styles.wrapper.flexible}>
                    <Text style={styles.text.flexible}>
                      Deskripsi Pemeriksaan
                    </Text>
                  </View>
                  <TextInput
                    value={this.state.deskripsi_pemeriksaan}
                    onChangeText={deskripsi_pemeriksaan =>
                      this.setState({deskripsi_pemeriksaan})
                    }
                    placeholder="-"
                    style={styles.textinput.flexible}
                  />
                </View>
              </View>

              <View style={styles.wrapper.supportbuttonsave}>
                <ButtonAct
                  onPress={() => this.editData(this.state.key)}
                  title="Save"
                />
              </View>
              <View style={styles.wrapper.supportbuttondelete}>
                <ButtonAct
                  onPress={() => this.deleteData(this.state.key)}
                  title="Delete"
                />
              </View>
            </View>
          </View>
        </ScrollView>
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

    namapemeriksaan: {
      marginTop: 15,
    },

    deskripsipemeriksaan: {
      marginTop: 30,
    },

    flexible: {
      bottom: 10,
    },

    supportbuttonsave: {
      marginTop: 130,
      marginBottom: 10,
    },

    supportbuttondelete: {
      marginBottom: 10,
    },

    mainheaderform: {
      height: 55,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 15,
      backgroundColor: 'pink',
      marginTop: 15,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },

    supportheaderform: {
      marginVertical: 5,
    },
  },

  text: {
    flexible: {
      fontSize: 15,
      fontWeight: 'bold',
    },

    headerform: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
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

export default SettingInformasi;
