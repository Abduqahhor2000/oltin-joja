import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import {
  dashboard_svg,
  dashboard_svg_active,
  invoice_svg,
  invoice_svg_active,
  menus_svg,
  menus_svg_active,
  menu_arrow_svg,
} from "../../svg/menu";

function Main() {
  const [menus, setMenus] = useState([
    {
      name: "Dashboard",
      url: "/dashboard",
      isActive: true,
      icon: {
        active: dashboard_svg_active,
        inactive: dashboard_svg,
      },
      items: [],
    },
    {
      name: "Menus",
      url: "/",
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
      url: "/",
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
  ])

  return (
    <div className="min-h-screen relative flex justify-end">
      <div className="absolute top-0 left-0 w-[250px] h-screen bg-white border-r border-solid border-Neutral/03">
        <div className="font-normal text-[30px] text-Primary/03 font-rowdies px-7 py-[22px] leading-9">
          Oltin Jo’ja
        </div>
        <div className="mt-[34px] flex flex-col pl-7">
          {menus.map((menu) => {
            return (
              <div className="pl-6 mb-2">
                <div className="group flex items-center h-10 cursor-pointer">
                  <div className="relative flex justify-between items-center w-full pr-7">
                    <span className="absolute w-min h-min inset-y-0 -translate-x-full my-auto -left-2">
                      <span className="hidden group-hover:block">
                        {menu.icon.active}
                      </span>
                      <span className="block group-hover:hidden">
                        {menu.icon.inactive}
                      </span>
                    </span>
                    <span className="text-[15px] text-Neutral/Shades/04-75% group-hover:text-Primary/03 font-medium">
                      {menu.name}
                    </span>
                    {menu.items.length ? (
                      <span className="stroke-Neutral/Shades/04-75% group-hover:stroke-Primary/03">
                        {menu_arrow_svg}
                      </span>
                    ) : null}
                  </div>
                </div>
                {menu.items.length ? (
                  <div className="text-[15px] text-Neutral/Shades/04-75% font-medium leading-6 mt-2">
                    {menu.items.map((item) => {
                      return (
                        <div className="hover:text-Primary/03 my-1 cursor-pointer">
                          {item.name}
                        </div>
                      );
                    })}
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
        <div className="bg-white h-20 sticky top-0"></div>
        <div></div>
      </div>
      <Outlet />
    </div>
  );
}

export default Main;
