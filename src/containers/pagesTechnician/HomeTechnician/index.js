import React, {Component} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import PinHeader from '../../../components/atoms/PinHeader';
import Deskripsi from '../../../components/atoms/Deskripsi';
import AnggotaKelompok from '../../../components/atoms/AnggotaKelompok';
import HeaderBar from '../../../components/atoms/HeaderBar';

class HomeTechnician extends Component {
  render() {
    return (
      <View style={styles.wrapper.main}>
        {/* Header */}
        <HeaderBar />

        {/* Screen Home */}
        <ScrollView style={styles.wrapper.scroll}>
          <PinHeader title="Welcome !!!" />
          <Deskripsi title="Sistem Informasi Laboratorium Medis ini merupakan sistem yang bertujuan untuk melakukan pendaftaran pemeriksaan laboratorium secara online, kemudian aplikasi yang dirilis bernama Medical Laboratory." />

          <PinHeader title="Deskripsi Project" />
          <Deskripsi title="Ini merupakan project Sistem Informasi Laboratorium Medis yang kami bangun menggunakan React Native v.0.62.2 untuk memenuhi tugas besar UAS mata kuliah Mobile Programming." />

          <PinHeader title="Anggota Kelompok" />
          <AnggotaKelompok />
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

    scroll: {
      flex: 1,
      backgroundColor: '#696969',
      paddingVertical: 1,
    },
  },
};

export default HomeTechnician;
