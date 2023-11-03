
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users';
import { useEffect } from 'react';
import React, { Component } from 'react';


function App({getUsersRequest}) {
  useEffect(() => {
    getUsersRequest()
  },[]);
  return (
      <div>
        
      </div>
  );
}


// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.props.getUsersRequest()
//   }
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

export default connect(null, {getUsersRequest})(App);
