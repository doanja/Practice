import React, { Component } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResults';
import API from '../utils/API';

export default class SearchBar extends Component {
  state = {
    breed: '',
    results: []
  };

  searchGiphy = query => {
    console.log('search');
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    console.log('change');
    this.setState({ [e.target.name]: [e.target.value] });
  };

  handleSubmit = e => {
    console.log('submit');
    e.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {
    return (
      <React.Fragment>
        <SearchForm
          search={this.state.search}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <SearchResult results={this.state.results} />
      </React.Fragment>
    );
  }
}
