import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Officials from "./Officials";
const MainNavigator = createStackNavigator({
  Home: { screen: Officials }
  // Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
