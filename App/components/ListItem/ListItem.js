//custom list item for phone list
import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
Image,
TouchableOpacity,
SectionList,
View
} from 'react-native';
import styles from './styles'

export default class ListItem extends Component {

  render() {
    return (
    <TouchableOpacity
      onPress={()=>{
        this.props.onPress(this.props.item)
      }}
      style={[styles.container,styles.cardContainer]}>
        <View>
          {this.renderImage()}
        </View>
        <View style={{flex:3,flexDirection:'column',}}>
          {this.renderHeadings()}
        </View>
    </TouchableOpacity>
    );
  }

  renderImage=() =>{
    return(
        <Image style={styles.mainImg} source={{uri: this.props.item.image}} />
    );
  }

  renderHeadings=()=>{
    return(
      <View style={styles.headings}>
          <Text style={styles.heading}>{this.props.item.name}</Text>
          <Text style={styles.subHeading}>{this.props.item.name}</Text>
          <Text style={styles.subHead}>{this.props.item.name}</Text>
          <Text style={styles.smallHead}>{this.props.item.id}</Text>
      </View>
    );
  }
}

