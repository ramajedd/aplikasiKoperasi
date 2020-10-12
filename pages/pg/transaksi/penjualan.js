//import Head from 'next/head'
import LayoutKonten from '../../../components/layoutKonten'
import Layout from '../../../components/layout'
import ModalForm from '../../../components/modalForm'
import Tabel from "../../../components/table"
//import React, { useState } from 'react';

export default function Transaksi() {
  // const [status, setStatus] = useState(false);
  //const warna = status?'success':'error';
  return (
    <Layout>
      <LayoutKonten type='konten'>
        <ModalForm suggestions=
          {[
            "Alligator",
            "Bask",
            "Crocodilian",
            "Death Roll",
            "Eggs",
            "Jaws",
            "Reptile",
            "Solitary",
            "Tail",
            "Wetlands"
        ]}
        />
        <Tabel/>
      </LayoutKonten>
    </Layout>


  )
}
