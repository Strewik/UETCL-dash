///////////////////////////////////////////
import { Formik } from "formik";
import { Form, Datepicker, SubmitBtn, Textarea } from "react-formik-ui";
import axios from "axios";
// import * as Yup from "yup";
import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formSchema = Yup.object().shape({
  rapstart: Yup.string(),
  rapend: Yup.string(),
  pdpstart: Yup.string(),
  pdpend: Yup.string(),
  resettlestart: Yup.string(),
  resettleend: Yup.string(),
  supervisionstart: Yup.string(),
  supervisionend: Yup.string(),
  epcstart: Yup.string(),
  epcend: Yup.string(),
  performstart: Yup.string(),
  performend: Yup.string(),
  advancestart: Yup.string(),
  advanceend: Yup.string(),
  insurestart: Yup.string(),
  insureend: Yup.string()
});

const initialValues = {
  rapstart: "",
  rapend: "",
  pdpstart: "",
  pdpend: "",
  resettlestart: "",
  resettleend: "",
  supervisionstart: "",
  supervisionend: "",
  epcstart: "",
  epcend: "",
  performstart: "",
  performend: "",
  advancestart: "",
  advanceend: "",
  insurestart: "",
  insureend: "",
  comment: ""
};

// toast.configure();
// toast.configure({
//   autoClose: 8000,
//   draggable: false
// });

