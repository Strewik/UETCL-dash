import { Formik } from "formik";
import { Form, Datepicker, Input, Button } from "react-formik-ui";
import axios from "axios";
import * as Yup from "yup";
import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "react-toastify/dist/ReactToastify.css";

const formSchema = Yup.object().shape({
  project: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("You must specify the Project name"),

// export default class NewProject extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: {
//         project: "",
//         rapstart: "",
//         rapend: "",
//         pdpstart: "",
//         pdpend: "",
//         resettlestart: "",
//         resettleend: "",
//         supervisionstart: "",
//         supervisionend: "",
//         epcstart: "",
//         epcend: "",
//         performstart: "",
//         performend: "",
//         advancestart: "",
//         advanceend: "",
//         insurestart: "",
//         insureend: "",
//         comment: ""
//       }
//     };
//   }

export default class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        project: "",
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
      }
    };
  }
  componentDidMount = () => {
    axios
      .get(`http://localhost:8000/api/dates/${this.props.match.params.id}/`)
      .then(res => {
        this.setState({ item: res.data });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    e.persist();

//     const mystyle = {
//       paddingLeft: "100px",
//       paddingRight: "100px",
//       fontFamily: "Arial",
//     //   width: "40%",
//     };
//     const title = {
//       padding: "10px"
//     };

//     return (
//       <Formik
//         initialValues={this.state.item}
//         validationSchema={formSchema}
//         onSubmit={async (values, actions) => {
//           await axios({
//             method: "PATCH",
//             url: `http://127.0.0.1:8000/api/dates/${this.props.match.params.id}/`,
//             data: values
//           })
//             .then(response => {
//               actions.setSubmitting(true);
//               //   actions.resetForm();
//               console.log(values);
//               // redirect to the homepage
//               history.push("/");
//             })
//             .catch(error => {
//               actions.setSubmitting(true);
//             });
//         }}
//       >
//         {({
//           values,
//           errors,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//           setFieldValue
//         }) => (
//           <Form mode="themed">
//             <div style={mystyle}>
//               <div>
//                 <div style={title}>
//                   <h1>Edit Project</h1>
//                 </div>
//                 <div>
//                   <Box
//                     boxShadow={5}
//                     bgcolor="background.paper"
//                     m={1}
//                     p={1}
//                     style={{ padding: 10, borderRadius: 10, width:"40%" }}
//                   >
//                     {/* <Input
//                       name="id"
//                       // label="Project Id"
//                       required
//                       disabled
//                       value={this.state.item.id}
//                     /> */}

//                     <Input
//                       name="project"
//                       // label="Project name"
//                       // required
//                       value={this.state.item.project}
//                       // onChange={this.handleChange}
//                     />

//                     <div style={title}>
//                       <h3>RAP Consultant</h3>
//                     </div>
//                     <div>
//                       <Datepicker
//                         name="rapstart"
//                         // defaultValue={this.props.editrapstart}
//                         // value={values.rapstart}
//                         label="Start date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.rapstart}
//                         onChange={this.changeHandler}
//                         // onChange={this.handleChange}
//                       />
//                       <Datepicker
//                         name="rapend"
//                         // defaultValue={this.props.editrapend}
//                         // value={values.rapend}
//                         label="End date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.rapend}
//                         onChange={this.changeHandler}
//                         // onChange={this.handleChange}
//                       />
//                     </div>
//                   </Box>
//                   <Box
//                     boxShadow={5}
//                     bgcolor="background.paper"
//                     m={1}
//                     p={1}
//                     style={{ padding: 10, borderRadius: 10, width:"40%" }}
//                   >
//                     <div style={title}>
//                       <h3>PDP Houses Consultant</h3>
//                     </div>
//                     <div>
//                       <Datepicker
//                         name="pdpstart"
//                         // defaultValue={this.props.editpdpstart}
//                         // value={values.pdpstart}
//                         label="Start date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.pdpstart}
//                         onChange={this.changeHandler}
//                       />
//                       <Datepicker
//                         name="pdpend"
//                         // defaultValue={this.props.editpdpend}
//                         // value={values.pdpend}
//                         label="End date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.pdpend}
//                         onChange={this.changeHandler}
//                       />
//                     </div>
//                   </Box>
//                   <Box
//                     boxShadow={5}
//                     bgcolor="background.paper"
//                     m={1}
//                     p={1}
//                     style={{ padding: 10, borderRadius: 10, width:"40%" }}
//                   >
//                     <div style={title}>
//                       <h3>Resettlement Houses Consultant</h3>
//                     </div>
//                     <div>
//                       <Datepicker
//                         name="resettlestart"
//                         // defaultValue={this.props.editresettlestart}
//                         // value={values.resettlestart}
//                         label="Start date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.resettlestart}
//                         // onChange={this.changeHandler}
//                       />
//                       <Datepicker
//                         name="resettleend"
//                         // defaultValue={this.props.editresettleend}
//                         // value={values.resettleend}
//                         label="End date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.resettleend}
//                         // onChange={this.changeHandler}
//                       />
//                     </div>
//                   </Box>
//                   <Box
//                     boxShadow={5}
//                     bgcolor="background.paper"
//                     m={1}
//                     p={1}
//                     style={{ padding: 10, borderRadius: 10, width:"40%" }}
//                   >
//                     <div style={title}>
//                       <h3>Supervision Consultant</h3>
//                     </div>
//                     <div>
//                       <Datepicker
//                         name="supervisionstart"
//                         // defaultValue={this.props.editsupervisionstart}
//                         // value={values.supervisionstart}
//                         label="Start date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.supervisionstart}
//                         // onChange={this.changeHandler}
//                       />
//                       <Datepicker
//                         name="supervisionend"
//                         // defaultValue={this.props.editsupervisionend}
//                         // value={values.supervisionend}
//                         label="End date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.supervisionend}
//                         // onChange={this.changeHandler}
//                       />
//                     </div>
//                   </Box>
//                   <Box
//                     boxShadow={5}
//                     bgcolor="background.paper"
//                     m={1}
//                     p={1}
//                     style={{ padding: 10, borderRadius: 10, width:"40%" }}
//                   >
//                     <div style={title}>
//                       <h3>EPC</h3>
//                     </div>
//                     <div>
//                       <Datepicker
//                         name="epcstart"
//                         // defaultValue={this.props.editepcstart}
//                         // value={values.epcstart}
//                         label="Start date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.epcstart}
//                         // onChange={this.changeHandler}
//                       />
//                       <Datepicker
//                         name="epcend"
//                         // defaultValue={this.props.editepcend}
//                         // value={values.epcend}
//                         label="End date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.epcend}
//                         // onChange={this.changeHandler}
//                       />
//                     </div>
//                   </Box>
//                   <Box
//                     boxShadow={5}
//                     bgcolor="background.paper"
//                     m={1}
//                     p={1}
//                     style={{ padding: 10, borderRadius: 10, width:"40%" }}
//                   >
//                     <div style={title}>
//                       <h3>Performance Guarantee</h3>
//                     </div>
//                     <div>
//                       <Datepicker
//                         name="performstart"
//                         // defaultValue={this.props.editperformstart}
//                         // value={values.performstart}
//                         label="Start date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.performstart}
//                         // onChange={this.changeHandler}
//                       />
//                       <Datepicker
//                         name="performend"
//                         // defaultValue={this.props.editperformend}
//                         // value={values.performend}
//                         label="End date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.performend}
//                         // onChange={this.changeHandler}
//                       />
//                     </div>
//                   </Box>
//                   <Box
//                     boxShadow={5}
//                     bgcolor="background.paper"
//                     m={1}
//                     p={1}
//                     style={{ padding: 10, borderRadius: 10, width:"40%" }}
//                   >
//                     <div style={title}>
//                       <h3>Advance Payment Guarantee</h3>
//                     </div>
//                     <div>
//                       <Datepicker
//                         name="advancestart"
//                         // defaultValue={this.props.editadvancestart}
//                         // value={values.advancestart}
//                         label="Start date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.advancestart}
//                         // onChange={this.changeHandler}
//                       />
//                       <Datepicker
//                         name="advanceend"
//                         // defaultValue={this.props.editadvanceend}
//                         // value={values.advanceend}
//                         label="End date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.advanceend}
//                         // onChange={this.changeHandler}
//                       />
//                     </div>
//                   </Box>
//                   <Box
//                     boxShadow={5}
//                     bgcolor="background.paper"
//                     m={1}
//                     p={1}
//                     style={{ padding: 10, borderRadius: 10, width:"40%" }}
//                   >
//                     <div style={title}>
//                       <h3>Insurance</h3>
//                     </div>
//                     <div>
//                       <Datepicker
//                         name="insurestart"
//                         // defaultValue={this.props.editinsurestart}
//                         // value={values.insurestart}
//                         label="Start date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.insurestart}
//                         // onChange={this.changeHandler}
//                       />
//                       <Datepicker
//                         name="insureend"
//                         // defaultValue={this.props.editinsureend}
//                         // value={values.insureend}
//                         label="End date"
//                         placeholder="DD.MM.YYYYY"
//                         dateFormat="dd.MM.yyyy"
//                         value={this.state.item.insureend}
//                         // onChange={this.changeHandler}
//                       />
//                     </div>
//                   </Box>
//                   <div style={{ paddingTop: 50, width: "80%" }}>
//                     <Input
//                       name="comment"
//                       // defaultValue={this.props.editcomment}
//                       // value={values.comment}
//                       label="Write a comment"
//                       value={this.state.item.comment}
//                       // onChange={this.changeHandler}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <Button variant="primary" type="submit">
//                 Update Project
//               </Button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     );
//   }
// }

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            project: "",
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
            comment: "",
        };

    return (
      <Formik
        enableReinitialize={true}
        initialValues={this.state.item}
        validationSchema={formSchema}
        onSubmit={async (values, actions) => {
          await axios({
            method: "PUT",
            url: `http://127.0.0.1:8000/api/dates/${this.props.match.params.id}/`,
            data: values
          })
            .then(response => {
              actions.setSubmitting(true);
              //   actions.resetForm();
              console.log(values);
              history.push("/");
            })
            .catch(error => {
              actions.setSubmitting(true);
            });
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue
        }) => (
          <Form mode="themed">
            <div style={mystyle}>
              <div>
                <div style={title}>
                  <h1>Edit Project</h1>
                </div>
                <div>
                  <Box
                    boxShadow={5}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ padding: 10, borderRadius: 10 }}
                  >
                    <Input
                      name="project"
                      label="Project name"
                      required
                      value={this.state.item.project}
                      onChange={this.handleChange}
                    />

        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/">
                    Back
                </Link>
                <h1>Edit Project</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input
                            type="text"
                            name="project"
                            ref="project"
                            value={this.state.project}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="project">Project</label>
                    </div>
                    <div>
                      <Datepicker
                        name="rapstart"
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.rapstart}
                        onChange={date => setFieldValue("rapstart", date)}
                      />
                      <Datepicker
                        name="rapend"
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.rapend}
                        onChange={date => setFieldValue("rapend", date)}
                      />
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            name="rapend"
                            ref="rapend "
                            value={this.state.rapend}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="rapend">RAP End</label>
                    </div>
                    <div>
                      <Datepicker
                        name="pdpstart"
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.pdpstart}
                        onChange={date => setFieldValue("pdpstart", date)}
                      />
                      <Datepicker
                        name="pdpend"
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.pdpend}
                        onChange={date => setFieldValue("pdpend", date)}
                      />
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            name="pdpend"
                            ref="pdpend"
                            value={this.state.pdpend}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="pdpend">pdpend</label>
                    </div>
                    <div>
                      <Datepicker
                        name="resettlestart"
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.resettlestart}
                        onChange={date => setFieldValue("resettlestart", date)}
                      />
                      <Datepicker
                        name="resettleend"
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.resettleend}
                        onChange={date => setFieldValue("resettleend", date)}
                      />
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            name="resettleend"
                            ref="resettleend"
                            value={this.state.resettleend}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="resettleend">resettleend</label>
                    </div>
                    <div>
                      <Datepicker
                        name="supervisionstart"
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.supervisionstart}
                        onChange={date =>
                          setFieldValue("supervisionstart", date)
                        }
                      />
                      <Datepicker
                        name="supervisionend"
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.supervisionend}
                        onChange={date => setFieldValue("supervisionend", date)}
                      />
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            name="supervisionend"
                            ref="supervisionend"
                            value={this.state.supervisionend}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="supervisionend">supervisionend</label>
                    </div>
                    <div>
                      <Datepicker
                        name="epcstart"
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.epcstart}
                        onChange={date => setFieldValue("epcstart", date)}
                      />
                      <Datepicker
                        name="epcend"
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.epcend}
                        onChange={date => setFieldValue("epcend", date)}
                      />
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            name="epcend"
                            ref="epcend"
                            value={this.state.epcend}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="epcend">epcend</label>
                    </div>
                    <div>
                      <Datepicker
                        name="performstart"
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.performstart}
                        onChange={date => setFieldValue("performstart", date)}
                      />
                      <Datepicker
                        name="performend"
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.performend}
                        onChange={date => setFieldValue("performend", date)}
                      />
                    </div>
                    <div className="input-field">
                        <input
                            type="performend"
                            name="performend"
                            ref="performend"
                            value={this.state.performend}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="performend">performend</label>
                    </div>
                    <div>
                      <Datepicker
                        name="advancestart"
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.advancestart}
                        onChange={date => setFieldValue("advancestart", date)}
                      />
                      <Datepicker
                        name="advanceend"
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.advanceend}
                        onChange={date => setFieldValue("advanceend", date)}
                      />
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            name="advanceend"
                            ref="advanceend"
                            value={this.state.advanceend}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="advanceend">advanceend</label>
                    </div>
                    <div>
                      <Datepicker
                        name="insurestart"
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.insurestart}
                        onChange={date => setFieldValue("insurestart", date)}
                      />
                      <Datepicker
                        name="insureend"
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.item.insureend}
                        onChange={date => setFieldValue("insureend", date)}
                      />
                    </div>
                  </Box>
                  <div style={{ paddingTop: 50, width: "100%" }}>
                    <Input
                      name="comment"
                      label="Write a comment"
                      value={this.state.item.comment}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <Button variant="primary" type="submit">
                Update Project
              </Button>
            </div>
        );
    }
}

export default EditProject;
