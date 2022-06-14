import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import ButtonAct from '../../../components/atoms/ButtonAct';
import LogoHeaderForm from '../../../components/atoms/LogoHeaderForm';
import firebase from '../../../config/firebase';

class LoginTechnician extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', error: '', loading: false};
  }

  onLoginPress() {
    this.setState({error: '', loading: true});
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('Login succesfully!');
        this.setState({error: '', loading: false});
        this.props.navigation.navigate('HomeTechnician');
      })
      .catch(() => {
        this.setState({error: 'Authentication failed', loading: false});
        alert('Email & Password Wrong!');
      });
  }

  render() {
    return (
      <View style={styles.wrapper.main}>
        {/* Screen Login */}
        <ScrollView style={styles.wrapper.mainscroll}>
          <View style={styles.wrapper.supportscroll}>
            {/* Logo Header Form Login */}
            <LogoHeaderForm />
            {/* Form Login */}
            <View style={styles.wrapper.mainform}>
              <View style={styles.wrapper.text}>
                <Text style={styles.text.login}>Welcome Gan !</Text>
              </View>
              <View style={styles.wrapper.textinput}>
                <TextInput
                  value={this.state.email}
                  onChangeText={email => this.setState({email})}
                  keyboardType="email-address"
                  placeholder="admin@admin.adm"
                  style={styles.textinput.flexible}
                />
                <TextInput
                  value={this.state.password}
                  onChangeText={password => this.setState({password})}
                  secureTextEntry={true}
                  placeholder="Password"
                  style={styles.textinput.flexible}
                />
              </View>
              <ButtonAct title="Login" onPress={this.onLoginPress.bind(this)} />
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

    mainscroll: {
      flex: 1,
      backgroundColor: '#696969',
    },

    supportscroll: {
      marginVertical: 250,
      paddingVertical: 1,
    },

    mainform: {
      marginHorizontal: 15,
      paddingBottom: 20,
      backgroundColor: 'white',
      borderColor: '#BEBEBE',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },

    text: {
      marginVertical: 20,
    },

    textinput: {
      marginHorizontal: 40,
    },

    signup: {
      paddingVertical: 5,
      paddingHorizontal: 95,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopWidth: 1,
      borderColor: '#BEBEBE',
    },
  },

  textinput: {
    flexible: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'gray',
      fontSize: 15,
      paddingHorizontal: 15,
      marginBottom: 20,
    },
  },

  text: {
    login: {
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
    },

    signup: {
      fontSize: 16,
    },
  },
};

export default LoginTechnician;
