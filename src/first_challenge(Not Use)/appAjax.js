import React, { Component } from "react";
import "./App.css";
import Header from "./Include/Header.js";
import Footer from "./Include/Footer.js";
import ListItem from "./Include/ListItem.js";
import AllItem from "./Include/listarticle.js";
import Search from "./Include/Search.js";
import AsideBot from "./Include/AsideBot.js";
import Asidetop from "./Include/Asidetop.js";
import Berita from "./Include/Berita1.js";

import AsideC from "./Include/AsideC.js";
import axios from "axios";

const apiKey = "062ea71e9c4b49fba5b9015130ffaaf9";
const baseURL = "https://newsapi.org/v2/";
const urlHeadLine =
  baseURL + "top-headlines?" + "country=id" + "&apiKey=" + apiKey;
const urlHeadLine4 =
  baseURL +
  "top-headlines?" +
  "country=id" +
  "&pageSize=4" +
  "&apiKey=" +
  apiKey;
const urlHeadLine1 =
  baseURL +
  "top-headlines?" +
  "country=id" +
  "&pageSize=1" +
  "&apiKey=" +
  apiKey;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [],
      listNews1: [],
      listNews4: [],
      username: "",
      isLogin: false
    };
  }

  componentDidMount = () => {
    const self = this;
    axios
      .get(urlHeadLine)
      .then(function(response) {
        self.setState({ listNews: response.data.articles });

        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    axios
      .get(urlHeadLine4)
      .then(function(response) {
        self.setState({ listNews4: response.data.articles });

        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    axios
      .get(urlHeadLine1)
      .then(function(response) {
        self.setState({ listNews1: response.data.articles });

        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { listNews,listNews1, listNews4, username, isLogin } = this.state;
    return (
      <div className="App">

        <div className="container-float m-3">
          <div className="row">
            <div className="col-12 col-lg-4">
              <Asidetop />
              {listNews4.map((item, key) => {
                const arc_img =
                  item.urlToImage === null ? "Kosong" : item.urlToImage;
                const content = item.content !== null ? item.content : "";
                return (
                  <AsideC
                    key={key}
                    title={item.title}
                    img={arc_img}
                    content={content}
                  />
                );
              })}
              <AsideBot />
            </div>
            <div className="col-12 col-lg-8">
              {listNews1.map((item, key) => {
                const arc_img =
                  item.urlToImage === null ? "Kosong" : item.urlToImage;
                const content = item.content !== null ? item.content : "";
                return (
                  <Berita
                    key={key}
                    title={item.title}
                    img={arc_img}
                    content={content}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <Search />
        {listNews.map((item, key) => {
          const arc_img = item.urlToImage === null ? "Kosong" : item.urlToImage;
          const content = item.content !== null ? item.content : "";
          return (
            <AllItem
              key={key}
              title={item.title}
              img={arc_img}
              content={content}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
