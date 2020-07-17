import { Formik } from "formik";
import { Form, Datepicker, Input, Button } from "react-formik-ui";
import axios from "axios";
import * as Yup from "yup";
import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "react-toastify/dist/ReactToastify.css";
// import styles from './styles.module.css';

/////////////////////////////////////
const formSchema = Yup.object().shape({
  project: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("You must specify the Project name"),

  rapstart: Yup.date(),
  rapend: Yup.date().min(
    Yup.ref("rapstart"),
    "End date can't be before start date"
  ),
  pdpstart: Yup.date(),
  pdpend: Yup.date().min(
    Yup.ref("pdpstart"),
    "End date can't be before start date"
  ),
  resettlestart: Yup.date(),
  resettleend: Yup.date().min(
    Yup.ref("resettlestart"),
    "End date can't be before start date"
  ),
  supervisionstart: Yup.date(),
  supervisionend: Yup.date().min(
    Yup.ref("supervisionstart"),
    "End date can't be before start date"
  ),
  epcstart: Yup.date(),
  epcend: Yup.date().min(
    Yup.ref("epcstart"),
    "End date can't be before start date"
  ),
  performstart: Yup.date(),
  performend: Yup.date().min(
    Yup.ref("performstart"),
    "End date can't be before start date"
  ),
  advancestart: Yup.date(),
  advanceend: Yup.date().min(
    Yup.ref("advancestart"),
    "End date can't be before start date"
  ),
  insurestart: Yup.date(),
  insureend: Yup.date().min(
    Yup.ref("insurestart"),
    "End date can't be before start date"
  )
});

const initialValues = {
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
};

export default class NewProject extends Component {
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

  changeHandler = event => {
    this.setState({
      project: event.target.value,
      rapstart: event.target.value,
      rapend: event.target.value,
      pdpstart: event.target.value,
      pdpend: event.target.value,
      resettlestart: event.target.value,
      resettleend: event.target.value,
      supervisionstart: event.target.value,
      supervisionend: event.target.value,
      epcstart: event.target.value,
      epcend: event.target.value,
      performstart: event.target.value,
      performend: event.target.value,
      advancestart: event.target.value,
      advanceend: event.target.value,
      insurestart: event.target.value,
      insureend: event.target.value,
      comment: event.target.value
    });
  };

  handleChange = e => {
    e.persist();

    this.setState(prevState => ({
      item: { ...prevState.item, [e.target.name]: e.target.value }
    }));
  };

  render() {
    const { history } = this.props;

    const mystyle = {
      paddingLeft: "100px",
      paddingRight: "100px",
      fontFamily: "Arial"
    };
    const title = {
      padding: "1px"
    };

    return (
      <Formik
        initialValues={initialValues}
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
              // redirect to the homepage
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
                    {/* <Input
                      name="id"
                      // label="Project Id"
                      required
                      disabled
                      value={this.state.item.id}
                    /> */}

                    <Input
                      name="project"
                      // label="Project name"
                      // required
                      value={this.state.item.project}
                      // onChange={this.handleChange}
                    />

                    <div style={title}>
                      <h3>RAP Consultant</h3>
                    </div>
                    <div>
                      <Datepicker
                        name="rapstart"
                        // defaultValue={this.props.editrapstart}
                        // value={values.rapstart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.rapstart}
                        // onChange={this.changeHandler}
                        // onChange={this.handleChange}
                      />
                      <Datepicker
                        name="rapend"
                        // defaultValue={this.props.editrapend}
                        // value={values.rapend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.rapend}
                        // onChange={this.changeHandler}
                        // onChange={this.handleChange}
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
                        // defaultValue={this.props.editpdpstart}
                        // value={values.pdpstart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.pdpstart}
                        // onChange={this.changeHandler}
                      />
                      <Datepicker
                        name="pdpend"
                        // defaultValue={this.props.editpdpend}
                        // value={values.pdpend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.pdpend}
                        // onChange={this.changeHandler}
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
                        // defaultValue={this.props.editresettlestart}
                        // value={values.resettlestart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.resettlestart}
                        // onChange={this.changeHandler}
                      />
                      <Datepicker
                        name="resettleend"
                        // defaultValue={this.props.editresettleend}
                        // value={values.resettleend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.resettleend}
                        // onChange={this.changeHandler}
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
                        // defaultValue={this.props.editsupervisionstart}
                        // value={values.supervisionstart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.supervisionstart}
                        // onChange={this.changeHandler}
                      />
                      <Datepicker
                        name="supervisionend"
                        // defaultValue={this.props.editsupervisionend}
                        // value={values.supervisionend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.supervisionend}
                        // onChange={this.changeHandler}
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
                        // defaultValue={this.props.editepcstart}
                        // value={values.epcstart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.epcstart}
                        // onChange={this.changeHandler}
                      />
                      <Datepicker
                        name="epcend"
                        // defaultValue={this.props.editepcend}
                        // value={values.epcend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.epcend}
                        // onChange={this.changeHandler}
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
                        // defaultValue={this.props.editperformstart}
                        // value={values.performstart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.performstart}
                        // onChange={this.changeHandler}
                      />
                      <Datepicker
                        name="performend"
                        // defaultValue={this.props.editperformend}
                        // value={values.performend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.performend}
                        // onChange={this.changeHandler}
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
                        // defaultValue={this.props.editadvancestart}
                        // value={values.advancestart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.advancestart}
                        // onChange={this.changeHandler}
                      />
                      <Datepicker
                        name="advanceend"
                        // defaultValue={this.props.editadvanceend}
                        // value={values.advanceend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.advanceend}
                        // onChange={this.changeHandler}
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
                        // defaultValue={this.props.editinsurestart}
                        // value={values.insurestart}
                        label="Start date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.insurestart}
                        // onChange={this.changeHandler}
                      />
                      <Datepicker
                        name="insureend"
                        // defaultValue={this.props.editinsureend}
                        // value={values.insureend}
                        label="End date"
                        placeholder="DD.MM.YYYYY"
                        dateFormat="dd.MM.yyyy"
                        value={this.state.item.insureend}
                        // onChange={this.changeHandler}
                      />
                    </div>
                  </Box>
                  <div style={{ paddingTop: 50, width: "100%" }}>
                    <Input
                      name="comment"
                      // defaultValue={this.props.editcomment}
                      // value={values.comment}
                      label="Write a comment"
                      value={this.state.item.comment}
                      // onChange={this.changeHandler}
                    />
                  </div>
                </div>
              </div>

              <Button variant="primary" type="submit">
                Update Project
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}
