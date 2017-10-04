import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import {connect } from 'react-redux'
import { ActionCreators } from '../actions'
import * as reducerActions  from '../actions/reducerActions'
import { bindActionCreators } from 'redux'
import * as actionTypes from '../actions/ActionTypes'
const { width, height } = Dimensions.get("window");
const background = require("../images/login1_bg.png");
const mark = require("../images/login1_mark.png");
const lockIcon = require("../images/login1_lock.png");
const personIcon = require("../images/login1_person.png");

class LoginScreen extends Component {
   
  state = {
      loginText:'something@somedomain.co',
      passwordText:'somePassword', 
  }
  renderLoadingModal = ()=>{
    return (
      <Modal
          //animationType={"fade"}
          transparent={true}        
          visible={this.props.isLoading}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={styles.modalBackground}>
            <ActivityIndicator
            animating={this.props.isLoading}
            size={'small'}
            />
         </View>
        </Modal>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholder="Username" 
                placeholderTextColor="#FFF"
                style={styles.input} 
                underlineColorAndroid='transparent'
                onChangeText={(loginText) => this.setState({loginText})}
                value={this.state.loginText}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholderTextColor="#FFF"
                placeholder="Password" 
                style={styles.input} 
                underlineColorAndroid='transparent'
                secureTextEntry 
                onChangeText={(passwordText) => this.setState({passwordText})}
                value={this.state.passwordText}
              />
            </View>
            <TouchableOpacity activeOpacity={.5}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() =>this.props.actions.requestLogin(this.state.loginText,this.state.passwordText)}
            activeOpacity={.5}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Don't have an account?</Text>
              <TouchableOpacity activeOpacity={.5}>
                <View>
                  <Text style={styles.signupLinkText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
        {this.renderLoadingModal()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading : state.loginReducer.isLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reducerActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  },
  modalBackground:{
    flex:1,
    backgroundColor:'#050404af',
    justifyContent:'center',
    alignItems:'center'
  },
});