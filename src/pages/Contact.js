/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useContext, useState, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Helmet from "react-helmet";
import ContactStore from "../store/ContactStore";
import dataHero from "data-hero";

const schema = {
  email: {
    isEmpty: false,
    min: 8,
    message: "A valid email is required",
  },
  description: {
    min: 6,
    isEmpty: false,
    message: "a minimum of 6 characters is required",
  },
};
const Contact = () => {
  const toast = useRef(null);
  const store = useContext(ContactStore);
  const { sending, getInTouch, saved, message, resetProperty } = store;

  const [formState, setFormState] = useState({
    values: {
      id: "",
      fullname: "",
      email: "",
      description: "",
      phone: "",
    },
    touched: {},
    errors: {},
  });
  const { touched, errors, values, isValid } = formState;

  useEffect(() => {
    const errors = dataHero.validate(schema, values);
    setFormState((formState) => ({
      ...formState,
      isValid: errors.description.error || errors.email.error ? false : true,
      errors: errors || {},
    }));
  }, [values]);

  const handleChange = (event) => {
    event.persist();
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const hasError = (field) => touched[field] && errors[field].error;

  const handleSubmit = (e) => {
    e.preventDefault();
    getInTouch(values);
  };
  useEffect(() => {
    if (saved) {
      toast.current.show({
        severity: "success",
        summary: "Success Message",
        detail: message,
      });
     resetForm();
    }
    return () => {
      resetProperty("message", "");
      resetProperty("saved", false);
     resetForm();
    };
  }, [saved]);

  const resetForm = () => {
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        id: "",
        fullname: "",
        email: "",
        description: "",
        phone: "",
      },
      touched: {
        ...prev.touched,
        fullname: false, 
        email: false,
        phone: false,
        description: false,
      },
      errors: {},
    }));
  };
  return (
    <Fragment>
      <Helmet>
        <title>Contact us Page</title>
      </Helmet>

      <div className="p-d-flex p-flex-column p-jc-between p-ac-between">
        {/* <form> */}
        <p>
          For all enquiries, please submit a contact form and we will endeavour
          to get back to you within 24 hours.{" "}
        </p>
        <h4>Get in touch</h4>
        <div className="p-grid">
          <div className="p-col-6">
            <span className="p-float-label">
              <InputText
                id="fullname"
                name="fullname"
                value={values.fullname || ""}
                onChange={handleChange}
               className="w-100"
              />
              <label htmlFor="fullname">Your name</label>
            </span>
          </div>
          <div className="p-col-6">
            <span className="p-float-label">
              <InputText
                id="email"
                name="email"
                value={values.email || ""}
                onChange={handleChange}
                aria-describedby="email-help"
                className={`w-100  ${
                  hasError("email") ? "p-invalid" : null
                } " p-d-block"`}
              />
              <small id="email-help" className="p-error p-d-block">
                {hasError("email")
                  ? errors.email && errors.email.message
                  : null}
              </small>
              <label htmlFor="email">Your email</label>
            </span>
          </div>
        </div>
        <div className="p-grid">
          <div className="p-col-12">
            <span className="p-float-label">
              <InputText
                id="phone"
                name="phone"
                value={values.phone || ""}
                onChange={handleChange}
                 className="w-100"
              />
              <label htmlFor="phone">Phone</label>
            </span>
          </div>
        </div>

        <div className="p-grid">
          <div className="p-col-12">
            <span className="p-float-label">
              <InputTextarea
                id="description"
                rows="4"
                name="description"
                value={values.description || ""}
                onChange={handleChange}
                className="w-100"
              />
              <label htmlFor="description">Your message</label>
            </span>
          </div>
        </div>
        <Button
          label="Send Message"
          // icon="pi pi-check"
          className="p-button-secondary p-mr-2 p-mb-2"
          onClick={handleSubmit}
          disabled={!isValid || sending}
          loading={sending}
          loadingOptions={{ position: "right" }}
        />
        {/* </form> */}
      </div>
  
      <Toast ref={toast} position="top-right" />
    </Fragment>
  );
};

export default observer(Contact);
