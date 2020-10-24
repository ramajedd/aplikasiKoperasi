import React from 'react';

export default function Transaksi(props) {
  const menuName =props.menu
  const [status, setStatus] = React.useState(menuName[0]);
  const handleClick =(e)=>{
    setStatus(e.target.name);
    props.onClickMenu(e.target.name);
  }

 

  function Menu (){
      return menuName.map((menu, index)=>{
        return (
          <li className={status===menu?"bg-red-100":""} key={index}>
            <button
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green hover:opacity-75"
                  name = {menu}
                  onClick={(e)=>handleClick(e)}
                >
                  {menu}
           </button>
            
          </li>
        )
      })
  }
  return (
    <>
    <div className="flex flex-wrap pt-2 px-4 justify-center  text-xs uppercase font-bold">Penjualan</div>
    <div className="pt-2">
      <div className="flex flex-wrap py-2 justify-center">
        <div className="w-full px-4">
          <div className="flex justify-center bg-blue-200 rounded">
            <ul className="items-center flex">
              <Menu/>
            </ul>
          </div>
        </div>
      </div>

    </div>
    </>


  )
}
