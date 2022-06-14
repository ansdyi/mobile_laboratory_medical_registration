import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {dataRef} from '../../../config/reference';
import ButtonAct from '../../../components/atoms/ButtonAct';

class ListInformasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      informasi: [],
    };
  }

  componentDidMount() {
    dataRef.on('value', (snapshot) => {
      let data = snapshot.val();
	    let informasi = Object.values(data);
	    this.setState({informasi});
	  });
 }

  componentDidMount() {
    dataRef.child('©Laboratorium2020').on('value', snapshot => {
      let data = snapshot.val();
      let informasi = Object.values(data);
      this.setState({informasi});
    });
  }

  senData = item => {
    this.props.navigation.navigate('SettingInformasi', {
      key: item.id,
      alerta: item.alerta,
      nama_pemeriksaan: item.nama_pemeriksaan,
      deskripsi_pemeriksaan: item.deskripsi_pemeriksaan,
    });
  };

  render() {
    return (
      <View style={styles.wrapper.main}>
        {/* Screen Rekap Data Registrasi */}
        <ScrollView style={styles.wrapper.mainscroll}>
          <View style={styles.wrapper.supportscroll}>
            {this.state.informasi.length === 0 ? (
              <View style={styles.wrapper.nulldata}>
                <Text style={styles.text.nulldata}>
                  ==== Tidak Ada Data ====
                </Text>
              </View>
            ) : (
              this.state.informasi.map((item, index) => (
                <View>
                  {/* Header Deskripsi */}
                  <View style={styles.wrapper.mainheaderborder}>
                    <View style={styles.wrapper.supportheaderborder}>
                      <Text style={styles.text.header}>
                        {item.nama_pemeriksaan}
                      </Text>
                      <Image
                        source={require('../../../assets/icon/biochemist.png')}
                        style={styles.image.styling}
                      />
                    </View>
                  </View>
                  {/* Deskripsi */}
                  <View style={styles.wrapper.mainform}>
                    <View style={styles.wrapper.deskripsi}>
                      <Text style={styles.text.deskripsi}>
                        {item.deskripsi_pemeriksaan}
                      </Text>
                    </View>
                    {/* Button Submit Edit */}
                    <View style={styles.wrapper.supportbuttonedit}>
                      <ButtonAct
                        key={item.id}
                        onPress={() => this.senData(item)}
                        title="Edit Data"
                      />
                    </View>
                    <View style={styles.wrapper.alerta}>
                      <Text style={styles.text.alerta}>{item.alerta}</Text>
                    </View>
                  </View>
                </View>
              ))
            )}
          </View>
        </ScrollView>
        {/* Button Submit Create */}
        <View style={styles.wrapper.mainbuttoncreate}>
          <View style={styles.wrapper.supportbuttoncreate}>
            <ButtonAct
              onPress={() => this.props.navigation.navigate('FormInformasi')}
              title="Create"
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

    mainscroll: {
      flex: 1,
      backgroundColor: '#696969',
    },

    supportscroll: {
      marginTop: 20,
    },

    mainform: {
      marginHorizontal: 15,
      paddingBottom: 20,
      marginBottom: 20,
      backgroundColor: 'white',
      alignItems: 'center',
      borderColor: '#BEBEBE',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },

    nulldata: {
      paddingTop: 400,
    },

    mainheaderborder: {
      marginHorizontal: 15,
      backgroundColor: 'pink',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },

    supportheaderborder: {
      marginVertical: 5,
      position: 'relative',
    },

    deskripsi: {
      marginTop: 20,
      height: 125,
      width: 330,
    },

    supportbuttonedit: {
      marginTop: 10,
    },

    alerta: {
      marginTop: 20,
      height: 10,
      width: 310,
    },

    mainbuttoncreate: {
      height: 80,
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderColor: '#e4e4e4',
    },

    supportbuttoncreate: {
      marginTop: 15,
    },
  },

  text: {
    header: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },

    nulldata: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
    },

    deskripsi: {
      textAlign: 'center',
      fontSize: 18,
    },

    alerta: {
      textAlign: 'right',
      fontSize: 10,
    },
  },

  image: {
    styling: {
      width: 24,
      height: 24,
      position: 'absolute',
      left: 15,
    },
  },
};

export default ListInformasi;
