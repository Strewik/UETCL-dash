import { Formik } from "formik";
import { Form, Datepicker, SubmitBtn, Textarea, Input } from "react-formik-ui";
import axios from "axios";
import * as Yup from "yup";
import React, { Component, useState, usEffect } from "react";
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
    ),
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
    comment: "",
};

export default class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/dates/2/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    isLoaded: true,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

//      const [initialValues, setInitialValues] = useState();

//   useEffect(() => {
//     getInitialValues().then(res => setInitialValues(res);
//     }, []);

    render() {
        const { items } = this.state;
        const { history } = this.props;
        const mystyle = {
            padding: "100px",
            fontFamily: "Arial",
        };
        const title = {
            padding: "25px",
        };
        return (
            <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={async (values, actions) => {
                    await axios({
                        method: "PATCH",
                        url: "http://127.0.0.1:8000/api/dates/2/",
                        data: values,
                    })
                        .then((response) => {
                            actions.setSubmitting(true);
                            actions.resetForm();
                            console.log(values);
                            // redirect to the homepage
                            history.push("/");
                        })
                        .catch((error) => {
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
                    setFieldValue,
                }) => (
                    <Form mode="themed">
                        <div style={mystyle}>
                            <div>
                                {/* {items.map((item) => (
                    <div key={item.id}> */}
                                <div>
                                    <Box
                                        boxShadow={5}
                                        bgcolor="background.paper"
                                        m={1}
                                        p={1}
                                        style={{
                                            padding: 10,
                                            borderRadius: 10,
                                        }}
                                    >
                                        <Input
                                            name="project"
                                            label="Project name"
                                            required
                                        />
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
                                        style={{
                                            padding: 10,
                                            borderRadius: 10,
                                        }}
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
                                        style={{
                                            padding: 10,
                                            borderRadius: 10,
                                        }}
                                    >
                                        <div style={title}>
                                            <h3>
                                                Resettlement Houses Consultant
                                            </h3>
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
                                        style={{
                                            padding: 10,
                                            borderRadius: 10,
                                        }}
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
                                        style={{
                                            padding: 10,
                                            borderRadius: 10,
                                        }}
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
                                        style={{
                                            padding: 10,
                                            borderRadius: 10,
                                        }}
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
                                        style={{
                                            padding: 10,
                                            borderRadius: 10,
                                        }}
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
                                        style={{
                                            padding: 10,
                                            borderRadius: 10,
                                        }}
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
                                {/* </div>
                            ))} */}
                            </div>
                            <SubmitBtn />
                        </div>
                    </Form>
                )}
            </Formik>
        );
    }
}

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// import { userService, alertService } from '@/_services';

// function AddEdit({ history, match }) {
//     const { id } = match.params;
//     const isAddMode = !id;

//     const initialValues = {
//         title: '',
//         firstName: '',
//         lastName: '',
//         email: '',
//         role: '',
//         password: '',
//         confirmPassword: ''
//     };

//     const validationSchema = Yup.object().shape({
//         title: Yup.string()
//             .required('Title is required'),
//         firstName: Yup.string()
//             .required('First Name is required'),
//         lastName: Yup.string()
//             .required('Last Name is required'),
//         email: Yup.string()
//             .email('Email is invalid')
//             .required('Email is required'),
//         role: Yup.string()
//             .required('Role is required'),
//         password: Yup.string()
//             .concat(isAddMode ? Yup.string().required('Password is required') : null)
//             .min(6, 'Password must be at least 6 characters'),
//         confirmPassword: Yup.string()
//             .when('password', (password, schema) => {
//                 if (password || isAddMode) return schema.required('Confirm Password is required');
//             })
//             .oneOf([Yup.ref('password')], 'Passwords must match')
//     });

//     function onSubmit(fields, { setStatus, setSubmitting }) {
//         setStatus();
//         if (isAddMode) {
//             createUser(fields, setSubmitting);
//         } else {
//             updateUser(id, fields, setSubmitting);
//         }
//     }

