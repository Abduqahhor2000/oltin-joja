import { useEffect, useState } from "react";
import BaseInput from "./baseInput"
import Uploader from "./Uploader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductForm = () => {
    const [getImage, setGetImage] = useState('')
    const [selected, setSelected] = useState("")
    const [status, setStatus] = useState(true)
    const [discount, setDiscount] = useState(true)
    const [measurements, setMeasurments] = useState("")
    const [values, setValues] = useState({
        product_name: "",
        price: "",
        discount: "",
        kategory: "",
        description: "",
        image: "",
        status_available: [],
        discount_active: []
    });
    const notify = () => toast.success('Successfuly created', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const category_name = [
        {
            id: 1,
            kategory: "Select kategoria",
            disable: "disable",

        },
        {
            id: 2,
            kategory: "kategoriya1",
        },
        {
            id: 3,
            kategory: "kategoriya2",

        },
        {
            id: 4,
            kategory: "kategoriya3",

        },

    ]

    const measurements_name = [
        {
            id: 1,
            name: "Dona"
        },
        {
            id: 2,
            name: "Kilogramm"
        },


    ]

    const data = [
        {
            id: 1,
            name: "product_name",
            item_name: "Product name",
            type: "text",

        },
        {
            id: 2,
            name: "price",
            item_name: "Price ",
            type: "number",
            pattern: "[0-9]{1,5}",
        },
        {
            id: 3,
            name: "discount",
            item_name: "Discount %",
            pattern: "[0-9]{1,5}",
            type: "number",
        }
    ]

    const [checkFile, setCheckFile] = useState(false)

    useEffect(() => {
        setCheckFile(false)
    }, [getImage])
    const handleSumbit = (event) => {
        event.preventDefault();
        values.image = getImage
        if (!values.image.length) {
            setCheckFile(true)
        }
        if (values.image.length) {
            values.kategory = selected
            values.measurement = measurements
            values.status_available = status
            values.discount_active = discount
            notify()
        }
    };
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });

    };
    function handleSelectChange(event) {
        setSelected(event.target.value);
        setMeasurments(event.target.value)
        console.log(selected);
    }
    return (
        <>
            <form onSubmit={handleSumbit} className="grid 2xl:grid-cols-2 grid-cols-1">
                <div className="w-[90%] grid grid-cols-2 gap-5">
                    {data.map((item, index) => {
                        return (
                            <BaseInput onChange={onChange}
                                product={item.item_name}
                                key={index}
                                id={item.id}
                                value={values[item.item_name]}
                                {...item}

                            />
            
                            )
                    })}
                    <div className="w-[100%] h-[45px] ">
                        <select required value={selected} onChange={handleSelectChange} className="w-full h-full border outline-none rounded-lg">
                            {
                                category_name.map((item, index) => {
                                    return (
                                        <option
                                            {...item} value={item.kategory} className="border outline-none" key={index}>{item.kategory}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-[100%] h-[45px] ">
                        <select required value={measurements} onChange={handleSelectChange} className="w-full h-full border outline-none rounded-lg">
                            {
                                measurements_name.map((item, index) => {
                                    return (
                                        <option
                                            {...item} value={item.name} className="border outline-none" key={index}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-full col-span-2  h-[150px] relative">
                        <textarea required name="description" onChange={onChange} className="peer w-full h-full valid:border-green-300 focus:border-Primary/03  border outline-none rounded-lg p-3 resize-none" />
                        <span className="text-sm px-2  absolute top-[10px] left-3 pointer-events-none  peer-valid:translate-y-[-20px] peer-focus:translate-y-[-20px] peer-focus:translate-x-[-8px]  peer-valid:translate-x-[-8px] peer-valid:text-[13px] peer-focus:text-[13px] ease-linear duration-[0.2s] text-[#9A9A9A] bg-white">Description</span>
                        <span className="absolute right-4 top-[14px]  peer-valid:opacity-100 opacity-0">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.625 9.5L8.54167 11.4167L12.375 7.58333M18.125 9.5C18.125 10.6327 17.9019 11.7542 17.4685 12.8006C17.035 13.8471 16.3997 14.7979 15.5988 15.5988C14.7979 16.3997 13.8471 17.035 12.8006 17.4685C11.7542 17.9019 10.6327 18.125 9.5 18.125C8.36735 18.125 7.24579 17.9019 6.19936 17.4685C5.15292 17.035 4.20211 16.3997 3.4012 15.5988C2.6003 14.7979 1.96499 13.8471 1.53154 12.8006C1.09809 11.7542 0.875 10.6327 0.875 9.5C0.875 7.21251 1.7837 5.01871 3.4012 3.4012C5.0187 1.7837 7.21251 0.875 9.5 0.875C11.7875 0.875 13.9813 1.7837 15.5988 3.4012C17.2163 5.01871 18.125 7.21251 18.125 9.5Z" stroke="#27AE60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="w-full  h-full ">
                    <Uploader setGetImage={setGetImage} checkFile={checkFile} />
                    <div className="w-full h-auto  mt-5">
                        <div className="flex justify-between border-b-[1px] px-1 py-3">
                            <p className="text-[#6F767E]">Status available</p>
                            <div
                                onClick={() => setStatus(!status)}
                                className={`cursor-pointer border w-14 h-6 rounded-full  bg-[#FFA101] rounded-lg flex transition-all duration-300 ${!status && 'ml-5  opacity-50'}`}>
                                <span className={status ? 'h-6 w-6 bg-white border rounded-full ml-8 transition-all duration-300' : 'transition-all duration-300 h-6 w-6 bg-white border rounded-full'} />
                            </div>
                        </div>
                        <div className="flex justify-between border-b-[1px]  mt-6 px-1 py-3">
                            <p className="text-[#6F767E]">Discount active</p>
                            <div
                                onClick={() => setDiscount(!discount)}
                                className={`cursor-pointer  w-14 h-6 rounded-full bg-[#FFA101] flex transition-all duration-300 ${!discount && 'ml-5 opacity-50'}`} >
                                <span className={discount ? 'h-6 w-6 bg-white border rounded-full ml-8 transition-all duration-300' : 'transition-all duration-300 h-6 w-6 bg-white border rounded-full'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div className="w-full  flex justify-end mt-10">
                    <div className="flex justify-between w-[280px]">
                        <button className="w-32 h-10 border rounded-md p-2">Cancel</button>
                        <button className="w-32 h-10 border rounded-md bg-[#FFA101] p-2 text-white">Save and add</button>
                    </div>

                </div>
            </form>
        </>
    )
}

export default ProductForm