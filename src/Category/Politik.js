import React, { Component } from "react";
import "../css/App.css";
import Politik from "./PolitikObj.js";
import axios from "axios";
import Header from "./Header";

const apiKey = "062ea71e9c4b49fba5b9015130ffaaf9";
const baseURL = "https://newsapi.org/v2/";

const urlHeadLine = baseURL + "everything?q=";
const UrlBackLine = "&apiKey=" + apiKey;

class Category extends Component {
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
            .get(urlHeadLine+ "politik" + UrlBackLine)
            .then(function (response) {
                self.setState({ listNews: response.data.articles });

                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        const { listNews } = this.state;
        return (
            <div>
                <Header data = "Politik" />
                {listNews.map((item, key) => {
                    const arc_img =
                        item.urlToImage === null ? "Kosong" : item.urlToImage;
                    const content = item.content !== null ? item.content : "";
                    return (
                        <Politik
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
// export default withRouter(Category);

export default Category;
