import React,{useState, useEffect} from "react";
import DatePicker from "./datePickerModal"


export default function BoxBuyer(props) {
    const [isMounted, setIsMounted] = useState()
    useEffect(() => {
        setIsMounted(<DatePicker/>)
      }, [])
    return (
        <div className=" pt-1 pb-2 px-4 ">
            <div className="flex bg-gray-300 rounded">
                <div className="bg-gray-300 px-4 py-4 rounded">
                    <div className="font-sans sm:font-serif md:font-mono lg:font-sans xl:font-serif">
                        {isMounted}
                    </div>
                    <div className="font-sans sm:font-serif md:font-mono lg:font-sans xl:font-serif">
                        Pengguna (ubah)
                </div>
                </div>
            </div>
        </div>


    )
}
