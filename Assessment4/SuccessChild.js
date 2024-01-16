import React from "react";
import SuccessStory from "./SuccessStory";

class SuccessChild extends React.Component {
    render() {
        const { name, address, randomValue } = this.props;
        
        return (
        <div>
          <p>Name from parent: {name}</p>
          <p>Address from parent: {address}</p>
  
          <SuccessStory randomValue={randomValue} />
        </div>
      );
    }
  }

export default SuccessChild