
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => this.setState({data: json}, console.log(json)))
    .catch((err) => console.log(err))
    ;
  }

  sendData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        nama: 'budi',
        kelas: 10
      }),
    }).then((response) => response.json())
    .then((json) => console.log(json))
     .catch((err) => console.log(err))
    ;

  }

  render() {
    return (
      <View>
      <TouchableOpacity onPress={() => this.sendData()}>

        <Text> SEND DATA </Text>
      </TouchableOpacity>
      <FlatList 
        data={this.state.data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => 
        
        <View style={{marginTop: 10}}>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>}
      />
      </View>
    )
  }
}
