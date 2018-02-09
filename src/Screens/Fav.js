import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loveFood } from '../Actions/food-actions';
import { View, Text, Image, StyleSheet,ScrollView, TextInput, Dimensions } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { Card, ListItem, Button } from 'react-native-elements';

const { height, width } = Dimensions.get('window');


class Fav extends Component {
  constructor(props){
    super(props);
    this.state = {page:'community'};
  }









  render() {
    const {love} = this.props;
    return (
      
      <View style={{marginTop: 50}}>
        <ScrollView  >

         <Card>
          {
            love.map((u, i) => {
              return (
                <View key={i} style={{justifyContent: 'center', alignItems: 'center'}} >
                  <Image
                    style={{width: '100%', height: 200}}
                    resizeMode="cover"
                    source={{ uri: u.image_url }}
                  />
                  <Text style={{fontSize: 30, marginTop:10, marginBottom: 10}} >{u.name}</Text>
                </View>
              );
            })
          }
        </Card>
        </ScrollView>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    love: state.love
  };
}

const ConnectedFav = connect(
  mapStateToProps,
  { loveFood }
)(Fav)


export default ConnectedFav;