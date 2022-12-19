
const InfoCost = ({ infoData }) => {
    return (
        <>
            <div className="w-full h-[35vh] overflow-y-auto   mt-10">
                <table className="w-full ">
                    <thead>
                        <tr className="text-[#6F767E] h-10 grid grid-cols-11 border-b-[1px] w-full items-start">
                            <th className="col-span-1 text-[#6F767E] ">
                                Id
                            </th>
                            <th className="col-span-4  text-left ">
                                Description
                            </th>
                            <th className="col-span-2 ">
                                Quantity
                            </th>
                            <th className="col-span-2 ">
                                Unit cost
                            </th>
                            <th className="col-span-2 ">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {infoData.map((data) => {
                            return (
                                <>
                                    <tr className=" mt-2 text-[#6F767E] text-center h-10 grid grid-cols-11 border-b-[1px] w-full items-start">
                                        <td className="col-span-1 ">
                                            {data.id}
                                        </td>
                                        <td className="col-span-4 text-left ">
                                            {data.Description}
                                        </td>
                                        <td className="col-span-2 ">
                                            {data.Quantity}
                                        </td>
                                        <td className="col-span-2 ">
                                            {data.UnitCost}
                                        </td>
                                        <td className="col-span-2 ">
                                            {data.Total}
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default InfoCost;