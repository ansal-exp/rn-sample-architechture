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
import {connect } from 'react-redux'
import { ActionCreators } from '../actions'
import * as reducerActions  from '../actions/reducerActions'
import { bindActionCreators } from 'redux'
import ListItem from '../components/ListItem'

class JobList extends React.Component {
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
        renderItem={({item, separators}) => <ListItem onPress={this.onItemPress} item={item}/>}
      />
    )
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

function mapStateToProps(state) {
  return {
    phones : state.phonesReducer.phones,
    isPhonesLoading: state.phonesReducer.isLoading,    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reducerActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);


const styles = StyleSheet.create({
 mainContainer: { flex: 5 },
 flexOneContainer: { flex: 1 },
 portraitContainer: { flex: 2, flexDirection: 'row'}
})