import { Formik } from "formik";
import {
  Form,
  Input,
  Datepicker,
  Select,
  Textarea,
  SubmitBtn
} from "react-formik-ui";
import axios from "axios";
import * as Yup from "yup";
import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "react-toastify/dist/ReactToastify.css";

const formSchema = Yup.object().shape({
  consultant: Yup.string().required("You must select a consultant"),

  projectname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("You must specify the Project name"),

  start: Yup.date().required("Start date must be specified"),

  end: Yup.date().min(Yup.ref("start"), "End date can't be before start date"),

  comment: Yup.string()
});

const initialValues = {
  consultant: "",
  projectname: "",
  start: "",
  end: "",
  comment: ""
};

export default class Contract extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const mystyle = {
      backgroundColor: "white",
      padding: 50,
      fontFamily: "Arial",
      width: "50%",
      height: "100%",
      margin: "auto",
      borderRadius: 10
    };
    const title = {
      marginBottom: "15px",
      marginTop: "10px"
    };

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={async (values, actions) => {
          await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/contract/",
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
        {({ values }) => (
          <Form mode="themed">
            <Box
              boxShadow={5}
              bgcolor="lightBlue"
              m={1}
              p={1}
              style={{ width: "99%", height: "620px" }}
            >
              <fieldset style={mystyle}>
                <h2 style={title}>Contract Form</h2>
                <Select
                  name="consultant"
                  placeholder="Select a consultant"
                  options={[
                    { value: "RAP consultant", label: "RAP consultant" },
                    {
                      value: "PDP Houses consultant",
                      label: "PDP Houses consultant"
                    },
                    {
                      value: "Resettlement Houses consultant",
                      label: "Resettlement Houses consultant"
                    },
                    {
                      value: "Supervision consultant",
                      label: "Supervision consultant"
                    },
                    { value: "EPC", label: "EPC" },
                    {
                      value: "Performance Guarantee",
                      label: "Performance Guarantee"
                    },
                    {
                      value: "Advance Payment Guarantee",
                      label: "Advance Payment Guarantee"
                    },
                    { value: "Insurance", label: "Insurance" }
                  ]}
                  required
                />

                <Input name="projectname" label="Project name" required />

                <Datepicker
                  name="start"
                  label="Start Date"
                  dateFormat="dd.MM.yyyy"
                  placeholder="dd.mm.yyyy"
                  required
                />

                <Datepicker
                  name="end"
                  label="End Date"
                  dateFormat="dd.MM.yyyy"
                  placeholder="dd.mm.yyyy"
                  required
                />
                <div>
                  <Textarea
                    name="comment"
                    label="Comment"
                    hint="this is optional"
                  />

                  <SubmitBtn
                    style={{
                      width: "90px",
                      height: "40px",
                      borderRadius: 10,
                      position: "relative",
                      marginBottom: "5px",
                      backgroundColor: "lightBlue"
                    }}
                  />
                </div>
              </fieldset>
            </Box>
          </Form>
        )}
      </Formik>
    );
  }
}

