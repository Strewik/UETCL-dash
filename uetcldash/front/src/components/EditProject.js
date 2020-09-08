import { Formik } from "formik";
import { Form, Datepicker, Button, Input } from "react-formik-ui";
import * as Yup from "yup";
import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import cancel from "../images/cancel.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { oneProject, updateProject } from "../actions/projects";

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

class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    updateProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    oneProject: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.oneProject(this.props.match.params.id);
  }

  onSubmit = (values, { setSubmitting }) => {
    this.props.updateProject(this.props.match.params.id, values);
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

    return (
      <Formik
        enableReinitialize={true}
        initialValues={this.props.project}
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
              <button onClick={() => history.push("/")}>
                <img src={cancel} alt={"Cancel"} />
              </button>
            </div>
            <div style={mystyle}>
              <div>
                <div style={title}>
                  <h2>Edit Project</h2>
                </div>
                <div>
                  <div
                    style={{
                      paddingTop: 20,
                      width: "100%",
                      backgroundColor: "#fff"
                    }}
                  >
                    <Input
                      name="projectname"
                      type="text"
                      label="Project name"
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
                      <div>
                        <Datepicker
                          name="rapstart"
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date => setFieldValue("rapstart", date)}
                        />
                        <Datepicker
                          name="rapend"
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date => setFieldValue("rapend", date)}
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
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date => setFieldValue("pdpstart", date)}
                        />
                        <Datepicker
                          name="pdpend"
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date => setFieldValue("pdpend", date)}
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
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date =>
                            setFieldValue("resettlestart", date)
                          }
                        />
                        <Datepicker
                          name="resettleend"
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date => setFieldValue("resettleend", date)}
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
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date =>
                            setFieldValue("supervisionstart", date)
                          }
                        />
                        <Datepicker
                          name="supervisionend"
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date =>
                            setFieldValue("supervisionend", date)
                          }
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
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date => setFieldValue("epcstart", date)}
                        />
                        <Datepicker
                          name="epcend"
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date => setFieldValue("epcend", date)}
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
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date => setFieldValue("performstart", date)}
                        />
                        <Datepicker
                          name="performend"
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date => setFieldValue("performend", date)}
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
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date => setFieldValue("advancestart", date)}
                        />
                        <Datepicker
                          name="advanceend"
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date => setFieldValue("advanceend", date)}
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
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date => setFieldValue("insurestart", date)}
                        />
                        <Datepicker
                          name="insureend"
                          label="End date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          onChange={date => setFieldValue("insureend", date)}
                        />
                      </div>
                    </Box>
                  </div>
                  <div
                    style={{
                      paddingTop: 50,
                      width: "100%",
                      backgroundColor: "#fff"
                    }}
                  >
                    <Input name="comment" type="text" label="Write a comment" />
                  </div>
                </div>
              </div>
              <Button
                style={{
                  padding: 10,
                  borderRadius: 5,
                  width: "16%",
                  backgroundColor: "#1E90FF",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
                type="submit"
              >
                Update Project
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}
const mapStateToProps = state => ({
  project: state.projects.project
});

export default connect(mapStateToProps, { oneProject, updateProject })(
  EditProject
);
