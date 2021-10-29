import React, { Component } from 'react'
import SuggestionItem from './SearchItems'
import './GoogleSuggestion.css'

const suggestionsList = [
    {id: 1, suggestion: 'Price of Ethereum'},
    {id: 2, suggestion: 'Oculus Quest 2 specs'},
    {id: 3, suggestion: 'Tesla Share Price'},
    {id: 4, suggestion: 'Price of Ethereum today'},
    {id: 5, suggestion: 'Latest trends in AI'},
    {id: 6, suggestion: 'Latest trends in ML'},
  ]

  class GoggleSuggestions extends Component {
    state = {searchInput: ''}
  
    updateSearchInput = value => {
      this.setState({searchInput: value})
    }
  
    handleSearchInput = e => {
      this.setState({searchInput: e.target.value})
    }
  
    render() {
      const {searchInput} = this.state
  
      const searchResults = suggestionsList.filter(each =>
        each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
      )
  
      return (
        <div className="main-container">
          <div className="main2-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
              className="image-size"
              alt="google logo"
            />
            <div className="search-suggestion-container">
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                  alt="search icon"
                  className="search-size"
                />
                <input
                  type="search"
                  placeholder="Search Google"
                  onChange={this.handleSearchInput}
                  value={searchInput}
                  className="input-field"
                />
              </div>
              <ul className="suggestion-list">
                {searchResults.map(each => (
                  <SuggestionItem
                    key={each.id}
                    suggestionDetails={each}
                    updateSearchInput={this.updateSearchInput}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }
  export default GoggleSuggestions
