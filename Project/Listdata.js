import React from 'react';
import { StyleSheet, Text,TouchableHighlight, View, Button, TextInput,FlatList, List, ListItem } from 'react-native';


export default class Listdata extends React.Component {
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
      const url = 'http://gusnando.com/mobile/bagus/daftarkapal.php';
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
      <View style={{marginTop: 30, justifyContent:'center'}}>
      <View style={styles.Header}>
          <Text style={styles.TextHeader}>JADWAL KAPAL</Text>
      </View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) =>
            <View style={styles.ListItem}>
              <Text style={styles.ListFirst}>hari: {item.hari}</Text>
              <Text style={styles.ListFirst}>nama kapal :{item.namakapal}</Text>
              <Text style={styles.ListFirst}>tujuan : {item.tujuan}</Text>
              <Text style={styles.ListFirst}>jam berangkat : {item.jamberangkat}</Text>
              <Text style={styles.ListFirst}>jam tiba : {item.jamtiba}</Text>
            </View>
        }
        />


      </View>
    );
  }
}


const styles = StyleSheet.create({
    Header: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009999',
    },
    TextHeader: {
        fontSize: 30
    },
    ListItem: {
        backgroundColor: '#00b3b3',
        marginTop: 5,
        margin: 10,
        flex: 1
    },
    ListFirst: {
      fontSize: 20
    }

  });
