import React from "react";
import Modal2Btn from "../element/modal2Btn";
import Input from "../element/input";

export default function InputNonBelanja (props) {

    const [input, setInput] = React.useState([]);

    const hargaJualArray = input.filter(x => x.name === "Biaya");
    const hargaJual = hargaJualArray.length === 1 ? hargaJualArray[0].value : 0;

    const jumlahDibeliArray = input.filter(x => x.name === "Jumlah");
    const jumlahDibeli = jumlahDibeliArray.length == 1 ? jumlahDibeliArray[0].value : 1;

    const handleAutoComplete = (obj) => {
        handleInput(obj);
    }

    const handleInput = val => {
        const arr = input;
        const shouldUpdate = arr.some(d => d.name === val.name);
        if (shouldUpdate) {
            const array = arr.map(x => x.name === val.name ? { name: val.name, value: val.value } : x);
            setInput(array);
        } else {
            setInput([...arr, val]);
        }

    }

    const handleSave = ()=>{
        props.handleInput(input);
        setInput([]);
    }

    return (
        <Modal2Btn
            title="non-belanja"
            handleSave = {()=>handleSave()}

        >
            <Input
                name="Item"
                inputType="autocomplete"
                placeholder ={"pengeluaran"}
                suggestions={props.suggestions}
                handleAutoComplete={(obj) => handleAutoComplete(obj)}
            />
            <Input
                name="Biaya"
                inputType="formatNumber"
                placeholder ="nominal"
                handleInput={(val)=>handleInput(val)}
            />
            <Input
                name="Jumlah"
                inputType="formatNumber"
                placeholder ="jumlah"
                handleInput={(val)=>handleInput(val)}
            />
            <Input
                name="Total"
                inputType= "formatNumberStatic"
                value = {hargaJual+jumlahDibeli}
            />

        </Modal2Btn>
    );
}