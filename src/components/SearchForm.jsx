import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

const SearchForm = ({ submitHandler }) => {
    return (
        <Formik
            initialValues={{ screenName: '' }}
            onSubmit={({ screenName }, { setSubmitting }) => {
                submitHandler(screenName);
                setSubmitting(false);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
                    <Form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="screenName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.screenName}
                        />
                        {errors.screenName && touched.screenName && errors.screenName}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
        </Formik>
    );
}

SearchForm.propTypes = {
    submitHandler: PropTypes.func.isRequired
};

export default SearchForm;
