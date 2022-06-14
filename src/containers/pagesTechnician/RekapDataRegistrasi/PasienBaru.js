import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {dataRef} from '../../../config/reference';
import ButtonAct from '../../../components/atoms/ButtonAct';

class PasienBaru extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: [],
    };
  }

  componentDidMount() {
    dataRef.child('PasienBaru').on('value', snapshot => {
      let data = snapshot.val();
      let patient = Object.values(data);
      this.setState({patient});
    });
  }

  senData = item => {
    this.props.navigation.navigate('SettingDataRegistrasi', {
      key: item.id,
      kategori_pasien: item.kategori_pasien,
      no_identitas: item.no_identitas,
      nama_pasien: item.nama_pasien,
      tgl_lahir: item.tgl_lahir,
      jenis_kelamin: item.jenis_kelamin,
      alamat: item.alamat,
      email: item.email,
      no_telepon: item.no_telepon,
      dokter_pengirim: item.dokter_pengirim,
      jenis_pemeriksaan: item.jenis_pemeriksaan,
      ket_pemeriksaan: item.ket_pemeriksaan,
      tgl_kunjungan: item.tgl_kunjungan,
    });
  };

  render() {
    return (
      <View style={styles.wrapper.main}>
        {/* Screen Rekap Data Registrasi */}
        <ScrollView style={styles.wrapper.mainscroll}>
          <View style={styles.wrapper.supportscroll}>
            {this.state.patient.length === 0 ? (
              <View style={styles.wrapper.nulldata}>
                <Text style={styles.text.nulldata}>
                  ==== Tidak Ada Data ====
                </Text>
              </View>
            ) : (
              this.state.patient.map((item, index) => (
                <View>
                  {/* Header Border */}
                  <View style={styles.wrapper.mainheader}>
                    <View style={styles.wrapper.supportheader}>
                      <Text style={styles.text.header}>
                        Data Registrasi Pasien
                      </Text>
                    </View>
                  </View>
                  {/* Border Output */}
                  <View style={styles.wrapper.mainform}>
                    <View style={styles.wrapper.mainbordertext}>
                      <View style={styles.wrapper.supportbordertext}>
                        <Text style={styles.text.titleborder}>
                          Kategori Pasien
                        </Text>
                      </View>
                      <Text style={styles.text.inborder}>
                        {item.kategori_pasien}
                      </Text>
                    </View>

                    <View style={styles.wrapper.mainbordertext}>
                      <View style={styles.wrapper.supportbordertext}>
                        <Text style={styles.text.titleborder}>
                          No. Identitas
                        </Text>
                      </View>
                      <Text style={styles.text.inborder}>
                        {item.no_identitas}
                      </Text>
                    </View>

                    <View style={styles.wrapper.mainbordertext}>
                      <View style={styles.wrapper.supportbordertext}>
                        <Text style={styles.text.titleborder}>Nama Pasien</Text>
                      </View>
                      <Text style={styles.text.inborder}>
                        {item.nama_pasien}
                      </Text>
                    </View>

                    <View style={styles.wrapper.mainbordertext}>
                      <View style={styles.wrapper.supportbordertext}>
                        <Text style={styles.text.titleborder}>
                          Tanggal Lahir
                        </Text>
                      </View>
                      <Text style={styles.text.inborder}>{item.tgl_lahir}</Text>
                    </View>

                    <View style={styles.wrapper.mainbordertext}>
                      <View style={styles.wrapper.supportbordertext}>
                        <Text style={styles.text.titleborder}>
                          Jenis Kelamin
                        </Text>
                      </View>
                      <Text style={styles.text.inborder}>
                        {item.jenis_kelamin}
                      </Text>
                    </View>

                    <View style={styles.wrapper.mainbordertext}>
                      <View style={styles.wrapper.supportbordertext}>
                        <Text style={styles.text.titleborder}>Alamat</Text>
                      </View>
                      <Text style={styles.text.inborder}>{item.alamat}</Text>
                    </View>

                    <View style={styles.wrapper.mainbordertext}>
                      <View style={styles.wrapper.supportbordertext}>
                        <Text style={styles.text.titleborder}>Email</Text>
                      </View>
                      <Text style={styles.text.inborder}>{item.email}</Text>
                    </View>

                    <View style={styles.wrapper.mainbordertext}>
                      <View style={styles.wrapper.supportbordertext}>
                        <Text style={styles.text.titleborder}>No. Telepon</Text>
                      </View>
                      <Text style={styles.text.inborder}>
                        {item.no_telepon}
                      </Text>
                    </View>

                    <View style={styles.wrapper.mainbordertext}>
                      <View style={styles.wrapper.supportbordertext}>
                        <Text style={styles.text.titleborder}>
                          Rujukan Dokter Pengirim
                        </Text>
                      </View>
                      <Text style={styles.text.inborder}>
                        {item.dokter_pengirim}
                      </Text>
                    </View>

                    <View style={styles.wrapper.mainbordertext}>
                      <View style={styles.wrapper.supportbordertext}>
                        <Text style={styles.text.titleborder}>
                          Jenis Pemeriksaan
                        </Text>
                      </View>
                      <Text style={styles.text.inborder}>
                        {item.jenis_pemeriksaan}
                      </Text>
                    </View>

                    <View style={styles.wrapper.mainbordertext}>
                      <View style={styles.wrapper.supportbordertext}>
                        <Text style={styles.text.titleborder}>
                          Keterangan Pemeriksaan
                        </Text>
                      </View>
                      <Text style={styles.text.inborder}>
                        {item.ket_pemeriksaan}
                      </Text>
                    </View>

                    <View style={styles.wrapper.mainbordertext}>
                      <View style={styles.wrapper.supportbordertext}>
                        <Text style={styles.text.titleborder}>
                          Tanggal Kunjungan
                        </Text>
                      </View>
                      <Text style={styles.text.inborder}>
                        {item.tgl_kunjungan}
                      </Text>
                    </View>

                    <View style={styles.wrapper.supportbutton}>
                      <ButtonAct
                        key={item.id}
                        onPress={() => this.senData(item)}
                        title="Edit Data"
                      />
                    </View>
                  </View>
                </View>
              ))
            )}
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

    mainscroll: {
      flex: 1,
      backgroundColor: '#696969',
    },

    supportscroll: {
      marginTop: 20,
    },

    mainheader: {
      marginHorizontal: 15,
      backgroundColor: 'pink',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },

    supportheader: {
      marginVertical: 5,
    },

    mainform: {
      marginHorizontal: 15,
      paddingBottom: 20,
      marginBottom: 20,
      backgroundColor: 'white',
      borderColor: '#BEBEBE',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },

    mainbordertext: {
      marginTop: 25,
      marginHorizontal: 25,
    },

    supportbordertext: {
      bottom: 5,
    },

    nulldata: {
      paddingTop: 400,
    },

    supportbutton: {
      marginTop: 20,
    },
  },

  text: {
    header: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },

    titleborder: {
      fontSize: 15,
      fontWeight: 'bold',
    },

    inborder: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'gray',
      fontSize: 15,
      paddingHorizontal: 15,
      paddingVertical: 15,
    },

    nulldata: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
    },
  },
};

export default PasienBaru;
