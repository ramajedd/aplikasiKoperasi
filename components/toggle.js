import styles from "./toggle.module.css"
import react from "react"

export default function Toggle () {
    const [status, setStatus] = react.useState(true)
    const handleClick =()=>{
        setStatus(!status)
    }
    const title = status?'Penjualan':'Non-penjualan';
    
    return (
        <label
            htmlFor="toogleA"
            className="flex items-center cursor-pointer"
        >

            <div className="relative">

                <input id="toogleA" type="checkbox" className="hidden" onClick={()=>handleClick()} />

                <div
                    className={`${styles.toggle__line} w-10 h-4 bg-gray-400 rounded-full shadow-inner`}
                ></div>

                <div
                    className={`${styles.toggle__dot} absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0`}
                ></div>
            </div>
            <div
                className="ml-3 text-gray-700 font-medium"
            >
                {title}
            </div>
        </label>



    )
}