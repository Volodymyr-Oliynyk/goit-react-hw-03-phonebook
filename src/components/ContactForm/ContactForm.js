import React, { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import propTypes from 'prop-types';
import { Button } from 'components/common/CommonStyled';
import {
  ContactFormStyled,
  ContactLabel,
  ContactField,
} from './ContactFormStyled';

const schema = yup.object().shape({
  name: yup.string().min(2).required('Name is required'),
  number: yup
    .number()
    .min(12)
    .required('Name is required')
    .positive()
    .integer(),
});

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    console.log('values :>> ', values);
    const { name, number } = values;
    this.props.onSubmit(name, number);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.state}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <ContactFormStyled>
          <ContactLabel htmlFor="name">
            Name
            <ContactField
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name"/>
          </ContactLabel>

          <ContactLabel htmlFor="number">
            Number
            <ContactField
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number"/>
          </ContactLabel>
          <Button type="submit">Add contact</Button>
        </ContactFormStyled>
      </Formik>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  initialValues: propTypes.object,
  onSubmit: propTypes.func,
};
