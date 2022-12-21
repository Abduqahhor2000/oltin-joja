export const Content = () => {
  const data = [
    {
      name: "Muhriddin Xusniddinov",
      text: "Lorem ipsum san-antonio lan den bonjour madam",
      data: "2022/10/26",
      image: "/public/logo.png",
    },
    {
      name: "Samar Badriddinov",
      text: "Lorem ipsum san-antonio lan den bonjour madam",
      data: "2022/04/03",
      image: "/public/logo.png",
    },
    {
      name: "Jobir Akbarov",
      text: "Lorem ipsum san-antonio lan den bonjour madam",
      data: "2022/10/26",
      image: "/public/logo.png",
    },
    {
      name: "Harry Maguaire",
      text: "Lorem ipsum san-antonio lan den bonjour madam",
      data: "2021/10/26",
      image: "/public/logo.png",
    },
    {
      name: "Muhriddin Xusniddinov",
      text: "Lorem ipsum san-antonio lan den bonjour madam",
      data: "2022/10/26",
      image: "/public/logo.png",
    },
    {
      name: "Sherbek Qo'chqorov",
      text: "Lorem ipsum san-antonio lan den bonjour madam",
      data: "2019/10/06",
      image: "/public/logo.png",
    },
  ];

  return (
    <div className="w-full ">
      {/* {
                data.map((item)=>{
                    return(
                        <div className="flex">
                            
                        </div>
                    )
                })
            } */}

      <div className=" w-full  p-1 grid  grid-cols-12 bg-white hover:shadow-md hover:">
        <div className=" col-span-1  flex justify-center items-center">
          <div className="w-14 h-14 rounded-full bg-red-300">
            <img src="/logo.png" className=" object-fill" />
          </div>
        </div>
        <div className="col-span-9 px-2">
          <h2 className="mt-1 font-bold">Muhriddin Xusniddinov</h2>
          <p className="mt-1 text-[#6F767E]">
            Lorem ipsum san-antonio lan den bonjour madam Lorem ipsum
            san-antonio lan den bonjour madam
          </p>
          <p className="mt-1 text-[#6F767E]">2022/10/26</p>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <div className="w-20 h-20 rounded-md  bg-red-300 ">
            <img src="/logo.png" className=" object-fill" />
          </div>
        </div>
      </div>
    </div>
  );
};
