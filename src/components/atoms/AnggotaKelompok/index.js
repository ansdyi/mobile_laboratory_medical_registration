import React from 'react';
import {View, Text, Image} from 'react-native';

const AnggotaKelompok = () => {
  return (
    <View style={styles.wrapper.main}>
      <View style={styles.wrapper.yusuf}>
        <Image
          source={require('../../../assets/image/yusuf.jpg')}
          style={styles.image.yusuf}
        />
        <View style={styles.wrapper.flexible}>
          <Text>Nama: M. Yusuf Eka Putra Nuryono</Text>
          <Text>NIM: 171351116</Text>
          <Text>Kelas: Malam A</Text>
        </View>
      </View>
      <View style={styles.wrapper.anisa}>
        <Image
          source={require('../../../assets/image/anisa.jpg')}
          style={styles.image.anisa}
        />
        <View style={styles.wrapper.flexible}>
          <Text style={styles.title.anisa}>Nama: Anisa Damayanti</Text>
          <Text style={styles.title.anisa}>NIM: 171351034</Text>
          <Text style={styles.title.anisa}>Kelas: Malam A</Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    main: {
      marginHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: 'white',
      alignItems: 'center',
      borderColor: '#BEBEBE',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      marginBottom: 18,
    },

    yusuf: {
      marginVertical: 5,
      borderWidth: 1,
      borderRadius: 20,
      height: 330,
      width: 230,
      alignItems: 'center',
    },

    anisa: {
      marginVertical: 5,
      borderWidth: 1,
      borderRadius: 20,
      height: 340,
      width: 330,
    },

    flexible: {
      marginVertical: 5,
    },
  },

  title: {
    anisa: {
      textAlign: 'left',
      marginLeft: 14,
    },
  },

  image: {
    yusuf: {
      width: 200,
      height: 250,
      borderRadius: 20,
      marginTop: 12,
    },

    anisa: {
      width: 300,
      height: 260,
      borderRadius: 20,
      marginTop: 12,
      alignSelf: 'center',
    },
  },
};

export default AnggotaKelompok;
