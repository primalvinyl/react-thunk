import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { userRequest } from '../actions';

const Form = props => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{ screenName: props.screenName }}
            onSubmit={({ screenName }, { setSubmitting }) => {
                dispatch(userRequest(screenName));
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
                    <form onSubmit={handleSubmit}>
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
                    </form>
                )}
        </Formik>
    );
}

export default Form;
