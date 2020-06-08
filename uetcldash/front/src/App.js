// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function App() {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
//       <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
//       <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
//       <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />
//       <select name="Title" ref={register({ required: true })}>
//         <option value="Mr">Mr</option>
//         <option value="Mrs">Mrs</option>
//         <option value="Miss">Miss</option>
//         <option value="Dr">Dr</option>
//       </select>

//       <input name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>
//       <input name="Developer" type="radio" value="No" ref={register({ required: true })}/>

//       <input type="submit" />
//     </form>
//   );
// }

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Formik } from "formik";
// import * as yup from "yup";
// import {
//     Form,
//     Radio,
//     Input,
//     Datepicker,
//     Select,
//     PhoneInput,
//     Toggle,
//     DropZone,
//     Textarea,
//     Checkbox,
//     SubmitBtn,
//     Button,
// } from "react-formik-ui";

// const formik = useFormik()
// const onSubmit = (data) => alert(JSON.stringify(data));

// const getSchema2 = () => {
//     return yup.object().shape({
//         Project: yup.string().required("Project name is required"),

//     });
// };
// const App = () => {
//     return (
//         <Formik
//             initialValues={{
//                 project: "",
//                 rapstart: "",
//                 rapend: "",
//                 dpdstart: "",
//                 dpdend: "",
//                 resettlestart: "",
//                 resettleend: "",
//                 supervisionstart: "",
//                 supervisionend: "",
//                 epcstart: "",
//                 epcend: "",
//                 performstart: "",
//                 performend: "",
//                 advancestart: "",
//                 advanceend: "",
//                 insurancestart: "",
//                 insuranceend: "",
//                 comment: "",

//             }}
//             validationSchema={getSchema2}
//             onSubmit={onSubmit}
//         >
//             {({ values }) => (
//                 <Form mode="themed">
//                     <fieldset>
//                         <legend>Project contract details</legend>
//                         <div style={{ margin: "25px", padding: "0px", color:"blue" }}>
//                             <Input
//                                 name="project"
//                                 label="Project name"
//                                 hint="This is a hint message"
//                                 required
//                             />
//                         </div>
//                         <div style={{ margin: "25px", padding: "5px" }}>
//                         <div style={{ margin: "25px", padding: "5px" }}>RAP</div>
//                         <Datepicker
//                             name="rapstart"
//                             label="Start Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter start date"
//                             onChange={formik.handleChange}
//         value={formik.values.rapstart}
//                         />
//                         <Datepicker
//                             name="rapend"
//                             label="End Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter expiry date"
//                             required
//                         />
//                         </div>
//                         <div style={{ margin: "25px", padding: "5px" }}>

//                         <div style={{ margin: "25px", padding: "5px" }}>PDP Houses Consultant</div>
//                         <Datepicker
//                             name="pdpstart"
//                             label="Start Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter start date"
//                             required
//                         />

//                         <Datepicker
//                             name="pdpend"
//                             label="End Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter expiry date"
//                             required
//                         />
//                         </div>

//                         <div style={{ margin: "25px", padding: "5px" }}>
//                         <div style={{ margin: "25px", padding: "5px" }}>Resettlement Houses Consultant</div>
//                         <Datepicker
//                             name="resettlestart"
//                             label="Start Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter start date"
//                             required
//                         />

//                         <Datepicker
//                             name="resettleend"
//                             label="End Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter expiry date"
//                             required
//                         />
//                         </div>
//                         <div style={{ margin: "25px", padding: "5px" }}>
//                         <div style={{ margin: "25px", padding: "5px" }}>Supervision Consultant</div>
//                         <Datepicker
//                             name="supervisionstart"
//                             label="Start Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter start date"
//                             required
//                         />

