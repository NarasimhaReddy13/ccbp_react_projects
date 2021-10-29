import './SearchItem.css'

const SuggestionItem = props => {
    const {suggestionDetails, updateSearchInput} = props
    const {suggestion} = suggestionDetails
  
    const selectInput = () => {
      updateSearchInput(suggestion)
    }
  
    return (
      <li className="list-item">
        <p className="suggestion"> {suggestion} </p>
        <button type="button" onClick={selectInput} className="arrow-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow-size"
          />
        </button>
      </li>
    )
  }
  
  export default SuggestionItem
