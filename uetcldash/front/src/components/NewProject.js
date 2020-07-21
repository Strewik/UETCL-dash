import { Formik } from "formik";
import { Form, Datepicker, Button, Textarea, Input } from "react-formik-ui";
import axios from "axios";
import * as Yup from "yup";
// import Moment from "moment";
import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "react-toastify/dist/ReactToastify.css";
// import styles from './styles.module.css';

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
    this.state = {};
  }

  // changeHandler = event => {
  //   this.setState({
  //     project: event.target.value,
  //     rapstart: event.target.value,
  //     rapend: event.target.value,
  //     pdpstart: event.target.value,
  //     pdpend: event.target.value,
  //     resettlestart: event.target.value,
  //     resettleend: event.target.value,
  //     supervisionstart: event.target.value,
  //     supervisionend: event.target.value,
  //     epcstart: event.target.value,
  //     epcend: event.target.value,
  //     performstart: event.target.value,
  //     performend: event.target.value,
  //     advancestart: event.target.value,
  //     advanceend: event.target.value,
  //     insurestart: event.target.value,
  //     insureend: event.target.value,
  //     comment: event.target.value
  //   });
  // };

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
          // const date = Date(values.rapstart);
          // const formattedDate = Moment(date).format("LL");
          // const yourDate1 = values.rapstart;
          // const yourDate2 = values.rapend;
          // const yourDate3 = values.pdpstart;
          // const yourDate4 = values.pdpend;
          // const yourDate5 = values.resettlestart;
          // const yourDate6 = values.resettleend;
          // const yourDate7 = values.supervisionstart;
          // const yourDate8 = values.supervisionend;
          // const yourDate9 = values.epcstart;
          // const yourDate10 = values.epcend;
          // const yourDate11 = values.performstart;
          // const yourDate12 = values.performend;
          // const yourDate13 = values.advancestart;
          // const yourDate14 = values.advanceend;
          // const yourDate15 = values.insurestart;
          // const yourDate16 = values.insureend;

          // const yourFormattedDate1 =
          //   yourDate1.getDate() +
          //   "-" +
          //   (yourDate1.getMonth() + 1) +
          //   "-" +
          //   yourDate1.getFullYear();

          // const yourFormattedDate2 =
          //   yourDate2.getDate() +
          //   "-" +
          //   (yourDate2.getMonth() + 1) +
          //   "-" +
          //   yourDate2.getFullYear();

          // const yourFormattedDate3 =
          //   yourDate3.getDate() +
          //   "-" +
          //   (yourDate3.getMonth() + 1) +
          //   "-" +
          //   yourDate3.getFullYear();

          // const yourFormattedDate4 =
          //   yourDate4.getDate() +
          //   "-" +
          //   (yourDate4.getMonth() + 1) +
          //   "-" +
          //   yourDate4.getFullYear();

          // const yourFormattedDate5 =
          //   yourDate5.getDate() +
          //   "-" +
          //   (yourDate5.getMonth() + 1) +
          //   "-" +
          //   yourDate5.getFullYear();

          // const yourFormattedDate6 =
          //   yourDate6.getDate() +
          //   "-" +
          //   (yourDate6.getMonth() + 1) +
          //   "-" +
          //   yourDate6.getFullYear();

          // const yourFormattedDate7 =
          //   yourDate7.getDate() +
          //   "-" +
          //   (yourDate7.getMonth() + 1) +
          //   "-" +
          //   yourDate7.getFullYear();

          // const yourFormattedDate8 =
          //   yourDate8.getDate() +
          //   "-" +
          //   (yourDate8.getMonth() + 1) +
          //   "-" +
          //   yourDate8.getFullYear();

          // const yourFormattedDate9 =
          //   yourDate9.getDate() +
          //   "-" +
          //   (yourDate9.getMonth() + 1) +
          //   "-" +
          //   yourDate9.getFullYear();

          // const yourFormattedDate10 =
          //   yourDate10.getDate() +
          //   "-" +
          //   (yourDate10.getMonth() + 1) +
          //   "-" +
          //   yourDate10.getFullYear();

          // const yourFormattedDate11 =
          //   yourDate11.getDate() +
          //   "-" +
          //   (yourDate11.getMonth() + 1) +
          //   "-" +
          //   yourDate11.getFullYear();

          // const yourFormattedDate12 =
          //   yourDate12.getDate() +
          //   "-" +
          //   (yourDate12.getMonth() + 1) +
          //   "-" +
          //   yourDate12.getFullYear();

          // const yourFormattedDate13 =
          //   yourDate13.getDate() +
          //   "-" +
          //   (yourDate13.getMonth() + 1) +
          //   "-" +
          //   yourDate13.getFullYear();

          // const yourFormattedDate14 =
          //   yourDate14.getDate() +
          //   "-" +
          //   (yourDate14.getMonth() + 1) +
          //   "-" +
          //   yourDate14.getFullYear();

          // const yourFormattedDate15 =
          //   yourDate15.getDate() +
          //   "-" +
          //   (yourDate15.getMonth() + 1) +
          //   "-" +
          //   yourDate15.getFullYear();

          // const yourFormattedDate16 =
          //   yourDate16.getDate() +
          //   "-" +
          //   (yourDate16.getMonth() + 1) +
          //   "-" +
          //   yourDate16.getFullYear();

          // const updatedValues = {
            // ...values, formattedDate
          //   rapstart: yourFormattedDate1,
          //   rapend: yourFormattedDate2,
          //   pdpstart: yourFormattedDate3,
          //   pdpend: yourFormattedDate4,
          //   resettlestart: yourFormattedDate5,
          //   resettleend: yourFormattedDate6,
          //   supervisionstart: yourFormattedDate7,
          //   supervisionend: yourFormattedDate8,
          //   epcstart: yourFormattedDate9,
          //   epcend: yourFormattedDate10,
          //   performstart: yourFormattedDate11,
          //   performend: yourFormattedDate12,
          //   advancestart: yourFormattedDate13,
          //   advanceend: yourFormattedDate14,
          //   insurestart: yourFormattedDate15,
          //   insureend: yourFormattedDate16
          // };
          // setState();
          await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/dates/",
            data: values
            // data: updatedValues
          })
            .then(response => {
              actions.setSubmitting(true);
              actions.resetForm();
              // console.log(updatedValues);
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
                  <h1>Add Project Form</h1>
                </div>
                <div>
                  <Box
                    boxShadow={5}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ padding: 10, borderRadius: 10 }}
                  >
                    <Input name="project" label="Project name" required />
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
              <Button variant="primary" type="submit">
                Save Project
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}
