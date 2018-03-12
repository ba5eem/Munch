import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loveFood, loadFood } from '../Actions/food-actions';
import {StyleSheet, Text, View, Image} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { data } from '../Reducers/data';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={cardStyles.wrapper}>
          <Image
            style={cardStyles.imgWrap}
            source={{uri: this.props.image_url}}/>
          <Text
            style={cardStyles.subHeading}>
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
      liked: [],

    };
    this.handleYup=this.handleYup.bind(this);
    this.handleNope=this.handleNope.bind(this);
  }

  componentWillMount() {
    this.props.loadFood()
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
    const {food} = this.props;
    return (
      <SwipeCards
        cards={data}
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

const cardStyles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgWrap: {
    width: 300,
    height: 400
  },
  subHeading: {
    fontFamily: 'MarkerFelt-Wide',
    fontSize: 35
  }
})







const mapStateToProps = (state) => {
  return {
    food: state.food
  };
}

const ConnectedHome = connect(
  mapStateToProps,
  { loadFood, loveFood }
)(Home)


export default ConnectedHome;