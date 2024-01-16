import React from 'react';
import SuccessChild from './SuccessChild';
import SuccessStory from './SuccessStory';


class Success extends React.Component {
  render() {
    state ={
      quotes :  "Success is success",
      name : "John",
      address : "123 City Street",
      randomValue : "",
    }
    return (
      <div>
        <h2>Success</h2>
          <p>Quotes:</p>
            <ul>
              {this.state.quotes}
            </ul>
          <p>Name: {this.state.name}</p>
          <p>Address: {this.state.address}</p>

        <SuccessChild name={this.state.name} address={this.state.address} randomValue={this.state.randomValue} />
        <SuccessStory randomValue={this.state.randomValue}/>
      </div>
    );
  }
}

export default Success;