//     function createUser(fields, setSubmitting) {
//         userService.create(fields)
//             .then(() => {
//                 alertService.success('User added', { keepAfterRouteChange: true });
//                 history.push('.');
//             })
//             .catch(() => {
//                 setSubmitting(false);
//                 alertService.error(error);
//             });
//     }

//     function updateUser(id, fields, setSubmitting) {
//         userService.update(id, fields)
//             .then(() => {
//                 alertService.success('User updated', { keepAfterRouteChange: true });
//                 history.push('..');
//             })
//             .catch(error => {
//                 setSubmitting(false);
//                 alertService.error(error);
//             });
//     }

//     return (
//         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//             {({ errors, touched, isSubmitting, setFieldValue }) => {
//                 const [user, setUser] = useState({});
//                 const [showPassword, setShowPassword] = useState(false);

//                 useEffect(() => {
//                     if (!isAddMode) {
//                         // get user and set form fields
//                         userService.getById(id).then(user => {
//                             const fields = ['title', 'firstName', 'lastName', 'email', 'role'];
//                             fields.forEach(field => setFieldValue(field, user[field], false));
//                             setUser(user);
//                         });
//                     }
//                 }, []);

//                 return (
//                     <Form>
//                         <h1>{isAddMode ? 'Add User' : 'Edit User'}</h1>
//                         <div className="form-row">
//                             <div className="form-group col">
//                                 <label>Title</label>
//                                 <Field name="title" as="select" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
//                                     <option value=""></option>
//                                     <option value="Mr">Mr</option>
//                                     <option value="Mrs">Mrs</option>
//                                     <option value="Miss">Miss</option>
//                                     <option value="Ms">Ms</option>
//                                 </Field>
//                                 <ErrorMessage name="title" component="div" className="invalid-feedback" />
//                             </div>
//                             <div className="form-group col-5">
//                                 <label>First Name</label>
//                                 <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
//                                 <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
//                             </div>
//                             <div className="form-group col-5">
//                                 <label>Last Name</label>
//                                 <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
//                                 <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group col-7">
//                                 <label>Email</label>
//                                 <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
//                                 <ErrorMessage name="email" component="div" className="invalid-feedback" />
//                             </div>
//                             <div className="form-group col">
//                                 <label>Role</label>
//                                 <Field name="role" as="select" className={'form-control' + (errors.role && touched.role ? ' is-invalid' : '')}>
//                                     <option value=""></option>
//                                     <option value="User">User</option>
//                                     <option value="Admin">Admin</option>
//                                 </Field>
//                                 <ErrorMessage name="role" component="div" className="invalid-feedback" />
//                             </div>
//                         </div>
//                         {!isAddMode &&
//                             <div>
//                                 <h3 className="pt-3">Change Password</h3>
//                                 <p>Leave blank to keep the same password</p>
//                             </div>
//                         }
//                         <div className="form-row">
//                             <div className="form-group col">
//                                 <label>
//                                     Password
//                                     {!isAddMode &&
//                                         (!showPassword
//                                             ? <span> - <a onClick={() => setShowPassword(!showPassword)} className="text-primary">Show</a></span>
//                                             : <span> - {user.password}</span>
//                                         )
//                                     }
//                                 </label>
//                                 <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
//                                 <ErrorMessage name="password" component="div" className="invalid-feedback" />
//                             </div>
//                             <div className="form-group col">
//                                 <label>Confirm Password</label>
//                                 <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
//                                 <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <button type="submit" disabled={isSubmitting} className="btn btn-primary">
//                                 {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
//                                 Save
//                             </button>
//                             <Link to={isAddMode ? '.' : '..'} className="btn btn-link">Cancel</Link>
//                         </div>
//                     </Form>
//                 );
//             }}
//         </Formik>
//     );
// }

// export { AddEdit };
