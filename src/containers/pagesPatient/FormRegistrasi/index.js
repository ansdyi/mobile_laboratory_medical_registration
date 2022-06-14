import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';
import DatePicker from 'react-native-datepicker';

import HeaderFlexibel from '../../../components/atoms/HeaderFlexibel';
import ButtonAct from '../../../components/atoms/ButtonAct';
import {dataRef} from '../../../config/reference';

class FormRegistrasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      kategori_pasien: '',
      no_identitas: '',
      nama_pasien: '',
      tgl_lahir: '',
      jenis_kelamin: '',
      alamat: '',
      email: '',
      no_telepon: '',
      dokter_pengirim: '',
      jenis_pemeriksaan: '',
      ket_pemeriksaan: '',
      tgl_kunjungan: '',
    };
  }

  sendData = () => {
    alert('Data Register successfully!');
    const newDataPatient = {
      id: this.state.id.trim(),
      kategori_pasien: this.state.kategori_pasien.trim(),
      no_identitas: this.state.no_identitas.trim(),
      nama_pasien: this.state.nama_pasien.trim(),
      tgl_lahir: this.state.tgl_lahir.trim(),
      jenis_kelamin: this.state.jenis_kelamin.trim(),
      alamat: this.state.alamat.trim(),
      email: this.state.email.trim(),
      no_telepon: this.state.no_telepon.trim(),
      dokter_pengirim: this.state.dokter_pengirim.trim(),
      jenis_pemeriksaan: this.state.jenis_pemeriksaan.trim(),
      ket_pemeriksaan: this.state.ket_pemeriksaan.trim(),
      tgl_kunjungan: this.state.tgl_kunjungan.trim(),
    };
    const ref = dataRef.child(this.state.kategori_pasien).push(newDataPatient);
    const key = ref.key;
    dataRef
      .child(this.state.kategori_pasien)
      .child(key)
      .update({id: key});
    this.props.navigation.navigate('HomePatient');
  };

  render() {
    return (
      <View style={styles.wrapper.main}>
        {/* Header */}
        <HeaderFlexibel title="Form Registrasi Pasien" />

        {/* Screen Form Registrasi */}
        <ScrollView style={styles.wrapper.scroll}>
          <View style={styles.wrapper.mainflexible}>
            <View style={styles.wrapper.supportflexible}>
              <Text style={styles.text.flexible}>Kategori Pasien</Text>
            </View>
            <View style={styles.wrapper.mainpickerflexible}>
              <Picker
                selectedValue={this.state.kategori_pasien}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({kategori_pasien: itemValue})
                }
                style={styles.picker.flexible}>
                <Picker.Item label="Pilih Kategori Pasien" value="null" />
                <Picker.Item label="Pasien Baru" value="PasienBaru" />
                <Picker.Item label="Pasien Lama" value="PasienLama" />
              </Picker>
            </View>
          </View>

          <View style={styles.wrapper.mainflexible}>
            <View style={styles.wrapper.supportflexible}>
              <Text style={styles.text.flexible}>No. Identitas</Text>
            </View>
            <TextInput
              value={this.state.no_identitas}
              onChangeText={no_identitas => this.setState({no_identitas})}
              keyboardType="numeric"
              placeholder="NIK KTP"
              style={styles.textinput.flexible}
            />
          </View>

          <View style={styles.wrapper.mainflexible}>
            <View style={styles.wrapper.supportflexible}>
              <Text style={styles.text.flexible}>Nama Pasien</Text>
            </View>
            <TextInput
              value={this.state.nama_pasien}
              onChangeText={nama_pasien => this.setState({nama_pasien})}
              placeholder="-"
              style={styles.textinput.flexible}
            />
          </View>

          <View style={styles.wrapper.tgllahir}>
            <View style={styles.wrapper.supportflexible}>
              <Text style={styles.text.flexible}>Tanggal Lahir</Text>
            </View>
            <DatePicker
              style={styles.datepicker.flexible}
              date={this.state.tgl_lahir}
              mode="date"
              androidMode="spinner"
              placeholder="Pilih Tanggal Lahir"
              format="DD-MM-YYYY"
              minDate="01-01-1950"
              maxDate="01-12-2020"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  right: 0,
                  top: 10,
                },
                dateInput: {
                  marginTop: 10,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: 'gray',
                  fontSize: 15,
                  paddingVertical: 24,
                },
              }}
              onDateChange={date => {
                this.setState({tgl_lahir: date});
              }}
            />
          </View>

          <View style={styles.wrapper.mainflexible}>
            <View style={styles.wrapper.supportflexible}>
              <Text style={styles.text.flexible}>Jenis Kelamin</Text>
            </View>
            <View style={styles.wrapper.mainpickerflexible}>
              <Picker
                selectedValue={this.state.jenis_kelamin}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({jenis_kelamin: itemValue})
                }
                style={styles.picker.flexible}>
                <Picker.Item label="Pilih Jenis Kelamin" value="null" />
                <Picker.Item label="Laki-laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
              </Picker>
            </View>
          </View>

          <View style={styles.wrapper.mainflexible}>
            <View style={styles.wrapper.supportflexible}>
              <Text style={styles.text.flexible}>Alamat</Text>
            </View>
            <TextInput
              value={this.state.alamat}
              onChangeText={alamat => this.setState({alamat})}
              placeholder="-"
              style={styles.textinput.flexible}
            />
          </View>

          <View style={styles.wrapper.mainflexible}>
            <View style={styles.wrapper.supportflexible}>
              <Text style={styles.text.flexible}>Email</Text>
            </View>
            <TextInput
              value={this.state.email}
              onChangeText={email => this.setState({email})}
              keyboardType="email-address"
              placeholder="-"
              style={styles.textinput.flexible}
            />
          </View>

          <View style={styles.wrapper.mainflexible}>
            <View style={styles.wrapper.supportflexible}>
              <Text style={styles.text.flexible}>No. Telepon</Text>
            </View>
            <TextInput
              value={this.state.no_telepon}
              onChangeText={no_telepon => this.setState({no_telepon})}
              keyboardType="numeric"
              placeholder="-"
              style={styles.textinput.flexible}
            />
          </View>

          <View style={styles.wrapper.mainflexible}>
            <View style={styles.wrapper.supportflexible}>
              <Text style={styles.text.flexible}>Rujukan Dokter Pengirim</Text>
            </View>
            <TextInput
              value={this.state.dokter_pengirim}
              onChangeText={dokter_pengirim => this.setState({dokter_pengirim})}
              placeholder="dr. Andre / APS (Atas Permintaan Sendiri)"
              style={styles.textinput.flexible}
            />
          </View>

          <View style={styles.wrapper.mainflexible}>
            <View style={styles.wrapper.supportflexible}>
              <Text style={styles.text.flexible}>Jenis Pemeriksaan</Text>
            </View>
            <View style={styles.wrapper.mainpickerflexible}>
              <Picker
                selectedValue={this.state.jenis_pemeriksaan}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({jenis_pemeriksaan: itemValue})
                }
                style={styles.picker.flexible}>
                <Picker.Item label="Pilih Jenis Pemeriksaan" value="null" />
                <Picker.Item label="Diff Count" value="DiffCount" />
                <Picker.Item label="Darah Lengkap" value="DarahLengkap" />
                <Picker.Item label="Darah Rutin" value="DarahRutin" />
                <Picker.Item label="Serologi" value="Serologi" />
                <Picker.Item label="HbsAg" value="HbsaAg" />
                <Picker.Item label="Kimia Darah" value="KimiaDarah" />
                <Picker.Item label="Test Pack" value="TestPack" />
              </Picker>
            </View>
          </View>

          <View style={styles.wrapper.mainflexible}>
            <View style={styles.wrapper.supportflexible}>
              <Text style={styles.text.flexible}>Keterangan Pemeriksaan</Text>
            </View>
            <TextInput
              value={this.state.ket_pemeriksaan}
              onChangeText={ket_pemeriksaan => this.setState({ket_pemeriksaan})}
              placeholder="*Contoh: Hemoglobin, Hematokrit, Lymfosit, dll."
              style={styles.textinput.flexible}
            />
          </View>

          <View style={styles.wrapper.tglkunjungan}>
            <View style={styles.wrapper.supportflexible}>
              <Text style={styles.text.flexible}>
                Rencana Tanggal Kunjungan
              </Text>
            </View>
            <DatePicker
              style={styles.datepicker.flexible}
              date={this.state.tgl_kunjungan}
              mode="date"
              androidMode="spinner"
              placeholder="Pilih Tanggal Kunjungan"
              format="DD-MM-YYYY"
              minDate="18-06-2020"
              maxDate="31-08-2020"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  right: 0,
                  top: 10,
                },
                dateInput: {
                  marginTop: 10,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: 'gray',
                  fontSize: 15,
                  paddingVertical: 24,
                },
              }}
              onDateChange={date => {
                this.setState({tgl_kunjungan: date});
              }}
            />
          </View>
        </ScrollView>

        {/* Button Submit Daftar */}
        <View style={styles.wrapper.mainbutton}>
          <View style={styles.wrapper.supportbutton}>
            <ButtonAct title="Daftar" onPress={this.sendData} />
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

    scroll: {
      flex: 1,
      backgroundColor: 'white',
    },

    mainflexible: {
      marginTop: 30,
      marginHorizontal: 25,
    },

    supportflexible: {
      bottom: 10,
    },

    mainpickerflexible: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'gray',
      fontSize: 15,
      paddingLeft: 6,
    },

    tgllahir: {
      marginTop: 30,
      marginBottom: 10,
      marginHorizontal: 25,
    },

    tglkunjungan: {
      marginVertical: 30,
      marginHorizontal: 25,
    },

    mainbutton: {
      height: 80,
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderColor: '#e4e4e4',
    },

    supportbutton: {
      marginTop: 15,
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

  picker: {
    flexible: {
      height: 50,
      width: 350,
    },
  },

  datepicker: {
    flexible: {
      width: '100%',
    },
  },
};

export default FormRegistrasi;
