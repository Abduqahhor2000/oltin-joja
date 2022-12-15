import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate, useLocation} from "react-router-dom";
import {
  customers_svg,
  customers_svg_active,
  dashboard_svg,
  dashboard_svg_active,
  invoice_svg,
  invoice_svg_active,
  menus_svg,
  menus_svg_active,
  menu_arrow_svg,
  setting_svg,
  setting_svg_active,
} from "../../svg/menu";
import avatar from "../../images/avatar.png";
import { message_svg, notif_svg, search_svg } from "../../svg/navbar";
// import { notifyLoginSuccess, ToastContainer, ToastContainers } from "../../toastify/Toastify";
// import axios from "axios"

function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
  // axios.defaults.auth = `Bearer ${JSON.parse(localStorage.getItem("Authorization"))}`

  // console.log(JSON.parse(localStorage.getItem("Authorization")));

  const [menus, setMenus] = useState([
    {
      name: "Dashboard",
      url: "/dashboard",
      isActive: false,
      icon: {
        active: dashboard_svg_active,
        inactive: dashboard_svg,
      },
      items: [],
    },
    {
      name: "Menus",
      url: "",
      isActive: false,
      icon: {
        active: menus_svg_active,
        inactive: menus_svg,
      },
      items: [
        {
          url: "/product_category",
          name: "Product category",
        },
        {
          url: "/product_list",
          name: "Product list",
        },
      ],
    },
    {
      name: "Invoice",
      url: "",
      isActive: false,
      icon: {
        active: invoice_svg_active,
        inactive: invoice_svg,
      },
      items: [
        {
          url: "/invoice_detail",
          name: "Invoice detail",
        },
        {
          url: "/invoice_list",
          name: "Invoice list",
        },
      ],
    },
    {
      name: "Customers",
      url: "",
      isActive: false,
      icon: {
        active: customers_svg_active,
        inactive: customers_svg,
      },
      items: [
        {
          url: "/customers_list",
          name: "Customer list",
        },
        {
          url: "/customers_review",
          name: "Customer review",
        },
      ],
    },
    {
      name: "Settings",
      url: "",
      isActive: false,
      icon: {
        active: setting_svg_active,
        inactive: setting_svg,
      },
      items: [
        {
          url: "/admins",
          name: "Admins",
        },
        {
          url: "/categories",
          name: "Categories",
        },
      ],
    },
  ]);

  // console.log(location.pathname.split("/"));

  useEffect(()=> {
    setMenus(menus.map((item) => {
      if(item.items.length === 0){
        if(item.url.split("/")[1] === location.pathname.split("/")[1]){
          return {...item, isActive: true}
        }else{
          return {...item, isActive: false}
        }
      }else{
        if(item.items.find(link => link.url.split("/")[1] === location.pathname.split("/")[1])){
          return {...item, isActive: true}
        }else{
          return {...item, isActive: false}
        }
      }
    }))
  }, [location])

  useEffect(()=>{
    const token = localStorage.getItem("Authorization")
    if(!token){
      navigate('/login')
    }
  })

  const menuControl = (name) => {
    setMenus(
      menus.map((item) => {
        if (item.name === name) {
          return { ...item, isActive: !item.isActive };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="min-h-screen relative flex justify-end">
      <div className="absolute top-0 left-0 w-[250px] h-screen bg-white border-r border-solid border-Neutral/03">
        <div className="font-normal text-[30px] text-Primary/03 font-rowdies px-7 py-[22px] leading-9">
          Oltin Jo’ja
        </div>
        <div className="mt-[34px] flex flex-col">
          {menus.map((menu, index) => {
            return (
              <div key={index} className="mb-2">
                {
                  menu.url ? 
                  <Link
                  to={menu.url}
                  onClick={() => menuControl(menu.name)}
                  className={`group flex pl-12 items-center h-10 cursor-pointer border-l-2 border-solid duration-200 ${
                    menu.isActive
                      ? "bg-menuBG border-menuLine"
                      : "bg-white border-transparent"
                  }`}
                >
                  <div className="relative flex justify-between items-center w-full pr-7">
                    <span className="absolute w-min h-min inset-y-0 -translate-x-full my-auto -left-2">
                      <span className="hidden group-hover:block">
                        {menu.icon.active}
                      </span>
                      <span className="block group-hover:hidden">
                        {menu.isActive ? menu.icon.active : menu.icon.inactive}
                      </span>
                    </span>
                    <span
                      className={`text-[15px]  group-hover:text-Primary/03 font-medium mt-0.5 ${
                        menu.isActive
                          ? "text-Primary/03"
                          : "text-Neutral/Shades/04-75%"
                      }`}
                    >
                      {menu.name}
                    </span>
                    {menu.items.length ? (
                      <span
                        className={`group-hover:stroke-Primary/03 duration-200 ${
                          menu.isActive
                            ? "stroke-Primary/03 rotate-0"
                            : "stroke-Neutral/Shades/04-75% rotate-180"
                        }`}
                      >
                        {menu_arrow_svg}
                      </span>
                    ) : null}
                  </div>
                </Link> 
                :  <div
                onClick={() => menuControl(menu.name)}
                className={`group flex pl-12 items-center h-10 cursor-pointer border-l-2 border-solid duration-200 ${
                  menu.isActive
                    ? "bg-menuBG border-menuLine"
                    : "bg-white border-transparent"
                }`}
              >
                <div className="relative flex justify-between items-center w-full pr-7">
                  <span className="absolute w-min h-min inset-y-0 -translate-x-full my-auto -left-2">
                    <span className="hidden group-hover:block">
                      {menu.icon.active}
                    </span>
                    <span className="block group-hover:hidden">
                      {menu.isActive ? menu.icon.active : menu.icon.inactive}
                    </span>
                  </span>
                  <span
                    className={`text-[15px]  group-hover:text-Primary/03 font-medium mt-0.5 ${
                      menu.isActive
                        ? "text-Primary/03"
                        : "text-Neutral/Shades/04-75%"
                    }`}
                  >
                    {menu.name}
                  </span>
                  {menu.items.length ? (
                    <span
                      className={`group-hover:stroke-Primary/03 duration-200 ${
                        menu.isActive
                          ? "stroke-Primary/03 rotate-0"
                          : "stroke-Neutral/Shades/04-75% rotate-180"
                      }`}
                    >
                      {menu_arrow_svg}
                    </span>
                  ) : null}
                </div>
              </div> 
                }
                
                {menu.items.length ? (
                  <div
                    style={{ height: `${menu.items.length * 32 + 8}px` }}
                    className={`text-[15px] text-Neutral/Shades/04-75% font-medium pl-12 leading-6 duration-200 overflow-y-hidden ${
                      menu.isActive ? `` : "!h-0"
                    }`}
                  >
                    <div className="mt-2 min-h-min flex flex-col">
                      {menu.items.map((item) => {
                        return (
                          <Link
                            to={item.url}
                            key={item.url}
                            className={`hover:text-Primary/03 my-1 cursor-pointer ${location.pathname.split("/")[1] === item.url.split("/")[1] ? "text-Primary/03" : ""}`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}

          {/* <div className="group pl-6 mb-2 cursor-pointer">
                  <div className="flex items-center h-10">
                    <div className="relative flex justify-between items-center w-full pr-7">
                      <span className="absolute w-min h-min inset-y-0 -translate-x-full my-auto -left-2">
                        <span className="hidden group-hover:block">
                          {dashboard_svg_active}
                        </span>
                        <span className="block group-hover:hidden">
                          {dashboard_svg}
                        </span>
                      </span>
                      <span className="text-[15px] text-Neutral/Shades/04-75% group-hover:text-Primary/03 font-medium">
                        Dashboard
                      </span>
                    </div>
                    <div className="text-[15px] text-Neutral/Shades/04-75% font-medium leading-6 mt-2">
                      <div className="hover:text-Primary/03 my-1 cursor-pointer">
                        Product category
                      </div>
                      <div className="hover:text-Primary/03 my-1 cursor-pointer">
                        Product list
                      </div>
                    </div>
                  </div>
                </div> */}
          {/* <div className="pl-6 mb-2">
            <div className="group flex items-center h-10 cursor-pointer">
              <div className="relative flex justify-between items-center w-full pr-7">
                <span className="absolute w-min h-min inset-y-0 -translate-x-full my-auto -left-2">
                  <span className="hidden group-hover:block">
                    {menus_svg_active}
                  </span>
                  <span className="block group-hover:hidden">{menus_svg}</span>
                </span>
                <span className="text-[15px] text-Neutral/Shades/04-75% group-hover:text-Primary/03 font-medium">
                  Menus
                </span>
                <span className="stroke-Primary/03">{menu_arrow_svg}</span>
              </div>
            </div>
            <div className="text-[15px] text-Neutral/Shades/04-75% font-medium leading-6 mt-2">
              <div className="hover:text-Primary/03 my-1 cursor-pointer">
                Product category
              </div>
              <div className="hover:text-Primary/03 my-1 cursor-pointer">
                Product list
              </div>
            </div>
          </div> */}
          {/* <div className="pl-6 mb-2">
            <div className="flex group items-center h-10 cursor-pointer">
              <div className="relative flex justify-between items-center w-full pr-7">
                <span className="absolute w-min h-min inset-y-0 -translate-x-full my-auto -left-2">
                  <span className="hidden group-hover:block">
                    {invoice_svg_active}
                  </span>
                  <span className="block group-hover:hidden">
                    {invoice_svg}
                  </span>
                </span>
                <span className="text-[15px] text-Neutral/Shades/04-75% group-hover:text-Primary/03 font-medium">
                  Invoice
                </span>

                <span className="stroke-Primary/03">{menu_arrow_svg}</span>
              </div>
            </div>
             <div className="text-[15px] text-Neutral/Shades/04-75% font-medium leading-6 mt-2">
              <div className="hover:text-Primary/03 my-1 cursor-pointer">
                Product category
              </div>
              <div className="hover:text-Primary/03 my-1 cursor-pointer">
                Product list
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="bg-Neutral/02 min-h-screen max-h-screen w-[calc(100%-250px)] overflow-y-auto">
        <div className="bg-white h-20 sticky z-[100] top-0 flex justify-end items-center pr-10">
          <span className="relative">
            <input
              className="placeholder:text-Neutral/Shades/04-75% bg-Neutral/02 text-black outline-none h-10 w-[200px] text-[15px] pl-4 pr-7 rounded-full"
              type="text"
              placeholder="Search here"
            />
            <span className="absolute right-3 max-w-min max-h-min inset-y-0 my-auto cursor-pointer">{search_svg}</span>
          </span>
          <span className="p-1 block cursor-pointer relative ml-9">
            <span className="h-3 w-3 bg-Primary/03 absolute top-1 right-1 rounded-full border-[2px] border-solid border-white"></span>
            {message_svg}
          </span>
          <span className="p-1 block cursor-pointer relative ml-8">
            <span className="h-3 w-3 bg-Primary/03 absolute top-1 right-1 rounded-full border-[2px] border-solid border-white"></span>
            {notif_svg}
          </span>
          <div className="ml-[26px] h-11 w-11 rounded-full">
            <img src={avatar} alt="" className="w-full h-full" />
          </div>
        </div>

        <Outlet  dadada={"daaa"} />
      </div>
    </div>
  );
}

export default Main;
