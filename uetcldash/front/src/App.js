import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDates } from "./actions/datesActions";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";

import Landing from './components/Landing'

// export class App extends Component {
//     static propTypes = {
//         dates: PropTypes.array.isRequired,
//     };

//     componentDidMount() {
//         this.props.getDates();
//     }

//     render() {
//         return (
//             <Provider store={store}>
//                 <div>has something something something</div>
//                 <div>
//                     {/* <Button onClick={() => alert("Button clicked")}>
//                         Create new project
//                     </Button> */}
//                 </div>
//                 <Fragment>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {this.props.dates.map((dates) => (
//                                 <tr key={dates.id}> </tr>
//                             )) }
//                         </tbody>
//                     </table>
//                 </Fragment>
//             </Provider>
//         );
//     }
// }

// const mapStateToProps = (state) => ({
//     dates: state.datesReducer.dates,
// });

// export default connect(mapStateToProps, { getDates })(App);





///////////////////////////////////////////////////////////////////
// import React from 'react';

// import axios from 'axios';

// export  class App extends React.Component {
//   state = {
//     dates: []
//   }

//   componentDidMount() {
//     axios.get(`http://127.0.0.1:8000/api/dates/`)
//       .then(res => {
//         const dates = res.data;
//         this.setState({ dates });
//       })
//   }

// render() {
//     return (
//       <ul>
//         { this.state.dates.map(date => <li>{date.project}</li>)}
//       </ul>
//     )
//   }
// };
//   export default App;









//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class App extends Component {
  // componentDidMount(){
  //   this.props.getDates();
  // }
  //   axios.get(`http://127.0.0.1:8000/api/dates/`)
  //     .then(res => {
  //       const dates = res.data;
  //       this.setState({ dates });
  //     })
  // }

  render(){
// const date = this.props;
// const datesItem = this.props.dates.map(date =>(
//   <div key={date.id}>
//     <div>
//       Project: {date.project}
//     </div>
//     <div>
//       Rap
//       start date: {date.rapstart}
//       end date: {date.rapend}
//     </div>
//   </div>
 
// ));

 return(
<Provider store = {store}>
   {/* <div>
    <div> Project contracts</div>
    <div> {datesItem} </div>

   </div> */}

   </Provider>
 );
}
}

const mapStateToProps = state => ({
  dates: state.dates.items
});

export default connect(mapStateToProps, {getDates}) (App);