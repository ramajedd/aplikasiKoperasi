import React, { useState } from 'react';
import ModalForm from "./modalForm";
import KontenHead from "./kontenHead";
import BoxBuyer from "./boxBuyer";
import BoxOutput from "./boxOutput";

export default function Transaksi(props) {
  const menus = ["Plg", "Anon"];
  const [dataArray, setDataArray] = useState([]);
  const [menu, setMenu] = useState(menus[0]);
  const [mode, setMode] = useState(false);

  const handleInput = value => {
    const item = value.filter(x => x.name === 'item dijual' && { item: x.value })[0];
    const harga = value.filter(x => x.name === 'harga jual' && { item: x.value })[0];
    const jumlah = value.filter(x => x.name === 'jumlah' && { item: x.value })[0];
    if (item && harga && jumlah) {
      const data = { item: item.value, harga: harga.value, jumlah: jumlah.value, subtotal: harga.value * jumlah.value };
      setDataArray([...dataArray, data]);
    }

  }

  function onClickMenu(val) {
    setMenu(val);
  }

  function changeStatus(val) {
    setMode(val);
  }

  return (
    <div className="bg-white-100 border-solid border-4 border-gray-200">
      <KontenHead
        changeStatus={(val) => changeStatus(val)}
      />
      {
        
          <BoxBuyer
            menuName={menu}
            menus={menus}
            onClickMenu={(val) => onClickMenu(val)}
            type = {!mode ? 1: 2}
          /> 
          
      }

      <BoxOutput
        dataArray={dataArray}
      />
      <ModalForm
        suggestions={props.suggestions}
        handleInput={(value) => handleInput(value)}
      />
    </div>


  )
}
