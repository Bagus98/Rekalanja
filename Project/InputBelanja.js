import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class InputBelanja extends Component {
  constructor(props){
    super(props)
    this.state = {
      hari: '',
      tanggal: '',
      namabarang: '',
      hargabarang: '',
      ActivityIndicator_Loading: false,
    };
  }

  Insert_Data_Into_Mysql = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://gusnando.com/mobile/bagus/tambahdatabelanja.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  hari: this.state.hari,
                  tanggal: this.state.tanggal,
                  namabarang: this.state.namabarang,
                  hargabarang: this.state.hargabarang,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false });
            });
        });
    }

  render() {
    return (
      <View style = {{flex:1, backgroundColor:'#FAFAFA'}}>
        <View style={{margin:20, padding: 10, backgroundColor:'#212121', borderRadius:3}}>
            <TextInput style={{ height: 50, color: 'white' }}
              placeholder="Hari "
              placeholderTextColor="white"
              underlineColorAndroid= "#757575"
              selectionColor="#E91E63"
              onChangeText={(hari) => this.setState({ hari })}
            />
            <TextInput style={{ height: 50, color: 'white' }}
              placeholder="Tanggal"
              placeholderTextColor="white"
              underlineColorAndroid= "#757575"
              selectionColor="#E91E63"
              onChangeText={(tanggal) => this.setState({ tanggal })}
            />
            <TextInput style={{ height: 50, color: 'white' }}
              placeholder="Nama Barang "
              placeholderTextColor="white"
              underlineColorAndroid= "#757575"
              selectionColor="#E91E63"
              onChangeText={(namabarang) => this.setState({ namabarang })}
            />

            <TextInput style={{ height: 50, color: 'white' }}
              placeholder="Harga barang"
              placeholderTextColor="white"
              underlineColorAndroid= "#757575"
              selectionColor="#E91E63"
              onChangeText={(hargabarang) => this.setState({ hargabarang })}
              keyboardType = 'numeric'

            />

            <Button title="Simpan Belanja"
              onPress={this.Insert_Data_Into_Mysql} color="#009999"
            />
       </View>

   </View>
    );
  }
}


AppRegistry.registerComponent('bagusA', () => HitungLuasSegitiga);
