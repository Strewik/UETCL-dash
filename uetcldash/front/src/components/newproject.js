import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />
      <select name="Title" ref={register({ required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>
      <input name="Developer" type="radio" value="No" ref={register({ required: true })}/>

      <input type="submit" />
    </form>
  );
}

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Formik } from "formik";
import * as yup from "yup";
import {
    Form,
    Radio,
    Input,
    Datepicker,
    Select,
    PhoneInput,
    Toggle,
    DropZone,
    Textarea,
    Checkbox,
    SubmitBtn,
    Button,
} from "react-formik-ui";

const formik = useFormik()
const onSubmit = (data) => alert(JSON.stringify(data));

const getSchema2 = () => {
    return yup.object().shape({
        Project: yup.string().required("Project name is required"),

    });
};
const App = () => {
    return (
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
            validationSchema={getSchema2}
            onSubmit={onSubmit}
        >
            {({ values }) => (
                <Form mode="themed">
                    <fieldset>
                        <legend>Project contract details</legend>
                        <div style={{ margin: "25px", padding: "0px", color:"blue" }}>
                            <Input
                                name="project"
                                label="Project name"
                                hint="This is a hint message"
                                required
                            />
                        </div>
                        <div style={{ margin: "25px", padding: "5px" }}>
                        <div style={{ margin: "25px", padding: "5px" }}>RAP</div>
                        <Datepicker
                            name="rapstart"
                            label="Start Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter start date"
                            onChange={formik.handleChange}
        value={formik.values.rapstart}
                        />
                        <Datepicker
                            name="rapend"
                            label="End Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter expiry date"
                            required
                        />
                        </div>
                        <div style={{ margin: "25px", padding: "5px" }}>

                        <div style={{ margin: "25px", padding: "5px" }}>PDP Houses Consultant</div>
                        <Datepicker
                            name="pdpstart"
                            label="Start Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter start date"
                            required
                        />

                        <Datepicker
                            name="pdpend"
                            label="End Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter expiry date"
                            required
                        />
                        </div>

                        <div style={{ margin: "25px", padding: "5px" }}>
                        <div style={{ margin: "25px", padding: "5px" }}>Resettlement Houses Consultant</div>
                        <Datepicker
                            name="resettlestart"
                            label="Start Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter start date"
                            required
                        />

                        <Datepicker
                            name="resettleend"
                            label="End Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter expiry date"
                            required
                        />
                        </div>
                        <div style={{ margin: "25px", padding: "5px" }}>
                        <div style={{ margin: "25px", padding: "5px" }}>Supervision Consultant</div>
                        <Datepicker
                            name="supervisionstart"
                            label="Start Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter start date"
                            required
                        />

                        <Datepicker
                            name="supervisionend"
                            label="End Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter expiry date"
                            required
                        />
                        </div>
                        <div style={{ margin: "25px", padding: "5px" }}>
                        <div style={{ margin: "25px", padding: "5px" }}>EPC</div>
                        <Datepicker
                            name="epcstart"
                            label="Start Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter start date"
                            required
                        />

                        <Datepicker
                            name="epcend"
                            label="End Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter expiry date"
                            required
                        />
                        </div>

                        <div style={{ margin: "25px", padding: "5px" }}>
                        <div style={{ margin: "25px", padding: "5px" }}>Performance Guarantee</div>
                        <Datepicker
                            name="performstart"
                            label="Start Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter start date"
                            required
                        />

                        <Datepicker
                            name="performend"
                            label="End Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter expiry date"
                            required
                        />
                        </div>

                        <div style={{ margin: "25px", padding: "5px" }}>
                        <div style={{ margin: "25px", padding: "5px" }}>Advance Payment Guarantee</div>
                        <Datepicker
                            name="advancestart"
                            label="Start Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter start date"
                            required
                        />
                        <Datepicker
                            name="advanceend"
                            label="End Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter expiry date"
                            required
                        />
                        </div>

                        <div style={{ margin: "25px", padding: "5px" }}>
                        <div style={{ margin: "25px", padding: "5px" }}>Insurance</div>
                        <Datepicker
                            name="isuranestart"
                            label="Start Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter start date"
                            required
                        />

                        <Datepicker
                            name="insuranceend"
                            label="End Date"
                            dateFormat="dd.MM.yyyy"
                            placeholder="dd.mm.yyyy"
                            hint="Please enter expiry date"
                            required
                        />
                        </div>

                        <div style={{ margin: "25px", padding: "5px" }}>
                        <Textarea
                                name="comment"
                                label="Comments"
                                hint="this is optional"
                            />
                            </div>

<div>
          <button type="submit">Submit</button>

          <Button onClick={(() => alert('Cancel'))}>Cancel</Button>
        </div>

                    </fieldset>
                </Form>
            )}
        </Formik>
    );
};

export default App;