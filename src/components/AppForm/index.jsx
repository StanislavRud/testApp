import React from "react";
import { Field, reduxForm } from 'redux-form';

const AppForm = () => {
    return (
        <form action="">
            <label>Add form</label>

        </form>
    );
};

export default reduxForm({ form: 'my-form' })(AppForm);