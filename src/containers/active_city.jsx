import React, { Component } from "react";
import { connect } from "react-redux";

import City from "./city";

class ActiveCity extends Component {
  render() {
    if (!this.props.activeCity) {
      return (
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      );
    }
    return (
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img
          src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity}`}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity,
  };
}

export default connect(mapStateToProps, null)(ActiveCity);
