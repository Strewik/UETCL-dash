import { Formik } from "formik";
import { Form, Datepicker, SubmitBtn, Textarea } from "react-formik-ui";

import React, { Component } from "react";
import Box from "@material-ui/core/Box";

export default class App extends Component {
    render() {
        const mystyle = {
            // color: "white",
            // backgroundColor: "DodgerBlue",
            padding: "100px",
            fontFamily: "Arial",
        };
        const title = {
            padding: "25px",
        };
        return (
            <Formik
                initialValues={{
                    dateExample4: "",
                }}
                onSubmit={(data) => alert(JSON.stringify(data))}
            >
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
                                            label="Start date"
                                            placeholder="DD.MM.YYYYY"
                                            dateFormat="dd.MM.yyyy"
                                        />

                                        <Datepicker
                                            name="rapend"
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
                                            label="Start date"
                                            placeholder="DD.MM.YYYYY"
                                            dateFormat="dd.MM.yyyy"
                                        />

                                        <Datepicker
                                            name="pdpend"
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
                                            label="Start date"
                                            placeholder="DD.MM.YYYYY"
                                            dateFormat="dd.MM.yyyy"
                                        />

                                        <Datepicker
                                            name="resettleend"
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
                                            label="Start date"
                                            placeholder="DD.MM.YYYYY"
                                            dateFormat="dd.MM.yyyy"
                                        />

                                        <Datepicker
                                            name="supervisionend"
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
                                            label="Start date"
                                            placeholder="DD.MM.YYYYY"
                                            dateFormat="dd.MM.yyyy"
                                        />

                                        <Datepicker
                                            name="epcend"
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
                                            label="Start date"
                                            placeholder="DD.MM.YYYYY"
                                            dateFormat="dd.MM.yyyy"
                                        />

                                        <Datepicker
                                            name="performend"
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
                                            label="Start date"
                                            placeholder="DD.MM.YYYYY"
                                            dateFormat="dd.MM.yyyy"
                                        />

                                        <Datepicker
                                            name="advanceend"
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
                                        <h3>insurance</h3>
                                    </div>
                                    <div>
                                        <Datepicker
                                            name="insurestart"
                                            label="Start date"
                                            placeholder="DD.MM.YYYYY"
                                            dateFormat="dd.MM.yyyy"
                                        />

                                        <Datepicker
                                            name="insureend"
                                            label="End date"
                                            placeholder="DD.MM.YYYYY"
                                            dateFormat="dd.MM.yyyy"
                                        />
                                    </div>
                                </Box>

                                <Textarea
                                    name="comment"
                                    label="Write a comment"
                                />
                            </div>
                        </div>
                        <SubmitBtn />
                    </div>
                </Form>
            </Formik>
        );
    }
}