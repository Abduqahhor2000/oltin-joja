import { useEffect, useState } from "react";
import BaseInput from "./baseInput"
import Uploader from "./Uploader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { UseAddProduct } from "../../api/axios";


const ProductForm = () => {
    const [getImage, setGetImage] = useState('')
    const [categories, setCategories] = useState("")
    const [status, setStatus] = useState(true)
    const [discount, setDiscount] = useState(true)
    const [measurements, setMeasurments] = useState("")
    const [checkFile, setCheckFile] = useState(false)
    const [checkMeasurement, setCheckMeasurement] = useState(false)
    const [checkCategory, setCheckCategory] = useState(false)

    const [values, setValues] = useState([
        {
            product_name: "",
            category: "",
            description: "",
            image: "",
            status: [],
            active_discount : [],
            price: "",
            discount: "",
            options: []

        }
    ]);

    const [multipleValue, setmultipleValue] = useState([
        {
            price: "",
            measurement_id: "",
            unit: "",
        }
    ])
    const handleAdd = () => {
        setmultipleValue([...multipleValue, {
            price: "",
            measurement_id: "",
            unit: "",

        }])
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const onHandle = (e, i) => {
        let newForm = [...multipleValue]
        newForm[i][e.target.name] = +e.target.value
        setmultipleValue(newForm)
    }


    const data = [
        {
            id: 1,
            name: "product_name",
            item_name: "Product name",
            type: "text",

        },
        {
            id: 2,
            name: "discount",
            item_name: "Discount %",
            pattern: "[0-9]{1,5}",
            type: "number",
        },
        {
            id: 3,
            name: "price",
            item_name: "Price",
            type: "number",
            pattern: "[0-9]{1,5}",
        },
        {
            id: 4,
            name: "unit",
            item_name: "Unit ",
            type: "number",
        },

    ]

    const options_1 = [
        { value: '1-kategoriya', label: '1-kategoriya', id:1 },
        { value: '2-kategoria', label: '2-kategoria',id:2},
    ];
    const options_2 = [
        { value: 'dona', label: 'dona', id: 1 },
        { value: 'kg', label: 'kg', id: 2 },

    ];


    useEffect(() => {
        setCheckFile(false)
        setCheckMeasurement(false)
        setCheckCategory(false)
    }, [getImage, measurements, categories])
    const handleSubmit = (event) => {
        event.preventDefault();
        values.photo = getImage
        // console.log(multipleValue);
        // console.log(multipleValue.measurement);
        console.log(multipleValue);
        values.category_id = categories
        values.options = multipleValue
    
      
    
  

        console.log(values);
        // if (!values.image.length) {
        //     setCheckFile(true)
        // }
        // if (!values.measurement) {
        //     setCheckMeasurement(true)
        // }
        // if (!values.category) {
        //     setCheckCategory(true)
        // }

        // if (values.image.length && values.measurement.length && values.category.length) {
        //     values.status = status
            values.active_discount  = discount
            values.status = "available"
            values.discount = 12
        //     notify()
        // }
        values.name_uz = "asda"
        values.name_ru = "asdqw"
        values.name_en = "asdqswe"
        values.description_uz = "asdsd"
        values.description_ru = "asdqwsd"
        values.description_en = "a12sdsd"
        values.recommended_ids = [12,12,12]


        UseAddProduct(values)
        .then((res)=>console.log(res))
        .catch((error)=>console.log(error))
        console.log(values);

        // console.log(values)
    };


    const colorStyle = {
        control: (styles) => ({ ...styles, border: "none", boxShadow: "none" }),
        indicatorSeparator: (provided) => {
            return {
                ...provided,
                display: "none",
            };
        },
    }
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

    const defaultValueMeasurment = [{ label: "Measurement" }]
    const defaultValueCategory = [{ label: "Category" }]

    return (
        <>
            <form onSubmit={handleSubmit} className="grid xl:grid-cols-5 grid-col-1">
                <div className="grid-cols-9  grid gap-2 xl:w-[97%]  sm:w-[100%]  xl:col-span-3 sm:col-span-3 col-span-3 ">
                    <BaseInput onChange={onChange}
                        name={data[0].name}
                        product={data[0].item_name}
                        type={data[0].type}
                        value={values[data[0].item_name]}
                    />
                    <div className={`w-[100%] col-span-5 h-[45px] border rounded-lg p-1 ${checkCategory && "border-red-400" || categories.length && 'border-green-300'}`}>
                        <Select
                            preffix="none"
                            styles={colorStyle}
                            defaultValue={defaultValueCategory[0]}
                            onChange={(e) => setCategories(e.id)}
                            options={options_1}
                        />
                        {checkCategory && <p className="mt-1 text-[12px] text-red-500 ease-in duration-300 ">Category is required</p>}
                    </div>
                    <BaseInput onChange={onChange}
                        name={data[1].name}
                        product={data[1].item_name}
                        value={values[data[1].item_name]}
                        type={data[1].type}
                    />
                    {multipleValue.map((item, index) => {
                        return (
                            <>
                                <BaseInput onChange={(e) => onHandle(e, index)}
                                    name={data[3].name}
                                    product={data[3].item_name}
                                    type={data[3].type}
                                    value={values[data[3].item_name]}
                                />

                                <div className={`w-[100%] col-span-3 h-[45px] border rounded-lg p-1  ${checkMeasurement && "border-red-400" || measurements.length && 'border-green-300'}`}>
                                    <Select
                                        styles={colorStyle}
                                        defaultValue={defaultValueMeasurment[0]}
                                        onChange={(e) => onHandle({ target: { name: 'measurement_id', value: e.id } }, index)}
                                        options={options_2}
                                        required

                                    />
                                    {checkMeasurement && <p className="mt-1 text-[12px] text-red-500 ease-in duration-300 ">Measurement is required</p>}
                                </div>
                                <BaseInput onChange={(e,) => onHandle(e, index)}
                                    name={data[2].name}
                                    product={data[2].item_name}
                                    value={values[data[2].item_name]}
                                    type={data[2].type}
                                />
                            </>
                        )
                    })}

                    <div className="col-span-7 flex justify-end  ">
                        <button onClick={() => handleAdd()} className="h-[43px] px-5 border rounded-lg text-[#9A9A9A]">+Add option</button>
                    </div>
                    <div className="w-full col-span-7  h-[150px] relative">
                        <textarea required name="description" onChange={onChange} className="peer w-full h-full valid:border-green-300 focus:border-Primary/03  border outline-none rounded-lg p-3 resize-none" />
                        <span className="text-sm px-2  absolute top-[10px] left-3 pointer-events-none  peer-valid:translate-y-[-20px] peer-focus:translate-y-[-20px] peer-focus:translate-x-[-8px]  peer-valid:translate-x-[-8px] peer-valid:text-[13px] peer-focus:text-[13px] ease-linear duration-[0.2s] text-[#9A9A9A] bg-white">Description</span>
                        <span className="absolute right-4 top-[14px]  peer-valid:opacity-100 opacity-0">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.625 9.5L8.54167 11.4167L12.375 7.58333M18.125 9.5C18.125 10.6327 17.9019 11.7542 17.4685 12.8006C17.035 13.8471 16.3997 14.7979 15.5988 15.5988C14.7979 16.3997 13.8471 17.035 12.8006 17.4685C11.7542 17.9019 10.6327 18.125 9.5 18.125C8.36735 18.125 7.24579 17.9019 6.19936 17.4685C5.15292 17.035 4.20211 16.3997 3.4012 15.5988C2.6003 14.7979 1.96499 13.8471 1.53154 12.8006C1.09809 11.7542 0.875 10.6327 0.875 9.5C0.875 7.21251 1.7837 5.01871 3.4012 3.4012C5.0187 1.7837 7.21251 0.875 9.5 0.875C11.7875 0.875 13.9813 1.7837 15.5988 3.4012C17.2163 5.01871 18.125 7.21251 18.125 9.5Z" stroke="#27AE60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="xl:col-span-2 col-span-2 xl:mt-0 mt-10">
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
                <div className="col-span-7  justify-end grid mt-10">
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