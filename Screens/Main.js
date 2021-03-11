import React, { Component } from 'react';
import { View, StyleSheet ,TextInput,TouchableOpacity, Text} from 'react-native';
export default class Main extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
    }
  }
  render() {
    return (
     <View>
        <TextInput
          style={styles.nameInput}
          placeholder="Name"
          onChangeText = {(text) => this.setState({ name:text })}
          value={this.state.name}
        />
        <TouchableOpacity onPress = {() => {
  this.props.navigation.navigate('Chat', { name: this.state.name });
}} >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const offset = 24;
const styles = StyleSheet.create({
  nameInput: { 
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: { 
    marginLeft: offset,
    fontSize: offset,
  },
});