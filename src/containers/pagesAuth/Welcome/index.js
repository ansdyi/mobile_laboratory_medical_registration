import React, {Component} from 'react';
import {View} from 'react-native';

import LogoHeaderForm from '../../../components/atoms/LogoHeaderForm';
import ButtonAct from '../../../components/atoms/ButtonAct';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.wrapper.main}>
        {/* Screen Welcome */}
        <View style={styles.wrapper.support}>
          {/* Logo Header Form */}
          <LogoHeaderForm />
          {/* Form Option */}
          <View style={styles.wrapper.mainform}>
            <View style={styles.wrapper.loginaspatient}>
              <ButtonAct
                title="Login As Patient"
                onPress={() => this.props.navigation.navigate('LoginPatient')}
              />
            </View>
            <View style={styles.wrapper.loginastechnician}>
              <ButtonAct
                title="Login As Technician"
                onPress={() =>
                  this.props.navigation.navigate('LoginTechnician')
                }
              />
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
      backgroundColor: '#E7E6E6',
    },

    support: {
      marginVertical: 275,
      paddingVertical: 1,
    },

    mainform: {
      marginHorizontal: 15,
      backgroundColor: 'white',
      alignItems: 'center',
      borderColor: '#D3D3D3',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
    },

    loginaspatient: {
      borderEndColor: 'black',
      paddingVertical: 30,
    },

    loginastechnician: {
      borderTopWidth: 2,
      paddingVertical: 30,
    },
  },
};

export default Welcome;
