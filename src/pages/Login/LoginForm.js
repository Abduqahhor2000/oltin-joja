import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { UseLogin } from "../../api/axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  // notifyError,
  notifyLoginError,
  notifyLoginSuccess,
  // notifySuccess,
} from "../../toastify/Toastify";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { usePost } from "../../api/http";
import { useDispatch } from "react-redux";
import { add } from "../../store/auth/userInfo";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [formValue, setFormValue] = useState({
    phone: "",
    password: "",
  });

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [setActive]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(true);
    // console.log(formValue);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost("/v1/auth/admin/login", formValue)
      .then((res) => {
        notifyLoginSuccess();
        setActive(false);
        // console.log(res.data);
        dispatch(add(res.data.user));
        localStorage.setItem("Authorization", res.data.token);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        navigate("/product_category");
      })
      .catch((error) => {
        console.log(error);
        setActive(false);
        notifyLoginError();
      });
  };

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const onChangeToggle = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-lg p-5 mt-5 h-72 flex flex-wrap"
    >
      <div className="relative w-full   outline-none  mt-5 flex items-center">
        <input
          required
          autoComplete="off"
          onChange={onChange}
          name="phone"
          className="peer  rounded-lg px-4 w-full outline-none py-2 border h-full valid:border-green-300 focus:border-Primary/03"
          type="text"
        />
        <span className="text-[#9A9A9A] ease-linear duration-[0.2s] bg-white px-1 absolute left-[12px] top-3  pointer-events-none peer-valid:-top-3 peer-valid:translate-x-[-8px] peer-valid:text-sm peer-focus:-top-3 peer-focus:translate-x-[-8px] peer-focus:text-sm">
          Phone number
        </span>
      </div>
      <div className="w-full  relative mt-5 flex items-center">
        <input
          required
          autoComplete="off"
          onChange={onChange}
          name="password"
          maxLength={8}
          className="peer px-4 py-2  w-full outline-none border  rounded-lg h-full valid:border-green-300 focus:border-Primary/03"
          type={visible ? "text" : "password"}
        />
        <span className="text-[#9A9A9A] ease-linear duration-[0.2s] bg-white px-1 absolute left-[12px] top-3  pointer-events-none peer-valid:-top-3 peer-valid:translate-x-[-8px] peer-valid:text-sm peer-focus:-top-3 peer-focus:translate-x-[-8px] peer-focus:text-sm">
          Password
        </span>
        <button className="absolute right-4" onClick={(e) => onChangeToggle(e)}>
          {visible ? (
            <AiOutlineEye style={{ fontSize: "23px" }} />
          ) : (
            <AiOutlineEyeInvisible style={{ fontSize: "23px" }} />
          )}
        </button>
      </div>
      <div className="flex justify-end w-full mt-5">
        <p className="underline-offset-1 underline cursor-pointer ">
          {/* Forgot password */}
        </p>
      </div>
      <button
        htmltype="submit"
        className={`${
          active === true ? "  pointer-events-none  " : ""
        } bg-Primary/03 cursor-pointer w-full h-12 rounded-lg text-white text-lg`}
      >
        {active === true ? (
          <SyncLoader loading={active} color={"#fff"} size={10} />
        ) : (
          <p>Sign in</p>
        )}
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </form>
  );
};
export default LoginForm;
