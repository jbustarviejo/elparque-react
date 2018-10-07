import React from 'react';
import { StyleSheet, Text, ScrollView, Image, WebView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ClassroomsScreen from "./ClassroomsScreen.js"

const App = StackNavigator({
  Main: { screen: MainScreen },
  Classrooms: { screen: ClassroomsScreen },
});

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'El parque',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to clasrooms"
        onPress={() =>
          navigate('Classrooms', { name: 'Jane' })
        }
      />
    );
  }

}
