import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UsePostMediaAddProduct } from "../../api/axios";
import Content from "./UploaderContent";


const Uploader = ({ setGetImage, checkFile, }) => {
    const [images, setImages] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
        const token = localStorage.getItem("Authorization")
    useEffect(() => {
        if (images.length < 1) return;
        const newImagesUrl = [];
        images.forEach(image => newImagesUrl.push(URL.createObjectURL(image)))
        setImageUrls(newImagesUrl)
    }, [images])
    const notifyError = () => toast.error('Image size must be 1.5 mb!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifySuccess = () => toast.success('Image successfully upload!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    function onImageChange(e) {
        if (e.target.files[0].size > 1500000) {
            return notifyError()
        }
        notifySuccess()
        setImages([...e.target.files])
        uploadFile(e.target.files[0])
        console.log(e.target.files);
    }

    function uploadFile(file) {
        const formData = new FormData();
        formData.append("associated_with", "products");
        formData.append("usage", "product");
        formData.append("file", file);
        UsePostMediaAddProduct(formData)
        .then((res)=>setGetImage(res?.data?.path))
        .catch(error => console.log(error))
    }

    return (
        <>
            <div className="border w-full h-auto rounded-md">
                <p className="mt-2 ml-5 text-[#6F767E]">Product image</p>
                <div className="p-2">
                    <label  >
                        <input className='upload_input hidden pointer-events:none' type="file" accept="image/*" onChange={onImageChange} />
                        <div className={`mx-auto 2xl:h-52 h-36 border-dashed border-2 rounded-lg flex justify-center items-center ${checkFile === true ? 'border-red-400' : ""}`}>
                            {imageUrls.length > 0 ?
                                imageUrls.map((imageSrc, index) => (
                                    <img key={index} src={imageSrc} className="w-full h-full object-contain z-50" />)) : <Content />
                            }
                        </div>
                    </label>
                            {
                                checkFile ? <span className="mt-0 text-red-400">Image must be required !</span> : null
                            }
                </div>

                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

            </div>


        </>
    )
}

export default Uploader;