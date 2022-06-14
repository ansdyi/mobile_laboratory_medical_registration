import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const ListInformasi = () => {
  return (
    <ScrollView horizontal style={styles.wrapper.scroll}>
      <View style={styles.wrapper.kimiadarah}>
        <Text style={styles.text.kimiadarah}>Pemeriksaan Kimia Darah</Text>
        <View style={styles.wrapper.flexible} />
      </View>
      <View style={styles.wrapper.guladarah}>
        <Text style={styles.text.guladarah}>Pemeriksaan Gula Darah</Text>
        <View style={styles.wrapper.flexible} />
      </View>
      <View style={styles.wrapper.kehamilan}>
        <Text style={styles.text.kehamilan}>Test Kehamilan</Text>
        <View style={styles.wrapper.flexible} />
      </View>
      <View style={styles.wrapper.medicalcheckup}>
        <Text style={styles.text.medicalcheckup}>Medical CheckUp</Text>
        <View style={styles.wrapper.flexible} />
      </View>
    </ScrollView>
  );
};

const styles = {
  wrapper: {
    scroll: {
      flexDirection: 'row',
      marginBottom: 5,
    },

    kimiadarah: {
      marginRight: 10,
      backgroundColor: '#8B7765',
      marginVertical: 5,
      borderWidth: 1,
      borderRadius: 10,
      height: 70,
      width: 160,
      justifyContent: 'center',
      position: 'relative',
    },

    guladarah: {
      marginRight: 10,
      backgroundColor: '#2F4F4F',
      marginVertical: 5,
      borderWidth: 1,
      borderRadius: 10,
      height: 70,
      width: 160,
      justifyContent: 'center',
    },

    kehamilan: {
      marginRight: 10,
      backgroundColor: '#8B6914',
      marginVertical: 5,
      borderWidth: 1,
      borderRadius: 10,
      height: 70,
      width: 160,
      justifyContent: 'center',
    },

    medicalcheckup: {
      backgroundColor: '#556B2F',
      marginVertical: 5,
      borderWidth: 1,
      borderRadius: 10,
      height: 70,
      width: 160,
      justifyContent: 'center',
    },

    flexible: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'black',
      opacity: 0.4,
      borderRadius: 10,
    },
  },

  text: {
    kimiadarah: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
    },

    guladarah: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
    },

    kehamilan: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
    },

    medicalcheckup: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
    },
  },
};

export default ListInformasi;
