import React from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';// Version can be specified in package.json
import InputBelanja from './src/Project/InputBelanja';
import DataBelanja from './src/Project/DataBelanja';

const Logo = require('./src/img/logo.png');

const IconCatat = require('./src/img/Catat.png');
const IconDaftar = require('./src/img/Daftar.png');
const IconReset = require('./src/img/Reset.png');
const IconTentang = require('./src/img/Tentang.png');

class Header extends React.Component {
      render() {
          return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 100, backgroundColor: '#009999' }}>

            </View>
          );
      }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text> JANGAN LUPA CATAT SETIAP BELANJAAN ANDA </Text>
        </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>

              <TouchableOpacity style={{ marginTop: 5, margin: 5 }} onPress={() => this.props.navigation.navigate('Beli')}>
                <Image source={IconCatat} style={{ height: 150, width: 170, }} />
              </TouchableOpacity>

              <TouchableOpacity style={{ marginTop: 5, margin: 5 }} onPress={() => this.props.navigation.navigate('Belanja')}>
                <Image source={IconDaftar} style={{ height: 150, width: 170, }} />
              </TouchableOpacity>

            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
              <TouchableOpacity style={{ marginTop: 5, margin: 5 }} onPress={() => this.props.navigation.navigate('Resetdata')}>
                  <Image source={IconReset} style={{ height: 150, width: 170, }} />
              </TouchableOpacity>

              <TouchableOpacity style={{ marginTop: 5, margin: 5 }} onPress={() => this.props.navigation.navigate('Tentang')}>
                <Image source={IconTentang} style={{ height: 150, width: 170, }} />
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

class Menuawal extends React.Component {

      render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={Logo} style={{ height: 150, width: 150, }} />
                  <Button
                      title="MASUK"
                      onPress={() => this.props.navigation.navigate('Home')}
                      color='#009999'
                  />
          </View>
    );
  }
}
class TampilanBeli extends React.Component {

      render() {
        return (
          <View style={{ flex: 1 }}>
          <InputBelanja />
          </View>
    );
  }
}

class TampilanBelanja extends React.Component {

      render() {
        return (
          <View style={{ flex: 1 }}>
          <DataBelanja />
          </View>
    );
  }
}


class Tampilanresetdata extends React.Component {

      render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
              title="RESET DATA"
              onPress={() => this.props.navigation.navigate('Home')}
              color='#009999'
          />
          </View>
    );
  }
}

class Tampilantentang extends React.Component {

      render() {
        return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={Logo} style={{ height: 100, width: 100, }} />
        <Text>Aplikasi ini dibuat untuk</Text>
        <Text>Membantu kita mengigat setiap</Text>
        <Text>transaksi pembelajaan</Text>
        <Text>menu</Text>
        <Text>----</Text>
        <Text>catat belanjaan yaitu dimana kita menambah data belanjaan kita</Text>
        <Text>----</Text>
        <Text>Daftar belanjaan yaitu dimana kita melihat daftar belanjaan kita</Text>
        <Text>----</Text>
        <Text>Reset data belanjaan yaitu dimana kita bisa menghapus semua data belanjaan kita</Text>
      </View>
    );
  }
}


const RootStack = StackNavigator(
  {
    Menuawal: {
      screen: Menuawal,
    },
    Home: {
      screen: HomeScreen,
    },
    Beli: {
      screen: TampilanBeli,
    },
    Belanja: {
      screen: TampilanBelanja,
    },
    Resetdata: {
      screen: Tampilanresetdata,
    },
    Tentang: {
      screen: Tampilantentang,
    },
  },
  {
    initialRouteName: 'Menuawal',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
