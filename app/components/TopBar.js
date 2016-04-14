/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

var MenuBar = require('./MenuBar');

class TopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
            <MenuBar name="MenuBar" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3D8491',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

});

module.exports = TopBar;
