import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import style from "./autocomplete.module.css";
class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };
  static defaultProps = {
    suggestions: []
  };
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      
      showSuggestions: false,
      
      userInput: ""
    };
  }
  
  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    
    
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };
  
  onClick = e => {
    
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };
  
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    
    
    
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    
    else if (e.keyCode===40) {
      
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };
  render() {
    const {className} = this.props
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;
    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className={style.suggestions}>
            {filteredSuggestions.map((suggestion, index) => {
              let className;
              
              if (index === activeSuggestion) {
              ;
              }
              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div >
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }
    return (
      <Fragment>
        <input
          className={className}
          
          type="text"
          placeholder="Protocol 3"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}
export default Autocomplete;