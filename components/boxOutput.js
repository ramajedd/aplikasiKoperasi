import React from "react";


export default function BoxBuyer(props) {
    
    const data = props.dataArray;
    
    function RenderTableHeader() {
        let header = Object.keys(data[0])
        return header.map((key, index) => {
           return <th className="px-4 py-2 background-color:#f8f8f8" key={index}>{key.toUpperCase()}</th>
        })
     }

    function RenderTableData() {
        return data.map((d, index) => {
           const { item, harga, jumlah, subtotal } = d 
           return (
              <tr className="hover:bg-gray-100 border-b border-gray-200 py-10" key={index}>
                 <td className="px-4 py-4">{item}</td>
                 <td className="px-4 py-4">{harga}</td>
                 <td className="px-4 py-4">{jumlah}</td>
                 <td className="px-4 py-4">{subtotal}</td>
              </tr>
           )
        })
     }

    return (
        <div className="bg-white pb-4 px-4 rounded-md w-full">
            <div className="overflow-x-auto mt-6">
                {data.length===0?
                    "silahkan tambahkan transaksi":
                    <table className="table-auto border-collapse w-full">
                    <thead>
                        <tr className="rounded-lg text-sm font-medium text-gray-700 text-left font-size: 0.9674rem">
                            <RenderTableHeader/>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-normal text-gray-700">  
                            <RenderTableData/>
                    </tbody>
                </table>
                }
                
            </div>
            
        </div>


    )
}
