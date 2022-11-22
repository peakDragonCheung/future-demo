import * as React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/Home';

const BackBtn = (props) => {
  return (
    <Text
      style={{
        fontFamily: 'micon-app',
        fontSize: 27,
        fontWeight: '600',
        marginLeft: 8,
      }}
      onPress={props.onPress}>
      &#xe917;
    </Text>
  );
};
const headerOption = {
  headerBackTitle: ' ',
  headerLeft: BackBtn,
  headerTitleStyle: {
    fontSize: 18,
  },
};
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
