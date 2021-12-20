import React, { PureComponent } from "react";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import './App.css';

export default class Emoji extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 15)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 15)
    });
  };

  render() {
    return (
      <div id="hea">
      <div>
        <SearchInput textChange={this.handleSearchChange}/>
      </div>
      <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
