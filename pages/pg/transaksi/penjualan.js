//import Head from 'next/head'
import LayoutKonten from '../../../components/layoutKonten'
import Layout from '../../../components/layout'
import FormTransaksi from '../../../components/formTransaksi'
import Tabel from "../../../components/table"
//import React, { useState } from 'react';

export default function Transaksi() {
  // const [status, setStatus] = useState(false);
  //const warna = status?'success':'error';
  return (
    <Layout>
      <LayoutKonten type='konten'>
        <FormTransaksi/>
        <Tabel/>
      </LayoutKonten>
    </Layout>


  )
}
