import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
  },

  render() {
    return (
      <View style={styles.container}>
        <Drawer
          open={this.state.drawerOpen}
          type="static"
          tapToClose={true}
          openDrawerOffset={0.5}
          closedDrawerOffset={0}
          content={<SideMenu/>}
          styles={styles.drawer}
          tweenHandler={Drawer.tweenPresets.parallax}
          tweenEasing={"easeInOutQuad"}
          tweenDuration={400}
          onClose={this.closeDrawer}
        >
          <View style={styles.container}>
            <Header title="Home" toggleDrawer={this.toggleDrawer}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
