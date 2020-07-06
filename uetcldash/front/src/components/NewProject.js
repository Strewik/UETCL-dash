import { Formik } from "formik";
import { Form, Datepicker, SubmitBtn, Textarea } from "react-formik-ui";
import axios from "axios";
import * as Yup from "yup";
import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "react-toastify/dist/ReactToastify.css";

const formSchema = Yup.object().shape({
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
    this.state = {};
  }

  render() {
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
        validationSchema={formSchema}
        onSubmit={async (values, actions) => {
          await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/dates/",
            data: values
          })
            .then(response => {
              actions.setSubmitting(true);
              actions.resetForm();
              console.log(values);
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
                  <Textarea
                    name="comment"
                    value={values.comment}
                    label="Write a comment"
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
