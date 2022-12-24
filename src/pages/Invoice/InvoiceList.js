import React, { useEffect, useState } from "react";
import { del_grey_svg, del_svg } from "../../svg/product";
import { search_svg } from "../../svg/navbar";
import { notification } from "../../toastify/Toastify";
import { send_svg, send_grey_svg } from "../../svg/product";
import { usePost } from "../../api/http";

function InvoiceList() {
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
        <div></div>
        <div className="bg-white rounded-[10px] overflow-hidden">
          <div className="pt-5 pl-7 flex justify-between">
            <span className="text-lg leading-6 text-Neutral/04">
              Invoice list
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
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4 pl-7">
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
                      Total Price
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((invoice, index, array) => {
                  var quantity = "";
                  var order_name = "";
                  var price = "";
                  var cost = "";
                  invoice?.order?.items?.forEach((element) => {
                    order_name = element?.product?.name;
                    quantity = element?.amount;
                    price = element?.price;
                    cost = element?.cost;
                  });
                  const Invoice_date = invoice.order?.whenClosed;
                  const spliceData = Invoice_date.slice(0, 16);

                  return (
                    <tr
                      key={invoice.id}
                      className={`border-b border-Neutral/03`}
                    >
                      <td className="py-1.5 min-w-[150px]   pl-7">
                        {order_name}
                      </td>
                      <td className="py-3 min-w-[100px]">
                        {invoice?.order?.number}
                      </td>
                      <td className="py-2 min-w-[160px]">{spliceData}</td>
                      <td className="py-[14px] min-w-[90px] pl-2">{quantity}</td>
                      <td className="py-3 min-w-[130px]">{price}</td>
                      <td className="py-3 min-w-[130px] ">{cost}</td>
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
