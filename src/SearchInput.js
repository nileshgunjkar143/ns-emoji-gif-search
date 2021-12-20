import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./SearchInput.css";
import './App.css';

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };
  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="main-header">
        <div clss="inner">
          <h1 class="main-title">Emoji Search</h1>
          <div className="search">
              <input className="from-control" onChange={this.handleChange}  placeholder="Search..."/>
          </div>
        </div>
      </div>
    );
  }
}
