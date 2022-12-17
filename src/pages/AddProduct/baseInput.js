
const BaseInput = (props) => {
    const { onChange, item_name, id, ...inputProps } = props;

    return (
        <>
            <div className={`inputBox  relative w-full h-[45px] ${props.product === "Product name" ? "col-span-10"  : props.product === "Discount %" ? "col-span-4" : props.product === "Price" ? "col-span-4 " : props.product === "Unit" ? "col-span-2" : "col-span-3"}`}>
                <input
                    name={props.name}
                    key={id}
                    autoComplete="off"
                    type={props.type}
                    onKeyDown={props.type == "number" ? (evt) => evt.key === 'e' && evt.preventDefault() : null}
                    onChange={onChange}
                    required
                    className="peer p-3 w-full h-full border outline-none  valid:border-green-300 rounded-lg focus:border-Primary/03 " />
                <span className="text-sm px-2 rounded-lg absolute top-[12px] left-3  pointer-events-none  peer-valid:translate-y-[-20px] peer-focus:translate-y-[-20px] peer-focus:translate-x-[-8px]  peer-valid:translate-x-[-8px] peer-valid:text-[13px] peer-focus:text-[13px]  ease-linear duration-[0.2s] text-[#9A9A9A] bg-white">{props.product}</span>
                <span className="absolute right-4 top-[14px]  peer-valid:opacity-100 opacity-0">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.625 9.5L8.54167 11.4167L12.375 7.58333M18.125 9.5C18.125 10.6327 17.9019 11.7542 17.4685 12.8006C17.035 13.8471 16.3997 14.7979 15.5988 15.5988C14.7979 16.3997 13.8471 17.035 12.8006 17.4685C11.7542 17.9019 10.6327 18.125 9.5 18.125C8.36735 18.125 7.24579 17.9019 6.19936 17.4685C5.15292 17.035 4.20211 16.3997 3.4012 15.5988C2.6003 14.7979 1.96499 13.8471 1.53154 12.8006C1.09809 11.7542 0.875 10.6327 0.875 9.5C0.875 7.21251 1.7837 5.01871 3.4012 3.4012C5.0187 1.7837 7.21251 0.875 9.5 0.875C11.7875 0.875 13.9813 1.7837 15.5988 3.4012C17.2163 5.01871 18.125 7.21251 18.125 9.5Z" stroke="#27AE60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>

            </div>
        </>
    )
}

export default BaseInput;