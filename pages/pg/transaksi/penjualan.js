
import LayoutKonten from '../../../components/layoutKonten'
import Layout from '../../../components/layout'
import Tabel from "../../../components/table"
import FormTransaksi from "../../../components/formTransaksi"


export default function Transaksi() {
  
  return (
    <Layout>
      <LayoutKonten 
        type='konten'
        page ={1}
      >
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