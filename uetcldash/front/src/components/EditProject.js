// import { Formik } from "formik";
// import { Form, Datepicker, Input, Button } from "react-formik-ui";
// import axios from "axios";
// import * as Yup from "yup";
// import React, { Component } from "react";
// import Box from "@material-ui/core/Box";
// import "react-toastify/dist/ReactToastify.css";
// // import styles from './styles.module.css';

// /////////////////////////////////////
// const formSchema = Yup.object().shape({
//   project: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!"),

//   rapstart: Yup.date(),
//   rapend: Yup.date(),

//   pdpstart: Yup.date(),
//   pdpend: Yup.date(),

//   resettlestart: Yup.date(),
//   resettleend: Yup.date().min(
//     Yup.ref("resettlestart"),
//     "End date can't be before start date"
//   ),
//   supervisionstart: Yup.date(),
//   supervisionend: Yup.date().min(
//     Yup.ref("supervisionstart"),
//     "End date can't be before start date"
//   ),
//   epcstart: Yup.date(),
//   epcend: Yup.date().min(
//     Yup.ref("epcstart"),
//     "End date can't be before start date"
//   ),
//   performstart: Yup.date(),
//   performend: Yup.date().min(
//     Yup.ref("performstart"),
//     "End date can't be before start date"
//   ),
//   advancestart: Yup.date(),
//   advanceend: Yup.date().min(
//     Yup.ref("advancestart"),
//     "End date can't be before start date"
//   ),
//   insurestart: Yup.date(),
//   insureend: Yup.date().min(
//     Yup.ref("insurestart"),
//     "End date can't be before start date"
//   )
// });

// // const initialValues = {
// //   project: "",
// //   rapstart: "",
// //   rapend: "",
// //   pdpstart: "",
// //   pdpend: "",
// //   resettlestart: "",
// //   resettleend: "",
// //   supervisionstart: "",
// //   supervisionend: "",
// //   epcstart: "",
// //   epcend: "",
// //   performstart: "",
// //   performend: "",
// //   advancestart: "",
// //   advanceend: "",
// //   insurestart: "",
// //   insureend: "",
// //   comment: ""
// // };

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

//   componentDidMount = () => {
//     axios
//       .get(`http://localhost:8000/api/dates/${this.props.match.params.id}/`)
//       .then(res => {
//         this.setState({ item: res.data });
//       })
//       .catch(err => console.log(err));
//   };

//   changeHandler = event => {
//     this.setState({
//       project: event.target.value,
//       rapstart: event.target.value,
//       rapend: event.target.value,
//       pdpstart: event.target.value,
//       pdpend: event.target.value,
//       resettlestart: event.target.value,
//       resettleend: event.target.value,
//       supervisionstart: event.target.value,
//       supervisionend: event.target.value,
//       epcstart: event.target.value,
//       epcend: event.target.value,
//       performstart: event.target.value,
//       performend: event.target.value,
//       advancestart: event.target.value,
//       advanceend: event.target.value,
//       insurestart: event.target.value,
//       insureend: event.target.value,
//       comment: event.target.value
//     });
//   };

//   handleChange = e => {
//     e.persist();

//     this.setState(prevState => ({
//       item: { ...prevState.item, [e.target.name]: e.target.value }
//     }));
//   };

//   render() {
//     const { history } = this.props;

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

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.getMeetupDetails();
    }

    getMeetupDetails(){
        let meetupId = this. props.match.params.id;
        axios
            .get(`http://localhost:8000/api/dates/${meetupId}/`)
            .then((response) => {
                this.setState(
                    {
                        id: response.data.id,
                        project: response.data.project,
                        rapstart: response.data.rapstart,
                        rapend: response.data.rapend,
                        pdpstart: response.data.pdpstart,
                        pdpend: response.data.pdpend,
                        resettlestart: response.data.resettlestart,
                        resettleend: response.data.resettleend,
                        supervisionstart: response.data.supervisionstart,
                        supervisionend: response.data.supervisionend,
                        epcstart: response.data.epcstart,
                        epcend: response.data.epcend,
                        performstart: response.data.performstart,
                        performend: response.data.performend,
                        advancestart: response.data.advancestart,
                        advanceend: response.data.advanceend,
                        insurestart: response.data.insurestart,
                        insureend: response.data.insureend,
                        comment: response.data.comment,
                    },
                    () => {
                        console.log(this.state);
                    }
                );
            })
            .catch((err) => console.log(err));
    }

    editMeetup(newMeetup) {
        axios
            .request({
                method: "put",
                url: `http://localhost:8000/api/dates/${this.state.id}/`,
                data: newMeetup,
            })
            .then((response) => {
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    }

    onSubmit(e) {
        const newMeetup = {
            project: this.ref.project.value,
            rapstart: this.refs.rapstart.value,
            rapend: this.refs.rapend.value,
            pdpstart: this.refs.pdpstart.value,
            pdpend: this.refs.pdpend.value,
            resettlestart: this.refs.resettlestart.value,
            resettleend: this.refs.resettleend.value,
            supervisionstart: this.refs.supervisionstart.value,
            supervisionend: this.refs.supervisionend.value,
            epcstart: this.refs.epcstart.value,
            epcend: this.refs.epcend.value,
            performstart: this.refs.performstart.value,
            performend: this.refs.performend.value,
            advancestart: this.refs.advancestart.value,
            advanceend: this.refs.advanceend.value,
            insurestart: this.refs.insurestart.value,
            insureend: this.refs.insureend.value,
            comment: this.refs.comment.value,
        };
        this.editMeetup(newMeetup);
        e.preventDefault();
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

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
                    <div className="input-field">
                        <input
                            type="text"
                            name="rapstart" 
                            ref="rapstart"
                            value={this.state.rapstart}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="rapstart">RAP Start</label>
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
                    <div className="input-field">
                        <input
                            type="text"
                            name="pdpstart"
                            ref="pdpstart"
                            value={this.state.pdpstart}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="pdpstart">
                            PDP Houses Contractor start
                        </label>
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
                    <div className="input-field">
                        <input
                            type="text"
                            name="resettlestart"
                            ref="resettlestart"
                            value={this.state.resettlestart}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="resettlestart">resettlestart</label>
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
                    <div className="input-field">
                        <input
                            type="text"
                            name="supervisionstart"
                            ref="supervisionstart"
                            value={this.state.supervisionstart}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="supervisionstart">
                            supervisionstart
                        </label>
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
                    <div className="input-field">
                        <input
                            type="text"
                            name="epcstart"
                            ref="epcstart"
                            value={this.state.epcstart}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="epcstart">epcstart</label>
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
                    <div className="input-field">
                        <input
                            type="text"
                            name="performstart"
                            ref="performstart"
                            value={this.state.performstart}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="performstart">performstart</label>
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
                    <div className="input-field">
                        <input
                            type="text"
                            name="advancestart"
                            ref="advancestart"
                            value={this.state.advancestart}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="advancestart">advancestart</label>
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
                    <div className="input-field">
                        <input
                            type="text"
                            name="insurestart"
                            ref="insurestart"
                            value={this.state.insurestart}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="insurestart">insurestart</label>
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            name="insureend"
                            ref="insureend"
                            value={this.state.insureend}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="insureend">insureend</label>
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            name="comment"
                            ref="comment"
                            value={this.state.comment}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="comment">comment</label>
                    </div>
                    <input type="submit" value="Save" className="btn" />
                </form>
            </div>
        );
    }
}

export default EditProject;