//                         <Datepicker
//                             name="supervisionend"
//                             label="End Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter expiry date"
//                             required
//                         />
//                         </div>
//                         <div style={{ margin: "25px", padding: "5px" }}>
//                         <div style={{ margin: "25px", padding: "5px" }}>EPC</div>
//                         <Datepicker
//                             name="epcstart"
//                             label="Start Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter start date"
//                             required
//                         />

//                         <Datepicker
//                             name="epcend"
//                             label="End Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter expiry date"
//                             required
//                         />
//                         </div>

//                         <div style={{ margin: "25px", padding: "5px" }}>
//                         <div style={{ margin: "25px", padding: "5px" }}>Performance Guarantee</div>
//                         <Datepicker
//                             name="performstart"
//                             label="Start Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter start date"
//                             required
//                         />

//                         <Datepicker
//                             name="performend"
//                             label="End Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter expiry date"
//                             required
//                         />
//                         </div>

//                         <div style={{ margin: "25px", padding: "5px" }}>
//                         <div style={{ margin: "25px", padding: "5px" }}>Advance Payment Guarantee</div>
//                         <Datepicker
//                             name="advancestart"
//                             label="Start Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter start date"
//                             required
//                         />
//                         <Datepicker
//                             name="advanceend"
//                             label="End Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter expiry date"
//                             required
//                         />
//                         </div>

//                         <div style={{ margin: "25px", padding: "5px" }}>
//                         <div style={{ margin: "25px", padding: "5px" }}>Insurance</div>
//                         <Datepicker
//                             name="isuranestart"
//                             label="Start Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter start date"
//                             required
//                         />

//                         <Datepicker
//                             name="insuranceend"
//                             label="End Date"
//                             dateFormat="dd.MM.yyyy"
//                             placeholder="dd.mm.yyyy"
//                             hint="Please enter expiry date"
//                             required
//                         />
//                         </div>

//                         <div style={{ margin: "25px", padding: "5px" }}>
//                         <Textarea
//                                 name="comment"
//                                 label="Comments"
//                                 hint="this is optional"
//                             />
//                             </div>

// <div>
//           <button type="submit">Submit</button>

//           <Button onClick={(() => alert('Cancel'))}>Cancel</Button>
//         </div>

//                     </fieldset>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default App;

import "date-fns";
import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DateFnsUtils from "@date-io/date-fns";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";

import { Formik, Form } from "formik";
import * as yup from "yup";

let SignupSchema = yup.object().shape({
    firstName: yup.string().required("This field is required."),
    lastName: yup.string().required("This field is required."),
    email: yup.string().email().required("This field is required."),
    password: yup
        .string()
        .min(6, "Password is too short.")
        .max(20, "Password is too long.")
        .required("This field is required."),
});

