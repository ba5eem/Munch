import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loveFood } from '../Actions/food-actions';
import {StyleSheet, Text, View, Image} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { data } from '../Reducers/data';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{marginTop: 50, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 300, height: 400}}
            source={{uri: this.props.image_url}}/>
          <Text
            style={{fontFamily: 'MarkerFelt-Wide', fontSize: 35}}>
            {this.props.name}</Text>
        </View>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: data,
      liked: [],

    };
    this.handleYup=this.handleYup.bind(this);
    this.handleNope=this.handleNope.bind(this);
  }

  handleYup (card) {
    const {liked} = this.state;
    liked.push(card); 
    this.props.loveFood(liked) 
    console.log(liked.length);
  }
  handleNope (card) {
    const {liked} = this.state;
    liked.push(card);  
  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        yupText={'Like!'}
        yupStyle={{borderColor: 'cornflowerblue'}}
        yupTextStyle={{color: 'cornflowerblue'}}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
  }
})

const mapStateToProps = (state) => {
  return {
    love: state.love
  };
}

const ConnectedHome = connect(
  mapStateToProps,
  { loveFood }
)(Home)


export default ConnectedHome;