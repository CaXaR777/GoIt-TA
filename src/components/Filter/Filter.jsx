import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/CarCatalog/filterSlice";

export const Filter = () => {
  const initialValues = {
    location: "",
    equipment: [],
    vehicleType: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(changeFilter(values));
  };
  return (
    <div className="w-[360px] mr-[64px]">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="location">Location</label>
              <Field type="text" id="location" name="location" />
            </div>
            <div>
              <p>Vehicle Equipment</p>
              <label>
                <Field type="checkbox" name="equipment" value="AC" />
                AC
              </label>
              <label>
                <Field type="checkbox" name="equipment" value="transmission" />
                Transmission
              </label>
              <label>
                <Field type="checkbox" name="equipment" value="kitchen" />
                Kitchen
              </label>
              <label>
                <Field type="checkbox" name="equipment" value="TV" />
                TV
              </label>
              <label>
                <Field type="checkbox" name="equipment" value="toilet" />
                Shower
              </label>
            </div>
            <div>
              <p>Vehicle Type </p>
              <label>
                <Field type="radio" name="vehicleType" value="panelTruck" />
                Van
              </label>
              <label>
                <Field
                  type="radio"
                  name="vehicleType"
                  value="fullyIntegrated"
                />
                Fully Integrated
              </label>
              <label>
                <Field type="radio" name="vehicleType" value="alcove" />
                Alcove
              </label>
            </div>
            <button type="submit">Apply Filters</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
// <button type="reset">Reset Filters</button>