// const apiUrl = "http://127.0.0.1:8000/api/dates/";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // rapstart: "",
      // rapend: "",
      // pdpstart: "",
      // pdpend: "",
      // resettlestart: "",
      // resettleend: "",
      // supervisionstart: "",
      // supervisionend: "",
      // epcstart: "",
      // epcend: "",
      // performstart: "",
      // performend: "",
      // advancestart: "",
      // advanceend: "",
      // insurestart: "",
      // insureend: "",
      // comment: ""
    };
  }

  //  onChange = (e) => {
  //   /*
  //     Because we named the inputs to match their
  //     corresponding values in state, it's
  //     super easy to update the state
  //   */
  //   this.setState({ [e.target.name]: e.target.value });
  // }
  /////////////////////////////////////////////////////////////////////

  // // The function that handles the logic when submitting the form
  // const handleSubmit = async values => {
  //   // This function received the values from the form
  //   // The line below extract the two fields from the values object.
  // const {
  // rapstart,
  // rapend,
  // pdpstart,
  // pdpend,
  // resettlestart,
  // resettleend,
  // supervisionstart,
  // supervisionend,
  // epcstart,
  // epcend,
  // performstart,
  // performend,
  // advancestart,
  // advanceend,
  // insurestart,
  // insureend,
  // comment
  // } = values;

  //   var body = {
  //     rapstart: rapstart,
  //     rapend: rapend,
  //     pdpstart: pdpstart,
  //     pdpend: pdpend,
  //     resettlestart: resettlestart,
  //     resettleend: resettleend,
  //     supervisionstart: supervisionstart,
  //     supervisionend: supervisionend,
  //     epcstart: epcstart,
  //     epcend: epcend,
  //     performstart: performstart,
  //     performend: performend,
  //     advancestart: advancestart,
  //     advanceend: advanceend,
  //     insurestart: insurestart,
  //     insureend: insureend,
  //     comment: comment
  //   };
  //   console.log(body);
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify(body)
  //   };
  //   const url = "http://127.0.0.1:8000/api/dates/";
  //   try {
  //     // eslint-disable-next-line
  //     const response = await fetch(url, options);
  //     const text = await response.text();

  //     if (text === "redirect") {
  //       props.history.push(`/editor`);
  //     } else if (text === "verifyemail") {
  //       props.history.push(`/verifyOtp/${this.state.email}`);
  //     } else {
  //       console.log("login failed");
  //       window.alert("login failed");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  ///////////////////////////////////////////////////////////////////
  // /* Server State Handling */
  // //  const [serverState, setServerState] = useState();
  // handleServerResponse = (ok, msg) => {
  //   // setServerState({ok, msg});
  // };

  // handleOnSubmit = (data, values, actions) => {
  //   // console.log('values')
  //   axios({
  //     method: "POST",
  //     url: "http://127.0.0.1:8000/api/dates/",
  //     data: values
  //   })
  //     .then(response => {
  //       // actions.setSubmitting(false);
  //       actions.resetForm();
  //       this.handleServerResponse(true, "Thanks!");
  //     })
  //     .catch(error => {
  //       // actions.setSubmitting(false);
  //       // this.handleServerResponse(false, error.response.data.error);
  //       console.error(error);
  //     });
  //   console.log("values");
  // };
  /////////////////////////////this alerts values and clears form
  // handleOnSubmit = (values, { setSubmitting, resetForm }) => {
  //   // When button submits form and form is in the process of submitting, submit button is disabled
  //   setSubmitting(true);

  //   // Simulate submitting to database, shows us values submitted, resets form
  //   setTimeout(() => {
  //     alert(JSON.stringify(values, null, 2));
  //     console.log(JSON.stringify(values));
  //     resetForm();
  //     setSubmitting(false);
  //   }, 500);
  // };
  /////////////////////////////////////////////////////
  render() {
    //  const {
    // rapstart,
    // rapend,
    // pdpstart,
    // pdpend,
    // resettlestart,
    // resettleend,
    // supervisionstart,
    // supervisionend,
    // epcstart,
    // epcend,
    // performstart,
    // performend,
    // advancestart,
    // advanceend,
    // insurestart,
    // insureend,
    // comment
    // } = this.state;

    const mystyle = {
      // color: "white",
      // backgroundColor: "DodgerBlue",
      padding: "100px",
      fontFamily: "Arial"
    };
    const title = {
      padding: "25px"
    };
    return (
      <Formik
        initialValues={initialValues}
        // validationSchema={formSchema}
        // onSubmit={this.handleOnSubmit}
        /////////////this alerts values and clears form
        // onSubmit={(values, { setSubmitting, resetForm }) => {
        //   // When button submits form and form is in the process of submitting, submit button is disabled
        //   setSubmitting(true);

        //   // Simulate submitting to database, shows us values submitted, resets form
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     resetForm();
        //     setSubmitting(false);
        //   }, 500);
        // }}
        //////////////////////////////////////////////////
        // onSubmit={async (values, { resetForm }) => {
        //   await axios
        //     .post(`${apiUrl}`, values)
        //     // .post(`${apiUrl}`, values)
        //     .then(res => {
        //       toast.success(res.data);
        //       // this.bindUserData();
        //       resetForm({});
        //     })
        //     .catch(err => {
        //       toast.error("Something went wrong.");
        //     });
        // }}
        ///////////////////////////////////////////////////////
        // onSubmit={(values, { setStatus, setSubmitting }) => {
        //   const yourDate = values.dato;
        //   const yourFormattedDate =
        //     yourDate.getDate() +
        //     "-" +
        //     (yourDate.getMonth() + 1) +
        //     "-" +
        //     yourDate.getFullYear();
        //   const updatedValues = { ...values, dato: yourFormattedDate };
        //   setStatus();
        //   fetch("https://nameless-ocean-57332.herokuapp.com/arbejdsseddel", {
        //     method: "post",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(updatedValues)
        //   })
        //     .then(response => response.json())
        //     .catch(error => console.log(error));
        // }}
        /////////////////////////////////////////////////posting without values
        // onSubmit={values => alert(JSON.stringify(values))}
        // onSubmit={async values => {
        //   fetch("http://127.0.0.1:8000/api/dates/", {
        //     method: "POST",
        //     headers: {
        //       Accept: "application/json",
        //       "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //       rapstart: this.rapstart,
        //       rapend: this.rapend,
        //       pdpstart: this.pdpstart,
        //       pdpend: this.pdpend,
        //       resettlestart: this.resettlestart,
        //       resettleend: this.resettleend,
        //       supervisionstart: this.supervisionstart,
        //       supervisionend: this.supervisionend,
        //       epcstart: this.epcstart,
        //       epcend: this.epcend,
        //       performstart: this.performstart,
        //       performend: this.performend,
        //       advancestart: this.advancestart,
        //       advanceend: this.advanceend,
        //       insurestart: this.insurestart,
        //       insureend: this.insureend,
        //       comment: this.comment
        //     })
        //   })
        //     .then(response => response.json())
        //     .then(responseJson => {
        //       return responseJson;
        //     })
        //     .catch(error => {
        //       console.error("server can not be reached", error);
        //     });
        // }}
        ////////////////////////////////////////////
        onSubmit={async (values, actions) => {
          console.log('values')
          await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/dates/",
            data: values
          })
            .then(response => {
              actions.setSubmitting(true);
              actions.resetForm();
              // handleServerResponse(true, "Thanks!");
            })
            .catch(error => {
              actions.setSubmitting(true);
              // handleServerResponse(false, error.response.data.error);
            });
          console.log(values);
        }}
        ///////////////////////////////////////////////////////
        // onSubmit={values => alert(JSON.stringify(values))}
        // onSubmit={this.handleOnSubmit}
        // validationSchema={formSchema}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue
          // shouldHighlightWeekends
        }) => (
          //  console.log(values)
          <Form mode="themed">
            <div style={mystyle}>
              <div>
                <div>
                  <Box
                    boxShadow={5}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ padding: 10, borderRadius: 10 }}
                  >
                    <div style={title}>
                      <h3>RAP Consultant</h3>
                    </div>
                    <div>
                      <Datepicker
                        name="rapstart"
                        value={values.rapstart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                        // shouldHighlightWeekends
                      />

                      <Datepicker
                        name="rapend"
                        value={values.rapend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />
                    </div>
                  </Box>
                  <Box
                    boxShadow={5}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ padding: 10, borderRadius: 10 }}
                  >
                    <div style={title}>
                      <h3>PDP Houses Consultant</h3>
                    </div>
                    <div>
                      <Datepicker
                        name="pdpstart"
                        value={values.pdpstart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />

                      <Datepicker
                        name="pdpend"
                        value={values.pdpend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />
                    </div>
                  </Box>
                  <Box
                    boxShadow={5}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ padding: 10, borderRadius: 10 }}
                  >
                    <div style={title}>
                      <h3>Resettlement Houses Consultant</h3>
                    </div>
                    <div>
                      <Datepicker
                        name="resettlestart"
                        value={values.resettlestart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />
                      <Datepicker
                        name="resettleend"
                        value={values.resettleend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />
                    </div>
                  </Box>
                  <Box
                    boxShadow={5}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ padding: 10, borderRadius: 10 }}
                  >
                    <div style={title}>
                      <h3>Supervision Consultant</h3>
                    </div>
                    <div>
                      <Datepicker
                        name="supervisionstart"
                        value={values.supervisionstart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />

                      <Datepicker
                        name="supervisionend"
                        value={values.supervisionend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />
                    </div>
                  </Box>
                  <Box
                    boxShadow={5}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ padding: 10, borderRadius: 10 }}
                  >
                    <div style={title}>
                      <h3>EPC</h3>
                    </div>
                    <div>
                      <Datepicker
                        name="epcstart"
                        value={values.epcstart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />

                      <Datepicker
                        name="epcend"
                        value={values.epcend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />
                    </div>
                  </Box>
                  <Box
                    boxShadow={5}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ padding: 10, borderRadius: 10 }}
                  >
                    <div style={title}>
                      <h3>Performance Guarantee</h3>
                    </div>
                    <div>
                      <Datepicker
                        name="performstart"
                        value={values.performstart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />

                      <Datepicker
                        name="performend"
                        value={values.performend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />
                    </div>
                  </Box>
                  <Box
                    boxShadow={5}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ padding: 10, borderRadius: 10 }}
                  >
                    <div style={title}>
                      <h3>Advance Payment Guarantee</h3>
                    </div>
                    <div>
                      <Datepicker
                        name="advancestart"
                        value={values.advancestart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />

                      <Datepicker
                        name="advanceend"
                        value={values.advanceend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />
                    </div>
                  </Box>
                  <Box
                    boxShadow={5}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ padding: 10, borderRadius: 10 }}
                  >
                    <div style={title}>
                      <h3>Insurance</h3>
                    </div>
                    <div>
                      <Datepicker
                        name="insurestart"
                        value={values.insurestart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />

                      <Datepicker
                        name="insureend"
                        value={values.insureend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        // onChange={this.onChange}
                      />
                    </div>
                  </Box>
                  <Textarea
                    name="comment"
                    value={values.comment}
                    label="Write a comment"
                    // onChange={this.onChange}
                  />
                </div>
              </div>
              <SubmitBtn />
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

///////////////////////////////////////////////////////////////////////
// "use strict";
// import React, { Component } from "react";
// import ReactDOM from 'react';
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       friends: [],
//       name: "",
//       id: "",
//       notes: ""
//     };
//     this.create = this.create.bind(this);
//     this.update = this.update.bind(this);
//     this.delete = this.delete.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   //   componentDidMount() {
//   //     // get all entities - GET
//   //     fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
//   //       "method": "GET",
//   //       "headers": {
//   //         "x-rapidapi-host": "fairestdb.p.rapidapi.com",
//   //         "x-rapidapi-key": API_KEY
//   //       }
//   //     })
//   //     .then(response => response.json())
//   //     .then(response => {
//   //       this.setState({
//   //         friends: response
//   //       })
//   //     })
//   //     .catch(err => { console.log(err);
//   //     });
//   //   }
//   create(e) {
//     // add entity - POST
//     e.preventDefault();
//     // creates entity
//     fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
//       method: "POST",
//       headers: {
//         "x-rapidapi-host": "fairestdb.p.rapidapi.com",
//         "x-rapidapi-key": API_KEY,
//         "content-type": "application/json",
//         accept: "application/json"
//       },
//       body: JSON.stringify({
//         name: this.state.name,
//         notes: this.state.notes
//       })
//     })
//       .then(response => response.json())
//       .then(response => {
//         console.log(response);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   update(e) {
//     // update entity - PUT
//     e.preventDefault();
//     // this will update entries with PUT
//     fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
//       method: "PUT",
//       headers: {
//         "x-rapidapi-host": "fairestdb.p.rapidapi.com",
//         "x-rapidapi-key": API_KEY,
//         "content-type": "application/json",
//         accept: "application/json"
//       },
//       body: JSON.stringify({
//         _id: this.state.id,
//         name: this.state.name,
//         notes: this.state.notes
//       })
//     })
//       .then(response => response.json())
//       .then(response => {
//         console.log(response);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   delete(e) {
//     // delete entity - DELETE
//     e.preventDefault();
//     // deletes entities
//     fetch(
//       `https://fairestdb.p.rapidapi.com/friend/friendModel/_id/${this.state.id}`,
//       {
//         method: "DELETE",
//         headers: {
//           "x-rapidapi-host": "fairestdb.p.rapidapi.com",
//           "x-rapidapi-key": API_KEY
//         }
//       }
//     )
//       .then(response => response.json())
//       .then(response => {
//         console.log(response);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   handleChange(changeObject) {
//     this.setState(changeObject);
//   }
//   render() {
//     return (
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-8">
//             <h1 className="display-4 text-center">Make An API Call in React</h1>
//             <form className="d-flex flex-column">
//               <legend className="text-center">Add-Update-Delete Friend</legend>
//               <label htmlFor="name">
//                 Friend Name:
//                 <input
//                   name="name"
//                   id="name"
//                   type="text"
//                   className="form-control"
//                   value={this.state.name}
//                   onChange={e => this.handleChange({ name: e.target.value })}
//                   required
//                 />
//               </label>
//               <label htmlFor="notes">
//                 Friend notes:
//                 <input
//                   name="notes"
//                   id="notes"
//                   type="test"
//                   className="form-control"
//                   value={this.state.notes}
//                   onChange={e => this.handleChange({ notes: e.target.value })}
//                   required
//                 />
//               </label>
//               <label htmlFor="id">
//                 Friend ID:
//                 <input
//                   name="id"
//                   id="id"
//                   type="text"
//                   className="form-control"
//                   value={this.state.id}
//                   onChange={e => this.handleChange({ id: e.target.value })}
//                 />
//               </label>
//               <button
//                 className="btn btn-primary"
//                 type="button"
//                 onClick={e => this.create(e)}
//               >
//                 Add
//               </button>
//               <button
//                 className="btn btn-info"
//                 type="button"
//                 onClick={e => this.update(e)}
//               >
//                 Update
//               </button>
//               <button
//                 className="btn btn-danger"
//                 type="button"
//                 onClick={e => this.delete(e)}
//               >
//                 Delete
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// let domContainer = document.querySelector("#App");
// ReactDOM.render(<App />, domContainer);
