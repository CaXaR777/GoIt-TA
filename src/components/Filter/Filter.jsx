import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/CarCatalog/filterSlice";
import icons from "../../assets/icons.svg";
import { FaWind } from "react-icons/fa";

export const Filter = () => {
  const initialValues = {
    location: "",
    equipment: [],
    vehicleType: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(changeFilter(values));
    console.log(values);
  };

  return (
    <div className="w-[360px] mr-[64px]">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <div className="relative mb-[32px]">
              <label htmlFor="location" className="mb-[8px]">
                Location
              </label>
              <Field
                type="text"
                id="location"
                name="location"
                className="w-[360px] h-[56px] pl-[44px]  border bg-[#F7F7F7] rounded-[10px] focus:outline-none focus:bg-white"
              />
              <svg className="w-[18px] absolute top-[42px] left-[18px] h-[20px] fill-white stroke-black ">
                <use href={`${icons}#icon-map-pin`} />
              </svg>
            </div>

            <p className="text-[#475467] text-base font-medium mb-[14px]">
              Filters
            </p>
            <div className="mb-[32px]">
              <p className="text-[#101828] pb-[24px] text-lg font-semibold border-b border-gray-300">
                Vehicle equipment
              </p>
              <div className="flex flex-wrap mt-[24px] gap-[10px] relative">
                <div>
                  <label className="w-[112px] h-[95px] justify-center items-center  text-msm font-medium   flex flex-col ">
                    <Field
                      type="checkbox"
                      name="equipment"
                      value="AC"
                      className={`appearance-none absolute w-[112px] h-[95px] items-center rounded-[10px] border ${
                        values.equipment.includes("AC")
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <FaWind className="w-[32px] h-[32px] mb-[8px]" /> AC
                  </label>
                </div>
                <div>
                  <label className="w-[112px] h-[95px] justify-center items-center  text-msm font-medium   flex flex-col ">
                    <Field
                      type="checkbox"
                      name="equipment"
                      value="transmission"
                      className={`appearance-none absolute w-[112px] h-[95px] items-center rounded-[10px] border ${
                        values.equipment.includes("transmission")
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <svg className="w-[32px] h-[32px] mb-[8px]">
                      <use href={`${icons}#icon-transmission`} />
                    </svg>
                    Automatic
                  </label>
                </div>
                <div>
                  <label className="w-[112px] h-[95px] justify-center items-center  text-msm font-medium   flex flex-col ">
                    <Field
                      type="checkbox"
                      name="equipment"
                      value="kitchen"
                      className={`appearance-none absolute w-[112px] h-[95px] items-center rounded-[10px] border ${
                        values.equipment.includes("kitchen")
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <svg className="w-[32px] h-[32px] mb-[8px]">
                      <use href={`${icons}#icon-kitchen`} />
                    </svg>
                    Kitchen
                  </label>
                </div>
                <div>
                  <label className="w-[112px] h-[95px] justify-center items-center  text-msm font-medium   flex flex-col ">
                    <Field
                      type="checkbox"
                      name="equipment"
                      value="TV"
                      className={`appearance-none absolute w-[112px] h-[95px] items-center rounded-[10px] border ${
                        values.equipment.includes("TV")
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <svg className="w-[32px] h-[32px] mb-[8px]">
                      <use href={`${icons}#icon-TV`} />
                    </svg>
                    TV
                  </label>
                </div>
                <div>
                  <label className="w-[112px] h-[95px] justify-center items-center  text-msm font-medium   flex flex-col ">
                    <Field
                      type="checkbox"
                      name="equipment"
                      value="toilet"
                      className={`appearance-none absolute w-[112px] h-[95px] items-center rounded-[10px] border ${
                        values.equipment.includes("toilet")
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <svg className="w-[32px] h-[32px] mb-[8px]">
                      <use href={`${icons}#icon-shower`} />
                    </svg>
                    Shower/WC
                  </label>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#101828] pb-[24px] text-lg font-semibold border-b border-gray-300">
                Vehicle Type{" "}
              </p>
              <div className="flex flex-wrap mt-[24px] gap-[10px] relative">
                <label className="w-[100px] h-[95px] justify-center items-center  text-msm font-medium   flex flex-col ">
                  <Field
                    type="radio"
                    name="vehicleType"
                    value="panelTruck"
                    className={`appearance-none absolute w-[112px] h-[95px] items-center rounded-[10px] border ${
                      values.vehicleType == "panelTruck"
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <svg className="w-[40px] h-[28px] mb-[8px]">
                    <use href={`${icons}#icon-van`} />
                  </svg>
                  Van
                </label>
                <label className="w-[128px] h-[95px] justify-center items-center  text-msm font-medium   flex flex-col ">
                  <Field
                    type="radio"
                    name="vehicleType"
                    value="fullyIntegrated"
                    className={`appearance-none absolute w-[112px] h-[95px] items-center rounded-[10px] border ${
                      values.vehicleType == "fullyIntegrated"
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <svg className="w-[40px] h-[28px] mb-[8px]">
                    <use href={`${icons}#icon-fully`} />
                  </svg>
                  Fully <span>Integrated</span>
                </label>
                <label className="w-[112px] h-[95px] justify-center items-center  text-msm font-medium   flex flex-col ">
                  <Field
                    type="radio"
                    name="vehicleType"
                    value="alcove"
                    className={`appearance-none absolute w-[112px] h-[95px] items-center rounded-[10px] border ${
                      values.vehicleType == "alcove"
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <svg className="w-[40px] h-[28px] mb-[8px]">
                    <use href={`${icons}#icon-alcove`} />
                  </svg>
                  Alcove
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-[173px] h-[56px] mt-[64px] rounded-[200px] bg-[#D84343] hover:bg-[#E44848] focus:bg-[#E44848] text-white font-medium text-base tracking-[-0.01em]"
            >
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
