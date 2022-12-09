const EditInfo = () => {
    const data = [
        {
            name: "Price",
            info: "32.000"
        },
        {
            name: "Product Quantity",
            info: "421"

        }, {
            name: "Availiblity",
            info: "In Stock"

        }, {
            name: "Delivery Charges",
            info: "Free"

        }, {
            name: "SKU Identification",
            info: "1"

        }, {
            name: "Product detail",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book type and scrambled it to make a type specimen book."

        },
    ]
    return (
        <>
            <div className="flex mdPlus:flex-nowrap flex-wrap">
                <div className="w-full h-full">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={`${item.name != "Product detail" ? 'border-b-[1px] 2xl:mt-2 2xl:py-3 mt-2 py-2  h-full flex justify-between items-center ' : "mt-1 py-2"}`}>
                                <p className="-mt-2 text-[#6F767E] ">{item.name}</p>
                                {
                                    item.name == "Availiblity" ? <button className="2xl:py-1 2xl:px-7 py-1 px-5 text-white rounded-md bg-[#FFA101] -mt-2">{item.name == "Availiblity" && item.info}</button> :
                                        <p className={` text-[#9A9FA5]  ${!item.name == "Product detail" ? "-mt-2" : "mt-[2px] 2xl:text-base text-sm"}`}>{item.info}</p>
                                }
                            </div>
                        )
                    })}
                </div>
                <div className=" w-full h-full  p-5">
                    <div className="p-4 border rounded-lg">
                        <p className="text-[#6F767E] ">Product image</p>
                        <div className="w-full flex justify-center p-2 ">
                            <img src="/edit_burger.png" className="w-full" />
                        </div>
                    </div>
                    <div className="flex w-full  flex justify-end xl:mt-5 mdPlus:mt-16 mt-5">
                        <div className="flex justify-between 2xl:w-[280px] w-[250px]  ">
                            <button className="2xl:w-32 2xl:h-10 w-28 h-8 2xl:p-2 p-0 rounded-md  border-2 text-[#9A9FA5] ">Delete</button>
                            <button className="2xl:w-32 2xl:h-10 w-28 h-8 2xl:p-2 p-0 rounded-md  bg-[#FFA101] text-white">Edit</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default EditInfo