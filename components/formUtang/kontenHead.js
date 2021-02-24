import React from 'react';
import Toggle from "../element/toggle";
import Modal from "../element/modal"

export default function Transaksi(props) {

  function changeStatus (val){
    props.changeStatus(val);
  }
  return (
    <>
      <div className="flex flex-row pt-4 px-4 text-m font-bold mx-auto flex flex-wrap items-center justify-between">
        <Toggle 
          option = {["belanja", "pengeluaran"]}
          changeStatus = {(val)=> changeStatus(val)}
        />
        <Modal name={'kas'} title={'woi'}>HOw are you</Modal>
      </div>
      

    </>


  )
}
