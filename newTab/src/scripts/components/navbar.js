import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-light">
            <a
                className="navbar-brand"
                href=""
                onClick={() =>
                    chrome.tabs.create({
                        url: "chrome://history",
                        active: true
                    })}
            >
                History
            </a>
            <a
                className="navbar-brand"
                href=""
                onClick={() =>
                    chrome.tabs.create({
                        url: "chrome://bookmarks",
                        active: true
                    })}
            >
                Bookmarks
            </a>
            <a
                className="navbar-brand"
                href=""
                onClick={() =>
                    chrome.tabs.create({
                        url: "chrome://downloads",
                        active: true
                    })}
            >
                Downloads
            </a>
        </nav>
    );
};

export default NavBar;
