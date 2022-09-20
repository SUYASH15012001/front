import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {login} from '../redux/actions';

const Login = props => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSumbit = () => {
    props.login({
      username,
      password,
    });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={val => setUsername(val)}
      />
      <TextInput
        placeholder="Password"
        textContentType="password"
        value={password}
        onChangeText={val => setPassword(val)}
      />
      <Button title="Login" onPress={handleSumbit} />
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
