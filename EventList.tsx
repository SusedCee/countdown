import React, { Component } from 'react';
import withUnmounted from '@ishawnwang/withunmounted'
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import ActionButton from 'react-native-action-button';

import EventCard from './EventCard';

import { getEvents } from './api';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 5,
  },
});

class EventList extends Component {

	hasUnmounted = false;

  static navigationOptions = {
    title: 'Your Events',
  };

  state = {
    events: [],
  }

  componentDidMount() {
  	
  	getEvents().then(events => this.setState({ events })); //why was this code removed in the video? It
    setInterval(() => {
    	if (this.hasUnmounted) {
    		//check has unmoouonted flag 
    		return;
    	}
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now(),
        })),
      });
    }, 1000);

    this.props.navigation.addListener(

      'focus',
      () => {
        getEvents().then(events => this.setState({ events }));
      }
    );
  }

  handleAddEvent = () => {
    this.props.navigation.navigate('Add Event')
  }


  render() {
    console.log('events', this.state);
    return [
      <FlatList
        key="flatlist"
        data={this.state.events}
        style={styles.list}
        keyExtractor={item => item.id}
        renderItem={({ item, separators }) => (
          <EventCard
            event={item}
          />
        )}
      />,
      <ActionButton
        key="fab"
        buttonColor="rgba(231,76,60,1)"
        onPress={this.handleAddEvent}
      />,
    ];
  }
}

export default withUnmounted(EventList);