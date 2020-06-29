import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDates } from "./actions/datesActions";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";

class Landing extends Component {
  componentDidMount(){
    this.props.getDates();
  }
  //   axios.get(`http://127.0.0.1:8000/api/dates/`)
  //     .then(res => {
  //       const dates = res.data;
  //       this.setState({ dates });
  //     })
  // }

  render(){
const date = this.props;
const datesItem = this.props.dates.map(date =>(
  <div key={date.id}>
    <div>
      Project: {date.project}
    </div>
    <div>
      Rap
      start date: {date.rapstart}
      end date: {date.rapend}
    </div>
  </div>
 
));

 return(
<Provider store = {store}>
   <div>
    <div> Project contracts</div>
    <div> {datesItem} </div>

   </div>
   </Provider>
 );
}
}

const mapStateToProps = state => ({
  dates: state.dates.items
});

export default connect(mapStateToProps, {getDates}) (Landing);