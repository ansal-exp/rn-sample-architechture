import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  View
} from 'react-native';
import styles from './styles'
const { width, height } = Dimensions.get('window')

export default class DetailsPage extends Component {
  // nav header customization 
  static navigationOptions = ({ navigation, screenProps }) => ({
      headerTintColor: "#FFFFFF",
      headerStyle: {
        backgroundColor:"#FF3366"
      }
  });

  render() {
    var object = this.props.navigation.state.params.item;
    return(
      <ScrollView>
        <View style={styles.container}>
          {this.renderMainImage(object)}
          {this.renderMainDetails(object)}
        </View>
      </ScrollView>
    );

  }
// HeaderImage
  renderMainImage =(object)=>{
    return(
      <View style={styles.mainImage}>
        <Image style={styles.mainImg} source={{uri: object.image}} />
        <Image
        style={{position:'absolute',top:height/3 - 20,right:25,
        width: 100,height: 100,
        borderRadius:50
        }} 
        source={{uri: object.image}} />
      </View>
    );
  }
// Description
  renderMainDetails=(object)=>{
    return(
      <View style={{marginLeft:12,marginRight:24, }}>
        <Text style={styles.heading}>{object.name}</Text>
        <View style={{flexDirection:'row',
         justifyContent:'space-between'}}>
          <Text style={styles.subHeading}>{object.name}</Text>
          <Text style={styles.subHead}>{object.id}</Text>
        </View>
        {this.renderDivider()}
        <View style={styles.card}>
        <Text style={styles.description}>{object.desc}</Text>
        </View>
      </View>
    );
  }

//dividerr
  renderDivider=()=>{
    return(
      <View style={{backgroundColor:'#95a5a6',height:1,width:width-20,marginTop:8,marginBottom:8}}/>
    );
  }

}
