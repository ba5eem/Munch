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

         <Card containerStyle={{padding: 0}} >
          {
            love.map((u, i) => {
              return (
                <ListItem
                  onPress={()=>this.setState({view: true, obj: u})}
                  key={i}
                  roundAvatar
                  title={u.name}
                  titleStyle={{fontFamily: 'MarkerFelt-Wide'}}
                  avatar={{uri:u.image_url}}
                />
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