import React, { Component } from 'react';
import { Button } from 'antd';
interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}
interface State {
  count: number;
}

class HelloClass extends Component<Greeting, State> {
  state: State = {
    count: 0
  }
  static defaultProps = {
    firstName: '',
    lastName: ''
  }
  handleClick = () => {
    this.setState({
      count: (this.state.count) as number + 1
    })
  }
  render() {
    return (
      <>
        <p>你点击了 {this.state.count}</p>
        <Button onClick = {this.handleClick}>Hello, {this.props.name}</Button>
      </>
    )
  }
}
export default HelloClass