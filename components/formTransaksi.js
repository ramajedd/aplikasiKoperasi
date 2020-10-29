import React, { useState } from 'react';
import ModalForm from "./modalForm";
import KontenHead from "./kontenHead";
import BoxBuyer from "./boxBuyer";
import BoxOutput from "./boxOutput";

export default function Transaksi(props) {
  const modes = ["Plg","Anon"];
  const [dataArray, setDataArray] = useState([]);
  const [mode, setMode] = useState(modes[0]);
  const handleInput=value=>{
    const item = value.filter(x=>x.name==='item dijual'&&{item:x.value})[0];
    const harga = value.filter(x=>x.name==='harga jual'&&{item:x.value})[0];
    const jumlah = value.filter(x=>x.name==='jumlah'&&{item:x.value})[0];
    if (item&&harga&&jumlah){
      const data = {item:item.value, harga:harga.value, jumlah:jumlah.value, subtotal:harga.value*jumlah.value};
      setDataArray([...dataArray, data]);
    }
    
  }

  function onClickMenu(val) {
    setMode(val);
  }

  return (
    <div className="bg-white-100 border-solid border-4 border-gray-200">
      <KontenHead 
        menu={modes}
        onClickMenu = {(val)=>onClickMenu(val)}
      />
      <BoxBuyer 
        menuName = {mode}
      />
      <BoxOutput
          dataArray = {dataArray}
      />
      <ModalForm
        suggestions={props.suggestions}
        handleInput = {(value)=>handleInput(value)}
      />
    </div>


  )
}
