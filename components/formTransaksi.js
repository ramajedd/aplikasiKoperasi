import React, { useState } from 'react';
import ModalForm from "./modalForm";
import KontenHead from "./kontenHead";
import BoxBuyer from "./boxBuyer";

export default function Transaksi(props) {
  // const [status, setStatus] = useState(false);
  //const warna = status?'success':'error';
  return (
    <div className="bg-gray-100">
        <KontenHead/>
        <BoxBuyer/>
        <ModalForm 
            suggestions={props.suggestions}
        />
        
    </div>


  )
}
