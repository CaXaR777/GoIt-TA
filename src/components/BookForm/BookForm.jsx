import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import icons from "../../assets/icons.svg";
import { useDispatch } from "react-redux";
import { addBooking } from "../../redux/CarCatalog/slice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CalendarGlobalStyles } from "./DataPicker.styled";
import PropTypes from "prop-types";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  bookingDate: Yup.date().required("Booking date is required"),
  comment: Yup.string(),
});

export const BookForm = ({ item }) => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { setSubmitting }) => {
    const { bookingDate } = values;
    const id = nanoid();
    const dateString = `${bookingDate.getDate()}/${
      bookingDate.getMonth() + 1
    }/${bookingDate.getFullYear()}`;
    dispatch(
      addBooking({
        ...values,
        _id: id,
        bookingDate: dateString,
        itemName: item.name,
        itemLocation: item.location,
      })
    );

    // toast.success("Booking added");

    setSubmitting(false);
    window.location.reload();
  };

  return (
    <div className="w-[448px] p-[24px] mt-[44px] ml-[24px] border border-gray-300 rounded-[10px]">
      <h4 className="text-lg font-semibold mb-[8px]">
        Book your campervan now
      </h4>
      <p className="text-base font-normal mb-[24px] text-[#475467]">
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDate: "",
          comment: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form className="">
            <div className="relative mb-[14px]">
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="w-[400px] h-[56px]  pl-[18px]  border bg-[#F7F7F7] rounded focus:outline-none focus:bg-white"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="absolute  text-red-500 text-xsm top-[53px] left-0"
              />
            </div>

            <div className="relative mb-[14px]">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-[400px] h-[56px]  pl-[18px]  border bg-[#F7F7F7] rounded focus:outline-none focus:bg-white"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="absolute  text-red-500 text-xsm top-[53px] left-0"
              />
            </div>

            <div className="mb-[14px] relative flex items-center">
              <>
                <DatePicker
                  name="bookingDate"
                  selected={values.bookingDate}
                  onChange={(date) => setFieldValue("bookingDate", date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Booking Date"
                  minDate={new Date()}
                  calendarStartDay={1}
                  className="w-[400px] flex-1 h-[56px] pl-[18px] border bg-[#F7F7F7] rounded focus:outline-none focus:bg-white my-custom-datepicker"
                />
                <CalendarGlobalStyles />
              </>

              <ErrorMessage
                name="bookingDate"
                component="div"
                className="absolute z-10 text-red-500 text-xsm top-[53px] left-0"
              />
              <svg className="absolute w-[20px] h-[20px] right-[18px] top-[18px] ">
                <use href={`${icons}#icon-calendar`} />
              </svg>
            </div>

            <div className="mb-[24px]">
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className="w-[400px] h-[114px]  pl-[18px]  pt-[18px] border bg-[#F7F7F7] rounded focus:outline-none focus:bg-white"
              />
              <ErrorMessage
                name="comment"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-[160px] h-[56px] rounded-[200px] bg-[#D84343] hover:bg-[#E44848] focus:bg-[#E44848] text-white font-medium text-base tracking-[-0.01em]"
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

BookForm.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
