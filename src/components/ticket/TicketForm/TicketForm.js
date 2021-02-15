import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import TextInput from 'components/inputs/TextInput';
import Button from 'components/common/Button';

const ticketParamsShape = yup.object().shape({
  title: yup.string().required('Title is required'),
  assignee: yup.string().required('Assignee is required'),
});

const TicketForm = ({ initialValues, onSubmit, btnLabel }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={ticketParamsShape} onSubmit={onSubmit}>
      {() => (
        <Form>
          <Field name="title" label="Name" type="text" component={TextInput} />
          <Field name="assignee" label="Assignee" type="text" component={TextInput} />
          <div className="text-right">
            <Button type="submit" color="primary">
              {btnLabel}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TicketForm;
