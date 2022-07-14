import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Card } from "react-native-elements";
import axios from "axios";
import { RFValue } from "react-native-responsive-fontsize";

export default class PopularMoviesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return `${hours} hrs ${minutes} mins`;
  }

  //get the popular movies from the API
  getData = () => {
    
  };

  keyExtractor = (item, index) => index.toString();

  renderItems = ({ item, index }) => {
    return (
      <Card
        key={`card-${index}`}
        image={{ uri: item.poster_link }}
        imageProps={{ resizeMode: "cover" }}
        featuredTitle={item.title}
        containerStyle={styles.cardContainer}
        featuredTitleStyle={styles.title}
        featuredSubtitle={`${
          item.release_date.split("-")[0]
        } | ${this.timeConvert(item.duration)}`}
        featuredSubtitleStyle={styles.subtitle}
      ></Card>
    );
  };

  //display list of movies using flatlist
  render() {
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    color: "#fff",
    alignSelf: "flex-start",
    paddingLeft: RFValue(15),
    fontSize: RFValue(25),
    marginTop: RFValue(65)
  },
  subtitle: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingLeft: RFValue(15),
    fontSize: RFValue(15)
  },
  cardContainer: {
    flex: 1,
    borderRadius: RFValue(10),
    justifyContent: "center",
    height: RFValue(110),
    marginBottom: RFValue(20)
  }
});
