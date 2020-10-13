import React from 'react';
import FormInPlace from "./formInplace";

export default function BoxBuyer(props) {
    // const [status, setStatus] = useState(false);
    //const warna = status?'success':'error';
    //const d = Date(Date.now());
    //console.log(moment.locale("id"))
    return (
        <div className=" pt-1 pb-2 px-4 ">
            <div className="flex bg-gray-300 rounded">
                <div className="bg-gray-300 px-4 py-4 rounded">
                <div className="font-sans sm:font-serif md:font-mono lg:font-sans xl:font-serif">
                    <FormInPlace/>
                </div>
                <div className="font-sans sm:font-serif md:font-mono lg:font-sans xl:font-serif">
                    Pengguna (ubah)
                </div>
                </div>
            </div>
        </div>


    )
}
