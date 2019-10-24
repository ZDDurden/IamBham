import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import "react-bootstrap";
import "./champions.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("./champions.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          items: data
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return (
        <Text>
          Все счастли́вые се́мьи похо́жи друг на дру́га, ка́ждая несчастли́вая семья́
          несчастли́ва по-сво́ему.
        </Text>
      );
    } else {
      return (
        // <StatusBar hidden={true}>
        <ScrollView>
          <View style={styles.container}>
            <React.Fragment>
              {items.map(item => (
                <React.Fragment>
                  <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    <Text
                      h4
                      key={item.id}
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        color: "#e6dada"
                      }}
                    >
                      {this.item.name}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    <Text p key={item.id} style={styles.cardtext}>
                      {this.item.blurb}
                    </Text>
                    <View
                      style={{
                        borderBottomColor: "black",
                        borderBottomWidth: 1
                      }}
                    />
                  </View>
                </React.Fragment>
              ))}
            </React.Fragment>
          </View>
        </ScrollView>
        // </StatusBar>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6e93f0",
    alignItems: "center",
    padding: "10%",
    color: "#f08989"
  },

  cardtitle: {
    flex: 1,
    backgroundColor: "#6e93f0",
    alignItems: "center",
    justifyContent: "center",
    color: "#e6dada",
    flexDirection: "row",
    flexWrap: "wrap"
  },

  cardtext: {
    flex: 1,
    backgroundColor: "#6e93f0",
    alignItems: "center",
    color: "#f08989",
    textAlign: "center"
  }
});
