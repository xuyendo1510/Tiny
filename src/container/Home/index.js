import React, {Component} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import Variable from '../../common/baseStyles'

Icon.loadFont();
import Account from '../Account'
import Messenger from '../Messenger'

class Home extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'messenger', title: 'Messenger', icon: 'comments' },
      { key: 'account', title: 'Account', icon: 'user' },
    ],
  };

  handleIndexChange = index => this.setState({ index });

  renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = this.state.index === i ? '#9e4fc5' : '#C0C0C0'
          return (
            <TouchableOpacity
            activeOpacity = {1}
            style={[styles.tabItem, {backgroundColor: '#fff' }]}
              onPress={() => this.setState({ index: i })}>
              <Icon name={route.icon} size={20} color= {color} />
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  renderScene = SceneMap({
    messenger: Messenger,
    account: Account,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={this.handleIndexChange}
        tabBarPosition = 'bottom'
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    // paddingTop: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
export default Home
