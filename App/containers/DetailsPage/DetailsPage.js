import React, { Component, PropTypes } from 'react';
import { Text, Image, ScrollView, Dimensions, View } from 'react-native';
import styles from './styles';

const { width, height } = Dimensions.get('window');

export default class DetailsPage extends Component {
  // nav header customization
  static navigationOptions = () => ({
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#FF3366',
    },
  });

  // HeaderImage
  renderMainImage = object => (
    <View style={styles.mainImage}>
      <Image style={styles.mainImg} source={{ uri: object.image }} />
      <Image
        style={{
          position: 'absolute',
          top: height / 3 - 20,
          right: 25,
          width: 100,
          height: 100,
          borderRadius: 50,
        }}
        source={{ uri: object.image }}
      />
    </View>
  );
  // Description
  renderMainDetails = object => (
    <View style={{ marginLeft: 12, marginRight: 24 }}>
      <Text style={styles.heading}>{object.name}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles.subHeading}>{object.name}</Text>
        <Text style={styles.subHead}>{object.id}</Text>
      </View>
      {this.renderDivider()}
      <View style={styles.card}>
        <Text style={styles.description}>{object.desc}</Text>
      </View>
    </View>
  );

  // dividerr
  renderDivider = () => (
    <View
      style={{
        backgroundColor: '#95a5a6',
        height: 1,
        width: width - 20,
        marginTop: 8,
        marginBottom: 8,
      }}
    />
  );
  render() {
    const object = this.props.navigation.state.params.item;
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.renderMainImage(object)}
          {this.renderMainDetails(object)}
        </View>
      </ScrollView>
    );
  }
}
DetailsPage.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
