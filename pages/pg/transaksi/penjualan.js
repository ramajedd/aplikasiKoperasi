//import Head from 'next/head'
import LayoutKonten from '../../../components/layoutKonten'
import Layout from '../../../components/layout'
import Tabel from "../../../components/table"
import FormTransaksi from "../../../components/formTransaksi"
//import React, { useState } from 'react';

export default function Transaksi() {
  // const [status, setStatus] = useState(false);
  //const warna = status?'success':'error';
  return (
    <Layout>
      <LayoutKonten type='konten'>
        <FormTransaksi
          suggestions=
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

//penjelasan: karena layoutKOnten hanya berisi dua kolom, maka harus hanya ada dua komponesn: FormTransaksi dan Tabel