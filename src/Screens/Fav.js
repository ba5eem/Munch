import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loveFood } from '../Actions/food-actions';
import { Linking, View, Text, Image, StyleSheet,ScrollView, TextInput, Dimensions } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import Communications from 'react-native-communications';

const { height, width } = Dimensions.get('window');


class Fav extends Component {
  constructor(props){
    super(props);
    this.state = {page:'community'};
  }









  render() {
    const {love} = this.props;
    return (
      
      <View style={{marginTop: 30}}>
        <ScrollView  >

         <Card>
          {
            love.map((u, i) => {
              return (
                <View key={i} style={{justifyContent: 'center', alignItems: 'center', marginBottom: 20}} >
                  <Image
                    style={{width: '100%', height: 150}}
                    resizeMode="cover"
                    source={{ uri: u.image_url }}
                  />
                  <Text style={{fontSize: 30, marginTop:10, marginBottom: 10}} >{u.name}</Text>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon
                      raised
                      name='ios-call'
                      type='ionicon'
                      color='#c2d94c'
                      onPress={() => Communications.phonecall(u.phone, true)}
                    />
                    <Icon
                      raised
                      name='ios-link'
                      type='ionicon'
                      color='#ffc44c'
                      onPress={ ()=>{Linking.openURL(u.url)}}
                    />
                    <Icon
                      raised
                      name={u.is_closed ? 'ios-close-circle' : 'ios-checkmark-circle'}
                      type='ionicon'
                      color='#59c2ff'
                      onPress={()=>console.log(`open or closed`)}
                    />
                    <Icon
                      reverse
                      name='ios-remove-circle'
                      type='ionicon'
                      color='#ff3333'
                      onPress={()=>console.log(`ooops cancel`)}
                    />
                  </View>
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