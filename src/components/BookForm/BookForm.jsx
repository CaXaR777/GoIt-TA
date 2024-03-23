import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  bookingDate: Yup.date().required("Booking date is required").nullable(),
  comment: Yup.string(),
});

export const BookForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Send form data to server or perform other actions here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="w-[448px] mt-[44px] ml-[24px] h-[532px] border border-gray-300 rounded-[10px]">
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDate: null,
          comment: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(
          { isSubmitting, values, setFieldValue } // Додано values і setFieldValue
        ) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="bookingDate">Booking Date</label>
              <br />
              <DatePicker
                name="bookingDate"
                selected={values.bookingDate}
                onChange={(date) => setFieldValue("bookingDate", date)}
                dateFormat="dd/MM/yyyy"
                className="form-control"
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <Field as="textarea" name="comment" className="form-control" />
              <ErrorMessage
                name="comment"
                component="div"
                className="text-danger"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
