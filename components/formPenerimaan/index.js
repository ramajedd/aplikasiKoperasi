import React, { useState } from 'react';
import InputPenjualan from "./inputPenjualan";
import KontenHead from "./kontenHead";
import BoxBuyer from "./boxBuyer";
import BoxOutput from "./boxOutput";

export default function Transaksi(props) {
  const menus = ["Plg", "Anon"];
  const [dataArray, setDataArray] = useState([]);
  const [menu, setMenu] = useState(menus[0]);
  const [mode, setMode] = useState(false);

  const handleInput = value => {
    //console.log(value);
    const item = value.filter(x => x.name === 'item dijual' && { x })[0];
    const harga = value.filter(x => x.name === 'harga jual' && { x })[0];
    const jumlah = value.filter(x => x.name === 'jumlah' && { x })[0];
    //const hargaXX = value.filter(x => x.name === 'harga jual' && x)[0];
    if (item && harga && jumlah) {
      //console.log(hargaXX);
      const data = { item: item.value, harga: harga.value, jumlah: jumlah.value, subtotal: harga.value * jumlah.value };
      setDataArray([...dataArray, data]);
    }

  }

  const handleInput2 = value => {
    console.log('hellooo');
  }

  function onClickMenu(val) {
    setMenu(val);
  }

  function changeStatus(boolean) {
    setMode(boolean);
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
          type={!mode ? 1 : 2}
        />

      }

      <BoxOutput
        dataArray={dataArray}
      />
      {
        !mode ?
          <InputPenjualan
            suggestions={props.suggestions}
            handleInput={!mode ? (value) => handleInput(value) : (value) => handleInput2(value)}
          /> :
          <div>helloo</div>
      }

    </div>


  )
}
