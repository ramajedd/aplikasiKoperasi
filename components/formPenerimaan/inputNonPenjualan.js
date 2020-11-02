import React from "react";
import Modal2Btn from "../element/modal2Btn";
import Input from "../element/input";


export default function InputNonPenjualan(props) {

    const handleAutoComplete = (obj) => {
        console.log(obj)
    }
    const handleInput =(val)=>{
        console.log(val)
    }
    return (
        <Modal2Btn
            title="non-penjualan"

        >
            <Input
                name="Item"
                inputType="autocomplete"
                suggestions={['oke', 'oncom', 'amir']}
                handleAutoComplete={(obj) => handleAutoComplete(obj)}
            />
            <Input
                name="Biaya"
                inputType="formatNumber"
                placeholder ="nominal biaya"
                handleInput={(val)=>handleInput(val)}
            />

        </Modal2Btn>
    );
}