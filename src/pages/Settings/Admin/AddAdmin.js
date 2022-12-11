import React, { useState } from "react";
import { img_svg } from "../../../svg/admin";
import Input from "./Components/Input";
import ReactSelect from "./Components/Select";

let position = [
  {value: "Admin", label: "Admin"},
  {value: "Sotuvchi", label: "Sotuvchi"},
  {value: "Oshpaz", label: "Oshpaz"},
]

function AddAdmin() {
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    password: "",
    full_name: "",
    phone: "",
    email: "",
    role: "",
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  return (
    <div>
      <div className="py-5 px-10">
        <div className="mb-5 bg-white rounded-[10px] text-lg leading-6 pl-7 py-2 text-Neutral/04">
          <span className="text-Primary/03">Admins</span>
          <span> / Add Admin</span>
        </div>
        <div className="min-h-[430px] bg-white rounded-[10px] p-7 pb-5">
          <div className="flex mb-7">
            <div className="grow pr-7 flex justify-between flex-wrap">
              <div className="w-full">
                <Input
                  handleChange={handleChange}
                  touched={touched}
                  values={values}
                  errors={errors}
                  type={"full_name"}
                  placeholderText={"Full name"}
                />
              </div>
              <div className="w-[calc((100%-20px)/2)] text-Neutral/Shades/04-75% text-[15px]">
                <ReactSelect
                  handleChange={handleChange}
                  touched={touched}
                  values={values}
                  errors={errors}
                  type={"role"}
                  position={position}
                />
              </div>
              <div className="w-[calc((100%-20px)/2)]">
                <Input
                  handleChange={handleChange}
                  touched={touched}
                  values={values}
                  errors={errors}
                  type={"email"}   
                  placeholderText={"Email"}
                />
              </div>
              <div className="w-[calc((100%-20px)/2)]">
                <Input
                  handleChange={handleChange}
                  touched={touched}
                  values={values}
                  errors={errors}
                  type={"phone"}
                  placeholderText={"Phone number"}
                />
              </div>
              <div className="w-[calc((100%-20px)/2)]">
                <Input
                  handleChange={handleChange}
                  touched={touched}
                  values={values}
                  errors={errors}
                  type={"password"}
                  placeholderText={"Password"}
                />
              </div>
              <div className="w-full border border-Neutral/03 rounded py-1.5 px-4">
                <div className="text-base text-Neutral/04 mb-4">
                  Permissions
                </div>
                <div className="flex flex-wrap text-Neutral/Shades/04-75%">
                  <span className="items-center flex w-1/3 mb-3">
                    <input
                      id="check1"
                      type="checkbox"
                      // onChange={checkedAll}
                      // checked={true}
                      className="w-[20px] h-[20px] mr-2.5 cursor-pointer rounded"
                    />
                    <label for="check1">Permission 1</label>
                  </span>
                  <span className="items-center flex w-1/3 mb-3">
                    <input
                      id="check2"
                      type="checkbox"
                      // onChange={checkedAll}
                      // checked={true}
                      className="w-[20px] h-[20px] mr-2.5 cursor-pointer rounded"
                    />
                    <label for="check2">Permission 1</label>
                  </span>
                  <span className="items-center flex w-1/3 mb-3">
                    <input
                      id="check3"
                      type="checkbox"
                      // onChange={checkedAll}
                      // checked={true}
                      className="w-[20px] h-[20px] mr-2.5 cursor-pointer rounded"
                    />
                    <label for="check3">Permission 1</label>
                  </span>
                  <span className="items-center flex w-1/3 mb-3">
                    <input
                      id="check4"
                      type="checkbox"
                      // onChange={checkedAll}
                      // checked={true}
                      className="w-[20px] h-[20px] mr-2.5 cursor-pointer rounded"
                    />
                    <label for="check4">Permission 1</label>
                  </span>
                  <span className="items-center flex w-1/3 mb-3">
                    <input
                      id="check5"
                      type="checkbox"
                      // onChange={checkedAll}
                      // checked={true}
                      className="w-[20px] h-[20px] mr-2.5 cursor-pointer rounded border"
                    />
                    <label for="check5">Permission 1</label>
                  </span>
                  <span className="items-center flex w-1/3 mb-3">
                    <input
                      id="check6"
                      type="checkbox"
                      // onChange={checkedAll}
                      // checked={true}
                      className="w-[20px] h-[20px] mr-2.5 cursor-pointer rounded"
                    />
                    <label for="check6">Permission 1</label>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-none w-[400px] pt-3 px-[18px] pb-5 rounded border border-Neutral/03 flex flex-col">
              <span className="block mb-2.5 text-sm text-Neutral/04 leading-5 flex-none">
                Admin photo
              </span>
              <div className="border border-dashed border-Neutral/Shade/04-40% rounded-lg w-full grow">
                {true ? (
                  <div className="flex flex-col items-center w-full h-full justify-center">
                    <span>{img_svg}</span>
                    <span className="text-xs text-Neutral/Shades/04-75% mt-4">
                      Image size 400x400 px is recommended
                    </span>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end text-sm leading-6">
            <span className="p-2 text-center rounded border border-Neutral/Shade/04-40% min-w-[130px] text-Neutral/Shades/04-75% hover:bg-Neutral/02 cursor-pointer mr-5">Cancel</span>
            <span className="p-2 text-center rounded border border-Neutral/Shade/04-40% min-w-[130px] text-white bg-Primary/03 cursor-pointer hover:bg-hoverButton">Save and Add</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;
