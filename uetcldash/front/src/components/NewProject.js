import { Formik } from "formik";
import { Form, Datepicker, SubmitBtn, Textarea } from "react-formik-ui";
import axios from "axios";
import * as Yup from "yup";
import React, { Component } from "react";
import Box from "@material-ui/core/Box";
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
              // handleServerResponse(true, "Thanks!");
            })
            .catch(error => {
              actions.setSubmitting(true);
              // handleServerResponse(false, error.response.data.error);
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





// import { Formik } from "formik";
// import { Form, Datepicker, SubmitBtn, Textarea } from "react-formik-ui";

// import React, { Component } from "react";
// import Box from "@material-ui/core/Box";

// export default clasNewProject extends Component {
//   render() {
//     const mystyle = {
//       // color: "white",
//       // backgroundColor: "DodgerBlue",
//       padding: "100px",
//       fontFamily: "Arial"
//     };
//     const title = {
//       padding: "25px"
//     };
//     return (
//       <Formik
//         initialValues={{
//           dateExample4: ""
//         }}
//         onSubmit={data => alert(JSON.stringify(data))}
//       >
//         <Form mode="themed">
//           <div style={mystyle}>
//             <div>
//               <div>
//                 <Box
//                   boxShadow={5}
//                   bgcolor="background.paper"
//                   m={1}
//                   p={1}
//                   style={{ padding: 10, borderRadius: 10 }}
//                 >
//                   <div style={title}>
//                     <h3>RAP Consultant</h3>
//                   </div>
//                   <div>
//                     <Datepicker
//                       name="rapstart"
//                       label="Start date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />

//                     <Datepicker
//                       name="rapend"
//                       label="End date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />
//                   </div>
//                 </Box>
//                 <Box
//                   boxShadow={5}
//                   bgcolor="background.paper"
//                   m={1}
//                   p={1}
//                   style={{ padding: 10, borderRadius: 10 }}
//                 >
//                   <div style={title}>
//                     <h3>PDP Houses Consultant</h3>
//                   </div>
//                   <div>
//                     <Datepicker
//                       name="pdpstart"
//                       label="Start date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />

//                     <Datepicker
//                       name="pdpend"
//                       label="End date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />
//                   </div>
//                 </Box>
//                 <Box
//                   boxShadow={5}
//                   bgcolor="background.paper"
//                   m={1}
//                   p={1}
//                   style={{ padding: 10, borderRadius: 10 }}
//                 >
//                   <div style={title}>
//                     <h3>Resettlement Houses Consultant</h3>
//                   </div>
//                   <div>
//                     <Datepicker
//                       name="resettlestart"
//                       label="Start date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />

//                     <Datepicker
//                       name="resettleend"
//                       label="End date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />
//                   </div>
//                 </Box>
//                 <Box
//                   boxShadow={5}
//                   bgcolor="background.paper"
//                   m={1}
//                   p={1}
//                   style={{ padding: 10, borderRadius: 10 }}
//                 >
//                   <div style={title}>
//                     <h3>Supervision Consultant</h3>
//                   </div>
//                   <div>
//                     <Datepicker
//                       name="supervisionstart"
//                       label="Start date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />

//                     <Datepicker
//                       name="supervisionend"
//                       label="End date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />
//                   </div>
//                 </Box>
//                 <Box
//                   boxShadow={5}
//                   bgcolor="background.paper"
//                   m={1}
//                   p={1}
//                   style={{ padding: 10, borderRadius: 10 }}
//                 >
//                   <div style={title}>
//                     <h3>EPC</h3>
//                   </div>
//                   <div>
//                     <Datepicker
//                       name="epcstart"
//                       label="Start date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />

//                     <Datepicker
//                       name="epcend"
//                       label="End date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />
//                   </div>
//                 </Box>
//                 <Box
//                   boxShadow={5}
//                   bgcolor="background.paper"
//                   m={1}
//                   p={1}
//                   style={{ padding: 10, borderRadius: 10 }}
//                 >
//                   <div style={title}>
//                     <h3>Performance Guarantee</h3>
//                   </div>
//                   <div>
//                     <Datepicker
//                       name="performstart"
//                       label="Start date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />

//                     <Datepicker
//                       name="performend"
//                       label="End date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />
//                   </div>
//                 </Box>
//                 <Box
//                   boxShadow={5}
//                   bgcolor="background.paper"
//                   m={1}
//                   p={1}
//                   style={{ padding: 10, borderRadius: 10 }}
//                 >
//                   <div style={title}>
//                     <h3>Advance Payment Guarantee</h3>
//                   </div>
//                   <div>
//                     <Datepicker
//                       name="advancestart"
//                       label="Start date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />

//                     <Datepicker
//                       name="advanceend"
//                       label="End date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />
//                   </div>
//                 </Box>
//                 <Box
//                   boxShadow={5}
//                   bgcolor="background.paper"
//                   m={1}
//                   p={1}
//                   style={{ padding: 10, borderRadius: 10 }}
//                 >
//                   <div style={title}>
//                     <h3>insurance</h3>
//                   </div>
//                   <div>
//                     <Datepicker
//                       name="insurestart"
//                       label="Start date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />

//                     <Datepicker
//                       name="insureend"
//                       label="End date"
//                       placeholder="DD.MM.YYYYY"
//                       dateFormat="dd.MM.yyyy"
//                     />
//                   </div>
//                 </Box>

//                 <Textarea name="comment" label="Write a comment" />
//               </div>
//             </div>
//             <SubmitBtn />
//           </div>
//         </Form>
//       </Formik>
//     );
//   }
// }