const useStyles = makeStyles((theme) => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const App = () => {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Project Contracts Form
                </Typography>
                <Formik
                    initialValues={{
                        project: "",
                        rapstart: "",
                        rapend: "",
                        dpdstart: "",
                        dpdend: "",
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
                        insurancestart: "",
                        insuranceend: "",
                        comment: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ errors, handleChange, touched }) => (
                        <Form className={classes.form}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container spacing={2}>
                                    <Grid container>
                                        <Box
                                            boxShadow={5}
                                            bgcolor="background.paper"
                                            style={{ borderRadius:10 }}
                                        >
                                            <Card
                                                className={classes.root}
                                                variant="outlined"
                                            >
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="h2"
                                                    >
                                                        RAP
                                                    </Typography>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="rapstart"
                                                            label="Start date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="rapend"
                                                            label="End date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    </Grid>

                                    <Grid container>
                                        <Box
                                            boxShadow={5}
                                            bgcolor="background.paper"
                                            style={{ borderRadius:10 }}
                                        >
                                            <Card
                                                className={classes.root}
                                                variant="outlined"
                                            >
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="h2"
                                                    >
                                                        PDP Houses Consultant
                                                    </Typography>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="dpdstart"
                                                            label="Start date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="pdpend"
                                                            label="End date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    </Grid>

                                    <Grid container>
                                        <Box
                                            boxShadow={5}
                                            bgcolor="background.paper"
                                            style={{ borderRadius:10 }}
                                        >
                                            <Card
                                                className={classes.root}
                                                variant="outlined"
                                            >
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="h2"
                                                    >
                                                        Resettlement Houses Contractor 
                                                    </Typography>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="resettlestart"
                                                            label="Start date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="resettleend"
                                                            label="End date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    </Grid>

                                    <Grid container>
                                        <Box
                                            boxShadow={5}
                                            bgcolor="background.paper"
                                            style={{ borderRadius:10 }}
                                        >
                                            <Card
                                                className={classes.root}
                                                variant="outlined"
                                            >
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="h2"
                                                    >
                                                        Supervision Consultant
                                                    </Typography>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="supervisionstart"
                                                            label="Start date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="supervisionend"
                                                            label="Start date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    </Grid>

                                    <Grid container>
                                        <Box
                                            boxShadow={5}
                                            bgcolor="background.paper"
                                            style={{ borderRadius:10 }}
                                        >
                                            <Card
                                                className={classes.root}
                                                variant="outlined"
                                            >
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="h2"
                                                    >
                                                        EPC
                                                    </Typography>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="epcstart"
                                                            label="Start date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="epcend"
                                                            label="Start date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    </Grid>

                                    <Grid container>
                                        <Box
                                            boxShadow={5}
                                            bgcolor="background.paper"
                                            style={{ borderRadius:10 }}
                                        >
                                            <Card
                                                className={classes.root}
                                                variant="outlined"
                                            >
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="h2"
                                                    >
                                                        Performance Guarantee
                                                    </Typography>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="performstart"
                                                            label="Start date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="performend"
                                                            label="End date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    </Grid>

                                    <Grid container>
                                        <Box
                                            boxShadow={5}
                                            bgcolor="background.paper"
                                            style={{ borderRadius:10 }}
                                        >
                                            <Card
                                                className={classes.root}
                                                variant="outlined"
                                            >
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="h2"
                                                    >
                                                        Advance Payment Guarantee
                                                    </Typography>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="advancestart"
                                                            label="Start date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="advanceend"
                                                            label="End date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    </Grid>

                                    <Grid container >
                                        <Box
                                            boxShadow={5}
                                            bgcolor="background.paper"
                                            style={{ borderRadius:10 }}
                                        >
                                            <Card
                                                className={classes.root}
                                                variant="outlined"
                                            >
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="h2"
                                                    >
                                                        Insurance
                                                    </Typography>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="insurancestart"
                                                            label="Start date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid
                                                        container
                                                        justify="space-around"
                                                    >
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="insuranceend"
                                                            label="End date"
                                                            value={selectedDate}
                                                            onChange={
                                                                handleDateChange
                                                            }
                                                            KeyboardButtonProps={{
                                                                "aria-label":
                                                                    "change date",
                                                            }}
                                                        />
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            error={
                                                errors.firstName &&
                                                touched.firstName
                                            }
                                            autoComplete="fname"
                                            name="firstName"
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleChange}
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            helperText={
                                                errors.firstName &&
                                                touched.firstName
                                                    ? errors.firstName
                                                    : null
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            error={
                                                errors.lastName &&
                                                touched.lastName
                                            }
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleChange}
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                            helperText={
                                                errors.lastName &&
                                                touched.lastName
                                                    ? errors.lastName
                                                    : null
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            error={
                                                errors.email && touched.email
                                            }
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleChange}
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            helperText={
                                                errors.email && touched.email
                                                    ? errors.email
                                                    : null
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            error={
                                                errors.password &&
                                                touched.password
                                            }
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleChange}
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            helperText={
                                                errors.password &&
                                                touched.password
                                                    ? errors.password
                                                    : null
                                            }
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign Up
                                </Button>
                            </MuiPickersUtilsProvider>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    );
};
export default App;
