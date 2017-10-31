// container for loading browse list
import React, { Component, PropTypes } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import ListItem from '../../components/ListItem';

export default class PhonesList extends Component {
  // Customizing navigation bar
  static navigationOptions = () => ({
    title: 'Browse Phones',
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#FF3366',
    },
  });
  componentWillMount() {
    if (!this.props.isPhonesLoading) {
      this.props.actions.requestPhones();
    }
  }

  onItemPress = (item) => {
    this.props.navigation.navigate('Details', { item });
  };
  // used as key generator for flatlist items
  keyExtractor = (item, index) => index;

  // returns a flatlist component
  renderList = () => (
    <FlatList
      data={this.props.phones}
      onEndReachedThreshold={0.5}
      keyExtractor={this.keyExtractor}
      ListFooterComponent={this.renderFooter}
      renderItem={({ item }) => <ListItem onPress={this.onItemPress} item={item} />}
    />
  );
  // for displaying an activity indicator at the bottom of the list while loading
  renderFooter = () => {
    if (!this.props.isPhonesLoading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE',
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  render() {
    return <View style={{ flex: 1, backgroundColor: 'white' }}>{this.renderList()}</View>;
  }
}
PhonesList.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.func).isRequired,
  phones: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  isPhonesLoading: PropTypes.bool.isRequired,
};
