import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecentPages } from "../actions/index";
import { bindActionCreators } from "redux";
import { saveState, loadState } from "../local_storage";
import Sortable from "sortablejs";
import move from "lodash-move";

class RecentPagesList extends Component {
    componentWillMount() {
        if (!loadState()) {
            this.props.fetchRecentPages();
        }
    }

    componentDidMount() {
        Sortable.create(bar, {
            onEnd: function(evt) {
                saveState({
                    pages: move(loadState().pages, evt.oldIndex, evt.newIndex)
                });
            }
        });
    }

    renderPage(page) {
        console.log(page);
        return (
            <div
                key={page.id}
                className="col-lg-3 align-items-center"
                style={styles.col}
            >
                <div style={styles.space} className="jumbotron">
                    <a href={page.url} style={styles.textTruncate}>
                        <h5 style={styles.textTruncate}>
                            <img
                                height="20"
                                width="20"
                                src={
                                    "http://www.google.com/s2/favicons?domain=" +
                                    page.url
                                }
                            />{" "}
                            {page.title}
                        </h5>
                    </a>
                </div>
            </div>
        );
    }

    render() {
        if (this.props.pages === 0) {
            return null;
        }
        return (
            <div className="container">
                <div id="bar" className="row" style={styles.row}>
                    {this.props.pages.map(this.renderPage)}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pages: state.pages
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchRecentPages }, dispatch);
}

const styles = {
    textTruncate: {
        width: "250px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    row: {
        display: "flex",
        flexWrap: "wrap"
    },
    col: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        height: "100%"
    },
    space: {
        margin: "10px",
        padding: "10px"
    },
    button: {
        width: "150px",
        maxWidth: "150px",
        position: "absolute",
        bottom: "0"
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentPagesList);
