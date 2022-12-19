import InfoContent from "./InvoiceInfoContent";

const InvoiceInfo = () => {

    return(
        <>
            <div className='pb-5 px-10'>
            <div className='w-full flex items-center bg-white px-5 h-12 rounded-xl  mt-5'>
                <div className='flex justify-between items-center w-[230px] '>
                    <h1 className='text-Primary/03 text-lg '>Invoice detail</h1>
                    <span className='text-[#7C7E80]'>/</span>
                    <h1 className='text-[#7C7E80] text-lg'>Invoice info</h1>
                </div>
            </div>

            <div className='w-full bg-white h-full mt-5 rounded-xl p-5'>
                <InfoContent />
            </div>
        </div>
        </>
    )
}

export default InvoiceInfo;