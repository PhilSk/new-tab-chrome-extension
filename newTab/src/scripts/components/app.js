import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "./search_bar.js";
import NavBar from "./navbar.js";
import RecentPagesList from "../containers/recent_pages_list.js";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <NavBar />
                <SearchBar />
                <RecentPagesList />
            </div>
        );
    }
}

export default App;
