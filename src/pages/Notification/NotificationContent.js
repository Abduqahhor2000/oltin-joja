export const Content = () => {
  const data = [
    {
      name: "Muhriddin Xusniddinov",
      text: "Lorem ipsum san-antonio lan den bonjour madam",
      date: "2022/10/26",
      image: "/logo.png",
      image_product:"/edit_burger.png"
    },
    {
      name: "Samar Badriddinov",
      text: "Lorem ipsum san-antonio lan den bonjour madam",
      date: "2022/04/03",
      image: "/edit_burger.png",
      image_product:"/edit_burger.png"

    },
    {
      name: "Jobir Akbarov",
      text: "Lorem ipsum san-antonio lan den bonjour madam",
      date: "2022/10/26",
      image: "/logo.png",
      image_product:"/edit_burger.png"

    },
    {
      name: "Harry Maguaire",
      text: "Lorem ipsum san-antonio lan den bonjour madam",
      date: "2021/10/26",
      image: "/logo.png",
      image_product:"/edit_burger.png"

    },
    {
      name: "Muhriddin Xusniddinov", 
      text: "Lorem ipsum san-antonio lan den bonjoure",
      date: "2022/10/26",
      image: "/logo.png",
      image_product:"/edit_burger.png"

    },
    {
      name: "Sherbek Qo'chqorov",
      text: "Lorem ipsum san-antonio lan den bonjour madam",
      date: "2019/10/06",
      image: "/logo.png",
      image_product:"/edit_burger.png"

    },
  ];
  return (
    <div className="w-full  overflow-y-scroll h-[82vh] ">
      {data.map((item) => {
        return (
          <div className="w-full flex group mt-5">
            <span className="w-1 group-hover:bg-Primary/03 group-hover:duration-300 transition duration-300"></span>
            <div className=" w-full  p-1 grid  grid-cols-12 bg-white hover:shadow-md hover:duration-300 hover:transition-all transition duration-300">
              <div className=" col-span-1  flex justify-center items-center">
                <div className="rounded-full">
                  <img src={item.image} className=" object-cover rounded-full w-12 h-12" />
                </div>
              </div>
              <div className=" col-span-9  ">
               <div className="flex flex-wrap ">
               <h2 className="mt-1 font-bold w-full">{item.name}</h2>
                <p className="mt-1 text-[#6F767E]  w-full">{item.text}</p>
                <p className="mt-1 text-[#6F767E] w-full">{item.date}</p>
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-center">
                <div className="w-20 h-16 rounded-md  bg-red-300 flex items-center justify-center ">
                  <img src={item.image_product} className="object-cover w-full h-full rounded-md" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
