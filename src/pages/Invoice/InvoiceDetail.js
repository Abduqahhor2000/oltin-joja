import React, { useEffect, useState } from "react";
import { bot_svg, mob_svg, web_svg } from "../../svg/invoice";
import { search_svg } from "../../svg/navbar";

function InvoiceDetail() {
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
      id: 12155,
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

  return (
    <div>
      <div className="py-5 px-10">
        <div className="bg-white rounded-[10px] text-lg leading-6 pl-7 py-2 text-Neutral/04 mb-5">
          Invoice detail
        </div>
        <div className="bg-white rounded-[10px] overflow-hidden">
          <div className="pt-7 pl-7">
            <span className="relative mr-5">
              <input
                className="placeholder:text-Neutral/Shades/04-75% bg-white border-[2px] border-Neutral/03 text-black outline-none h-10 w-[200px] text-[15px] pl-4 pr-7 rounded-full"
                type="text"
                placeholder="Search by ID"
              />
              <span className="absolute right-3 max-w-min max-h-min inset-y-0 my-auto cursor-pointer">
                {search_svg}
              </span>
            </span>
            <span className="relative mr-5">
              <input
                className="placeholder:text-Neutral/Shades/04-75% bg-white border-[2px] border-Neutral/03 text-black outline-none h-10 w-[200px] text-[15px] pl-4 pr-7 rounded-full"
                type="text"
                placeholder="Search by Name"
              />
              <span className="absolute right-3 max-w-min max-h-min inset-y-0 my-auto cursor-pointer">
                {search_svg}
              </span>
            </span>
            <span className="relative">
              <input
                className="placeholder:text-Neutral/Shades/04-75% bg-white border-[2px] border-Neutral/03 text-black outline-none h-10 w-[200px] text-[15px] pl-4 pr-7 rounded-full"
                type="text"
                placeholder="Search by Number"
              />
              <span className="absolute right-3 max-w-min max-h-min inset-y-0 my-auto cursor-pointer">
                {search_svg}
              </span>
            </span>
          </div>
          <div className="overflow-auto relative max-h-[calc(100vh-250px)]">
            <table className="w-full text-sm text-Neutral/Shades/04-75%">
              <thead>
                <tr className="text-Neutral/Shade/07-50% border-b-2 border-Neutral/03 sticky top-0 bg-white z-10">
                  <th className="text-start  py-4 pl-7">Order Id</th>
                  <th className="text-start font-semibold py-4">
                    Customer Name
                  </th>
                  <th className="text-start font-semibold py-4">Number</th>
                  <th className="text-start font-semibold py-4">Price</th>
                  <th className="text-start font-semibold py-4">Source</th>
                  <th className="text-start font-semibold py-4">Order Type</th>
                  <th className="text-start font-semibold py-4">
                    Ordering Date
                  </th>
                  <th className="text-start font-semibold py-4">
                    Ordering Place
                  </th>
                  <th className="text-start font-semibold py-4">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, index, array) => {
                  return (
                    <tr
                      key={invoice.id}
                      className={`border-b border-Neutral/03`}
                    >
                      <td className="py-3 pl-7 min-w-[105px]">{invoice.id}</td>
                      <td className="py-1.5 min-w-[210px]">
                        {invoice.customerName}
                      </td>
                      <td className="py-3 min-w-[120px]">{invoice.phone}</td>
                      <td className="py-2 min-w-[75px]">{invoice.price}</td>
                      <td className="py-[14px] min-w-[70px]">
                        {invoice.source === "web"
                          ? web_svg
                          : invoice.source === "mob"
                          ? mob_svg
                          : invoice.source === "bot"
                          ? bot_svg
                          : "null"}
                      </td>
                      <td className="py-3 min-w-[100px]">
                        {invoice.orderType}
                      </td>
                      <td className="py-3 min-w-[135px]">
                        {invoice.orderingDate}
                      </td>
                      <td className="min-w-[190px] leading-5">
                        {invoice.orderingPlace}
                      </td>
                      <td className="py-3 min-w-[105px]">
                        {invoice.totalPrice}
                      </td>
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

export default InvoiceDetail;
