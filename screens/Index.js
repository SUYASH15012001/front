import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../redux/actions';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Edit from './Edit';

const Stack = createNativeStackNavigator();
const index = props => {
  console.log(props);
  React.useEffect(() => {
    props.getUsers();
  }, props.getUsers);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{title: 'Signup'}}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{title: 'Edit profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
