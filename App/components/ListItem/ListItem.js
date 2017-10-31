// custom list item for phone list
import React, { Component, PropTypes } from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default class ListItem extends Component {
  renderImage = () => <Image style={styles.mainImg} source={{ uri: this.props.item.image }} />;

  renderHeadings = () => (
    <View style={styles.headings}>
      <Text style={styles.heading}>{this.props.item.name}</Text>
      <Text style={styles.subHeading}>{this.props.item.name}</Text>
      <Text style={styles.subHead}>{this.props.item.name}</Text>
      <Text style={styles.smallHead}>{this.props.item.id}</Text>
    </View>
  );
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPress(this.props.item);
        }}
        style={[styles.container, styles.cardContainer]}
      >
        <View>{this.renderImage()}</View>
        <View style={{ flex: 3, flexDirection: 'column' }}>{this.renderHeadings()}</View>
      </TouchableOpacity>
    );
  }
}
ListItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
