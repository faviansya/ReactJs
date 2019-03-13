import React, { Component } from 'react';
import AsideBot from "./AsideBot.js";
import Asidetop from "./AsideTop.js";
import AsideC from "./AsideContent";
import axios from "axios";

const apiKey = "062ea71e9c4b49fba5b9015130ffaaf9";
const baseURL = "https://newsapi.org/v2/";
const urlHeadLine4 =
    baseURL +
    "top-headlines?" +
    "country=id" +
    "&pageSize=4" +
    "&apiKey=" +
    apiKey;

class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listNews4: [],
            username: "",
            isLogin: false
        };
    }

    componentDidMount = () => {
        const self = this;
        axios
            .get(urlHeadLine4)
            .then(function (response) {
                self.setState({ listNews4: response.data.articles });

                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    render() {
        const { listNews4 } = this.state;
        return (
            <div>
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
        );
    }
}
// export default withRouter(Home);

export default Aside;