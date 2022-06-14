import React from 'react';
import {View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Welcome,
  LoginPatient,
  SignupPatient,
  LoginTechnician,
  Logout,
} from '../../containers/pagesAuth';

import {
  HomePatient,
  InformasiDetail,
  Registrasi,
  FormRegistrasi,
} from '../../containers/pagesPatient';

import {
  HomeTechnician,
  ListInformasi,
  FormInformasi,
  SettingInformasi,
  RekapDataRegistrasi,
  PasienBaru,
  PasienLama,
  SettingDataRegistrasi,
} from '../../containers/pagesTechnician';

const PatientNavBar = createMaterialBottomTabNavigator(
  {
    HomePatient: {
      screen: HomePatient,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Fontisto style={[{color: tintColor}]} size={25} name={'home'} />
          </View>
        ),
      },
    },

    Registrasi: {
      screen: Registrasi,
      navigationOptions: {
        tabBarLabel: 'Registrasi',
        tabBarIcon: ({tintColor}) => (
          <View>
            <AntDesign
              style={[{color: tintColor}]}
              size={25}
              name={'addfile'}
            />
          </View>
        ),
      },
    },

    Logout: {
      screen: Logout,
      navigationOptions: {
        tabBarLabel: 'Logout',
        tabBarIcon: ({tintColor}) => (
          <View>
            <AntDesign style={[{color: tintColor}]} size={23} name={'logout'} />
          </View>
        ),
      },
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomePatient',
    activeColor: '#000000',
    inactiveColor: '#989898',
    barStyle: {backgroundColor: '#e4e4e4'},
  },
);

const TechnicianNavBar = createMaterialBottomTabNavigator(
  {
    HomeTechnician: {
      screen: HomeTechnician,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Fontisto style={[{color: tintColor}]} size={25} name={'home'} />
          </View>
        ),
      },
    },

    ListInformasi: {
      screen: ListInformasi,
      navigationOptions: {
        tabBarLabel: 'Data Informasi',
        tabBarIcon: ({tintColor}) => (
          <View>
            <FontAwesome5
              style={[{color: tintColor}]}
              size={25}
              name={'file-medical'}
            />
          </View>
        ),
      },
    },

    RekapDataRegistrasi: {
      screen: RekapDataRegistrasi,
      navigationOptions: {
        tabBarLabel: 'Data Registrasi',
        tabBarIcon: ({tintColor}) => (
          <View>
            <FontAwesome5
              style={[{color: tintColor}]}
              size={25}
              name={'file-alt'}
            />
          </View>
        ),
      },
    },

    Logout: {
      screen: Logout,
      navigationOptions: {
        tabBarLabel: 'Logout',
        tabBarIcon: ({tintColor}) => (
          <View>
            <AntDesign style={[{color: tintColor}]} size={23} name={'logout'} />
          </View>
        ),
      },
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeTechnician',
    activeColor: '#000000',
    inactiveColor: '#989898',
    barStyle: {backgroundColor: '#e4e4e4'},
  },
);

const AuthStack = createStackNavigator(
  {
    Welcome,
    LoginPatient,
    SignupPatient,
    LoginTechnician,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Welcome',
  },
);

const PatientStack = createStackNavigator(
  {
    PatientNavBar,
    InformasiDetail,
    FormRegistrasi,
    Logout,
  },
  {
    headerMode: 'none',
    initialRouteName: 'PatientNavBar',
  },
);

const TechnicianStack = createStackNavigator(
  {
    TechnicianNavBar,
    FormInformasi,
    SettingInformasi,
    PasienBaru,
    PasienLama,
    SettingDataRegistrasi,
    Logout,
  },
  {
    headerMode: 'none',
    initialRouteName: 'TechnicianNavBar',
  },
);

const Router = createSwitchNavigator(
  {
    AuthStack,
    PatientStack,
    TechnicianStack,
  },
  {
    initialRouteName: 'AuthStack',
  },
);

export default createAppContainer(Router);
