import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from './validationSchema';

const FormValidation = () => {
    const initialValues = {
        name: '',
        email: '',
        age: '',
        date: '',
        time: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        gender: '',
        hobbies: [],
        terms: false,
    };

    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (values) => {
        setSubmittedData(values);
        console.log('Form Submitted:', values);
    };

    return (
        <div className="form">
            <div className="form_card">
                <h2>Form Validation</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form>
                            <div>
                                <label>Name:</label>
                                <Field type="text" name="name" />
                                <ErrorMessage name="name" component="div" className="error" />
                            </div>

                            <div>
                                <label>Email:</label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>

                            <div>
                                <label>Age:</label>
                                <Field type="number" name="age" />
                                <ErrorMessage name="age" component="div" className="error" />
                            </div>

                            <div>
                                <label>Date:</label>
                                <Field type="date" name="date" />
                                <ErrorMessage name="date" component="div" className="error" />
                            </div>

                            <div>
                                <label>Time:</label>
                                <Field type="time" name="time" />
                                <ErrorMessage name="time" component="div" className="error" />
                            </div>

                            <div>
                                <label>Password:</label>
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>

                            <div>
                                <label>Confirm Password:</label>
                                <Field type="password" name="confirmPassword" />
                                <ErrorMessage name="confirmPassword" component="div" className="error" />
                            </div>

                            <div>
                                <label>Phone:</label>
                                <Field type="text" name="phone" />
                                <ErrorMessage name="phone" component="div" className="error" />
                            </div>

                            <div>
                                <label>Address:</label>
                                <Field type="text" name="address" />
                                <ErrorMessage name="address" component="div" className="error" />
                            </div>

                            <div>
                                <label>Gender:</label>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div className="" style={{ display: "flex", alignItems: "center" }}>
                                        <Field type="radio" name="gender" value="male" />
                                        <p style={{ marginLeft: "10px" }}>Male</p>
                                    </div>
                                    <div className="" style={{ display: "flex", alignItems: "center", marginLeft: "1rem" }}>
                                        <Field type="radio" name="gender" value="female" />
                                        <p style={{ marginLeft: "10px" }}>Female</p>
                                    </div>
                                </div>
                                <ErrorMessage name="gender" component="div" className="error" />
                            </div>

                            <div style={{ margin: "1rem 0" }}>
                                <label>Hobbies:</label>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Field type="checkbox" name="hobbies" value="reading" />
                                        <p>
                                            Reading
                                        </p>
                                    </div>
                                    <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Field type="checkbox" name="hobbies" value="traveling" />
                                        <p>
                                            Traveling
                                        </p>
                                    </div>
                                    <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Field type="checkbox" name="hobbies" value="cooking" />
                                        <p>
                                            Cooking
                                        </p>
                                    </div>
                                </div>
                                <ErrorMessage name="hobbies" component="div" className="error" />
                            </div>

                            <div style={{ margin: "1rem 0" }}>
                                <label>
                                    <Field type="checkbox" name="terms" />
                                    I accept the terms and conditions
                                </label>
                                <ErrorMessage name="terms" component="div" className="error" />
                            </div>

                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>

            {submittedData && (
                <div className="form_data_card">
                    <h3>Submitted Data:</h3>
                    <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default FormValidation;
