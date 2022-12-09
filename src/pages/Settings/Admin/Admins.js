import React, { useState } from "react";
import { edit_svg, del_svg, del_grey_svg, edit_grey_svg } from "../../../svg/product";
import admin0 from "../../../images/customer.png"
import admin1 from "../../../images/customer1.png"
import admin2 from "../../../images/customer2.png"

function Admins({root, setRoot}) {
    const [admins, setAdmins] = useState([
        {
            id: 12155,
            image: admin0,
            name: "Aminjon Usmonov",
            phone: "94-487-84-81",
            email: "Aminjonusmonov@gmail.com",
        },
        {
            id: 12156,
            image: admin1,
            name: "Hakim Bakirov",
            phone: "94-487-84-81",
            email: "Aminjonusmonov@gmail.com",
        },
        {
            id: 12157,
            image: null,
            name: "Mahliyo Ilhamova",
            phone: "94-487-84-81",
            email: "Aminjonusmonov@gmail.com",
        },
        {
            id: 12158,
            image: admin2,
            name: "Guli Yoldasheva",
            phone: "94-487-84-81",
            email: "Aminjonusmonov@gmail.com",
        },
    ])

  return (
    <div>
      <div className="py-5 px-10">
        <div className="flex text-Neutral/Shades/04-75% text-sm mb-5">
          <div className="bg-white rounded-[10px] grow text-lg leading-6 mr-7 pl-7 py-2 text-Neutral/04">
          Admins
          </div>
          <span onClick={() => setRoot("add")} className="h-10 flex-none max-w-max cursor-pointer rounded-xl bg-white py-2.5 pr-5 relative pl-12 hover:bg-Primary/03 duration-200 select-none active:bg-hoverButton hover:text-white">
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
              <tr className="text-Neutral/Shade/07-50% border-b-2 border-Neutral/03 sticky top-0 bg-white z-10">
                <th className="text-start font-semibold py-4 pl-5">
                  Id
                </th>
                <th className="text-start font-semibold py-4">Image</th>
                <th className="text-start font-semibold py-4">Name</th>
                <th className="text-start font-semibold py-4">Phone number</th>
                <th className="text-start font-semibold py-4">Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index, array) => {
                return (
                  <tr key={admin.id} className={`border-b border-Neutral/03`}>
                    <td className="py-3 pl-5 min-w-[150px] max-w-[200px]">{admin.id}</td>
                    <td className="py-1.5 min-w-[80px]">
                    {admin.image ? (
                          <img
                            className="w-10 h-10 rounded-full object-cover"
                            src={admin.image}
                            alt=""
                          />
                        ) : (
                          <>
                          <span className="w-10 h-10 rounded-full bg-default-img text-xl leading-6 font-semibold text-white flex justify-center items-center">
                            {admin?.name.substring(0,1)}
                          </span>
                          </>
                        )}
                    </td>
                    <td className="py-3 min-w-[220px]">{admin.name}</td>
                    <td className="py-3 min-w-[180px]">{admin.phone}</td>
                    <td className="py-3 min-w-[100px]">{admin.email}</td>
                    <td className="text-end pr-7 w-[100px] min-w-[100px]">
                      <div className="flex w-full justify-between">
                        <span className="p-1 group cursor-pointer w-8 h-8 select-none pt-1.5">
                          <span className="hidden group-hover:block">
                            {edit_svg}
                          </span>
                          <span className="block group-hover:hidden">
                            {edit_grey_svg}
                          </span>
                        </span>
                        <span className="p-1 cursor-pointer group select-none">
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
          <div id="next-product"></div>
        </div>
      </div>
    </div>
  )
}

export default Admins