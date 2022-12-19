import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
// import { UsePostAdmin, UsePostImg } from "../../../api/axios";
import { img_svg } from "../../../svg/admin";
import Input from "./Components/Input";
import ReactSelect from "./Components/EditSelect";
import { usePost } from "../../../api/http";
import { notification } from "../../../toastify/Toastify";
import { useSelector } from "react-redux";


let position = [
  { value: "admin", label: "Admin" },
  { value: "super_admin", label: "Super admin" },
];

const SUPPORTED_FORMATS = ["jpg", "png", "webp"];

function AddAdmin() {
  const admin = useSelector(state => state.axmad_joja.admin.admin) 
  console.log(admin)
  const navigate = useNavigate()
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    password: admin.password,
    full_name: admin.full_name,
    phone: admin.phone,
    // email: "",
    avatar: admin.avatar,
    role: admin.role,
  });
  const [loadingFile, setLoadingFile] = useState(0);
  const [fileUploading, setFileUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [fileError, setFileError] = useState("");

  // console.log(values);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setValues({ ...values, [name]: value });

    let allValue = {...values, [name]: value}
    let allError = {}

    if (!allValue.full_name) {
      allError.full_name = "Required";
    } else if (allValue.full_name.length < 5) {
      allError.full_name = "Must be at least 5 characters";
    }

    if (!allValue.role) {
      allError.role = "Required";
    }

    if (!allValue.email) {
      allError.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(allValue.email)) {
      allError.email = "Invalid email address";
    }

    if (!allValue.phone) {
      allError.phone = "Required";
    } else if (allValue.phone.length !== 13) {
      allError.phone = "Invalid phone number";
    }
    
    if (!allValue.password) {
      allError.password = "Required";
    } else if (allValue.password.length < 8) {
      allError.password = "Must be at least 8 characters";
    }

    setErrors(allError)
  }

  function newAdminPost(e) {
    e.preventDefault();

    setTouched({
      password: true,
      full_name: true,
      phone: true,
      // email: true,
      avatar: true,
      role: true,
    })

    if(errors.full_name || errors.role || errors.phone || errors.password || false){
      return;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost("/v1/users/admin", values)
      .then((data) => {
        notification()
        navigate("/admins")
        // console.log(data)
      })
      .catch((e) => console.log(e));
  }

  function selectFile(file) {
    if (loadingFile) {
      setFileError("Please wait! Your file is loading...");
      return;
    }
    const fileFormat = file.name.split(".").pop().toLowerCase();
    if (!SUPPORTED_FORMATS.includes(fileFormat)) {
      setFileError(
        "Uploaded file has unsupported format. Please! Send the file in Webp, JPG or PNG format."
      );
      return;
    } 
    if (file.size > 1572864) {
      setFileError(
        "Uploaded file is too big. Please! File size should not exceed 1.5 MB"
      );
      return;
    }
    
    setSelectedFile(file)
    setFileError("");
    uploadingFile(file);
  }

  function uploadingFile(file) {
    // const config = {
    //   onUploadProgress: function (progressEvent) {
    //     const percentCompleted = Math.floor(
    //       (progressEvent.loaded / progressEvent.total) * 100
    //       );
    //       setLoadingFile(percentCompleted);
    //       if (percentCompleted === 100) {
    //         setLoadingFile(0);
    //       }
    //     },
    // };

    const formData = new FormData();
    formData.append('file', file);
    formData.append('associated_with', 'users');
    formData.append('usage', 'avatar');
    
    setFileUploading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost("/v1/images/upload", formData, "media")
    .then((data) => {
        setFileUploading(false);
        setFileError("");
        // console.log(data);
        setValues({...values, avatar: data?.data?.path});
      })
      .catch(() => {
        setFileUploading(false);
        setLoadingFile(0);
        setSelectedFile("")
        setFileError("Ooh, there was an error loading the file!");
      });
  }
  
  // console.log(loadingFile)

  return (
    <div>
      <div className="py-5 px-10">
        <div className="mb-5 bg-white rounded-[10px] text-lg leading-6 pl-7 py-2 text-Neutral/04">
          <span className={`text-Primary/03 cursor-pointer`} onClick={()=> navigate("/admins")}>Admins</span>
          <span> / Add Admin</span>
        </div>
        <div className="bg-white rounded-[10px] p-7 pb-5">
          <form onSubmit={newAdminPost}>
            <div className="flex mb-7">
              <div className="grow pr-7 flex justify-between flex-wrap max-h-min">
                <div className="w-[calc((100%-20px)/2)]">
                  <Input
                    handleChange={handleChange}
                    touched={touched}
                    values={values}
                    errors={errors}
                    type={"full_name"}
                    inputType={"text"}
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
                {/* <div className="w-[calc((100%-20px)/2)]">
                  <Input
                    handleChange={handleChange}
                    touched={touched}
                    values={values}
                    errors={errors}
                    type={"email"}
                    inputType={"email"}
                    placeholderText={"Email"}
                  />
                </div> */}
                <div className="w-[calc((100%-20px)/2)]">
                  <Input
                    handleChange={handleChange}
                    touched={touched}
                    values={values}
                    errors={errors}
                    type={"phone"}
                    inputType={"text"}
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
                    inputType={"password"}
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
                      <label htmlFor="check1">Permission 1</label>
                    </span>
                    <span className="items-center flex w-1/3 mb-3">
                      <input
                        id="check2"
                        type="checkbox"
                        // onChange={checkedAll}
                        // checked={true}
                        className="w-[20px] h-[20px] mr-2.5 cursor-pointer rounded"
                      />
                      <label htmlFor="check2">Permission 1</label>
                    </span>
                    <span className="items-center flex w-1/3 mb-3">
                      <input
                        id="check3"
                        type="checkbox"
                        // onChange={checkedAll}
                        // checked={true}
                        className="w-[20px] h-[20px] mr-2.5 cursor-pointer rounded"
                      />
                      <label htmlFor="check3">Permission 1</label>
                    </span>
                    <span className="items-center flex w-1/3 mb-3">
                      <input
                        id="check4"
                        type="checkbox"
                        // onChange={checkedAll}
                        // checked={true}
                        className="w-[20px] h-[20px] mr-2.5 cursor-pointer rounded"
                      />
                      <label htmlFor="check4">Permission 1</label>
                    </span>
                    <span className="items-center flex w-1/3 mb-3">
                      <input
                        id="check5"
                        type="checkbox"
                        // onChange={checkedAll}
                        // checked={true}
                        className="w-[20px] h-[20px] mr-2.5 cursor-pointer rounded border"
                      />
                      <label htmlFor="check5">Permission 1</label>
                    </span>
                    <span className="items-center flex w-1/3 mb-3">
                      <input
                        id="check6"
                        type="checkbox"
                        // onChange={checkedAll}
                        // checked={true}
                        className="w-[20px] h-[20px] mr-2.5 cursor-pointer rounded"
                      />
                      <label htmlFor="check6">Permission 1</label>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-none w-[400px] pt-3 px-[18px] pb-5 rounded border border-Neutral/03 flex flex-col">
                <span className="block mb-2.5 text-sm text-Neutral/04 leading-5 flex-none">
                  Admin photo
                </span>
                <div className={`border relative border-dashed rounded-lg w-full min-h-[200px] max-h-[250px] grow ${fileError ? "border-alarm" : values.avatar  ? "border-success" : "border-Neutral/Shade/04-40%"}`}>
                  {selectedFile ? (
                    <div className="w-full h-full">
                      <img className={`w-full h-full object-contain ${fileUploading ? "animate-pulse" : ""}`} src={URL.createObjectURL(selectedFile)} alt=""/>
                    </div>
                  ):(
                    <div className="flex flex-col items-center w-full h-full justify-center">
                      <span>{img_svg}</span>
                      <span className="text-xs text-Neutral/Shades/04-75% mt-4">
                        Image size 400x400 px is recommended
                      </span>
                    </div>
                  )}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        selectFile(e.target.files[0]);
                      }
                    }}
                    className="absolute file:hidden text-transparent w-full h-full top-0 left-0 rounded cursor-pointer after:hidden before:hidden"
                  />
                </div>
                {
                  fileError ? <span className="text-sm text-alarm">{fileError}</span> : null
                }
              </div>
            </div>
            <div className="flex justify-end text-sm leading-6">
              <span onClick={() => navigate("/admins")} className="p-2 text-center rounded border border-Neutral/Shade/04-40% min-w-[130px] text-Neutral/Shades/04-75% hover:bg-Neutral/02 cursor-pointer mr-5">
                Cancel
              </span>
              <button
                type="submit"
                className="p-2 text-center rounded min-w-[130px] text-white bg-Primary/03 cursor-pointer hover:bg-hoverButton"
              >
                Save and Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;
