
export default function Button (props) {

    
    const handleClick =()=>{
        //console.log(props.onClick);
        if (props.onClick){ // berjaga-jaga jika button yang dibuat tidak memamakai atribut onClick
            props.onClick();
            if (props.name){
                props.onClick(props.name);
            }
        }
    }
    return (
        <button
            className={theme(props.theme)}
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => handleClick()}
        >
            {props.children}
        </button>
    )
}

function theme (key){
    const theme1 = "bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
    const theme2 = "bg-pink-200 text-blue active:bg-pink-600 font-bold text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    const theme3 = "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded h-auto shadow";
    const theme4 = "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green hover:opacity-75";
    const arrayTheme =[theme1, theme2, theme3, theme4];
    return arrayTheme[key];
}