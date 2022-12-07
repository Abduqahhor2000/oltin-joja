import React, { useState } from "react";
import { edit_svg, del_svg } from "../../svg/product";
import baguette from "../../images/baguette.png";
import delicious from "../../images/delicious.png";
import dumplings from "../../images/dumplings.png";
import food from "../../images/food.png";
import fried from "../../images/fried.png";
import monika from "../../images/monika.png";

function ProductCategory() {
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
      price: "32.000",
      totalOrders: 250,
      revenue: "15.129.000",
      inStock: false,
    },
    {
      id: 1,
      name: "Bergur Kok",
      imgUrl: food,
      price: "32.000",
      totalOrders: 250,
      revenue: "15.129.000",
      inStock: false,
    },
    {
      id: 2,
      name: "Pizza for kids",
      imgUrl: dumplings,
      price: "32.000",
      totalOrders: 250,
      revenue: "15.129.000",
      inStock: true,
    },
    {
      id: 3,
      name: "Pizza for kids",
      imgUrl: fried,
      price: "32.000",
      totalOrders: 250,
      revenue: "15.129.000",
      inStock: true,
    },
    {
      id: 4,
      name: "Pizza for kids",
      imgUrl: baguette,
      price: "32.000",
      totalOrders: 250,
      revenue: "15.129.000",
      inStock: true,
    },
    {
      id: 5,
      name: "Pizza for kids",
      imgUrl: monika,
      price: "32.000",
      totalOrders: 250,
      revenue: "15.129.000",
      inStock: true,
    },
  ]);

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

  const cantrolStock = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, inStock: !product.inStock };
        } else {
          return product;
        }
      })
    );
  }

  return (
    <div>
      <div className="py-5 px-10">
        <div className="flex justify-between text-Neutral/Shades/04-75% text-sm">
          <div className="flex">
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
          <span className="h-10 cursor-pointer rounded-xl bg-white py-2.5 pr-5 relative pl-12 hover:bg-Primary/03 duration-200 select-none active:bg-hoverButton hover:text-white">
            {" "}
            <span className="text-3xl absolute inset-y-0 my-0 left-4 font-thin">
              +
            </span>{" "}
            Add
          </span>
        </div>
        <div className="pt-2.5 flex justify-between flex-wrap">
          {products.map((product) => {
            return (
              <div key={product.id} className="w-[calc((100%-60px)/3)] bg-white rounded-[10px] mt-2.5 mb-5 p-2.5 pb-4 font-medium text-sm">
                <div className="h-48 w-full bg-zinc-300 rounded-[10px] mb-4 cursor-pointer overflow-hidden">
                  <img
                    src={product.imgUrl}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center mb-2.5">
                  <span className="font-semibold pl-1">{product.name}</span>
                  <span className="text-white py-0.5 px-2.5 leading-6 bg-Primary/03 rounded-[10px]">
                    Price: {product.price}
                  </span>
                </div>
                <div className="flex justify-between text-Neutral/Shades/04-75% mb-2.5">
                  <span className="pl-1">Total Order: {product.totalOrders}</span>
                  <span>Revenue: {product.revenue}</span>
                </div>
                <div className="flex justify-between items-center pl-1">
                  <span onClick={()=> cantrolStock(product.id)} className={`w-[calc(100%-100px)] h-10 rounded-[10px] select-none ${product.inStock ? "bg-Primary/03 hover:bg-hoverButton" : "bg-Primary/03/50 hover:bg-Primary/03/70"} cursor-pointer text-white font-semibold duration-200 flex justify-center items-center`}>
                    {
                      product.inStock ? "In Stock" : "Out of Stock"
                    }
                  </span>
                  <span className="w-10 h-10 rounded-[10px] duration-200 border border-Neutral/Shade/04-40% flex justify-center items-center hover:bg-Neutral/02 hover:border-transparent cursor-pointer active:bg-Neutral/03 select-none">
                    {edit_svg}
                  </span>
                  <span className="w-10 h-10 rounded-[10px] duration-200 border border-Neutral/Shade/04-40% flex justify-center items-center hover:bg-Neutral/02 hover:border-transparent cursor-pointer active:bg-Neutral/03 select-none">
                    {del_svg}
                  </span>
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
