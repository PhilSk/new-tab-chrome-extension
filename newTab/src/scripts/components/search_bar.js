import React, { Component } from "react";
import { connect } from "react-redux";

class SearchBar extends Component {
    render() {
        return (
            <div className="container text-right ">
                <form action="https://google.com/search" method="get">
                    <div className="form-group">
                        <input type="hidden" name="sitesearch" value="" />
                        <input
                            type="text"
                            className="form-control"
                            name="q"
                            placeholder="Search in Google"
                        />
                    </div>
                    <div className="form-check">
                        <button type="submit" className="btn btn-primary ">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
