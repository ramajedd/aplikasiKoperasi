
import LayoutKonten from '../../../components/layoutKonten'
import Layout from '../../../components/layout'
import Tabel from "../../../components/element/table"


export default function Transaksi() {
  return (
    <Layout>
      <LayoutKonten 
       type='konten'
       page = {2}
      >
        Belanja
        
        <Tabel/>
      </LayoutKonten>
    </Layout>


  )
}