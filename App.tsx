import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';
import EventForm from './EventForm';
import { YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
 YellowBox.ignoreWarnings([
"Warning: componentWillMount is deprecated",
"Warning: componentWillReceiveProps has been renamed"
]); 

const Stack = createStackNavigator();

export default function App () {
    return (
      <NavigationContainer>
      	<Stack.Navigator >
      		<Stack.Screen name="Event List" component={EventList} />
      		<Stack.Screen name="Add Event" component={EventForm} />
      	</Stack.Navigator>
	  </NavigationContainer>
    );
}