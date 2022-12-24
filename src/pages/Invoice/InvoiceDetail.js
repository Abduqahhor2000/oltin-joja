import React, { useEffect, useState } from "react";
import { useGet, usePost } from "../../api/http";
import { bot_svg, mob_svg, web_svg } from "../../svg/invoice";
import { search_svg } from "../../svg/navbar";
// import { notification } from "../../../toastify/Toastify";
import { notification } from "../../toastify/Toastify";
import Pagination from "../pagination/Pagination";

function InvoiceList() {
  const [invoices, setInvoices] = useState([
    {
      id: 12155,
      customerName: "Ubaydulla Salokhiddinov",
      phone: "94-487-84-81",
      price: "160.000",
      source: "web",
      orderType: "Delivery",
      orderingDate: "14:04 19/01/2021",
      orderingPlace: "Tashkent, Chilanzar district, Sagbon ko’chasi 4A",
      totalPrice: "360.000",
    },
    {
      id: 12156,
      customerName: "Ubaydulla Salokhiddinov",
      phone: "94-487-84-81",
      price: "60.000",
      source: "bot",
      orderType: "Delivery",
      orderingDate: "14:04 19/01/2021",
      orderingPlace: "Tashkent, Chilanzar",
      totalPrice: "1.520.000",
    },
    {
      id: 12157,
      customerName: "Ubaydulla Salokhiddinov",
      phone: "94-487-84-81",
      price: "50.000",
      source: "mob",
      orderType: "Delivery",
      orderingDate: "14:04 19/01/2021",
      orderingPlace: "Tashkent, Chilanzar",
      totalPrice: "1.520.000",
    },
    {
      id: 12158,
      customerName: "Ubaydulla Salokhiddinov",
      phone: "94-487-84-81",
      price: "50.000",
      source: "bot",
      orderType: "Delivery",
      orderingDate: "14:04 19/01/2021",
      orderingPlace: "Tashkent, Chilanzar district, Sagbon ko’chasi 4A",
      totalPrice: "1.520.000",
    },
    {
      id: 12159,
      customerName: "Ubaydulla Salokhiddinov",
      phone: "94-487-84-81",
      price: "50.000",
      source: "bot",
      orderType: "Delivery",
      orderingDate: "14:04 19/01/2021",
      orderingPlace: "Tashkent, Chilanzar",
      totalPrice: "1.520.000",
    },
    {
      id: 12160,
      customerName: "Ubaydulla Salokhiddinov",
      phone: "94-487-84-81",
      price: "50.000",
      source: "mob",
      orderType: "Delivery",
      orderingDate: "14:04 19/01/2021",
      orderingPlace: "Tashkent, Chilanzar",
      totalPrice: "1.520.000",
    },
    {
      id: 12161,
      customerName: "Ubaydulla Salokhiddinov",
      phone: "94-487-84-81",
      price: "50.000",
      source: "bot",
      orderType: "Delivery",
      orderingDate: "14:04 19/01/2021",
      orderingPlace: "Tashkent, Chilanzar",
      totalPrice: "1.520.000",
    },
    {
      id: 12162,
      customerName: "Ubaydulla Salokhiddinov",
      phone: "94-487-84-81",
      price: "50.000",
      source: "mob",
      orderType: "Delivery",
      orderingDate: "14:04 19/01/2021",
      orderingPlace: "Tashkent, Chilanzar",
      totalPrice: "1.520.000",
    },
    {
      id: 12163,
      customerName: "Ubaydulla Salokhiddinov",
      phone: "94-487-84-81",
      price: "50.000",
      source: "web",
      orderType: "Delivery",
      orderingDate: "14:04 19/01/2021",
      orderingPlace: "Tashkent, Chilanzar district, Sagbon ko’chasi 4A",
      totalPrice: "1.520.000",
    },
    {
      id: 12164,
      customerName: "Ubaydulla Salokhiddinov",
      phone: "94-487-84-81",
      price: "50.000",
      source: "web",
      orderType: "Delivery",
      orderingDate: "14:04 19/01/2021",
      orderingPlace: "Tashkent, Chilanzar district, Sagbon ko’chasi 4A",
      totalPrice: "1.520.000",
    },
    {
      id: 12165,
      customerName: "Ubaydulla Salokhiddinov",
      phone: "94-487-84-81",
      price: "50.000",
      source: "bot",
      orderType: "Delivery",
      orderingDate: "14:04 19/01/2021",
      orderingPlace: "Tashkent, Chilanzar",
      totalPrice: "1.520.000",
    },
    {
      id: 12166,
      customerName: "Ubaydulla Salokhiddinov",
      phone: "94-487-84-81",
      price: "50.000",
      source: "web",
      orderType: "Delivery",
      orderingDate: "14:04 19/01/2021",
      orderingPlace: "Tashkent, Chilanzar",
      totalPrice: "1.520.000",
    },
  ]);
  const [state, setState] = useState({
    deliveryDateFrom: "2019-08-24 14:15:22.123",
  });
  const [data, setData] = useState([]);
  const FetchData = () => {
    usePost("/v1/orders/invoice-details", state)
      .then((res) => setData(res?.data?.ordersByOrganizations[0]?.orders))
      .catch((err) => console.log(err));
  };
  console.log(data);

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div>
      <div className="py-5 px-10">
        <div className="bg-white rounded-[10px] overflow-hidden">
          <div className="pt-5 pl-7 flex justify-between">
            <span className="text-lg leading-6 text-Neutral/04">
              Invoice detail
            </span>
            <span className="relative mr-5">
              <input
                className="placeholder:text-Neutral/Shades/04-75% bg-white border-[2px] border-Neutral/03 text-black outline-none h-10 w-[200px] text-[15px] pl-4 pr-7 rounded-full"
                type="text"
                placeholder="Search invoice"
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
                      Order Id
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Customer Name
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Number
                    </div>
                  </th>
                  <th>
                    <div className="text-center border-b-2 border-Neutral/03 font-semibold py-4">
                      Source
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4 pl-2">
                      Order Type
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Ordering Date
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Ordering Place
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Total Price
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((invoice, index, array) => {
                  
                  const data =  invoice.order?.whenCreated
                  const spliceData = data.slice(0,16)

                  return (
                    <tr
                      key={invoice.id}
                      className={`border-b border-Neutral/03`}
                    >
                      <td
                        className="py-3 pl-7 min-w-[105px]"
                        onClick={() => {
                          navigator.clipboard.writeText(invoice?.order?.number);
                          notification(
                            "success",
                            "Text copied",
                            "bottom-center"
                          );
                        }}
                      >
                        {invoice?.order?.number}
                      </td>
                      <td className="py-1.5  ml-5 min-w-[170px]">
                        {invoice?.order?.customer?.name}
                      </td>
                      <td className="py-0 min-w-[120px] ">
                        {invoice?.order?.phone}
                      </td>
                  
                      <td className="py-[14px] min-w-[70px] flex justify-center">
                        {invoice?.order?.sourceKey === "web"
                          ? web_svg
                          : invoice?.order?.sourceKey === "mob"
                          ? mob_svg
                          : invoice?.order?.sourceKey === "bot"
                          ? bot_svg
                          :  "null"}
                      </td>
                      <td className="py-3 min-w-[100px] pl-2">
                        {invoice.order?.orderType?.orderServiceType}
                      </td>
                      <td className="py-3 min-w-[135px]">
                        {spliceData}
                      </td>
                      <td className="min-w-[190px] leading-5">
                        {
                          invoice.order?.deliveryPoint?.address?.street?.city
                            ?.name
                        }
                      </td>
                      <td className="py-3 min-w-[105px]">
                        {invoice?.order?.sum}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
              {/* <div className="flex justify-end w-full mt-5 mb-5">
            <Pagination
              totalItem={10}
              changePage={(currentPage, pageSize) => {
                FetchData(currentPage, pageSize);
              }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default InvoiceList;
