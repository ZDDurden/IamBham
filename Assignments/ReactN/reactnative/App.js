import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
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
        <View style={styles.container}>
          <React.Fragment>
            {items.map(item => (
              <React.Fragment>
                <Text h4 key={item.id} style={styles.cardtitle}>
                  {item.title}
                </Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  <Text p key={item.id} style={styles.cardtext}>
                    {item.description}
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
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6e93f0",
    alignItems: "center",
    justifyContent: "center",
    color: "#f08989",
    flexWrap: "wrap",
    flexShrink: 1,
    flexDirection: "column"
  },

  cardtitle: {
    flex: 1,
    backgroundColor: "#6e93f0",
    alignItems: "center",
    justifyContent: "center",
    color: "#e6dada"
  },

  cardtext: {
    flex: 1,
    backgroundColor: "#6e93f0",
    alignItems: "center",
    justifyContent: "center",
    color: "#f08989",
    textAlign: "center"
  }
});
