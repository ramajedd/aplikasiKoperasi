import LayoutKonten from '../../../components/layoutKonten'
import Layout from '../../../components/layout'
import Tabel from "../../../components/element/table"
import FormBelanja from "../../../components/formBelanja"


export default function Transaksi() {
  
  return (
    <Layout>
      <LayoutKonten 
        type='konten'
        page ={3}
      >
        <FormBelanja
          suggestionsBelanja=
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
        suggestionsPengeluaranLain = {['oke', 'oncom', 'amir']}

        />
        
        <Tabel/>
      </LayoutKonten>
    </Layout>


  )
}