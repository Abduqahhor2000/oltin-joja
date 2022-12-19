import Select from "react-select";
import { error_svg } from "../../../../svg/admin";

const customStyles = {
  option: (provided) => ({
    ...provided,
    background: "white",
    color: "black",
    "&:hover": {
      background: "rgb(222, 235, 255)",
    },
  }),
  control: (provided) => ({
    ...provided,
    height: "42px",
    paddingLeft: "6px",
    borderRadius: "20px",
    fontSize: "15px",
    fontWeight: "400",
    border: 0,
    // This line disable the blue border
    boxShadow: "none",
  }),
  // menu: (provided) => ({
  //   ...provided,
  //  backgroundColor: "white"
  // }),
  placeholder: (provided) => ({
    ...provided,
   color: "rgba(154, 159, 165, 1)"
  }),
  // menu: (provided) => ({
  //   ...provided,
  //  backgroundColor: "white"
  // }),
  menuList: (provided) => ({
    ...provided,
    backgroundColor: "white",
  }),
  // dropdownIndicator: (provided)=> {
  //   return {
  //     ...provided,
  //     position: "absolute",
  //     right: "0px"
  //   };
  // },
  indicatorSeparator: (provided) => {
    return {
      ...provided,
      display: "none",
    };
  },
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return {
      ...provided,
      opacity,
      transition,
      // color: "rgba(0, 30, 80, 0.5)",
    };
  },
  menu: (provided) => {
    return {
      ...provided,
      zIndex: "1000",
      backgroundColor: "white",
    };
  },
};

export default function ReactSelect({
  handleChange,
  touched,
  values,
  errors,
  type,
  position,
}) {
  // console.log(handleChange, touched, values, errors, type, position);
  return (
    <div
      className={`relative w-full mb-5 ${
        errors[type] && touched[type] ? "mb-3" : ""
      }`}
    >
      <Select
        styles={customStyles}
        instanceId
        onChange={(value) => {
          handleChange({
            target: {
              value: value.value,
              name: type,
            },
          });
        }}
        placeholder={"Position"}
        // defaultValue={{ value: "", label: "Majority" }}
        // onBlur={() =>
        //   handleBlur({ target: { name: "majority" } })
        // }
        options={position}
        value={{
          value: values[type],
          label: values[type],
        }}
        // value={
        //   values[type] === ""
        //     ? { value: "", label: "Position" }
        //     : {
        //         value: values[type],
        //         label: values[type],
        //       }
        // }
        className={`peer border rounded h-11 w-full placeholder:!text-red-500 outline-none focus:border-Primary/03 duration-150 ${
          values[type] && !errors[type]
            ? "border-success"
            : errors[type] && touched[type]
            ? "border-alarm"
            : "border-Neutral/03"
        }`}
      />
      {errors[type] && touched[type] ? (
        <span className="text-alarm flex items-center pl-1">
          {error_svg}
          {errors[type]}
        </span>
      ) : null}
    </div>
  );
}
