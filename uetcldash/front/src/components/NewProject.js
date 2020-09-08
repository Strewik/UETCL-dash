import { Formik } from "formik";
import { Form, Datepicker, Button, Textarea, Input } from "react-formik-ui";
import * as Yup from "yup";
import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import cancel from "../images/cancel.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProject } from "../actions/projects";

const formSchema = Yup.object().shape({
  projectname: Yup.string()
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
  projectname: "",
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

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectname: "",
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
  }

  static propTypes = {
    addProject: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = (values, { setSubmitting }) => {
    this.props.addProject(values);
    this.setSubmitting = setSubmitting;
    this.props.history.push("/display");
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
    const boxed = {
      width: "30%"
    };
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={this.onSubmit}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          setFieldTouched
        }) => (
          <Form mode="themed">
            <div className="butt">
              <button onClick={() => history.push("/display")}>
                <img src={cancel} alt={"Cancel"} />
              </button>
            </div>
            <div style={mystyle}>
              <div>
                <div style={title}>
                  <h2>New Project Form</h2>
                </div>
                <div>
                  <div
                    style={{
                      paddingTop: 10,
                      width: "100%",
                      backgroundColor: "#fff"
                    }}
                  >
                    <Input
                      name="projectname"
                      label="Project Name"
                      value={values.projectname}
                      required
                    />
                  </div>
                  <div style={{ display: "flex", width: "100%" }}>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h5>RAP Consultant</h5>
                      </div>
                      <div style={boxed}>
                        <Datepicker
                          name="rapstart"
                          value={values.rapstart}
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                        <Datepicker
                          name="rapend"
                          value={values.rapend}
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                      </div>
                    </Box>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h5>PDP Houses Consultant</h5>
                      </div>
                      <div>
                        <Datepicker
                          name="pdpstart"
                          value={values.pdpstart}
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                        <Datepicker
                          name="pdpend"
                          value={values.pdpend}
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                      </div>
                    </Box>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h5>Resettlement Houses Contractor</h5>
                      </div>
                      <div>
                        <Datepicker
                          name="resettlestart"
                          value={values.resettlestart}
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                        <Datepicker
                          name="resettleend"
                          value={values.resettleend}
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                      </div>
                    </Box>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h5>Supervision Consultant</h5>
                      </div>
                      <div>
                        <Datepicker
                          name="supervisionstart"
                          value={values.supervisionstart}
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                        <Datepicker
                          name="supervisionend"
                          value={values.supervisionend}
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                      </div>
                    </Box>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h5>EPC</h5>
                      </div>
                      <div>
                        <Datepicker
                          name="epcstart"
                          value={values.epcstart}
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                        <Datepicker
                          name="epcend"
                          value={values.epcend}
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                      </div>
                    </Box>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h5>Performance Guarantee</h5>
                      </div>
                      <div>
                        <Datepicker
                          name="performstart"
                          value={values.performstart}
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                        <Datepicker
                          name="performend"
                          value={values.performend}
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                      </div>
                    </Box>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h5>Advance Payment Guarantee</h5>
                      </div>
                      <div>
                        <Datepicker
                          name="advancestart"
                          value={values.advancestart}
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                        <Datepicker
                          name="advanceend"
                          value={values.advanceend}
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                      </div>
                    </Box>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h5>Insurance</h5>
                      </div>
                      <div>
                        <Datepicker
                          name="insurestart"
                          value={values.insurestart}
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                        <Datepicker
                          name="insureend"
                          value={values.insureend}
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                        />
                      </div>
                    </Box>
                  </div>
                  <div
                    style={{
                      marginTop: 10,
                      paddingTop: 10,
                      width: "100%",
                      backgroundColor: "#fff"
                    }}
                  >
                    <Textarea
                      name="comment"
                      value={values.comment}
                      label="Write a Comment"
                    />
                  </div>
                </div>
              </div>
              <Button
                style={{
                  padding: 10,
                  borderRadius: 5,
                  width: "15%",
                  backgroundColor: "#1E90FF",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "20px"
                }}
                type="submit"
              >
                Save Project
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default connect(null, { addProject })(NewProject);
