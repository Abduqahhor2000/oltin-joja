import React, { useState } from "react";
import { success_svg, error_svg, close_eye_svg, open_eye_svg } from "../../../../svg/admin";

function Input({
  handleChange,
  touched,
  values,
  errors,
  type,
  placeholderText,
  inputType,
  required,
}) {
  const [isOpenPass, setIsOpenPass] = useState(false);

  return (
    <div
      className={`relative w-full mb-5 ${
        errors[type] && touched[type] ? "mb-3" : ""
      }`}
    >
      <input
        type={isOpenPass ? "text" : inputType}
        name={type}
        onChange={handleChange}
        // onBlur={handleBlur}
        value={values[type]}
        autoComplete="off"
        maxLength={100}
        required={required}
        className={`peer border rounded h-11 w-full outline-none focus:border-Primary/03 duration-150 pl-4 pr-10 ${
          values[type] && !errors[type]
            ? "border-success"
            : errors[type] && touched[type]
            ? "border-alarm"
            : "border-Neutral/03"
        }`}
      />
      <span
        className={`absolute top-3 left-4 peer-focus:-top-2.5 peer-focus:text-sm ${
          values[type] ? "-top-2.5 text-sm" : "text-[15px]"
        } bg-white px-0.5 text-Neutral/Shades/04-75% rounded duration-200 pointer-events-none`}
      >
        {placeholderText}
      </span>
      {inputType === "password" ? (
        <span
        onClick={()=> setIsOpenPass(!isOpenPass)}
          className={`absolute top-3 duration-200 right-2.5 cursor-pointer`}
        >
          {
            isOpenPass ? open_eye_svg : close_eye_svg
          }
        </span>
      ) : (
        <span
          className={`absolute ${
            values[type] && !errors[type] ? "opacity-100" : "opacity-0"
          } peer-focus:opacity-0 top-3 duration-200 right-3`}
        >
          {success_svg}
        </span>
      )}

      {errors[type] && touched[type] ? (
        <span className="text-alarm flex items-center pl-1">
          {error_svg}
          {errors[type]}
        </span>
      ) : null}
    </div>
  );
}

export default Input;
