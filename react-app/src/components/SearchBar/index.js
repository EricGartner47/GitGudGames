import React from 'react';
import { useHistory } from 'react-router-dom';
import './SearchBar.css'

const Search = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = e => {
        history.push(`?s=${searchQuery}`)
        e.preventDefault()
    };

    return (
        <div id='search-bar-container'>
            <form action="/app" method="get" onSubmit={onSubmit} id="search-form">
                <label htmlFor="header-search">
                    <span className="visually-hidden"></span>
                </label>
                <input
                    value={searchQuery}
                    onInput={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    name="s"
                >
                </input>
                <button type="submit" className="search-button">
                    <i className="fas fa-search" id='search_icon'></i>
                </button>
            </form>
        </div>
    );
};

export default Search;
