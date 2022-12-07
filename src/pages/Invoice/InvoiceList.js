import React, { useState } from "react";
import { del_grey_svg, del_svg } from "../../svg/product";
import { search_svg } from "../../svg/navbar";
import { send_svg } from "../../svg/invoice";

function InvoiceList() {
  const [invoices, setInvoices] = useState([
    {
      id: 12155,
      orderName: "French Fries",
      orderId: 1,
      invoiceDate: "14:04 19/01/2021",
      quantity: 14,
      price: "110.000",
      totalBill: "140.000",
    },
    {
      id: 12156,
      orderName: "Mango Pie",
      orderId: 2,
      invoiceDate: "14:04 20/01/2021",
      quantity: 14,
      price: "1.110.000",
      totalBill: "140.000",
    },
    {
      id: 12157,
      orderName: "FrieD Egg Sandwich",
      orderId: 3,
      invoiceDate: "14:04 21/01/2021",
      quantity: 14,
      price: "110.000",
      totalBill: "140.000",
    },
    {
      id: 12158,
      orderName: "Lemon Yogurt Parfait",
      orderId: 4,
      invoiceDate: "14:04 22/01/2021",
      quantity: 14,
      price: "25.110.000",
      totalBill: "140.000",
    },
    {
      id: 12159,
      orderName: "Spicy Grill Sandwich",
      orderId: 5,
      invoiceDate: "14:04 02/02/2022",
      quantity: 14,
      price: "110.000",
      totalBill: "140.000",
    },
    {
      id: 12160,
      orderName: "Chicken Sandwich",
      orderId: 6,
      invoiceDate: "14:04 02/02/2022",
      quantity: 14,
      price: "110.000",
      totalBill: "140.000",
    },
    {
      id: 12161,
      orderName: "Veg Sandwich",
      orderId: 7,
      invoiceDate: "14:04 02/02/2022",
      quantity: 14,
      price: "110.000",
      totalBill: "140.000",
    },
    {
      id: 12162,
      orderName: "Cake",
      orderId: 8,
      invoiceDate: "14:04 02/02/2022",
      quantity: 14,
      price: "110.000",
      totalBill: "140.000",
    },
    {
      id: 12163,
      orderName: "Chicken Fried",
      orderId: 9,
      invoiceDate: "14:04 02/02/2022",
      quantity: 14,
      price: "110.000",
      totalBill: "140.000",
    },
    {
      id: 12164,
      orderName: "Nachos",
      orderId: 10,
      invoiceDate: "14:04 02/02/2022",
      quantity: 14,
      price: "110.000",
      totalBill: "140.000",
    },
    {
      id: 12165,
      orderName: "Spaghetti",
      orderId: 11,
      invoiceDate: "14:04 19/01/2021",
      quantity: 14,
      price: "110.000",
      totalBill: "140.000",
    },
    {
      id: 12166,
      orderName: "Pastries",
      orderId: 12,
      invoiceDate: "14:04 19/01/2021",
      quantity: 14,
      price: "110.000",
      totalBill: "140.000",
    },
  ]);

  return (
    <div>
      <div className="py-5 px-10">
        <div className="bg-white rounded-[10px] text-lg leading-6 pl-7 py-2 text-Neutral/04 mb-5">
          Invoice list
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
                <tr className="text-Neutral/Shade/07-50% sticky top-0 bg-white z-10">
                  <th>
                    <div className="border-b-2 border-Neutral/03 text-start py-4 pl-7">
                      Invoice Id
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Order Name
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Order Id
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Invoice Date
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Quantity
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Price
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Total Bill
                    </div>
                  </th>
                  <th>
                    <div className="text-center border-b-2 border-Neutral/03 font-semibold py-4">
                      Send Invoice
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, index, array) => {
                  return (
                    <tr
                      key={invoice.id}
                      className={`border-b border-Neutral/03`}
                    >
                      <td className="py-3 pl-7 min-w-[135px]">{invoice.id}</td>
                      <td className="py-1.5 min-w-[230px]">
                        {invoice.orderName}
                      </td>
                      <td className="py-3 min-w-[100px]">{invoice.orderId}</td>
                      <td className="py-2 min-w-[160px]">
                        {invoice.invoiceDate}
                      </td>
                      <td className="py-[14px] min-w-[90px]">
                        {invoice.quantity}
                      </td>
                      <td className="py-3 min-w-[130px]">{invoice.price}</td>
                      <td className="py-3 min-w-[130px]">
                        {invoice.totalBill}
                      </td>
                      <td className="min-w-[135px] leading-5">
                        <div className="flex w-full justify-center">
                          <span className="p-1 cursor-pointer w-8 h-8 select-none pt-1.5 mr-1.5">
                            {send_svg}
                          </span>
                          <span className="p-1 cursor-pointer group select-none ml-1.5">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceList;
