import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import {
  edit_svg,
  del_svg,
  del_grey_svg,
  edit_grey_svg,
  send_grey_svg,
  send_svg,
} from "../../../svg/product";
import baguette from "../../../images/baguette.png";
import delicious from "../../../images/delicious.png";
import dumplings from "../../../images/dumplings.png";
import food from "../../../images/food.png";
import fried from "../../../images/fried.png";
import monika from "../../../images/monika.png";

function ProductList() {
  const navigate = useNavigate()
  const [categories, setCategories] = useState([
    {
      id: 0,
      name: "Burgers",
      selected: true,
    },
    {
      id: 1,
      name: "Hot-Dogs",
      selected: false,
    },
    {
      id: 2,
      name: "Pizza’s",
      selected: false,
    },
    {
      id: 3,
      name: "National meals",
      selected: false,
    },
    {
      id: 4,
      name: "Salads",
      selected: false,
    },
  ]);
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "Pizza for kids",
      imgUrl: delicious,
      price: "50.000",
      totalOrders: 250,
      revenue: 1000,
      inStock: false,
    },
    {
      id: 1,
      name: "Bergur Kok",
      imgUrl: food,
      price: "50.000",
      totalOrders: 250,
      revenue: 1000,
      inStock: false,
    },
    {
      id: 2,
      name: "Pizza for kids",
      imgUrl: dumplings,
      price: "50.000",
      totalOrders: 250,
      revenue: 1000,
      inStock: true,
    },
    {
      id: 3,
      name: "Pizza for kids",
      imgUrl: fried,
      price: "50.000",
      totalOrders: 250,
      revenue: 1000,
      inStock: true,
    },
    {
      id: 4,
      name: "Pizza for kids",
      imgUrl: baguette,
      price: "50.000",
      totalOrders: 250,
      revenue: 1000,
      inStock: true,
    },
    {
      id: 5,
      name: "Pizza for kids",
      imgUrl: monika,
      price: "50.000",
      totalOrders: 250,
      revenue: 1000,
      inStock: true,
    },
    {
      id: 6,
      name: "Pizza for kids",
      imgUrl: delicious,
      price: "50.000",
      totalOrders: 250,
      revenue: 1000,
      inStock: false,
    },
    {
      id: 7,
      name: "Bergur Kok",
      imgUrl: food,
      price: "50.000",
      totalOrders: 250,
      revenue: 1000,
      inStock: false,
    },
    {
      id: 8,
      name: "Pizza for kids",
      imgUrl: dumplings,
      price: "50.000",
      totalOrders: 250,
      revenue: 1000,
      inStock: true,
    },
    {
      id: 9,
      name: "Pizza for kids",
      imgUrl: fried,
      price: "50.000",
      totalOrders: 250,
      revenue: 1000,
      inStock: true,
    },
    {
      id: 10,
      name: "Pizza for kids",
      imgUrl: baguette,
      price: "50.000",
      totalOrders: 250,
      revenue: 1000,
      inStock: true,
    },
    {
      id: 11,
      name: "Pizza for kids",
      imgUrl: monika,
      price: "50.000",
      totalOrders: 250,
      revenue: 1000,
      inStock: true,
    },
  ]);

  // useEffect(() => {
  //   const next_product = document.querySelector("#next-product");
  //   next_product.addEventListener("popstate", function (event) {
  //     console.log("hey");
  //   });
  // }, []);

  const selectCategory = (id) => {
    setCategories(
      categories.map((category) => {
        if (category.id === id) {
          return { ...category, selected: !category.selected };
        } else {
          return category;
        }
      })
    );
  };

  // const cantrolStock = (id) => {
  //   setProducts(
  //     products.map((product) => {
  //       if (product.id === id) {
  //         return { ...product, inStock: !product.inStock };
  //       } else {
  //         return product;
  //       }
  //     })
  //   );
  // };

  return (
    <div>
      <div className="py-5 px-10">
        <div className="flex justify-between text-Neutral/Shades/04-75% text-sm mb-5">
          <div className="flex">
            {categories.map((category) => {
              return (
                <span
                  key={category.id}
                  onClick={() => selectCategory(category.id)}
                  className={`h-10 duration-200 px-4 mr-2.5 rounded-xl font-medium py-[9px] border border-transparent cursor-pointer ${
                    category.selected
                      ? "text-white bg-Primary/03 hover:bg-hoverButton"
                      : "text-Neutral/Shades/04-75% bg-white hover:border-Neutral/Shades/04-75% hover:bg-transparent"
                  }`}
                >
                  {category.name}
                </span>
              );
            })}
          </div>
          {/* <span
            onClick={() => navigate("/product_list/add-product")}
            className="h-10 cursor-pointer rounded-xl bg-white py-2.5 pr-5 relative pl-12 hover:bg-Primary/03 duration-200 select-none active:bg-hoverButton hover:text-white"
          >
            {" "}
            <span className="text-3xl absolute inset-y-0 my-0 left-4 font-thin">
              +
            </span>{" "}
            Add
          </span> */}
        </div>
        {/* <div className="bg-white rounded-[10px] uppercase text-lg leading-6 font-medium pl-5 py-2 text-Neutral/04 mb-5">
          Product List
        </div> */}
        <div className="bg-white rounded-[10px] overflow-auto relative max-h-[calc(100vh-180px)]">
          <table className="w-full text-sm text-Neutral/Shades/04-75%">
            <thead>
              <tr className="text-Neutral/Shade/07-50% sticky top-0 bg-white z-10">
                <th>
                  <div className="text-start font-semibold py-4 pl-5 border-b-2 border-Neutral/03">
                    ID number
                  </div>
                </th>
                <th>
                  <div className="text-start font-semibold py-4 border-b-2 border-Neutral/03">
                    Image
                  </div>
                </th>
                <th>
                  <div className="text-start font-semibold py-4 border-b-2 border-Neutral/03">
                    Title
                  </div>
                </th>
                <th>
                  <div className="text-center font-semibold py-4 border-b-2 border-Neutral/03">
                    Status
                  </div>
                </th>
                <th>
                  <div className="text-start font-semibold py-4 border-b-2 border-Neutral/03">
                    Price
                  </div>
                </th>
                <th>
                  <div className="text-start text-transparent select-none font-semibold py-4 h-full border-b-2 border-Neutral/03">
                    .
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index, array) => {
                return (
                  <tr key={product.id} className={`border-b border-Neutral/03`}>
                    <td className="py-3 pl-5 min-w-[150px] max-w-[200px]">
                      {product.id}
                    </td>
                    <td className="py-1.5 min-w-[80px]">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={product.imgUrl}
                        alt=""
                      />
                    </td>
                    <td className="py-3 min-w-[220px]">{product.name}</td>
                    <td className="py-2 flex justify-center min-w-[180px]">
                      <span
                        // onClick={() => cantrolStock(product.id)}
                        className={`w-[110px] h-9 rounded-[10px] ${
                          product.inStock
                            ? "bg-Primary/03"
                            : "bg-Primary/03/50"
                        } text-sm text-white font-semibold flex justify-center items-center`}
                      >
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                    <td className="py-3 min-w-[100px]">{product.price}</td>
                    <td className="text-end pr-7 w-[100px] min-w-[100px]">
                      <div className="flex w-full justify-between">
                        {/* <span className="p-1 group cursor-pointer w-8 h-8 select-none pt-1.5">
                          <span className="hidden group-hover:block">
                            {edit_svg}
                          </span>
                          <span className="block group-hover:hidden">
                            {edit_grey_svg}
                          </span>
                        </span> */}
                        <span className="p-1 group cursor-pointer ml-2 mr-1 w-8 h-8 select-none pt-1.5">
                          <span className="hidden group-hover:block">
                            {send_svg}
                          </span>
                          <span className="block group-hover:hidden">
                            {send_grey_svg}
                          </span>
                        </span>
                        {/* <span className="p-1 cursor-pointer group select-none">
                          <span className="hidden group-hover:block">
                            {del_svg}
                          </span>
                          <span className="block group-hover:hidden">
                            {del_grey_svg}
                          </span>
                        </span> */}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* <div id="next-product"></div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
