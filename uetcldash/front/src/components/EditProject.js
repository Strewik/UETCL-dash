import { Formik } from "formik";
import { Form, Datepicker, Input, Button } from "react-formik-ui";
import axios from "axios";
import * as Yup from "yup";
import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

import cancel from "../images/cancel.png";

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
            <div className="butt">
              <button onClick={() => history.push("/")}>
                <img src={cancel} alt={"Cancel"} />
              </button>
            </div>
            <div style={mystyle}>
              <div>
                <div style={title}>
                  <h1>Edit Project</h1>
                </div>
                <div>
                  <Input
                    name="project"
                    label="Project name"
                    required
                    value={this.state.item.project}
                    onChange={this.handleChange}
                  />
                  <div style={{ display: "flex" }}>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h3>RAP Consultant</h3>
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
                    </Box>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h3>PDP Houses Consultant</h3>
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
                    </Box>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h3>Resettlement Houses Contractor</h3>
                      </div>
                      <div>
                        <Datepicker
                          name="resettlestart"
                          label="Start date"
                          placeholder="DD.MM.YYYYY"
                          dateFormat="dd.MM.yyyy"
                          selected={this.state.item.resettlestart}
                          onChange={date =>
                            setFieldValue("resettlestart", date)
                          }
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
                    </Box>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h3>Supervision Consultant</h3>
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
                        <h3>EPC</h3>
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
                    </Box>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h3>Performance Guarantee</h3>
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
                    </Box>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h3>Advance Payment Guarantee</h3>
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
                    </Box>
                    <Box
                      boxShadow={5}
                      bgcolor="background.paper"
                      m={1}
                      p={1}
                      style={{ padding: 10, borderRadius: 10, width: "30%" }}
                    >
                      <div style={title}>
                        <h3>Insurance</h3>
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
                  </div>
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
              <Button
                style={{
                  padding: 10,
                  borderRadius: 10,
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
