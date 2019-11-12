import React, { Component} from 'react';
import HelloClass from './HelloClass';
interface Loading {
  loading: boolean;
}

function HelloHOC<p>(WrappedComponent: React.ComponentType<p>) {
  return class extends Component<p & Loading> {
    render() {
      let {loading, ...props} = this.props;
      return (
        loading ? <div>loading....</div> : <WrappedComponent {...props as p}/>
      )
    }
  }
}
export default HelloHOC(HelloClass);