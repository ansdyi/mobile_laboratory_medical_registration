import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';

import HeaderFlexibel from '../../../components/atoms/HeaderFlexibel';
import IconlessHeader from '../../../components/atoms/IconlessHeader';
import ButtonAct from '../../../components/atoms/ButtonAct';
import {dataRef} from '../../../config/reference';

class FormInformasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      alerta: '',
      nama_pemeriksaan: '',
      deskripsi_pemeriksaan: '',
    };
  }

  sendData = () => {
    alert('Create new information successfully!');
    const newDataInformasi = {
      id: this.state.id.trim(),
      alerta: this.state.alerta.trim(),
      nama_pemeriksaan: this.state.nama_pemeriksaan.trim(),
      deskripsi_pemeriksaan: this.state.deskripsi_pemeriksaan.trim(),
    };
    const ref = dataRef.child(this.state.alerta).push(newDataInformasi);
    const key = ref.key;
    dataRef
      .child(this.state.alerta)
      .child(key)
      .update({id: key});
    this.props.navigation.navigate('ListInformasi');
  };

  render() {
    return (
      <View style={styles.wrapper.main}>
        {/* Header */}
        <HeaderFlexibel title="Form Informasi" />

        {/* Screen Form Cetak Hasil */}
        <ScrollView style={styles.wrapper.mainscreen}>
          <View style={styles.wrapper.supportscreen}>
            <IconlessHeader title="Informasi" />

            <View style={styles.wrapper.mainform}>
              <View style={styles.wrapper.supportform}>
                <View>
                  <View style={styles.wrapper.flexible}>
                    <Text style={styles.text.flexible}>Keterangan</Text>
                  </View>
                  <View style={styles.wrapper.mainpicker}>
                    <Picker
                      selectedValue={this.state.alerta}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({alerta: itemValue})
                      }
                      style={styles.picker.styling}>
                      <Picker.Item label="*Alerta" value="null" />
                      <Picker.Item
                        label="©Laboratorium2020"
                        value="©Laboratorium2020"
                      />
                    </Picker>
                  </View>
                </View>

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

              <View style={styles.wrapper.supportbutton}>
                <ButtonAct title="Save" onPress={this.sendData} />
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
      marginVertical: 180,
    },

    mainform: {
      marginHorizontal: 15,
      backgroundColor: 'white',
      alignItems: 'center',
      borderColor: '#BEBEBE',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },

    supportform: {
      marginVertical: 30,
      height: 260,
      width: 310,
    },

    mainpicker: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'gray',
      fontSize: 15,
      paddingLeft: 6,
    },

    namapemeriksaan: {
      marginTop: 30,
    },

    deskripsipemeriksaan: {
      marginTop: 30,
    },

    flexible: {
      bottom: 10,
    },

    supportbutton: {
      marginTop: 0,
      marginBottom: 15,
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

  picker: {
    styling: {
      height: 50,
      width: 300,
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

export default FormInformasi;
