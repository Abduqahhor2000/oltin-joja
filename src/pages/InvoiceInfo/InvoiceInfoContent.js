import InfoCost from "./InvoiceInfoCost";

const InfoContent = () => {
  const infoData = [
    {
      id: 1,
      Description: "Big sendwich",
      Quantity: "1",
      UnitCost: "30.000",
      Total: "30.000",
    },
    {
      id: 2,
      Description: "Hamburger",
      Quantity: "3",
      UnitCost: "30.000",
      Total: "90.000",
    },
    {
      id: 3,
      Description: "Shourma",
      Quantity: "5",
      UnitCost: "30.000",
      Total: "150.000",
    },
    {
      id: 4,
      Description: "Hot-dog",
      Quantity: "4",
      UnitCost: "15.000",
      Total: "60.000",
    },
    {
      id: 5,
      Description: "Big sendwich",
      Quantity: "1",
      UnitCost: "30.000",
      Total: "30.000",
    },
    {
      id: 6,
      Description: "Hamburger",
      Quantity: "3",
      UnitCost: "30.000",
      Total: "90.000",
    },
    {
      id: 7,
      Description: "Shourma",
      Quantity: "5",
      UnitCost: "30.000",
      Total: "150.000",
    },
    {
      id: 8,
      Description: "Hot-dog",
      Quantity: "4",
      UnitCost: "15.000",
      Total: "60.000",
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-[#6F767E]">Invoice</p>
        <p className="text-[#9A9FA5]">#2001026</p>
      </div>
      <div className="flex justify-between">
        <div className="flex mt-4 ">
          <p className="text-[#6F767E]">Reciever :</p>
          <p className="text-[#9A9FA5] ml-2">
            Muhriddin Xusniddinov (muhriddinxusniddinov57@gmail.com)
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-[#6F767E]">1254 Chilanzar, Tashkent Uzbekistan</p>
        </div>
        <div>
          <div className="flex">
            <p className="text-[#6F767E]">Invoice date : </p>
            <p className="ml-2 text-[#9A9FA5]"> Satuday, January 07 2022</p>
          </div>
          <div className="flex mt-4">
            <p className="text-[#6F767E]">Due Date : </p>
            <p className="ml-2 text-[#9A9FA5]">Satuday, January 07 2022</p>
          </div>
        </div>
      </div>
      <InfoCost infoData={infoData} />
      <div className="w-full grid grid-cols-1  ">
        <div className="flex mt-5 text-[#6F767E] justify-end">
          <h1 className="text-[18px] ">Total cost :</h1>
          <p className="ml-3 text-[18px]">320.000</p>
        </div>
        <div className="flex justify-end mt-5">
            <button className="w-[130px] h-[40px] border rounded-md text-[#6F767E]">Print</button>
            <button className="w-[130px] h-[40px] border rounded-md ml-6 bg-Primary/03 text-white">Send</button>
        </div>
      </div>
    </div>
  );
};
export default InfoContent;
