import React from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';// Version can be specified in package.json
import List from './src/List';
import InputBelanja from './src/Project/InputBelanja';
import Listdata from './src/Project/Listdata';

const Logo = require('./src/img/logo.png');
const Beli = require('./src/img/Beli.png');
const Dompet = require('./src/img/Dompet.png');
const Belanja = require('./src/img/Daftar.png');
const Calender = require('./src/img/calender.png');

class Header extends React.Component {
      render() {
          return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 100, backgroundColor: '#009999' }}>

            </View>
          );
      }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
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
          <Text> EXPRESS </Text>
        </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>

              <TouchableOpacity style={{ marginTop: 20, margin: 30 }} onPress={() => this.props.navigation.navigate('Beli')}>
                <Image source={Beli} style={{ height: 120, width: 120, }} />
              </TouchableOpacity>

              <TouchableOpacity style={{ marginTop: 20, margin: 30 }} onPress={() => this.props.navigation.navigate('Dompet')}>
                <Image source={Dompet} style={{ height: 120, width: 120, }} />
              </TouchableOpacity>

            </View>

              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
                <TouchableOpacity style={{ marginTop: 20, margin: 30 }} onPress={() => this.props.navigation.navigate('Belanja')}>
                  <Image source={Belanja} style={{ height: 120, width: 120, }} />
              </TouchableOpacity>

              <TouchableOpacity style={{ marginTop: 20, margin: 30 }} onPress={() => this.props.navigation.navigate('Tanggal')}>
                <Image source={Calender} style={{ height: 120, width: 120, }} />
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

class TampilanBeli extends React.Component {

      render() {
        return (
          <View style={{ flex: 1 }}>
          <InputBelanja />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
          </View>
    );
  }
}

class TampilanBelanja extends React.Component {

      render() {
        return (
          <View style={{ flex: 1 }}>
          <Listdata />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
          </View>
    );
  }
}


class TampilanDompet extends React.Component {

      render() {
        return (
          <View style={{ flex: 1 }}>
          <Listdata />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
          </View>
    );
  }
}

class TampilanTanggal extends React.Component {

      render() {
        return (
          <View style={{ flex: 1 }}>
          <Listdata />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
          </View>
    );
  }
}


const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Beli: {
      screen: TampilanBeli,
    },
    Belanja: {
      screen: TampilanBelanja,
    },
    Dompet: {
      screen: TampilanDompet,
    },
    Tanggal: {
      screen: TampilanTanggal,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
