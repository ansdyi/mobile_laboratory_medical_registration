import React from 'react';
import {View} from 'react-native';
import ListInformasi from '../ListInformasi';
import ButtonAct from '../ButtonAct';

const InformasiSeputarTest = ({onPress}) => {
  return (
    <View style={styles.wrapper.main}>
      <ListInformasi />
      <ButtonAct title="See All" onPress={onPress} />
    </View>
  );
};

const styles = {
  wrapper: {
    main: {
      marginHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: 'white',
      borderColor: '#BEBEBE',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
  },
};

export default InformasiSeputarTest;
