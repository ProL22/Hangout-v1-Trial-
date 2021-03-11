import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../Fire';
export default class Chat extends Component {
  constructor(){
    super()
    this.state = {
      messages:[]
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });
  get user() {
    return{
      name:this.props.navigation.state.params.name,
      _id:Fire.shared.uid
    };
  }
  render() {
    return (

      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
    );
  }
  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}
  const styles = StyleSheet.create({});

