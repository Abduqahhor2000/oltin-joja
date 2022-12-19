import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "../../../toastify/Toastify";
import {
  edit_svg,
  del_svg,
  del_grey_svg,
  edit_grey_svg,
} from "../../../svg/product";
import admin0 from "../../../images/customer.png";
import admin1 from "../../../images/customer1.png";
import admin2 from "../../../images/customer2.png";
import { useDelete, useGet } from "../../../api/http";
import Modal from "../../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addAdmins, clearAdmins } from "../../../store/admins/admins";
import { addAdmin, clearAdmin } from "../../../store/admins/edit_admin";
import Pagination from "../../pagination/likeAntd"
// import {UseGetAdmins} from "../../../api/axios"
// import axios from "axios";

function Admins() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const admins = useSelector(state => state.axmad_joja.admins.admins) 
  // const [admins, setAdmins] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    getAdmins();
  }, []);

  function getAdmins() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet("/v1/users/admins")
      .then((data) => {
        dispatch(addAdmins(data.data.entities));
      })
      .catch((e) => console.log(e));
  }

  function delAdmin() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDelete(`/v1/users/${admin.id}`)
      .then(() => {
        notification("success", "O'chirildi!");
        setAdmin({});
        setIsOpen(false);
      })
      .catch(() => {
        notification("error", "O'chirishda xatolik!");
      });
    getAdmins();
  }

  return (
    <div>
      <div className="py-5 px-10">
        <div className="flex text-Neutral/Shades/04-75% text-sm mb-5">
          <div className="bg-white rounded-[10px] grow text-lg leading-6 mr-7 pl-7 py-2 text-Neutral/04">
            Admins
          </div>
          <span
            onClick={() => navigate("/admins/add-admin")}
            className="h-10 flex-none max-w-max cursor-pointer rounded-xl bg-white py-2.5 pr-5 relative pl-12 hover:bg-Primary/03 duration-200 select-none active:bg-hoverButton hover:text-white"
          >
            {" "}
            <span className="text-3xl absolute inset-y-0 my-0 left-4 font-thin">
              +
            </span>{" "}
            Add admin
          </span>
        </div>
        <div className="bg-white rounded-[10px] overflow-auto relative max-h-[calc(100vh-180px)]">
          <table className="w-full text-sm text-Neutral/Shades/04-75%">
            <thead>
              <tr className="text-Neutral/Shade/07-50% sticky top-0 bg-white z-10">
                <th>
                  <div className="text-start font-semibold py-4 pl-5 border-b-2 border-Neutral/03">
                    Id
                  </div>
                </th>
                <th>
                  <div className="text-start font-semibold py-4 border-b-2 border-Neutral/03">
                    Image
                  </div>
                </th>
                <th>
                  <div className="text-start font-semibold py-4 border-b-2 border-Neutral/03">
                    Name
                  </div>
                </th>
                <th>
                  <div className="text-start font-semibold py-4 border-b-2 border-Neutral/03">
                    Phone number
                  </div>
                </th>
                <th>
                  <div className="text-start text-transparent select-none font-semibold py-4 border-b-2 border-Neutral/03">
                    .
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index, array) => {
                return (
                  <tr key={admin.id} className={`border-b border-Neutral/03`}>
                    <td className="py-3 pl-5 min-w-[150px] max-w-[200px]">
                      {admin.id}
                    </td>
                    <td className="py-1.5 min-w-[80px]">
                      {admin?.avatar ? (
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          src={`${process.env.REACT_APP_BASE_URL}/${admin?.avatar}`}
                          alt=""
                        />
                      ) : (
                        <>
                          <span className="w-10 h-10 rounded-full bg-default-img text-xl leading-6 font-semibold text-white flex justify-center items-center">
                            {admin?.full_name.substring(0, 1)}
                          </span>
                        </>
                      )}
                    </td>
                    <td className="py-3 min-w-[220px]">{admin?.full_name}</td>
                    <td className="py-3 min-w-[180px]">{admin?.phone}</td>
                    <td className="text-end pr-7 w-[100px] min-w-[100px]">
                      <div className="flex w-full justify-between">
                        <span onClick={() => {
                          dispatch(addAdmin(admin))
                          navigate("/admins/edit-admin")
                        }} className="p-1 group cursor-pointer w-8 h-8 select-none pt-1.5">
                          <span className="hidden group-hover:block">
                            {edit_svg}
                          </span>
                          <span className="block group-hover:hidden">
                            {edit_grey_svg}
                          </span>
                        </span>
                        <span
                          onClick={() => {
                            setIsOpen(true);
                            setAdmin(admin);
                          }}
                          className="p-1 cursor-pointer group select-none"
                        >
                          <span className="hidden group-hover:block">
                            {del_svg}
                          </span>
                          <span className="block group-hover:hidden">
                            {del_grey_svg}
                          </span>
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* <div id="next-product"></div> */}
        </div>
        <div>
          <Pagination/>
        </div>
      </div>
      {isOpen ? (
        <Modal>
          <div className="bg-white w-[340px] p-7 pt-5 rounded-lg">
            <div className="text-xl font-medium text-Neutral/Shade/07-50% text-center mb-7">
              Delete admin
            </div>
            <div className="w-full flex justify-between">
              <span
                onClick={() => setIsOpen(false)}
                className="p-2 text-center rounded text-sm border border-Neutral/Shade/04-40% min-w-[130px] text-Neutral/Shades/04-75% hover:bg-Neutral/02 cursor-pointer"
              >
                Cancel
              </span>
              <span
                onClick={() => delAdmin()}
                className="p-2 text-center text-sm rounded min-w-[130px] text-white bg-Primary/03 cursor-pointer hover:bg-hoverButton"
              >
                Delete
              </span>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

export default Admins;
