import React, { useState } from "react";
import { search_svg } from "../../../svg/navbar";
import customer_img from "../../../images/customer.png";
import customer1_img from "../../../images/customer1.png";
import customer2_img from "../../../images/customer2.png";
import customer3_img from "../../../images/customer3.png";
import customer4_img from "../../../images/customer4.png";
import customer5_img from "../../../images/customer5.png";
import customer6_img from "../../../images/customer6.png";
import customer7_img from "../../../images/customer7.png";
import customer8_img from "../../../images/customer8.png";

function CustomersList() {
  const [customers, setCustomers] = useState([
    {
      id: 12155,
      image: customer_img,
      title: "Aminjon Usmonov",
      phone: "94-487-84-81",
      email: "Aminjonusmonov@gmail.com",
      registrationDate: "19/01/2021",
      bill: "2.140.000",
    },
    {
      id: 12156,
      image: customer1_img,
      title: "Hakim Bakirov",
      phone: "94-487-84-81",
      email: "Aminjonusmonov@gmail.com",
      registrationDate: "19/01/2021",
      bill: "2.140.000",
    },
    {
      id: 12157,
      image: null,
      title: "Mahliyo Ilhamova",
      phone: "94-487-84-81",
      email: "Aminjonusmonov@gmail.com",
      registrationDate: "19/01/2021",
      bill: "2.140.000",
    },
    {
      id: 12158,
      image: customer2_img,
      title: "Guli Yoldasheva",
      phone: "94-487-84-81",
      email: "Aminjonusmonov@gmail.com",
      registrationDate: "19/01/2021",
      bill: "2.140.000",
    },
    {
      id: 12159,
      image: customer3_img,
      title: "Elyor Olimov",
      phone: "94-487-84-81",
      email: "Aminjonusmonov@gmail.com",
      registrationDate: "19/01/2021",
      bill: "2.140.000",
    },
    {
      id: 12160,
      image: null,
      title: "Komila Hakimova",
      phone: "94-487-84-81",
      email: "Aminjonusmonov@gmail.com",
      registrationDate: "19/01/2021",
      bill: "2.140.000",
    },
    {
      id: 12161,
      image: null,
      title: "Oydin Ilhamova",
      phone: "94-487-84-81",
      email: "Aminjonusmonov@gmail.com",
      registrationDate: "19/01/2021",
      bill: "2.140.000",
    },
    {
      id: 12162,
      image: customer4_img,
      title: "Guli Yoldasheva",
      phone: "94-487-84-81",
      email: "Aminjonusmonov@gmail.com",
      registrationDate: "19/01/2021",
      bill: "2.140.000",
    },
    {
      id: 12163,
      image: customer5_img,
      title: "Elyor Olimov",
      phone: "94-487-84-81",
      email: "Aminjonusmonov@gmail.com",
      registrationDate: "19/01/2021",
      bill: "2.140.000",
    },
    {
      id: 12164,
      image: customer6_img,
      title: "Hakim Bakirov",
      phone: "94-487-84-81",
      email: "Aminjonusmonov@gmail.com",
      registrationDate: "19/01/2021",
      bill: "2.140.000",
    },
    {
      id: 12165,
      image: customer7_img,
      title: "Aminjon Usmonov",
      phone: "94-487-84-81",
      email: "Aminjonusmonov@gmail.com",
      registrationDate: "19/01/2021",
      bill: "2.140.000",
    },
    {
      id: 12166,
      image: customer8_img,
      title: "Guli Yoldasheva",
      phone: "94-487-84-81",
      email: "Aminjonusmonov@gmail.com",
      registrationDate: "19/01/2021",
      bill: "2.140.000",
    },
  ]);

  return (
    <div>
      <div className="py-5 px-10">
        <div className="bg-white rounded-[10px] overflow-hidden">
          <div className="pt-5 pl-7 flex justify-between">
            <div className="text-lg leading-6 text-Neutral/04">
              Customer list
            </div>
            <span className="relative mr-5">
              <input
                className="placeholder:text-Neutral/Shades/04-75% bg-white border-[2px] border-Neutral/03 text-black outline-none h-10 w-[200px] text-[15px] pl-4 pr-7 rounded-full"
                type="text"
                placeholder="Search customer"
              />
              <span className="absolute right-3 max-w-min max-h-min inset-y-0 my-auto cursor-pointer">
                {search_svg}
              </span>
            </span>
          </div>
          <div className="overflow-auto relative max-h-[calc(100vh-180px)]">
            <table className="w-full text-sm text-Neutral/Shades/04-75%">
              <thead>
                <tr className="text-Neutral/Shade/07-50% sticky top-0 bg-white z-10">
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 py-4 pl-7">
                      Id
                    </div>
                  </th>
                  <th>
                    <div className="text-center border-b-2 border-Neutral/03 font-semibold py-4">
                      Image
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Title
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Phone number
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Email
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Registration date
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Bill
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index, array) => {
                  return (
                    <tr
                      key={customer.id}
                      className={`border-b border-Neutral/03`}
                    >
                      <td className="py-3 pl-7 min-w-[100px]">{customer.id}</td>
                      <td className="py-1.5 min-w-[120px] flex justify-center">
                        {customer.image ? (
                          <img
                            className="w-10 h-10 rounded-full object-cover"
                            src={customer.image}
                            alt=""
                          />
                        ) : (
                          <>
                          <span className="w-10 h-10 rounded-full bg-default-img text-xl leading-6 font-semibold text-white flex justify-center items-center">
                            {customer.title.substring(0,1)}
                          </span>
                          </>
                        )}
                      </td>
                      <td className="py-3 min-w-[200px]">{customer.title}</td>
                      <td className="py-2 min-w-[170px]">{customer.phone}</td>
                      <td className="py-[14px] min-w-[260px]">
                        {customer.email}
                      </td>
                      <td className="py-3 min-w-[160px]">
                        {customer.registrationDate}
                      </td>
                      <td className="py-3 min-w-[120px]">{customer.bill}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomersList;
