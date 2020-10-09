//import Head from 'next/head'
import LayoutKonten from '../../../components/layoutKonten'
import Layout from '../../../components/layout'
import FormPembayaran from '../../../components/formTransaksi'
//import React, { useState } from 'react';

export default function Transaksi() {
  // const [status, setStatus] = useState(false);
  //const warna = status?'success':'error';
  return (
    <Layout>
      <LayoutKonten>
        <FormPembayaran/>
      </LayoutKonten>
    </Layout>


  )
}
