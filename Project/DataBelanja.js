import React from 'react';
import { StyleSheet, Text,TouchableHighlight, View, Button, TextInput,FlatList, List, ListItem } from 'react-native';


export default class DataBelanja extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
    };
}

  componentDidMount()  {
      const url = 'http://gusnando.com/mobile/bagus/databelanja.php';
       this.setState({ loading: true });
      fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("comp");
        console.log(responseJson);
        this.setState({
          data: responseJson,
          error: responseJson.error || null,
          loading: false,
          refreshing: false
        });
      }
    );
  }
  render() {
    return (
      <View style={{ justifyContent: 'center' }}>
      <View style={styles.Header}>
          <Text style={styles.TextHeader}>DATA BELANJAAN</Text>
      </View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) =>
            <View style={styles.ListItem}>
              <Text style={styles.ListFirst}>Hari: {item.hari}</Text>
              <Text style={styles.ListFirst}>Tanggal :{item.tanggal}</Text>
              <Text style={styles.ListFirst}>Barang : {item.namabarang}</Text>
              <Text style={styles.ListFirst}>Harga : {item.hargabarang}</Text>
            </View>
        }
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    Header: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor:'#64B5F6',
    },
    TextHeader: {
        fontSize: 30
    },
    ListItem: {
        backgroundColor:'#BBDEFB',
        marginBottom: 30,
        flex: 1
    },
    ListFirst: {
      fontSize: 20,
      marginLeft: 10,
      marginBottom: 10
    }

  });
