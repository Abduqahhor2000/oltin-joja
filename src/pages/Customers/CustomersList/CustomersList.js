import React, { useEffect, useState } from "react";
import { search_svg } from "../../../svg/navbar";
import { useGet } from "../../../api/http";
import { useDispatch, useSelector } from "react-redux";
import { costumersInfo } from "../../../store/costumers/costumers";
import Pagination from "../../pagination/Pagination";

function CustomersList() {
  const [searchText, setSearchText] = useState("");
  const [customers, setCustomers] = useState([]);
  const [totalCustomers, setTotalCustomers] = useState(1);

  useEffect(() => {
    FetchData(1, 10);
  }, []);

  useEffect(() => {
    FetchData(1, 10);
  }, [searchText]);

  const FetchData = async (currentPage, pageSize) => {
    await useGet(`/v1/users/customers`, {
      q: searchText.length > 1 ? searchText : null,
      "page[offset]": (+currentPage - 1) * pageSize,
      "page[limit]": pageSize,
    })
      .then(({data}) => {
        setCustomers(data.entities)
        setTotalCustomers(data.pageInfo?.totalCount)
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="py-5 px-10">
        <div className="bg-white rounded-[10px] overflow-hidden py-0 px-5">
          <div className="pt-5 pl-7 flex justify-between">
            <div className="text-lg leading-6 text-Neutral/04">
              Customer list
            </div>
            <span className="relative mr-5">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                className="placeholder:text-Neutral/Shades/04-75% bg-white border-[2px] border-Neutral/03 text-black outline-none h-10 w-[200px] text-[15px] pl-4 pr-7 rounded-full"
                type="text"
                placeholder="Search customer"
              />
              <span className="absolute right-3 max-w-min max-h-min inset-y-0 my-auto cursor-pointer">
                {search_svg}
              </span>
            </span>
          </div>
          <div className="overflow-auto relative max-h-[calc(100vh-280px)] ">
            
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
                      Name
                    </div>
                  </th>
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Phone number
                    </div>
                  </th>
                  {/* <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Email
                    </div>
                  </th> */}
                  <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Registration date
                    </div>
                  </th>
                  {/* <th>
                    <div className="text-start border-b-2 border-Neutral/03 font-semibold py-4">
                      Total
                    </div>
                  </th> */}
                </tr>
              </thead>
              <tbody >
                {customers
                  .map((customer) => {
                    return (
                      <tr
                        key={customer.id}
                        className={`border-b border-Neutral/03`}
                      >
                        <td className="py-3 pl-7 min-w-[100px]">
                          {customer.id}
                        </td>
                        <td className="py-1.5 min-w-[120px] flex justify-center">
                          {customer.image ? (
                            <img
                              className="w-10 h-10 rounded-full object-cover"
                              src={customer.image}
                              alt=""
                            />
                          ) : (
                            <>
                              <span className="w-10 h-10 rounded-full uppercase bg-default-img text-xl leading-6 font-semibold text-white flex justify-center items-center">
                                {customer?.full_name?.substring(0, 1)}
                              </span>
                            </>
                          )}
                        </td>
                        <td className="py-3 min-w-[200px] capitalize ">
                          {customer.full_name}
                        </td>
                        <td className="py-2 min-w-[170px]">{customer.phone}</td>
                        {/* <td className="py-[14px] min-w-[260px]">
                        {customer.email}
                      </td> */}
                        <td className="py-3 min-w-[160px]">
                          {customer?.created_at.split("T")[0]}
                        </td>
                        {/* <td className="py-3 min-w-[120px]">{customer.bill}</td> */}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end w-full mt-5 mb-5">
            <Pagination
              totalItem={totalCustomers}
              changePage={(currentPage, pageSize) => {
                FetchData(currentPage, pageSize);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomersList;
