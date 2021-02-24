import React, { useState } from 'react';
import InputBelanja from "./inputBelanja";
import KontenHead from "./kontenHead";
import BoxBuyer from "./boxBuyer";
import BoxOutput from "./boxOutput";
import BoxOutput2 from "./boxOutput2";
import InputNonBelanja from "./inputNonBelanja";

export default function Transaksi(props) {
  const menus = ["Pvd", "Anon"];
  const [dataArray, setDataArray] = useState([]);
  const [menu, setMenu] = useState(menus[0]);
  const [mode, setMode] = useState(false);

  const handleInput = value => {
    const item = value.filter(x => x.name === 'Item' && { x })[0];
    const harga = value.filter(x => x.name === 'Harga Beli' && { x })[0];
    const jumlah = value.filter(x => x.name === 'Jumlah' && { x })[0];
    if (item && harga && jumlah) {
      const data = { item: item.value, harga: harga.value, jumlah: jumlah.value, subtotal: harga.value * jumlah.value };
      setDataArray([...dataArray, data]);
    }

  }

  const handleInput2 = value => {
    const item = value.filter(x => x.name === 'Item' && { x })[0];
    const biaya = value.filter(x => x.name === 'Biaya' && { x })[0];
    const jumlah = value.filter(x => x.name === 'Jumlah' && { x })[0];
    if (item && biaya && jumlah) {
      const data = { item: item.value, biaya: biaya.value, jumlah: jumlah.value, subtotal: biaya.value * jumlah.value };
      setDataArray([...dataArray, data]);
    }
  }

  function onClickMenu(val) {
    setMenu(val);
  }

  function changeStatus(boolean) {
    setMode(boolean);
    setDataArray([]);
  }

  return (
    <div className="bg-white-100 border-solid border-4 border-gray-200">
      <KontenHead
        changeStatus={(val) => changeStatus(val)}
      />

      <BoxBuyer
        menuName={menu}
        menus={menus}
        onClickMenu={(val) => onClickMenu(val)}
        type={!mode ? 1 : 2}
      />

      {
        !mode ?
          <BoxOutput
            dataArray={dataArray}
          /> :
          <BoxOutput2
            dataArray={dataArray}
          />
      }


      {
        !mode ?
          <InputBelanja
            suggestions={props.suggestionsBelanja}
            handleInput={(value) => handleInput(value)}
          /> :
          <InputNonBelanja
            suggestions={props.suggestionsPengeluaranLain}
            handleInput={(value) => handleInput2(value)}
          />
      }

    </div>


  )
}
