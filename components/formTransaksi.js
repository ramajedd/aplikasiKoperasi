import React, { useState } from 'react';
import ModalForm from "./modalForm";
import KontenHead from "./kontenHead";
import BoxBuyer from "./boxBuyer";
import BoxOutput from "./boxOutput";

export default function Transaksi(props) {


  return (
    <div className="bg-gray-100">
      <KontenHead />
      <BoxBuyer />
      <BoxOutput/>
      <ModalForm
        suggestions={props.suggestions}
      />

    </div>


  )
}
