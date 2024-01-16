import React from "react";
import SuccessStory from "./SuccessStory";

class SuccessChild extends React.Component {
    render() {
        const { name, address} = this.props;
        
        return (
        <div>
          <p>Name from parent: {name}</p>
          <p>Address from parent: {address}</p>
        </div>
      );
    }
  }

export default SuccessChild