import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {initialize, Field, reduxForm, getFormValues} from 'redux-form';

let AppForm = ({formValues, initialize, error, handleSubmit, pristine, reset, submitting }) => {
    useEffect(() => {
        console.log(formValues);
    }, [formValues]);

    useEffect(() => {
        initialize({});
    }, []);

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && error && <span>{error}</span>}
            </div>
        </div>
    )

    return (
        <form action="">
            <label>Add form</label>
            <Field
                name="name"
                component={renderField}
                type="text"
                label="Name"
            />
            <Field
                name="text"
                component={renderField}
                type="text"
                label="Text"
            />
            <button type="submit" disabled={submitting}>
                Log In
            </button>
        </form>
    );
};

AppForm = reduxForm({form: 'my-form'})(AppForm);

const mapStateToProps = state => ({
    formValues: getFormValues('my-form')(state),
});

const mapDispatchToProps = {
    initialize,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppForm);