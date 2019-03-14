import createStore from "unistore";
import axios from "axios";

const initialState = {
    api_key: "",
    email: "",
    password: "",
    full_name: "",
    username: "",
    is_login: "",
    listNews1: [],
    listNews4: [],
    listNews: [],
    search: "",
}


export const store = createStore(initialState)
export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },
    postLogout: state => {
        return { is_login: false };
    },
    postLogin: async state => {
        const data = {
            username: state.username,
            password: state.password,
        };
        const self = this;
        await axios
            .post("https://favianss.free.beeceptor.com/auth", data)
            .then(function (response) {
                console.log("Respon Data:", response.data);
                if (response.data.hasOwnProperty("api_key")) {
                    store.setState({
                        is_login: true,
                        api_key: response.data.api_key,
                        email: "Faviansyah@mgial.com",
                        full_name: state.username,
                    })
                    console.log("mantap", state.username)
                }
                console.log("Api Key:", response.data.api_key)
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    GetBerita: async state => {
        const self = this;
        const data = {
            listNews1: state.listNews1,
        };
        await axios
            .get("https://newsapi.org/v2/top-headlines?country=id&pageSize=1&apiKey=062ea71e9c4b49fba5b9015130ffaaf9")
            .then(function (response) {
                store.setState({ listNews1: response.data.articles });
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    GetBerita4: async state => {
        const self = this;
        const data = {
            listNews4: state.listNews4,
        };
        await axios
            .get("https://newsapi.org/v2/top-headlines?country=id&pageSize=4&apiKey=062ea71e9c4b49fba5b9015130ffaaf9")
            .then(function (response) {
                store.setState({ listNews4: response.data.articles });
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    GetBeritaAll: async state => {
        const self = this;
        const data = {
            listNews: state.listNews,
        };
        await axios
            .get("https://newsapi.org/v2/top-headlines?country=id&apiKey=062ea71e9c4b49fba5b9015130ffaaf9")
            .then(function (response) {
                store.setState({ listNews: response.data.articles });

                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    searchNews: async (state, keyword) => {
        console.log('kw',keyword);
        if (keyword.length > 2) {
            try {
                const response = await axios.get(
                    "https://newsapi.org/v2/top-headlines?q=" + keyword + "&apiKey=062ea71e9c4b49fba5b9015130ffaaf9");
                console.log(response);
                store.setState({ listNews: response.data.articles });
            }
            catch (error) {
                console.log(error);
            }
        }
    },
}) 