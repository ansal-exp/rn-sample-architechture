import React, { Component, PropTypes } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  ActivityIndicator
} from "react-native";
import styles from "./styles";
import images from "../../images";

export default class LoginScreen extends Component {
  state = {
    loginText: "something@somedomain.co",
    passwordText: "somePassword"
  };
  renderLoadingModal = () => (
    <Modal
      // animationType={"fade"}
      transparent
      visible={this.props.isLoading}
      onRequestClose={() => {}}
    >
      <View style={styles.modalBackground}>
        <ActivityIndicator animating={this.props.isLoading} size="small" />
      </View>
    </Modal>
  );

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={images.background}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.markWrap}>
            <Image
              source={images.mark}
              style={styles.mark}
              resizeMode="contain"
            />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image
                  source={images.personIcon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                placeholder="Username"
                placeholderTextColor="#FFF"
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={loginText => this.setState({ loginText })}
                value={this.state.loginText}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image
                  source={images.lockIcon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                placeholderTextColor="#FFF"
                placeholder="Password"
                style={styles.input}
                underlineColorAndroid="transparent"
                secureTextEntry
                onChangeText={passwordText => this.setState({ passwordText })}
                value={this.state.passwordText}
              />
            </View>
            <TouchableOpacity activeOpacity={0.5}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.actions.requestLogin(
                  this.state.loginText,
                  this.state.passwordText
                )}
              activeOpacity={0.5}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Don't have an account?</Text>
              <TouchableOpacity activeOpacity={0.5}>
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

LoginScreen.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  actions: PropTypes.arrayOf(PropTypes.func).isRequired
};
