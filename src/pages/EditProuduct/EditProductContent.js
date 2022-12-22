const EditInfo = () => {
  const data = [
    {
      id: 1,
      name_uz: "Qaynatma sho'rva",
      name_ru: "sting",
      name_en: "string",
      category_id: 1,
      discount: "15 %",
      active_discount: true,
      photo: "",
      description_uz: "description uzb",
      description_ru: "description rus",
      description_en: "description eng",
      status: "available",
      options: [
        {
          id: 1,
          measurement: {
            id: 4,
            name_uz: "Dona",
            name_ru: "Шт.",
            name_en: "Piece",
            inc_by: 1,
          },
          unit: 1,
          price: 32000,
          discount_price: 32000,
          default: true,
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex mdPlus:flex-nowrap flex-wrap">
        <div className="w-full h-full">
          <div className="border-b-2 w-full flex justify-between items-center py-2 ">
            <p className="text-[#6F767E]">Product name (uz)</p>
            <p className="text-[#9A9FA5]">{data[0].name_uz}</p>
          </div>
          <div className="border-b-2 w-full flex justify-between items-center py-2">
            <p className="text-[#6F767E]">Product name (ru)</p>
            <p className="text-[#9A9FA5]">{data[0].name_ru}</p>
          </div>
          <div className="border-b-2 w-full flex justify-between items-center py-2">
            <p className="text-[#6F767E]">Product name (en)</p>
            <p className="text-[#9A9FA5]">{data[0].name_en}</p>
          </div>
          <div className="border-b-2 w-full flex justify-between items-center py-2">
            <p className="text-[#6F767E]">Category</p>
            <p className="text-[#9A9FA5]">{data[0].category_id}</p>
          </div>
          <div className="border-b-2 w-full flex justify-between items-center py-2">
            <p className="text-[#6F767E]">Discount %</p>
            <p className="text-[#9A9FA5]">{data[0].discount}</p>
          </div>
          <div className="border-b-2 w-full flex justify-between items-center py-2">
            <p className="text-[#6F767E]">Status</p>
            <p className="text-[#9A9FA5]">
              <button className="bg-[#FFA101] text-white rounded-md px-4 py-1">
                In Stock
              </button>
            </p>
          </div>
          <div className="border-b-2 w-full  items-center py-2">
            <p className="text-[#6F767E]">Options</p>
            <div className="flex">
              <p className="text-[#9A9FA5]">
                {data[0].options[0].measurement.name_en}
              </p>
              <p className="text-[#9A9FA5] ml-2">
                {data[0].options[0].discount_price}
              </p>
            </div>
          </div>
          <div className="border-b-2 w-full  items-center py-2">
            <p className="text-[#6F767E]">Product detail Uz</p>
            <p className="text-[#9A9FA5] ">{data[0].description_uz}</p>
          </div>
          <div className="border-b-2 w-full  items-center py-2">
            <p className="text-[#6F767E]">Product detail Ru</p>
            <p className="text-[#9A9FA5] ">{data[0].description_ru}</p>
          </div>
          <div className="w-full  items-center py-2">
            <p className="text-[#6F767E]">Product detail En</p>
            <p className="text-[#9A9FA5] ">{data[0].description_en}</p>
          </div>
        </div> 

        <div className=" w-full h-full  p-5">
          <div className="p-4 border rounded-lg">
            <p className="text-[#6F767E] ">Product image</p>
            <div className="w-full flex justify-center p-2 ">
              <img alt="" src="/edit_burger.png" className="w-full" />
            </div>
          </div>
          <div className="flex w-full justify-end xl:mt-5 mdPlus:mt-16 mt-5">
            <div className="flex justify-between 2xl:w-[280px] w-[250px]  ">
              <button className="2xl:w-32 2xl:h-10 w-28 h-8 2xl:p-2 p-0 rounded-md  border-2 text-[#9A9FA5] ">
                Delete
              </button>
              <button className="2xl:w-32 2xl:h-10 w-28 h-8 2xl:p-2 p-0 rounded-md  bg-[#FFA101] text-white">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditInfo;
