import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import {
//   edit_svg,
//   edit_grey_svg,
//   del_svg,
//   del_grey_svg,
// } from "../../../svg/product";
import { usePost } from "../../../api/http";
// import baguette from "../../../images/baguette.png";
// import delicious from "../../../images/delicious.png";
// import dumplings from "../../../images/dumplings.png";
// import food from "../../../images/food.png";
// import fried from "../../../images/fried.png";
// import monika from "../../../images/monika.png";

function ProductCategory() {
  const navigate = useNavigate();
  const [selectAll, setSelectAll] = useState(true);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProduct();
  }, []);

  useEffect(() => {
    if (selectAll) {
      setFilteredProducts(products);
    } else{
      setFilteredProducts(
      products.filter((product) => {
        if (
          categories.find(
            (category) =>
              category.id === product.parentGroup && category.selected
          )
        ) {
          return true;
        } else {
          return false;
        }
      })
    );
    }
    console.log(filteredProducts);
    
  }, [selectAll, categories]);

  console.log(filteredProducts); 

  function getAllProduct() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost("/v1/menu/nomenclature").then(({ data }) => {
      setCategories(
        data?.groups.map((group) => {
          return { ...group, selected: false };
        })
      );
      setProducts(data?.products);
      console.log(data.products);
      console.log(data.groups);
    });
  }

  const selectCategory = (id) => {
    setSelectAll(false)
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
        <div className="flex justify-between text-Neutral/Shades/04-75% text-sm">
          <div className="flex flex-wrap">
            <span
              onClick={() => setSelectAll(!selectAll)}
              className={`h-10 duration-200 px-4 mr-2.5 rounded-xl py-[9px] border border-transparent cursor-pointer ${
                selectAll
                  ? "text-white bg-Primary/03 hover:bg-hoverButton"
                  : "text-Neutral/Shades/04-75% bg-white hover:border-Neutral/Shades/04-75% hover:bg-transparent"
              }`}
            >
              All
            </span>
            {categories.map((category) => {
              return (
                <span
                  key={category.id}
                  onClick={() => selectCategory(category.id)}
                  className={`h-10 duration-200 px-4 mr-2.5 rounded-xl py-[9px] border border-transparent cursor-pointer ${
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
            onClick={() => navigate("/product_category/add-product")}
            className="h-10 cursor-pointer rounded-xl bg-white py-2.5 pr-5 relative pl-12 hover:bg-Primary/03 duration-200 select-none active:bg-hoverButton hover:text-white"
          >
            {" "}
            <span className="text-3xl absolute inset-y-0 my-0 left-4 font-thin">
              +
            </span>{" "}
            Add
          </span> */}
        </div>
        <div className="pt-2.5 flex flex-wrap">
          {filteredProducts.map((product, index) => {
            return (
              <div
                key={index}
                className="w-[calc((100%-60px)/3)] bg-white rounded-[10px] mt-2.5 mb-5 p-2.5 pb-4 mr-4 font-medium text-sm"
              >
                <div className="h-48 w-full bg-zinc-300 rounded-[10px] mb-4 cursor-pointer overflow-hidden">
                  <img
                    src={product.imageLinks[0]}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center mb-2.5">
                  <span className="font-semibold pl-1">{product.name}</span>
                  <span className="text-white py-0.5 px-2.5 leading-6 bg-Primary/03 rounded-[10px]">
                    Price: {product.sizePrices[0].price.currentPrice} so'm
                  </span>
                </div>
                {/* <div className="flex justify-between text-Neutral/Shades/04-75% mb-2.5">
                  <span className="pl-1">
                    Total Order: {product.totalOrders}
                  </span>
                  <span>Revenue: {product.revenue}</span>
                </div> */}
                <div className="flex justify-between items-center pl-1">
                  <span
                    // onClick={() => cantrolStock(product.id)}
                    className={`w-full h-10 rounded-[10px] ${
                      product.isDeleted ? "bg-Primary/03/50" : "bg-Primary/03"
                    } text-white font-semibold flex justify-center items-center`}
                  >
                    {product.isDeleted ?  "Out of Stock" :"In Stock"}
                  </span>
                  {/* <span className="w-10 h-10 group rounded-[10px] duration-200 border border-Neutral/Shade/04-40% flex justify-center items-center hover:bg-Neutral/02 hover:border-transparent cursor-pointer active:bg-Neutral/03 select-none">
                    <span className="hidden group-hover:block">
                      {edit_svg}
                    </span>
                    <span className="block group-hover:hidden">
                      {edit_grey_svg}
                    </span>
                  </span> */}
                  {/* <span className="w-10 h-10 group rounded-[10px] duration-200 border border-Neutral/Shade/04-40% flex justify-center items-center hover:bg-Neutral/02 hover:border-transparent cursor-pointer active:bg-Neutral/03 select-none">
                    <span className="hidden group-hover:block">
                      {del_svg}
                    </span>
                    <span className="block group-hover:hidden">
                      {del_grey_svg}
                    </span>
                  </span> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
