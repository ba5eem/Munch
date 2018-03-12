import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loveFood } from '../Actions/food-actions';
import { Linking, View, Text, Image, StyleSheet,ScrollView, TextInput, Dimensions, Alert } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { Input, Button } from 'react-native-elements';


const { height, width } = Dimensions.get('window');


class Start extends Component {
  constructor(props){
    super(props);
    this.state = {zip:''};
  }









  render() {
    return (
      
      <View style={{marginTop: 30}}>
         <TextInput
          style={styles.input}
          onChangeText={(zip) => this.setState({zip})}
          value={this.state.zip}
          keyboardType='numeric'
          maxLength={5}
        />
        <Button
          text="ssss"
          loading={false}
          loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
          textStyle={{ fontWeight: "700" }}
          buttonStyle={styles.startButton}
          containerStyle={{ marginTop: 5 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    margin: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  startButton: {
    backgroundColor: "rgba(92, 99,216, 1)",
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
})




const mapStateToProps = (state) => {
  return {
    love: state.love
  };
}

const ConnectedStart = connect(
  mapStateToProps,
  { loveFood }
)(Start)


export default ConnectedStart;