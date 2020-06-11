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

let NewPro = yup.object().shape({
    project: yup.string().required("This field is required."),
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
                    validationSchema={NewPro}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ errors, handleChange, touched }) => (
                        <Form className={classes.form}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid item xs={12} sm={6}>
                                        <TextField
                                            error={
                                                errors.firstName &&
                                                touched.firstName
                                            }
                                            name="project"
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleChange}
                                            id="project"
                                            label="Project"
                                           
                                        />
                                    </Grid>
                                <Grid container spacing={2}>
                                    <Grid container>
                                        <Box
                                            boxShadow={5}
                                            bgcolor="background.paper"
                                            style={{ borderRadius: 10 }}
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
                                            style={{ borderRadius: 10 }}
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
                                            style={{ borderRadius: 10 }}
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
                                                        Resettlement Houses
                                                        Contractor
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
                                            style={{ borderRadius: 10 }}
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
                                            style={{ borderRadius: 10 }}
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
                                            style={{ borderRadius: 10 }}
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
                                            style={{ borderRadius: 10 }}
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
                                                        Advance Payment
                                                        Guarantee
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

                                    <Grid container>
                                        <Box
                                            boxShadow={5}
                                            bgcolor="background.paper"
                                            style={{ borderRadius: 10 }}
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

                                    </Grid>
                            </MuiPickersUtilsProvider>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    );
};
export default NewProject9;
