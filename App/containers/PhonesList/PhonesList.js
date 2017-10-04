//container for loading browse list
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import ListItem from '../../components/ListItem'

export default class PhonesList extends React.Component {
  // Customizing navigation bar
  static navigationOptions = ({ navigation, screenProps }) => ({
       title: "Browse Phones",       
       headerTintColor: "#FFFFFF",
       headerStyle: {
         backgroundColor:"#FF3366"
       }
   });
  componentWillMount(){
    if(!this.props.isPhonesLoading){
      this.props.actions.requestPhones()
    }
  }
  // used as key generator for flatlist items
  _keyExtractor = (item, index) => index;

  onItemPress=(item)=>{
     this.props.navigation.navigate('Details',{item:item});     
  }

  // returns a flatlist component
  renderList=()=>{
    return (
      <FlatList 
        data={this.props.phones}
        onEndReachedThreshold={0.5}
        keyExtractor={this._keyExtractor}
        ListFooterComponent={this.renderFooter}
        renderItem={({item, separators}) => <ListItem onPress={this.onItemPress} item={item}/>}
      />
    )
  }
 // for displaying an activity indicator at the bottom of the list while loading
  renderFooter = () => {
    if (!this.props.isPhonesLoading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1,backgroundColor:'white'}}>      
        {this.renderList()} 
      </View>
    );
  }
}



