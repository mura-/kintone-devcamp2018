import React from 'react';

export default class Header extends React.Component {
  clickHandler() {
    alert('Clicked!');
  }
  render() {
    return <button onClick={this.clickHandler}>click!</button>;
  }
}

