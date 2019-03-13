import React, { Component } from "react";
import "../css/App.css";
import AllItem from "./ItemsObj.js";
import Search from "./searchObject.js";
import axios from "axios";

const apiKey = "062ea71e9c4b49fba5b9015130ffaaf9";
const baseURL = "https://newsapi.org/v2/";
const urlHeadLine =
  baseURL + "top-headlines?" + "country=id" + "&apiKey=" + apiKey;

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [],
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
  };

  handleInputChange = e => {
    let value = e.target.value;

    this.setState(
      {
        search:value
      },
      () =>
      {
        this.searchNews(value);
      }
    );
  }

  searchNews = async keyword => {
    console.log(keyword);
    const self = this;
    if(keyword.length > 2){
      try{
        const response = await axios.get(
          baseURL+ "top-headlines?q=" +keyword + "&apiKey=" + apiKey
        );
        console.log(response);
        self.setState({ listNews: response.data.articles });
      }
      catch(error){
        console.log(error);
      }
    }
  }

  render() {
    const { listNews } = this.state;
    return (
      <div className="App">

        <Search 
          title = "cari"
          doSearch = {this.handleInputChange}
          keyword = {this.state.search}
        />

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
// export default withRouter(Items);

export default Items;
