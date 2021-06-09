import React, { PureComponent } from "react";
import { Platform } from "react-native";
//import the list component that will fetch the data.
import PeopleList from "./components/PeopleList";
//import provider to connect component to redux store.
import { Provider } from "react-redux";
//import your store to connect your component.
import store from "./redux/store";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
});


export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PeopleList />
      </Provider>
    );
  }
}
